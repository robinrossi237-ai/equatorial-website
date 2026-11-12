"use client";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowDR, ArrowL, ArrowR, ArrowDown } from "./Icon";
import VideoButton from "./VideoButton";

const DURATION = 7000;

/** Grand diaporama d'accueil : flèches, compteur 01/03, barre de progression, swipe, clavier */
export default function HeroSlider({ slides, videoId }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [run, setRun] = useState(0); // relance l'animation de la barre
  const touch = useRef(null);
  const n = slides.length;

  const go = useCallback((k) => { setI((k + n) % n); setRun((r) => r + 1); }, [n]);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(i + 1), DURATION);
    return () => clearTimeout(t);
  }, [i, paused, go, run]);

  useEffect(() => {
    const onKey = (e) => {
      if (window.scrollY > window.innerHeight) return;
      if (e.key === "ArrowRight") go(i + 1);
      if (e.key === "ArrowLeft") go(i - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [i, go]);

  const pad = (k) => String(k + 1).padStart(2, "0");

  return (
    <section className="hero" aria-roledescription="carousel" aria-label="Highlights"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touch.current == null) return;
        const dx = e.changedTouches[0].clientX - touch.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? i + 1 : i - 1);
        touch.current = null;
      }}>
      {slides.map((s, k) => (
        <div key={k} className={`hero__slide ${k === i ? "is-active" : ""}`} aria-hidden={k !== i}
          role="group" aria-roledescription="slide" aria-label={`${k + 1} of ${n}`}>
          <div className="hero__bg" style={{ backgroundImage: `url(${s.image})` }} />
          <div className="hero__overlay" />
          <div className="container hero__content">
            <div className="kicker hero__kicker">{s.kicker}</div>
            {k === 0 ? <h1 className="hero__title">{s.title}</h1> : <h2 className="hero__title">{s.title}</h2>}
            <p className="hero__text">{s.text}</p>
            <div className="hero__actions">
              <Link href={s.cta.href} className="btn" tabIndex={k === i ? 0 : -1}>{s.cta.label} <ArrowDR /></Link>
              {videoId && <VideoButton id={videoId} tabIndex={k === i ? 0 : -1} />}
            </div>
          </div>
        </div>
      ))}

      <div className="hero__dots">
        {slides.map((_, k) => (
          <button key={k} className={k === i ? "is-active" : ""} aria-label={`Go to slide ${k + 1}`} onClick={() => go(k)} />
        ))}
      </div>

      <a href="#intro" className="hero__scroll" aria-label="Scroll down"><ArrowDown /></a>

      <div className="hero__controls">
        <div className="hero__count">
          <span>{pad(i)}</span>
          <div className="hero__bar">
            <span key={`${i}-${run}`} className={paused ? "" : "is-running"} style={{ "--dur": `${DURATION}ms` }} />
          </div>
          <span>{pad(n - 1)}</span>
        </div>
        <button className="hero__arrow" aria-label="Previous slide" onClick={() => go(i - 1)}><ArrowL /></button>
        <button className="hero__arrow" aria-label="Next slide" onClick={() => go(i + 1)}><ArrowR /></button>
      </div>
    </section>
  );
}
