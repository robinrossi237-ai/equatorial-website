import Link from "next/link";
import { PageHero, SectionHead, Marquee, Skills, Stats, Cta } from "@/components/Blocks";
import Testimonials from "@/components/Testimonials";
import { ArrowDR } from "@/components/Icon";
import { img, stats, skills, team, testimonials, partners, clients } from "@/data/site";

export const metadata = { title: "About Us", description: "Equatorial Oilfield Services is an indigenous Cameroonian oil & gas company founded in 2011 — drilling, facilities engineering, flow assurance and petroleum products supply." };

const values = [
  { n: "01", t: "Quality", d: "A Quality Management System guides every project, from design to commissioning." },
  { n: "02", t: "Integrity", d: "Transparent, reliable partnerships with operators, suppliers and communities." },
  { n: "03", t: "People", d: "We train and develop local talent to strengthen Cameroon's oil & gas content." },
  { n: "04", t: "Safety", d: "Safeguarding life and the environment is non-negotiable on every site." },
];

export default function About() {
  return (
    <>
      <PageHero title="We work for you since 2011" text="An indigenous Cameroonian company, trusted across the Gulf of Guinea for engineering, procurement, construction and supply." image={img.worker} crumbs={[{ label: "About Us" }]} />

      <section className="section" style={{ overflow: "hidden" }}>
        <div className="container split">
          <div className="about-media">
            <span className="about-media__sq" aria-hidden="true" />
            <div className="about-media__main img-reveal"><img src={img.tools} alt="Downhole tools and equipment" loading="lazy" /></div>
            <div className="about-media__card reveal" style={{ "--d": "300ms" }}>
              <strong>2011</strong><span>Founded in Douala, Cameroon</span>
            </div>
          </div>
          <div>
            <div className="kicker reveal">About Equatorial OS</div>
            <h2 className="reveal" style={{ fontSize: "clamp(30px,3.8vw,46px)", "--d": "80ms" }}>A reference for oil & gas facilities in West and Central Africa</h2>
            <p className="lead reveal" style={{ "--d": "140ms" }}>Equatorial Oilfield Services Sarl is an indigenous company in Cameroon existing since 2011. We began with directional drilling, wireline, slickline, downhole tool rentals and manpower support services for E&P.</p>
            <p className="reveal" style={{ "--d": "200ms" }}>Well-known for our reliable services in the Gulf of Guinea, we committed to providing more diversified solutions, which led to the expansion of our services to facilities engineering — and today to petroleum products trading & supply. Over the years, the group has become a reference in the design, procurement and construction of oil and gas facilities.</p>
            <Link href="/our-services/" className="btn reveal" style={{ "--d": "260ms", marginTop: 12 }}>Our services <ArrowDR /></Link>
          </div>
        </div>
      </section>

      <Stats items={stats} />

      <section className="section section--navy">
        <div className="container">
          <div className="split" style={{ marginBottom: 70, alignItems: "end" }}>
            <div>
              <div className="kicker reveal">Our mission</div>
              <h2 className="reveal" style={{ fontSize: "clamp(30px,3.8vw,46px)", "--d": "80ms" }}>Top-notch engineering, delivered safely and on time</h2>
            </div>
            <p className="reveal" style={{ "--d": "160ms", fontSize: 17 }}>Our agile team is devoted to providing top-notch services in engineering, procurement, construction and management of oil and gas assets. With a Quality Management System, we work in a timely manner while safeguarding life and the environment.</p>
          </div>
          <div className="feature-cards">
            {values.map((v, k) => (
              <div className="feature reveal" key={v.n} style={{ "--d": `${k * 100}ms` }}>
                <div className="feature__n">{v.n}</div>
                <h3>{v.t}</h3>
                <p>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ overflow: "hidden" }}>
        <div className="container split split--wide-left">
          <div>
            <SectionHead kicker="We excel at what we do" title="World-class services at affordable rates" />
            <p className="reveal">Our team of trained professionals has been at your service for many years, providing you the best services. We are a reference in West and Central Africa in terms of drilling engineering, and we plan to extend our influence to the rest of Africa and the world.</p>
            <div className="reveal" style={{ marginTop: 36 }}><Skills items={skills} /></div>
          </div>
          <div className="img-reveal" style={{ aspectRatio: "4/5", borderRadius: 4 }}>
            <img src={img.factory} alt="Industrial plant at sunset" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section-head section-head--split">
            <div>
              <div className="kicker reveal">Leadership</div>
              <h2 className="reveal" style={{ "--d": "80ms" }}>We have assembled the best team to work with you</h2>
            </div>
            <Link href="/our-team/" className="link-arrow reveal">Meet the team <ArrowDR /></Link>
          </div>
          <div className="team-grid">
            {team.map((m, k) => (
              <Link href={`/team/${m.slug}/`} className="member reveal" key={m.slug} style={{ "--d": `${k * 120}ms` }}>
                <div className="member__photo"><img src={m.photo} alt={m.name} loading="lazy" /></div>
                <div className="member__body">
                  <span className="member__role">{m.role}</span>
                  <h3>{m.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 140 }}>
        <div className="container">
          <Testimonials items={testimonials} image={img.heroPlatform} />
        </div>
      </section>

      <section className="section section--soft" style={{ paddingBottom: 80 }}>
        <div className="container"><SectionHead center kicker="Partners" title="Partners who trust EQOS" /></div>
        <Marquee items={[...partners, ...clients]} speed={45} />
      </section>

      <Cta />
    </>
  );
}
