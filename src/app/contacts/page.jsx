import { PageHero } from "@/components/Blocks";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import { Pin, Phone, Mail, LinkedIn } from "@/components/Icon";
import { img, company, faqs } from "@/data/site";

export const metadata = { title: "Contact Us", description: "Contact Equatorial Oilfield Services in Bali, Douala, Cameroon — +237 696 609 970 — info@equatorial-os.com." };

export default function Contact() {
  const cards = [
    { icon: <Pin />, label: "Visit us", value: company.address.join(", "), href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.mapQuery)}` },
    { icon: <Phone />, label: "Call us", value: company.phones[0], href: `tel:${company.phones[0].replace(/\s/g, "")}`, extra: company.phones[1] },
    { icon: <Mail />, label: "Email us", value: company.email, href: `mailto:${company.email}` },
    { icon: <LinkedIn />, label: "Follow us", value: "LinkedIn", href: company.linkedin },
  ];
  return (
    <>
      <PageHero title="Let's talk about your project" text="Request a quote, ask a technical question or explore a partnership — we reply promptly." image={img.heroPlatform} crumbs={[{ label: "Contact" }]} />
      <section className="section">
        <div className="container contact-grid">
          <div>
            <div className="kicker reveal">Contacts</div>
            <h2 className="reveal" style={{ fontSize: "clamp(30px,3.8vw,46px)" }}>We are always ready to help you and answer your questions</h2>
            <div className="contact-cards">
              {cards.map((c, k) => (
                <a className="contact-card reveal" key={c.label} href={c.href} style={{ "--d": `${k * 90}ms` }}
                  {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                  <span className="contact-card__icon">{c.icon}</span>
                  <span><small>{c.label}</small><strong>{c.value}</strong>{c.extra && <><br /><strong>{c.extra}</strong></>}</span>
                </a>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <div className="map reveal">
        <iframe title="Map — Bali, Douala" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&z=14&output=embed`} />
      </div>

      <section className="section section--soft">
        <div className="container split" style={{ alignItems: "start" }}>
          <div>
            <div className="kicker reveal">FAQ</div>
            <h2 className="reveal" style={{ fontSize: "clamp(30px,3.8vw,46px)" }}>Frequently asked questions</h2>
          </div>
          <div className="reveal"><Faq items={faqs} /></div>
        </div>
      </section>
    </>
  );
}
