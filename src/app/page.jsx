import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import Carousel from "@/components/Carousel";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import { ArrowDR } from "@/components/Icon";
import { SectionHead, ServiceCard, TradeCard, ProductCard, ProjectCard, Marquee, Stats, Skills, Cta } from "@/components/Blocks";
import { heroSlides, company, stats, img, engineeringServices, trading, products, productCategories, projects, testimonials, partners, clients, faqs, skills } from "@/data/site";

export default function Home() {
  const catName = Object.fromEntries(productCategories.map((c) => [c.id, c.id === "flow-assurance" ? "Flow assurance" : "Downhole tools"]));
  return (
    <>
      <HeroSlider slides={heroSlides} videoId={company.video} />
      <Stats items={stats} />

      {/* ---------- À propos ---------- */}
      <section className="section anchor-offset" id="intro" style={{ overflow: "hidden" }}>
        <div className="container split">
          <div className="about-media">
            <span className="about-media__sq" aria-hidden="true" />
            <div className="about-media__main img-reveal"><img src={img.heroSunset} alt="Offshore oil & gas production platform at dusk" loading="lazy" /></div>
            <div className="about-media__card reveal" style={{ "--d": "300ms" }}>
              <strong style={{ fontSize: 44 }}>Since 2011</strong>
              <span>Reliable services across the Gulf of Guinea</span>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div className="kicker reveal">About Equatorial OS</div>
            <h2 className="reveal" style={{ fontSize: "clamp(30px,3.8vw,48px)", "--d": "80ms" }}>Responsible for safe energy development in Sub-Saharan Africa since 2011</h2>
            <p className="lead reveal" style={{ "--d": "140ms" }}>Equatorial Oilfield Services Sarl is an indigenous company in Cameroon, founded in 2011. We began with directional drilling, wireline, slickline, downhole tool rentals and manpower support services for E&P.</p>
            <p className="reveal" style={{ "--d": "200ms" }}>Well-known for our reliable services in the Gulf of Guinea, we committed to providing more diversified solutions, which led to the expansion of our services to facilities engineering. Over the years, the group has become a reference in the design, procurement and construction of oil and gas facilities.</p>
            <ul className="checks reveal" style={{ "--d": "260ms" }}>
              <li>Engineering solutions that meet your needs</li>
              <li>Products manufactured to international standards</li>
              <li>Unique chemicals to restore your production to 100%</li>
              <li>Qualified team that manages your asset with full autonomy</li>
            </ul>
            <Link href="/about/" className="link-arrow reveal" style={{ "--d": "320ms" }}>More about Equatorial OS <ArrowDR /></Link>
          </div>
        </div>
      </section>

      {/* ---------- Services d'ingénierie ---------- */}
      <section className="section section--navy" style={{ overflow: "hidden" }}>
        <div className="container">
          <div className="section-head section-head--split">
            <div>
              <div className="kicker reveal">What we do</div>
              <h2 className="reveal" style={{ "--d": "80ms" }}>Engineering services trusted since 2011</h2>
            </div>
            <Link href="/our-services/" className="link-arrow reveal">All services <ArrowDR /></Link>
          </div>
          <div className="svc-grid">
            {engineeringServices.map((s, k) => <ServiceCard key={s.slug} s={s} i={k} />)}
          </div>
        </div>
      </section>

      {/* ---------- Trading & supply ---------- */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-head section-head--split">
            <div>
              <div className="kicker reveal">Petroleum products trading & supply</div>
              <h2 className="reveal" style={{ "--d": "80ms" }}>Energy products, delivered on time and on spec</h2>
              <p className="reveal" style={{ "--d": "160ms" }}>From crude oil to Jet A-1 and LPG, backed by storage, transport and trade finance solutions.</p>
            </div>
            <Link href="/trading/" className="btn btn--navy reveal">Explore trading & supply <ArrowDR /></Link>
          </div>
          <div className="trade-grid trade-grid--3">
            {trading.map((t, k) => <TradeCard key={t.slug} t={t} i={k} />)}
          </div>
        </div>
      </section>

      {/* ---------- Produits (carrousel) ---------- */}
      <section className="section">
        <div className="container">
          <Carousel label="Our products" head={
            <div>
              <div className="kicker reveal">Our products</div>
              <h2 className="reveal" style={{ fontSize: "clamp(30px,4vw,48px)", "--d": "80ms" }}>Proven tools & chemicals for better wells</h2>
            </div>
          }>
            {products.map((p) => <ProductCard key={p.slug} p={p} tag={catName[p.category]} />)}
          </Carousel>
          <div className="center" style={{ marginTop: 40 }}><Link href="/products/" className="link-arrow">See all products <ArrowDR /></Link></div>
        </div>
      </section>

      {/* ---------- Pourquoi nous + compétences ---------- */}
      <section className="section section--soft" style={{ overflow: "hidden" }}>
        <div className="container split split--wide-left">
          <div>
            <SectionHead kicker="Our strength" title="Quality products and services, delivered safely" />
            <p className="reveal">Our agile team is devoted to providing top-notch services in engineering, procurement, construction and management of oil & gas assets. With a quality management system, we work in a timely manner while safeguarding life and the environment.</p>
            <div className="reveal" style={{ marginTop: 36 }}><Skills items={skills} /></div>
          </div>
          <div style={{ position: "relative" }}>
            <div className="img-reveal" style={{ aspectRatio: "4/5", borderRadius: 4 }}><img src={img.heroYellow} alt="Yellow offshore structure above the waves" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "30% 50%" }} loading="lazy" /></div>
            <div className="about-media__card reveal" style={{ left: -40, right: "auto", bottom: 40, width: 260, "--d": "300ms" }}>
              <strong data-count="100" data-suffix="+">0+</strong>
              <span>completed projects for leading operators</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Projets ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--split">
            <div>
              <div className="kicker reveal">Projects</div>
              <h2 className="reveal" style={{ "--d": "80ms" }}>Successfully completed projects for our clients</h2>
            </div>
            <Link href="/projects/" className="link-arrow reveal">All projects <ArrowDR /></Link>
          </div>
          <div className="projects-grid">
            {projects.slice(0, 3).map((p, k) => <div className="reveal" key={p.slug} style={{ "--d": `${k * 120}ms` }}><ProjectCard p={p} /></div>)}
          </div>
        </div>
      </section>

      {/* ---------- Témoignages ---------- */}
      <section className="section section--soft" style={{ paddingTop: 140 }}>
        <div className="container">
          <Testimonials items={testimonials} image={img.heroYellow} title="What people say about Equatorial Oilfield Services" />
        </div>
      </section>

      {/* ---------- Clients & partenaires ---------- */}
      <section className="section" style={{ paddingBottom: 80 }}>
        <div className="container">
          <SectionHead center kicker="Clients & partners" title="Trusted by leading energy companies" />
        </div>
        <Marquee items={[...clients, ...partners]} />
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="section section--soft">
        <div className="container split">
          <div>
            <SectionHead kicker="FAQ" title="Questions? We have answers." text="Can't find what you're looking for? Our team is one message away." />
            <Link href="/contacts/" className="btn btn--navy reveal">Contact our team <ArrowDR /></Link>
          </div>
          <div className="reveal"><Faq items={faqs} /></div>
        </div>
      </section>

      <Cta />
    </>
  );
}
