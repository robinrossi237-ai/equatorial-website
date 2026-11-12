"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowL, ArrowR } from "./Icon";

/**
 * Carrousel horizontal : flèches, glisser à la souris, swipe tactile, barre de progression.
 * Les flèches peuvent être placées dans l'en-tête de section via `navTarget="head"`.
 */
export default function Carousel({ children, label = "carousel", head }) {
  const track = useRef(null);
  const [state, setState] = useState({ start: true, end: false, p: 0 });
  const drag = useRef({ down: false, x: 0, left: 0, moved: false });

  const update = () => {
    const el = track.current; if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setState({ start: el.scrollLeft <= 4, end: el.scrollLeft >= max - 4, p: max > 0 ? (el.scrollLeft + el.clientWidth) / el.scrollWidth : 1 });
  };
  useEffect(() => {
    update();
    const el = track.current;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { el.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);

  const step = (dir) => {
    const el = track.current;
    const card = el.firstElementChild;
    const w = card ? card.getBoundingClientRect().width + 28 : el.clientWidth;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  const onDown = (e) => {
    if (e.pointerType !== "mouse") return;
    const el = track.current;
    drag.current = { down: true, x: e.clientX, left: el.scrollLeft, moved: false };
  };
  const onMove = (e) => {
    const d = drag.current; if (!d.down) return;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 5) { d.moved = true; track.current.classList.add("is-dragging"); }
    track.current.scrollLeft = d.left - dx;
  };
  const onUp = () => {
    const d = drag.current; if (!d.down) return;
    d.down = false;
    const el = track.current;
    el.classList.remove("is-dragging");
    // recalage sur la carte la plus proche
    const card = el.firstElementChild;
    if (card) { const w = card.getBoundingClientRect().width + 28; el.scrollTo({ left: Math.round(el.scrollLeft / w) * w, behavior: "smooth" }); }
  };
  // Empêche le clic sur un lien après un glisser
  const onClickCapture = (e) => { if (drag.current.moved) { e.preventDefault(); e.stopPropagation(); drag.current.moved = false; } };

  const nav = (
    <div className="carousel__nav">
      <div className="carousel__progress" aria-hidden="true"><span style={{ width: `${state.p * 100}%` }} /></div>
      <button className="carousel__btn" aria-label="Previous" disabled={state.start} onClick={() => step(-1)}><ArrowL /></button>
      <button className="carousel__btn" aria-label="Next" disabled={state.end} onClick={() => step(1)}><ArrowR /></button>
    </div>
  );

  return (
    <div className="carousel" aria-roledescription="carousel" aria-label={label}>
      {head ? (
        <div className="section-head section-head--split">{head}{nav}</div>
      ) : null}
      <div className="carousel__track" ref={track} onPointerDown={onDown} onPointerMove={onMove}
        onPointerUp={onUp} onPointerLeave={onUp} onClickCapture={onClickCapture}>
        {children}
      </div>
      {!head && <div style={{ marginTop: 36 }}>{nav}</div>}
    </div>
  );
}
