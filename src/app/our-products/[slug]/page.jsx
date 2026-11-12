import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, Cta, ProductCard } from "@/components/Blocks";
import Gallery from "@/components/Gallery";
import { ArrowDR, ArrowL, ArrowR } from "@/components/Icon";
import { products, productCategories, img } from "@/data/site";

export function generateStaticParams() { return products.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  return p ? { title: p.title, description: p.excerpt } : {};
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const idx = products.findIndex((x) => x.slug === slug);
  if (idx < 0) notFound();
  const p = products[idx];
  const cat = productCategories.find((c) => c.id === p.category);
  const prev = products[(idx - 1 + products.length) % products.length];
  const next = products[(idx + 1) % products.length];
  const related = products.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <PageHero title={p.title} text={cat.title} image={p.category === "flow-assurance" ? img.steel : img.heroRig}
        crumbs={[{ label: "Our Products", href: "/products/" }, { label: p.title }]} />
      <section className="section">
        <div className="container detail">
          <article>
            <div className="detail__media detail__media--contain img-reveal"><img src={p.image} alt={p.title} /></div>
            <div className="kicker reveal">Description</div>
            <h2 className="reveal">{p.title}</h2>
            {p.description.map((d, k) => <p className={k === 0 ? "lead reveal" : "reveal"} key={k}>{d}</p>)}
            <div className="cols-2" style={{ marginTop: 40 }}>
              <div className="box reveal"><h3>Features</h3><ul className="checks" style={{ margin: 0 }}>{p.features.map((f) => <li key={f}>{f}</li>)}</ul></div>
              <div className="box reveal" style={{ "--d": "120ms" }}><h3>Advantages</h3><ul className="checks" style={{ margin: 0 }}>{p.advantages.map((f) => <li key={f}>{f}</li>)}</ul></div>
            </div>
            {p.gallery && (<><h3 className="reveal">Gallery</h3><Gallery images={[p.image, ...p.gallery]} alt={p.title} /></>)}
            <nav className="pager" aria-label="More products">
              <Link href={`/our-products/${prev.slug}/`}><small><ArrowL /> Previous</small><strong>{prev.title}</strong></Link>
              <Link href={`/our-products/${next.slug}/`}><small>Next <ArrowR /></small><strong>{next.title}</strong></Link>
            </nav>
          </article>
          <aside className="sidebar">
            <div className="side-cta" style={{ "--img": `url(${p.image})` }}>
              <h4>Interested in {p.title.split(" ")[0]}?</h4>
              <p>Get pricing, availability and technical data sheets from our team.</p>
              <Link href="/contacts/" className="btn">Request a quote <ArrowDR /></Link>
            </div>
            <nav className="side-menu" aria-label="Products">
              <h4>{cat.title}</h4>
              {products.filter((x) => x.category === p.category).map((x) => (
                <Link key={x.slug} href={`/our-products/${x.slug}/`} className={x.slug === p.slug ? "is-active" : ""}>{x.title} <ArrowR /></Link>
              ))}
            </nav>
          </aside>
        </div>
      </section>
      {related.length > 0 && (
        <section className="section section--soft">
          <div className="container">
            <div className="kicker reveal">Related products</div>
            <h2 className="reveal" style={{ marginBottom: 40 }}>You may also need</h2>
            <div className="projects-grid" style={{ alignItems: "stretch" }}>{related.map((r) => <div className="reveal" key={r.slug}><ProductCard p={r} /></div>)}</div>
          </div>
        </section>
      )}
      <Cta />
    </>
  );
}
