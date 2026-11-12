"use client";
import { useState } from "react";
import { company } from "@/data/site";
import { ArrowDR } from "./Icon";

function Field({ name, label, type = "text", full, textarea, autoComplete, error }) {
  return (
    <div className={`field ${full ? "full" : ""} ${error ? "has-error" : ""}`}>
      {textarea
        ? <textarea id={name} name={name} placeholder=" " rows={6} aria-invalid={!!error} />
        : <input id={name} name={name} type={type} placeholder=" " autoComplete={autoComplete} aria-invalid={!!error} />}
      <label htmlFor={name}>{label}</label>
      {error && <span className="field__err">{error}</span>}
    </div>
  );
}

const subjects = ["Request a quote", "Engineering services", "Petroleum products trading & supply", "Products (flow assurance / downhole tools)", "Partnership", "Other"];

/**
 * Formulaire de contact. Il envoie les données au script /contact.php
 * (fourni dans /public, fonctionne sur l'hébergement LWS).
 */
export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | ok | err
  const [errors, setErrors] = useState({});

  const validate = (d) => {
    const e = {};
    if (!d.name || d.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email || "")) e.email = "Please enter a valid email address.";
    if (!d.message || d.message.trim().length < 10) e.message = "Please tell us a bit more (10 characters minimum).";
    return e;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const e = validate(data);
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus("sending");
    try {
      const res = await fetch("/contact.php", { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error(json.error || "send failed");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("err");
    }
  };



  return (
    <form className="form reveal reveal--right" onSubmit={onSubmit} noValidate>
      <div className="kicker">Contact us</div>
      <h2>Request a quote or leave us a message</h2>
      <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: 30 }}>Fill in the form below and our team will get back to you as soon as possible.</p>
      <div className="form__grid">
        <Field error={errors.name} name="name" label="Full name *" autoComplete="name" />
        <Field error={errors.company} name="company" label="Company / Organization" autoComplete="organization" />
        <Field error={errors.email} name="email" label="Email *" type="email" autoComplete="email" />
        <Field error={errors.phone} name="phone" label="Phone" type="tel" autoComplete="tel" />
        <div className="field full">
          <select id="subject" name="subject" defaultValue={subjects[0]}>
            {subjects.map((s) => <option key={s}>{s}</option>)}
          </select>
          <label htmlFor="subject">Subject</label>
        </div>
        <Field error={errors.message} name="message" label="Your message *" full textarea />
        <input className="hp" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      </div>
      <div style={{ marginTop: 26 }}>
        <button className="btn" type="submit" disabled={status === "sending"}>
          {status === "sending" ? <><span className="spinner" /> Sending…</> : <>Send request <ArrowDR /></>}
        </button>
      </div>
      <div aria-live="polite">
        {status === "ok" && <div className="form__status form__status--ok">Thank you! Your message has been sent. We will reply shortly.</div>}
        {status === "err" && (
          <div className="form__status form__status--err">
            Sorry, the message could not be sent. Please email us directly at <a href={`mailto:${company.email}`} style={{ textDecoration: "underline" }}>{company.email}</a> or call {company.phones[0]}.
          </div>
        )}
      </div>
    </form>
  );
}
