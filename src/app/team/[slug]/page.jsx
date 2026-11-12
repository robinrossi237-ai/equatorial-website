import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, Cta } from "@/components/Blocks";
import { ArrowDR, ArrowL, ArrowR, Mail } from "@/components/Icon";
import { team, img, company } from "@/data/site";

export function generateStaticParams() { return team.map((m) => ({ slug: m.slug })); }
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const m = team.find((x) => x.slug === slug);
  return m ? { title: `${m.name} — ${m.role}`, description: m.short } : {};
}

export default async function MemberPage({ params }) {
  const { slug } = await params;
  const idx = team.findIndex((x) => x.slug === slug);
  if (idx < 0) notFound();
  const m = team[idx];
  const prev = team[(idx - 1 + team.length) % team.length];
  const next = team[(idx + 1) % team.length];
  return (
    <>
      <PageHero title={m.name} text={m.role} image={img.teamBg} crumbs={[{ label: "Our Team", href: "/our-team/" }, { label: m.name }]} />
      <section className="section">
        <div className="container member-hero">
          <div className="member-hero__photo img-reveal"><img src={m.photo} alt={m.name} /></div>
          <div>
            <div className="kicker reveal">{m.role}</div>
            <h2 className="reveal" style={{ fontSize: "clamp(30px,4vw,48px)" }}>{m.name}</h2>
            <p className="lead reveal">{m.short}</p>
            <h3 className="reveal" style={{ marginTop: 40 }}>Biography</h3>
            {m.bio.map((b, k) => <p className="reveal" key={k}>{b}</p>)}
            <h3 className="reveal" style={{ marginTop: 40 }}>Main skills</h3>
            <ul className="tags reveal">{m.skills.map((s) => <li key={s}>{s}</li>)}</ul>
            <a href={`mailto:${company.email}?subject=${encodeURIComponent("For " + m.name)}`} className="btn reveal" style={{ marginTop: 20 }}><Mail width="18" height="18" /> Contact {m.name.split(" ")[0]} <ArrowDR /></a>
            <nav className="pager" aria-label="Team members">
              <Link href={`/team/${prev.slug}/`}><small><ArrowL /> Previous</small><strong>{prev.name}</strong></Link>
              <Link href={`/team/${next.slug}/`}><small>Next <ArrowR /></small><strong>{next.name}</strong></Link>
            </nav>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
