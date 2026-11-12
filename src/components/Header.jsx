"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, company, img } from "@/data/site";
import { ArrowDR, ArrowR, Chevron, Plus, Phone, Mail } from "./Icon";

export default function Header() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(null);
  const lastY = useRef(0);

  // En-tête transparent sur la bannière, blanc au défilement, masqué quand on descend
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 40);
      setHidden(y > 400 && y > lastY.current + 4);
      if (y < lastY.current - 4 || y < 400) setHidden(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); setSub(null); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (item) =>
    item.href === "/" ? pathname === "/" :
    pathname.startsWith(item.href) || item.children?.some((c) => pathname.startsWith(c.href)) ||
    (item.label === "Services & Products" && /^\/(services|our-products|products)/.test(pathname)) ||
    (item.label === "About Us" && /^\/team\//.test(pathname));

  const cls = ["header", (solid || open) && "header--solid", hidden && !open && "header--hidden"].filter(Boolean).join(" ");

  return (
    <>
      <div className="progress-line" aria-hidden="true" />
      <header className={cls}>
        <div className="container header__inner">
          <Link href="/" className="header__logo" aria-label={`${company.name} — home`}>
            <img src={img.logo} alt={company.name} width="113" height="46" />
          </Link>

          <nav className="nav" aria-label="Main navigation">
            {nav.map((item) => (
              <div className="nav__item" key={item.label}>
                <Link href={item.href} className={`nav__link ${isActive(item) ? "is-active" : ""}`}>
                  {item.label}
                  {item.children && <Chevron />}
                </Link>
                {item.children && (
                  <div className="dropdown">
                    {item.children.map((c) => (
                      <Link key={c.href} href={c.href}>
                        <span><strong>{c.label}</strong><small>{c.desc}</small></span>
                        <ArrowR />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <Link href="/contacts/" className="btn header__cta">Contact Us <ArrowDR /></Link>

          <button className={`burger ${open ? "is-open" : ""}`} aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`drawer ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <ul className="drawer__list">
          {[...nav, { label: "Contact Us", href: "/contacts/" }].map((item, i) => (
            <li key={item.label} style={{ transitionDelay: open ? `${150 + i * 60}ms` : "0ms" }}>
              <div className="drawer__row">
                <Link href={item.href} tabIndex={open ? 0 : -1}>{item.label}</Link>
                {item.children && (
                  <button className={`drawer__toggle ${sub === i ? "is-open" : ""}`} tabIndex={open ? 0 : -1}
                    aria-label={`Show ${item.label} links`} onClick={() => setSub(sub === i ? null : i)}>
                    <Plus />
                  </button>
                )}
              </div>
              {item.children && (
                <div className={`drawer__sub ${sub === i ? "is-open" : ""}`}>
                  <div>{item.children.map((c) => <Link key={c.href} href={c.href} tabIndex={open && sub === i ? 0 : -1}>{c.label}</Link>)}</div>
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="drawer__footer">
          <a href={`tel:${company.phones[0].replace(/\s/g, "")}`} tabIndex={open ? 0 : -1}><Phone width="16" height="16" /> {company.phones[0]}</a>
          <a href={`mailto:${company.email}`} tabIndex={open ? 0 : -1}><Mail width="16" height="16" /> {company.email}</a>
        </div>
      </div>
    </>
  );
}
