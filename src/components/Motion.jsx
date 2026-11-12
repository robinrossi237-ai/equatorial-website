"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Moteur d'animations global (un seul pour tout le site) :
 *  - .reveal / .img-reveal : apparition au défilement
 *  - [data-count]          : compteurs animés (ex. 120+)
 *  - [data-width]          : barres de progression
 *  - [data-parallax]       : effet de parallaxe sur les bannières
 *  - barre de progression de lecture + bouton "retour en haut"
 */
export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const countUp = (el) => {
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      if (reduce) { el.textContent = target + suffix; return; }
      const dur = 1800; const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 4);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        el.classList.add("is-in");
        if (el.dataset.count) countUp(el);
        if (el.dataset.width) el.style.width = el.dataset.width + "%";
        io.unobserve(el);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

    const els = document.querySelectorAll(".reveal, .img-reveal, [data-count], [data-width]");
    els.forEach((el) => io.observe(el));

    // Parallaxe + barre de lecture + bouton haut
    const para = Array.from(document.querySelectorAll("[data-parallax]"));
    const bar = document.querySelector(".progress-line");
    const top = document.querySelector(".to-top");
    const ring = document.querySelector(".to-top .ring circle");
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const h = document.documentElement.scrollHeight - window.innerHeight;
        const p = h > 0 ? y / h : 0;
        if (bar) bar.style.width = p * 100 + "%";
        if (top) top.classList.toggle("is-visible", y > 600);
        if (ring) ring.style.strokeDashoffset = String(157 - 157 * p);
        if (!reduce) para.forEach((el) => {
          const speed = parseFloat(el.dataset.parallax) || 0.3;
          el.style.transform = `translate3d(0, ${y * speed}px, 0)`;
        });
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, [pathname]);

  return null;
}
