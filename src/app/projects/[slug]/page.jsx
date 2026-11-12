import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, Cta } from "@/components/Blocks";
import Gallery from "@/components/Gallery";
import { ArrowDR, ArrowL, ArrowR } from "@/components/Icon";
import { projects, img } from "@/data/site";

export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: p.title, description: p.text } : {};
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const idx = projects.findIndex((x) => x.slug === slug);
  if (idx < 0) notFound();
  const p = projects[idx];
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];
  const info = [["Client", p.client], ["Year", p.year], ["Location", p.location], ["Activity", p.category], p.contact && ["Reference", p.contact]].filter(Boolean);

  return (
    <>
      <PageHero title={p.title} text={`${p.client} · ${p.year}`} image={p.image} crumbs={[{ label: "Projects", href: "/projects/" }, { label: p.title }]} />
      <section className="section">
        <div className="container detail">
          <article>
            <div className="detail__media img-reveal"><img src={p.image} alt={p.title} /></div>
            <div className="kicker reveal">{p.category}</div>
            <h2 className="reveal">{p.title}</h2>
            <p className="lead reveal">{p.text}</p>
            {p.gallery && (<><h3 className="reveal">Photos</h3><Gallery images={p.gallery} alt={p.title} /></>)}
            <nav className="pager" aria-label="More projects">
              <Link href={`/projects/${prev.slug}/`}><small><ArrowL /> Previous project</small><strong>{prev.title}</strong></Link>
              <Link href={`/projects/${next.slug}/`}><small>Next project <ArrowR /></small><strong>{next.title}</strong></Link>
            </nav>
          </article>
          <aside className="sidebar">
            <dl className="info-list reveal">
              {info.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
            </dl>
            <div className="side-cta" style={{ "--img": `url(${img.heroSunset})` }}>
              <h4>Start a similar project</h4>
              <p>Tell us about your needs — our engineers will get back to you promptly.</p>
              <Link href="/contacts/" className="btn">Contact us <ArrowDR /></Link>
            </div>
          </aside>
        </div>
      </section>
      <Cta />
    </>
  );
}
