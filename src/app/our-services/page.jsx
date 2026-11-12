import Link from "next/link";
import { PageHero, SectionHead, ServiceCard, TradeCard, Cta } from "@/components/Blocks";
import { ArrowDR } from "@/components/Icon";
import { img, engineeringServices, tradingServices } from "@/data/site";

export const metadata = { title: "Our Services", description: "Drilling engineering, facilities engineering, flow assurance, project management, QHSE, manpower support — and petroleum products trading & supply." };

const steps = [
  { n: "01", t: "Consultation", d: "We listen to your needs, constraints and objectives." },
  { n: "02", t: "Engineering & sourcing", d: "Our experts design the solution and source the right products." },
  { n: "03", t: "Delivery", d: "Construction, logistics and supply — on time, on spec, safely." },
  { n: "04", t: "Support", d: "Follow-up, maintenance and manpower support for the long run." },
];

export default function Services() {
  return (
    <>
      <PageHero title="Our Services" text="Engineering expertise and a reliable energy supply chain — one trusted partner from the wellhead to the market." image={img.heroSunset} crumbs={[{ label: "Our Services" }]} />

      <section className="section">
        <div className="container">
          <SectionHead kicker="Engineering services" title="Engineering, procurement & construction for oil and gas" text="Since 2011 we have supported operators across the Gulf of Guinea with drilling, facilities, flow assurance and project expertise." />
          <div className="svc-grid">
            {engineeringServices.map((s, k) => <ServiceCard key={s.slug} s={s} i={k} />)}
          </div>
        </div>
      </section>

      <section className="section section--soft anchor-offset" id="trading">
        <div className="container">
          <div className="section-head section-head--split">
            <div>
              <div className="kicker reveal">Trading & supply</div>
              <h2 className="reveal" style={{ "--d": "80ms" }}>Petroleum Products Trading & Supply</h2>
              <p className="reveal" style={{ "--d": "160ms" }}>A trusted network of producers, traders and logistics partners to supply the energy products your operations depend on.</p>
            </div>
            <Link href="/contacts/" className="btn btn--navy reveal">Request a quote <ArrowDR /></Link>
          </div>
          <div className="trade-grid">
            {tradingServices.map((t, k) => <TradeCard key={t.title} t={t} i={k} />)}
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <SectionHead center kicker="How we work" title="A simple, reliable process" />
          <div className="feature-cards">
            {steps.map((s, k) => (
              <div className="feature reveal" key={s.n} style={{ "--d": `${k * 100}ms` }}>
                <div className="feature__n">{s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta title={<>Need engineering support or a reliable fuel supply? <em>We&apos;re ready.</em></>} />
    </>
  );
}
