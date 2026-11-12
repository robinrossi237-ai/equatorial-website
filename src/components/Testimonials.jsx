"use client";
import { useEffect, useState } from "react";
import { ArrowL, ArrowR, QuoteMark } from "./Icon";

/** Témoignages clients : défilement automatique, flèches et points */
export default function Testimonials({ items, image, title = "What our clients say about us" }) {
  const [i, setI] = useState(0);
  const [hover, setHover] = useState(false);
  const n = items.length;
  useEffect(() => {
    if (hover || n < 2) return;
    const t = setTimeout(() => setI((i + 1) % n), 8000);
    return () => clearTimeout(t);
  }, [i, hover, n]);

  return (
    <div className="quotes" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="quotes__img img-reveal" style={{ backgroundImage: `url(${image})` }} role="img" aria-label="Offshore oil & gas installation" />
      <div className="quotes__box">
        <span className="quotes__sq" aria-hidden="true" />
        <QuoteMark className="quotes__mark" />
        <h2>{title}</h2>
        <div aria-live="polite">
          {items.map((t, k) => (
            <blockquote key={k} className={`quote ${k === i ? "is-active" : ""}`} style={{ margin: 0 }}>
              <p>“{t.quote}”</p>
              <strong>{t.name}</strong>
              <span>{t.role}, {t.company}</span>
            </blockquote>
          ))}
        </div>
        {n > 1 && (
          <div className="quotes__nav">
            <button className="carousel__btn" aria-label="Previous testimonial" onClick={() => setI((i - 1 + n) % n)}><ArrowL /></button>
            <button className="carousel__btn" aria-label="Next testimonial" onClick={() => setI((i + 1) % n)}><ArrowR /></button>
            <div className="quotes__dots">
              {items.map((_, k) => <button key={k} className={k === i ? "is-active" : ""} aria-label={`Testimonial ${k + 1}`} onClick={() => setI(k)} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
