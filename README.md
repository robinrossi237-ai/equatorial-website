# Equatorial Oilfield Services — site web (React / Next.js)

Site vitrine construit avec **Next.js 15 (React 19)** et exporté en **fichiers statiques**,
à héberger sur LWS sans base de données ni WordPress.

## Modifier le contenu

| Je veux changer… | Fichier |
|---|---|
| Textes, services, produits, projets, équipe, témoignages, FAQ, téléphones, e-mail | `src/data/site.js` |
| Images | dossier `public/images/` (puis mettre le nom du fichier dans `site.js`) |
| Couleurs, polices, espacements, animations | `src/app/globals.css` (variables en haut du fichier) |
| Mise en page d'une page | `src/app/<page>/page.jsx` |
| Menu du haut | `nav` dans `src/data/site.js` |

## Travailler en local

```bash
npm install        # une seule fois
npm run dev        # aperçu en direct sur http://localhost:3000 (se met à jour à chaque modification)
npm run build      # génère le site final dans le dossier out/
```

## Mettre en ligne sur LWS

1. **Sauvegarder l'ancien site WordPress** (WP Manager LWS → Sauvegardes) et le garder hors du serveur.
2. Lancer `npm run build`.
3. Avec FileZilla (**mode binaire**), envoyer **tout le contenu du dossier `out/`** dans le dossier racine du site
   (souvent `htdocs/` ou `www/`), y compris les fichiers cachés `.htaccess` et `contact.php`.
4. Vérifier : pages, menu, formulaire de contact (un e-mail doit arriver sur info@equatorial-os.com).

Conseil : tester d'abord sur un sous-domaine (ex. `new.equatorial-os.com`) avant de remplacer WordPress.

## Formulaire de contact

`public/contact.php` envoie les messages avec la fonction `mail()` de PHP (disponible chez LWS).
Adresse de réception : variable `$TO` en haut du fichier. Anti-spam : champ caché + 1 envoi / 30 s.

## Adresses conservées

Les adresses de l'ancien site (`/about/`, `/our-services/`, `/services/drilling-engineering/`,
`/our-products/...`, `/projects/...`, `/team/...`, `/contacts/`) sont identiques : Google et les liens existants continuent de fonctionner.
`/faqs/` redirige vers `/contacts/` (voir `public/.htaccess`).
