"use client";
import { useEffect } from "react";

/**
 * Écran d'accueil (première visite de la session) : "EQOS" se remplit en jaune,
 * puis un rideau remonte. Le HTML est déjà dans la page (layout) pour s'afficher
 * avant le chargement du JavaScript ; ce composant ne fait que le retirer.
 */
export default function Preloader() {
  useEffect(() => {
    const el = document.getElementById("preloader");
    if (!el) return;
    const start = performance.now();
    const MIN = 1300; // durée minimale pour voir l'animation
    const hide = () => {
      const wait = Math.max(0, MIN - (performance.now() - start));
      setTimeout(() => {
        el.classList.add("is-done");
        try { sessionStorage.setItem("eqos-loaded", "1"); } catch {}
        setTimeout(() => { el.style.display = "none"; }, 1000);
      }, wait);
    };
    if (document.readyState === "complete") hide();
    else window.addEventListener("load", hide, { once: true });
    return () => window.removeEventListener("load", hide);
  }, []);
  return null;
}
