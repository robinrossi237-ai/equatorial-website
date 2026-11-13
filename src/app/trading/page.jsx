import Link from "next/link";
import { PageHero, SectionHead, TradeCard, Cta } from "@/components/Blocks";
import { ArrowDR } from "@/components/Icon";
import { ServiceIcon } from "@/components/Icon";
import { trading, refinedProducts } from "@/data/site";

export const metadata = {
  title: "Petroleum Products Trading & Supply",
  description: "Crude oil, refined products (gasoil/diesel, gasoline, Jet A-1, fuel oil, LPG), other energy products, storage & transport, import/export and trade finance.",
};

export default function Trading() {
  return (
    <>
      <PageHero title="Petroleum Products Trading & Supply" text="A trusted network of producers, traders and logistics partners to supply the energy products your operations depend on."
        image="/images/trading-import.webp" crumbs={[{ label: "Services", href: "/our-services/" }, { label: "Trading & Supply" }]} />

      <section className="section section--soft">
        <div className="container">
          <SectionHead kicker="What we supply" title="From crude oil to refined products — delivered on time and on spec" text="Click an activity to discover what we offer." />
          <div className="trade-grid trade-grid--3">
            {trading.map((t, k) => <TradeCard key={t.slug} t={t} i={k} />)}
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <div className="section-head section-head--split">
            <div>
              <div className="kicker reveal">Refined products</div>
              <h2 className="reveal" style={{ "--d": "80ms" }}>Our refined products range</h2>
            </div>
            <Link href="/trading/refined-products/" className="link-arrow reveal">See all refined products <ArrowDR /></Link>
          </div>
          <div className="feature-cards" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
            {refinedProducts.map((p, k) => (
              <Link href={`/trading/refined-products/#${p.slug}`} className="feature reveal" key={p.slug} style={{ "--d": `${k * 80}ms` }}>
                <ServiceIcon name={p.icon} className="trade__icon" />
                <h3>{p.title.replace(" (Liquefied Petroleum Gas)", "")}</h3>
                <p>{p.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Cta title={<>Need a reliable fuel supply? <em>Request a quote today.</em></>} />
    </>
  );
}
