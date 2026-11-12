import Link from "next/link";
import { PageHero, SectionHead, Cta } from "@/components/Blocks";
import { ArrowDR } from "@/components/Icon";
import { img, team } from "@/data/site";

export const metadata = { title: "Our Team", description: "Meet the leadership of Equatorial Oilfield Services: engineering, finance and HSE experts with decades of oil & gas experience." };

export default function Team() {
  return (
    <>
      <PageHero title="Our Team" text="Experienced professionals who combine international expertise with deep local knowledge." image={img.teamBg} crumbs={[{ label: "About Us", href: "/about/" }, { label: "Our Team" }]} />
      <section className="section">
        <div className="container">
          <SectionHead center kicker="Leadership" title="The people behind EQOS" text="Our managers bring decades of experience from Schlumberger, leading banks and international HSE organisations." />
          <div className="team-grid">
            {team.map((m, k) => (
              <Link href={`/team/${m.slug}/`} className="member reveal" key={m.slug} style={{ "--d": `${k * 120}ms` }}>
                <div className="member__photo"><img src={m.photo} alt={m.name} loading="lazy" /></div>
                <div className="member__body">
                  <span className="member__role">{m.role}</span>
                  <h3>{m.name}</h3>
                  <p>{m.short}</p>
                  <span className="link-arrow">Read biography <ArrowDR /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Cta title={<>Want to join a team that builds Africa&apos;s energy future? <em>Get in touch.</em></>} label="Contact us" />
    </>
  );
}
