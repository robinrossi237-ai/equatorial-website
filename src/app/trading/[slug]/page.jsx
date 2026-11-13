import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, Cta } from "@/components/Blocks";
import { ArrowDR, ArrowL, ArrowR, Phone } from "@/components/Icon";
import { ServiceIcon } from "@/components/Icon";
import { trading, company } from "@/data/site";

export function generateStaticParams() { return trading.map((t) => ({ slug: t.slug })); }
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const t = trading.find((x) => x.slug === slug);
  return t ? { title: t.title, description: t.excerpt } : {};
}

export default async function TradingPage({ params }) {
  const { slug } = await params;
  const idx = trading.findIndex((x) => x.slug === slug);
  if (idx < 0) notFound();
  const t = trading[idx];
  const prev = trading[(idx - 1 + trading.length) % trading.length];
  const next = trading[(idx + 1) % trading.length];

  return (
    <>
      <PageHero title={t.title} text={t.excerpt} image={t.image}
        crumbs={[{ label: "Trading & Supply", href: "/trading/" }, { label: t.title }]} />

      {t.products && (
        <nav className="sub-nav" aria-label="Refined products">
          <div className="container">
            {t.products.map((p) => <a key={p.slug} href={`#${p.slug}`}>{p.title.replace(" (Liquefied Petroleum Gas)", "")}</a>)}
          </div>
        </nav>
      )}

      <section className="section">
        <div className="container detail">
          <article>
            {!t.products && <div className="detail__media img-reveal"><img src={t.image} alt={t.title} /></div>}
            <div className="kicker reveal">Trading & Supply</div>
            <h2 className="reveal" style={{ display: "flex", gap: 18, alignItems: "center" }}>
              <ServiceIcon name={t.icon} className="svc__icon" /> {t.title}
            </h2>
            <p className="lead reveal">{t.intro}</p>
            <ul className="checks reveal">{t.points.map((p) => <li key={p}>{p}</li>)}</ul>

            {t.products && t.products.map((p) => (
              <div className="refined anchor-offset" id={p.slug} key={p.slug} style={{ scrollMarginTop: 150 }}>
                <div className="refined__media img-reveal">
                  <img src={p.image} alt={p.title} loading="lazy" />
                  {p.image2 && <img className="refined__inset" src={p.image2} alt="" loading="lazy" />}
                </div>
                <div>
                  <div className="refined__head reveal">
                    <ServiceIcon name={p.icon} className="trade__icon" />
                    <h3>{p.title}</h3>
                  </div>
                  <p className="reveal">{p.text}</p>
                  <ul className="tags reveal">{p.uses.map((u) => <li key={u}>{u}</li>)}</ul>
                  <Link href="/contacts/" className="link-arrow reveal">Request a quote <ArrowDR /></Link>
                </div>
              </div>
            ))}

            <nav className="pager" aria-label="Other activities">
              <Link href={`/trading/${prev.slug}/`}><small><ArrowL /> Previous</small><strong>{prev.title}</strong></Link>
              <Link href={`/trading/${next.slug}/`}><small>Next <ArrowR /></small><strong>{next.title}</strong></Link>
            </nav>
          </article>

          <aside className="sidebar">
            <nav className="side-menu" aria-label="Trading & Supply">
              <h4>Trading & Supply</h4>
              {trading.map((x) => (
                <Link key={x.slug} href={`/trading/${x.slug}/`} className={x.slug === t.slug ? "is-active" : ""}>{x.title} <ArrowR /></Link>
              ))}
            </nav>
            <div className="side-cta" style={{ "--img": `url(${t.image})` }}>
              <h4>Request a quote</h4>
              <p>Tell us the product, volume and delivery location — we reply promptly.</p>
              <Link href="/contacts/" className="btn">Contact us <ArrowDR /></Link>
              <p style={{ marginTop: 24, marginBottom: 0, display: "flex", gap: 10, alignItems: "center", fontWeight: 700, color: "#fff" }}>
                <Phone width="18" height="18" /> {company.phones[0]}
              </p>
            </div>
          </aside>
        </div>
      </section>
      <Cta title={<>Need a reliable fuel supply? <em>Let&apos;s talk.</em></>} />
    </>
  );
}
