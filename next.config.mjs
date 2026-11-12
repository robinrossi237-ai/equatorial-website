/** @type {import('next').NextConfig} */
const nextConfig = {
  // Génère des fichiers HTML/CSS/JS statiques dans /out, à envoyer par FTP sur LWS
  output: "export",
  // /about/ -> /about/index.html : fonctionne directement sur un hébergement Apache
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
