import { engineeringServices, products, projects, team, trading } from "@/data/site";

export const dynamic = "force-static";
const BASE = "https://equatorial-os.com";

export default function sitemap() {
  const pages = ["", "about", "our-services", "trading", "products", "projects", "our-team", "clients", "contacts"].map((p) => `${BASE}/${p}${p ? "/" : ""}`);
  const more = [
    ...engineeringServices.filter((s) => s.body).map((s) => `${BASE}/services/${s.slug}/`),
    ...trading.map((t) => `${BASE}/trading/${t.slug}/`),
    ...products.map((p) => `${BASE}/our-products/${p.slug}/`),
    ...projects.map((p) => `${BASE}/projects/${p.slug}/`),
    ...team.map((m) => `${BASE}/team/${m.slug}/`),
  ];
  return [...pages, ...more].map((url) => ({ url, lastModified: new Date() }));
}
