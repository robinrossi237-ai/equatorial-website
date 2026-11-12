import { PageHero, SectionHead, Marquee, Cta } from "@/components/Blocks";
import Testimonials from "@/components/Testimonials";
import { img, clients, partners, testimonials, company } from "@/data/site";

export const metadata = { title: "Clients & Partners", description: "SCDP, Addax Petroleum, Perenco, Petrofor, Bowleven, Schlumberger and more trust Equatorial Oilfield Services." };

export default function Clients() {
  const years = new Date().getFullYear() - company.founded;
  return (
    <>
      <PageHero title="Clients & Partners" text="Long-term relationships built on reliability, safety and results." image={img.heroPlatform} crumbs={[{ label: "About Us", href: "/about/" }, { label: "Clients & Partners" }]} />

      <section className="section">
        <div className="container split" style={{ alignItems: "start" }}>
          <div style={{ position: "sticky", top: 110 }}>
            <div className="kicker reveal">Clients</div>
            <h2 className="reveal" style={{ fontSize: "clamp(30px,3.8vw,46px)" }}>Clients who trust Equatorial Oilfield Services</h2>
            <p className="lead reveal">We are proud to serve our clients with excellence and integrity. For over {years} years we have provided reliable and cost-effective oil and gas solutions, earning the trust and respect of many satisfied customers.</p>
            <div className="about-media__card reveal" style={{ position: "relative", width: 260, marginTop: 30 }}>
              <strong data-count="200" data-suffix="+">0+</strong><span>Happy clients</span>
            </div>
          </div>
          <div className="trade-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
            {clients.map((c, k) => (
              <div className="logo-card reveal" key={c.name} style={{ width: "100%", height: 160, "--d": `${(k % 2) * 100}ms` }}>
                <img src={c.logo} alt={c.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft" style={{ paddingTop: 140 }}>
        <div className="container"><Testimonials items={testimonials} image={img.heroSunset} /></div>
      </section>

      <section className="section" style={{ paddingBottom: 80 }}>
        <div className="container"><SectionHead center kicker="Partners" title="Partners who trust EQOS" text="We work with specialised partners to deliver complete, high-quality solutions." /></div>
        <Marquee items={partners} speed={30} />
      </section>

      <section className="section section--navy" style={{ textAlign: "center", overflow: "hidden", backgroundImage: `linear-gradient(rgba(9,1,51,0.84), rgba(9,1,51,0.84)), url(${img.map})`, backgroundSize: "cover, min(1100px, 95%) auto", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundColor: "#090133" }}>
        <div className="container" style={{ position: "relative" }}>
          <div className="outline-text reveal" style={{ fontSize: "clamp(70px,13vw,180px)" }}>Thank you</div>
          <h2 className="reveal" style={{ marginTop: 20 }}>To all our clients, partners and customers!</h2>
          <p className="reveal" style={{ maxWidth: 640, margin: "0 auto", fontSize: 17 }}>We are grateful for your continued support and loyalty. You are the reason we exist and strive to provide the best products and services. Thank you for choosing us!</p>
        </div>
      </section>
      <Cta />
    </>
  );
}
