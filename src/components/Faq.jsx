"use client";
import { useState } from "react";
import { Plus } from "./Icon";

/** Questions fréquentes en accordéon (une seule ouverte à la fois) */
export default function Faq({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {items.map((f, k) => (
        <div key={k} className={`faq__item ${open === k ? "is-open" : ""}`}>
          <button className="faq__q" aria-expanded={open === k} onClick={() => setOpen(open === k ? -1 : k)}>
            {f.q}
            <span className="faq__icon"><Plus /></span>
          </button>
          <div className="faq__a" role="region"><div><p>{f.a}</p></div></div>
        </div>
      ))}
    </div>
  );
}
