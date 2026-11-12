import { icons } from "@/data/icons";

/** Icône de service (SVG remplie, prend la couleur du texte) */
export function ServiceIcon({ name, className }) {
  const ic = icons[name];
  if (!ic) return null;
  return (
    <svg className={className} viewBox={ic.viewBox} fill="currentColor" aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: ic.inner }} />
  );
}

const base = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };

/** Flèche ↘ caractéristique du site d'origine */
export const ArrowDR = ({ className = "arrow" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}><path d="M7 7l10 10M17 8v9H8" /></svg>
);
export const ArrowR = ({ className = "arrow" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const ArrowL = ({ className = "arrow" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
);
export const ArrowDown = ({ className = "arrow" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}><path d="M12 5v14M6 13l6 6 6-6" /></svg>
);
export const ArrowUp = ({ className = "arrow" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}><path d="M12 19V5M6 11l6-6 6 6" /></svg>
);
export const Chevron = ({ className = "nav__chev" }) => (
  <svg className={className} viewBox="0 0 12 12" {...base} strokeWidth={2}><path d="M2 4l4 4 4-4" /></svg>
);
export const Plus = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" {...base}><path d="M12 5v14M5 12h14" /></svg>
);
export const Close = ({ className }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" {...base}><path d="M6 6l12 12M18 6L6 18" /></svg>
);
export const Play = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" /></svg>
);
export const Pin = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M12 22s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></svg>
);
export const Phone = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z" /></svg>
);
export const Mail = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 6l-10 7L2 6" /></svg>
);
export const Clock = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
);
export const LinkedIn = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 110-4.2 2.1 2.1 0 010 4.2zm1.8 13.1H3.5V9h3.6v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z" /></svg>
);
export const QuoteMark = ({ className }) => (
  <svg className={className} viewBox="0 0 52 42" fill="currentColor" aria-hidden="true"><path d="M0 0h20v20L10 42H0l8-22H0zM32 0h20v20L42 42H32l8-22h-8z" /></svg>
);
