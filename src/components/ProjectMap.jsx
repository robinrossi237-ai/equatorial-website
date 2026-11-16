"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { MAP, INSET, toXY } from "@/data/map-shapes";
import { ArrowDR } from "./Icon";

// Libellés de la carte (latitude, longitude)
const LABELS = [
  { t: "CAMEROON", lat: 3.65, lng: 10.75, cls: "map__label--main" },
  { t: "NIGERIA", lat: 5.0, lng: 8.15, cls: "" },
  { t: "BIOKO", lat: 3.42, lng: 8.72, cls: "map__label--small" },
  { t: "EQ. GUINEA", lat: 2.33, lng: 10.25, cls: "map__label--small" },
  { t: "Gulf of Guinea", lat: 2.75, lng: 8.55, cls: "map__label--sea" },
];
const GRID_LAT = [3, 4, 5];
const GRID_LNG = [8, 9, 10, 11];

/**
 * Carte interactive des projets : un point par lieu, le siège à Douala,
 * des liaisons animées depuis le siège. Clic ou survol d'un point → liste des projets.
 */
export default function ProjectMap({ projects, places }) {
  const groups = useMemo(() => {
    const g = {};
    projects.forEach((p) => { if (p.place && places[p.place]) (g[p.place] ||= []).push(p); });
    return g;
  }, [projects, places]);
  const ids = Object.keys(groups);
  const hq = Object.keys(places).find((k) => places[k].hq);
  const [active, setActive] = useState(hq || ids[0]);
  const list = groups[active] || [];
  const place = places[active];
  const [hx, hy] = toXY(places[hq].lat, places[hq].lng);

  return (
    <div className="pmap reveal">
      <div className="pmap__map">
        <svg viewBox={`0 0 ${MAP.width} ${MAP.height}`} preserveAspectRatio="xMidYMid slice" role="img" aria-label="Map of Equatorial Oilfield Services project locations in Cameroon">
          <defs>
            <radialGradient id="seaGlow" cx="25%" cy="70%" r="80%">
              <stop offset="0" stopColor="#1c145e" />
              <stop offset="1" stopColor="#090133" />
            </radialGradient>
            <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="rgba(247,198,0,0.22)" />
            </pattern>
          </defs>
          <rect width={MAP.width} height={MAP.height} fill="url(#seaGlow)" />

          {/* quadrillage latitude / longitude */}
          <g className="map__grid">
            {GRID_LAT.map((la) => { const [, y] = toXY(la, 0); return <g key={la}><line x1="0" x2={MAP.width} y1={y} y2={y} /><text x="8" y={y - 6}>{la}°N</text></g>; })}
            {GRID_LNG.map((lo) => { const [x] = toXY(0, lo); return <g key={lo}><line y1="0" y2={MAP.height} x1={x} x2={x} /><text x={x + 6} y={MAP.height - 10}>{lo}°E</text></g>; })}
          </g>

          {/* pays voisins puis Cameroun */}
          {Object.entries(MAP.countries).filter(([k]) => k !== "cameroon").map(([k, d]) => <path key={k} d={d} className="map__country" />)}
          <path d={MAP.countries.cameroon} className="map__cmr-fill" />
          <path d={MAP.countries.cameroon} className="map__cmr" pathLength="1" />

          {LABELS.map((l) => { const [x, y] = toXY(l.lat, l.lng); return <text key={l.t} x={x} y={y} className={`map__label ${l.cls}`}>{l.t}</text>; })}

          {/* liaisons depuis le siège */}
          {ids.filter((k) => k !== hq).map((k) => {
            const [x, y] = toXY(places[k].lat, places[k].lng);
            const mx = (hx + x) / 2, my = Math.min(hy, y) - 60;
            return <path key={k} d={`M${hx} ${hy} Q${mx} ${my} ${x} ${y}`} className={`map__link ${active === k ? "is-on" : ""}`} />;
          })}

          {/* points */}
          {ids.map((k, i) => {
            const pl = places[k];
            const [x, y] = toXY(pl.lat, pl.lng);
            const on = active === k;
            return (
              <g key={k} className={`map__pin ${on ? "is-on" : ""} ${pl.hq ? "is-hq" : ""}`} transform={`translate(${x} ${y})`}
                style={{ "--i": i }} role="button" tabIndex={0} aria-label={`${pl.name}: ${groups[k].length} project(s)`} aria-pressed={on}
                onClick={() => setActive(k)} onMouseEnter={() => setActive(k)} onFocus={() => setActive(k)}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), setActive(k))}>
                <circle className="map__pulse" r="16" />
                <circle className="map__pulse map__pulse--2" r="16" />
                <circle className="map__dot" r={pl.hq ? 13 : 11} />
                {pl.hq
                  ? <path className="map__star" d="M0 -7l2 4.5 5 .5-3.8 3.3 1.1 4.9L0 2.8l-4.3 2.4 1.1-4.9L-7 -3l5-.5z" />
                  : <text className="map__count" y="4">{groups[k].length}</text>}
                <g className="map__tag" transform="translate(18 -22)">
                  <text textAnchor="start">{pl.name}{pl.hq ? " · HQ" : ""}</text>
                </g>
              </g>
            );
          })}
        </svg>

        {/* carte de situation */}
        <div className="pmap__inset" aria-hidden="true">
          <svg viewBox={`0 0 ${INSET.width} ${INSET.height}`}>
            <path d={INSET.cameroon} />
            <rect x={INSET.frame[0]} y={INSET.frame[1]} width={INSET.frame[2]} height={INSET.frame[3]} />
          </svg>
          <span>Cameroon</span>
        </div>

        <div className="pmap__legend" aria-hidden="true">
          <span><i className="lg-hq" /> Head office</span>
          <span><i className="lg-site" /> Project site</span>
        </div>
      </div>

      <div className="pmap__panel" aria-live="polite">
        <div className="pmap__head" key={active}>
          <span className="kicker">{place.area}</span>
          <h3>{place.name}{place.hq && <em>Head office</em>}</h3>
          <p><strong>{list.length}</strong> project{list.length > 1 ? "s" : ""} delivered here</p>
        </div>
        <ul className="pmap__list" key={`l-${active}`}>
          {list.map((p, i) => (
            <li key={p.slug} style={{ "--i": i }}>
              <Link href={`/projects/${p.slug}/`}>
                <img src={p.image} alt="" loading="lazy" />
                <span>
                  <small>{p.category}</small>
                  <strong>{p.title}</strong>
                  <em>{p.client} · {p.year}</em>
                </span>
                <ArrowDR className="arrow" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="pmap__places">
          {ids.map((k) => (
            <button key={k} className={active === k ? "is-on" : ""} onClick={() => setActive(k)}>
              {places[k].name} <b>{groups[k].length}</b>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
