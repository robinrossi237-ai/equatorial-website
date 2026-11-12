"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Close } from "./Icon";

/** Fenêtre plein écran (vidéo, photos). Se ferme avec Échap ou un clic à l'extérieur. */
export default function Modal({ onClose, label, children, onKey }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const h = (e) => { if (e.key === "Escape") onClose(); else onKey?.(e); };
    window.addEventListener("keydown", h);
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", h); };
  }, [onClose, onKey]);

  return createPortal(
    <div className="modal" role="dialog" aria-modal="true" aria-label={label} onClick={onClose}>
      <div className="modal__box" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close" autoFocus><Close /></button>
        {children}
      </div>
    </div>,
    document.body
  );
}
