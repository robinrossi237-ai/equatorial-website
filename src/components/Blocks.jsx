import Link from "next/link";
import { ArrowDR } from "./Icon";
import { ServiceIcon } from "./Icon";

/** Bannière des pages intérieures (fil d'Ariane + parallaxe + carrés décoratifs) */
export function PageHero({ title, text, image, crumbs = [] }) {
  return (
    <section className="page-hero">
      <div className="page-hero__bg" data-parallax="0.35" style={{ backgroundImage: `url(${image})` }} />
      <div className="container page-hero__content">
        <nav className="crumbs reveal" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} style={{ display: "contents" }}>
              <span aria-hidden="true" />
              {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
            </span>
          ))}
        </nav>
        <h1 className="reveal" style={{ "--d": "100ms" }}>{title}</h1>
        {text && <p className="reveal" style={{ "--d": "200ms" }}>{text}</p>}
      </div>
      <div className="page-hero__squares" aria-hidden="true"><i /><i /></div>
    </section>
  );
}

export function SectionHead({ kicker, title, text, center, children, className = "" }) {
  return (
    <div className={`section-head ${center ? "section-head--center" : ""} ${className}`}>
      {kicker && <div className="kicker reveal">{kicker}</div>}
      <h2 className="reveal" style={{ "--d": "80ms" }}>{title}</h2>
      {text && <p className="reveal" style={{ "--d": "160ms" }}>{text}</p>}
      {children}
    </div>
  );
}

/** Carte de service au style d'origine : icône, titre, flèche ↘, filet, texte */
export function ServiceCard({ s, i = 0 }) {
  const href = s.body ? `/services/${s.slug}/` : "/contacts/";
  return (
    <Link href={href} className="svc reveal" style={{ "--d": `${(i % 3) * 100}ms` }}>
      <div className="svc__top">
        <ServiceIcon name={s.icon} className="svc__icon" />
        <h3 className="svc__title">{s.title}</h3>
        <ArrowDR className="svc__arrow" />
      </div>
      <p className="svc__text">{s.excerpt}</p>
    </Link>
  );
}

/** Carte d'activité trading : photo, icône, texte, sous-produits ; mène à sa propre page */
export function TradeCard({ t, i = 0 }) {
  return (
    <Link href={`/trading/${t.slug}/`} className="trade trade--photo reveal" style={{ "--d": `${(i % 3) * 100}ms` }}>
      <div className="trade__media"><img src={t.image} alt={t.title} loading="lazy" /></div>
      <div className="trade__body">
        <span className="trade__num">{String(i + 1).padStart(2, "0")}</span>
        <ServiceIcon name={t.icon} className="trade__icon" />
        <h3>{t.title}</h3>
        <p>{t.excerpt}</p>
        {t.products && (
          <ul className="trade__chips">{t.products.map((p) => <li key={p.slug}>{p.title.replace(" (Liquefied Petroleum Gas)", "")}</li>)}</ul>
        )}
        <span className="link-arrow trade__more">Learn more <ArrowDR /></span>
      </div>
    </Link>
  );
}

export function ProductCard({ p, tag }) {
  return (
    <Link href={`/our-products/${p.slug}/`} className="product">
      <div className="product__media">
        {tag && <span className="product__tag">{tag}</span>}
        <img src={p.image} alt={p.title} loading="lazy" draggable="false" />
      </div>
      <div className="product__body">
        <h3>{p.title}</h3>
        <p>{p.excerpt}</p>
        <span className="link-arrow">View product <ArrowDR /></span>
      </div>
    </Link>
  );
}

export function ProjectCard({ p, style }) {
  return (
    <Link href={`/projects/${p.slug}/`} className="project" style={style}>
      <img src={p.image} alt={p.title} loading="lazy" />
      <span className="project__go" aria-hidden="true"><ArrowDR /></span>
      <div className="project__body">
        <span className="project__cat">{p.category}</span>
        <h3>{p.title}</h3>
        <div className="project__meta"><span>{p.client}</span><span>·</span><span>{p.year}</span></div>
        <div className="project__more"><div><p>{p.text}</p></div></div>
      </div>
    </Link>
  );
}

/** Logos qui défilent en continu (pause au survol) */
export function Marquee({ items, speed = 40 }) {
  const list = [...items, ...items];
  return (
    <div className="marquee" style={{ "--speed": `${speed}s` }}>
      <div className="marquee__track">
        {list.map((l, k) => (
          <div className="logo-card" key={k} aria-hidden={k >= items.length}>
            <img src={l.logo} alt={k < items.length ? l.name : ""} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Stats({ items }) {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {items.map((s, k) => (
          <div className="stat reveal" key={s.label} style={{ "--d": `${k * 100}ms` }}>
            <div className="stat__value" data-count={s.value} data-suffix={s.suffix}>0{s.suffix}</div>
            <div className="stat__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Skills({ items }) {
  return items.map((s) => (
    <div className="skill" key={s.label}>
      <div className="skill__head"><span>{s.label}</span><span>{s.value}%</span></div>
      <div className="skill__bar"><span data-width={s.value} /></div>
    </div>
  ));
}

export function Cta({ title = <>Ready to power your next project? <em>Let&apos;s talk.</em></>, label = "Request a quote" }) {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <h2 className="reveal">{title}</h2>
        <Link href="/contacts/" className="btn reveal" style={{ "--d": "150ms" }}>{label} <ArrowDR /></Link>
      </div>
      <div className="outline-text cta__big" aria-hidden="true">EQOS</div>
    </section>
  );
}
