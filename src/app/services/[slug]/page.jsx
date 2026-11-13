import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, Cta } from "@/components/Blocks";
import { ArrowDR, ArrowR, Phone } from "@/components/Icon";
import { ServiceIcon } from "@/components/Icon";
import { engineeringServices, img, company } from "@/data/site";

const detailed = engineeringServices.filter((s) => s.body);
const banners = { "drilling-engineering": img.heroRig, "facilities-engineering": img.factory, "flow-assurance": img.steel };

export function generateStaticParams() { return detailed.map((s) => ({ slug: s.slug })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = detailed.find((x) => x.slug === slug);
  return s ? { title: s.title, description: s.excerpt } : {};
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const s = detailed.find((x) => x.slug === slug);
  if (!s) notFound();
  return (
    <>
      <PageHero title={s.title} text={s.excerpt} image={banners[s.slug]} crumbs={[{ label: "Services", href: "/our-services/" }, { label: s.title }]} />
      <section className="section">
        <div className="container detail">
          <article>
            <div className="detail__media img-reveal"><img src={s.image} alt={s.title} /></div>
            <div className="kicker reveal">Service</div>
            <h2 className="reveal" style={{ display: "flex", gap: 18, alignItems: "center" }}>
              <ServiceIcon name={s.icon} className="svc__icon" /> {s.title}
            </h2>
            <p className="lead reveal">{s.intro}</p>
            <ul className="tags reveal">{s.list.map((l) => <li key={l}>{l}</li>)}</ul>
            {s.body.map((p, k) => <p className="reveal" key={k}>{p}</p>)}
            <div className="cols-2" style={{ marginTop: 40 }}>
              {s.blocks.map((b, k) => (
                <div className="box reveal" key={b.title} style={{ "--d": `${k * 120}ms` }}>
                  <h3>{b.title}</h3><p style={{ margin: 0 }}>{b.text}</p>
                </div>
              ))}
            </div>
          </article>
          <aside className="sidebar">
            <nav className="side-menu" aria-label="Services">
              <h4>All services</h4>
              {detailed.map((x) => (
                <Link key={x.slug} href={`/services/${x.slug}/`} className={x.slug === s.slug ? "is-active" : ""}>{x.title} <ArrowR /></Link>
              ))}
              <Link href="/trading/">Trading & Supply <ArrowR /></Link>
            </nav>
            <div className="side-cta" style={{ "--img": `url(${img.engineer})` }}>
              <h4>Do you want to work with us?</h4>
              <p>Leave us a message and we will reply promptly.</p>
              <Link href="/contacts/" className="btn">Contact us <ArrowDR /></Link>
              <p style={{ marginTop: 24, marginBottom: 0, display: "flex", gap: 10, alignItems: "center", fontWeight: 700, color: "#fff" }}>
                <Phone width="18" height="18" /> {company.phones[0]}
              </p>
            </div>
          </aside>
        </div>
      </section>
      <Cta />
    </>
  );
}
