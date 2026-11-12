<?php
/**
 * Envoi du formulaire de contact – Equatorial Oilfield Services
 * Fonctionne sur l'hébergement LWS (fonction mail() de PHP).
 * Adresse de réception : modifiez $TO ci-dessous si besoin.
 */
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

$TO   = 'info@equatorial-os.com';
$FROM = 'no-reply@equatorial-os.com';   // adresse du domaine (évite le classement en spam)

function out($ok, $error = null, $code = 200) {
    http_response_code($code);
    echo json_encode($ok ? ['ok' => true] : ['ok' => false, 'error' => $error]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') out(false, 'Method not allowed', 405);

// Piège à robots : ce champ caché doit rester vide
if (!empty($_POST['website'])) out(true);

// Limite simple : 1 envoi toutes les 30 secondes par visiteur
session_start();
if (isset($_SESSION['last_send']) && time() - $_SESSION['last_send'] < 30) out(false, 'Please wait a few seconds before sending again.', 429);

function clean($v, $max = 200) {
    $v = trim((string)($v ?? ''));
    $v = str_replace(["\r", "\n", "%0a", "%0d"], ' ', $v);   // bloque l'injection d'en-têtes
    return mb_substr(strip_tags($v), 0, $max);
}

$name    = clean($_POST['name'] ?? '');
$company = clean($_POST['company'] ?? '');
$email   = clean($_POST['email'] ?? '');
$phone   = clean($_POST['phone'] ?? '', 40);
$subject = clean($_POST['subject'] ?? 'Website enquiry', 120);
$message = trim(strip_tags((string)($_POST['message'] ?? '')));
$message = mb_substr($message, 0, 5000);

if (mb_strlen($name) < 2)                          out(false, 'Name is required.', 422);
if (!filter_var($email, FILTER_VALIDATE_EMAIL))    out(false, 'A valid email is required.', 422);
if (mb_strlen($message) < 10)                      out(false, 'Message is too short.', 422);

$body  = "New message from the website contact form\n";
$body .= "------------------------------------------\n\n";
$body .= "Name:    $name\n";
$body .= "Company: $company\n";
$body .= "Email:   $email\n";
$body .= "Phone:   $phone\n";
$body .= "Subject: $subject\n\n";
$body .= "Message:\n$message\n";

$headers  = "From: Equatorial OS Website <$FROM>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$encodedSubject = '=?UTF-8?B?' . base64_encode("[Website] $subject — $name") . '?=';

if (@mail($TO, $encodedSubject, $body, $headers, "-f$FROM")) {
    $_SESSION['last_send'] = time();
    out(true);
}
out(false, 'Mail server error', 500);
