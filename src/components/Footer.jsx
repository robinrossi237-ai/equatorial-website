import Link from "next/link";
import { company, img, engineeringServices } from "@/data/site";
import { Pin, Phone, Mail, LinkedIn, ArrowUp } from "./Icon";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            <div>
              <Link href="/" className="footer__logo"><img src={img.logo} alt={company.name} width="113" height="46" loading="lazy" /></Link>
              <p>Customized engineering, procurement, construction and management of oil & gas assets — and petroleum products trading & supply — since {company.founded}.</p>
              <div className="socials">
                <a href={company.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedIn /></a>
                <a href={`mailto:${company.email}`} aria-label="Email"><Mail /></a>
                <a href={`tel:${company.phones[0].replace(/\s/g, "")}`} aria-label="Phone"><Phone /></a>
              </div>
            </div>
            <div>
              <h4>Company</h4>
              <div className="footer__links">
                <Link href="/about/">Who we are</Link>
                <Link href="/our-team/">Our Team</Link>
                <Link href="/clients/">Clients & Partners</Link>
                <Link href="/projects/">Projects</Link>
                <Link href="/contacts/">Contact</Link>
              </div>
            </div>
            <div>
              <h4>Services</h4>
              <div className="footer__links">
                {engineeringServices.filter((s) => s.body).map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}/`}>{s.title}</Link>
                ))}
                <Link href="/trading/">Trading & Supply</Link>
                <Link href="/products/">Our Products</Link>
              </div>
            </div>
            <div>
              <h4>Get in touch</h4>
              <div className="footer__contact">
                <div><Pin /><span>{company.address.join(", ")}</span></div>
                <div><Phone /><span>{company.phones.map((p) => <a key={p} href={`tel:${p.replace(/\s/g, "")}`} style={{ display: "block" }}>{p}</a>)}</span></div>
                <div><Mail /><a href={`mailto:${company.email}`}>{company.email}</a></div>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <span>© {year} {company.name}. All rights reserved.</span>
            <span>Quality · Integrity · People</span>
          </div>
        </div>
        <div className="outline-text footer__big" aria-hidden="true">since {company.founded}</div>
      </footer>
      <BackToTop />
    </>
  );
}

function BackToTop() {
  return (
    <a href="#top" className="to-top" aria-label="Back to top">
      <svg className="ring" viewBox="0 0 54 54" aria-hidden="true">
        <circle cx="27" cy="27" r="25" fill="none" stroke="#090133" strokeOpacity="0.25" strokeWidth="2" strokeDasharray="157" strokeDashoffset="157" />
      </svg>
      <ArrowUp />
    </a>
  );
}
