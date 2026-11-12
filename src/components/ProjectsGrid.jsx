"use client";
import { useMemo, useState } from "react";
import { ProjectCard } from "./Blocks";

/** Grille de projets avec filtres par catégorie */
export default function ProjectsGrid({ projects }) {
  const cats = useMemo(() => ["All", ...Array.from(new Set(projects.map((p) => p.category)))], [projects]);
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? projects : projects.filter((p) => p.category === cat);
  return (
    <>
      <div className="filters" role="tablist" aria-label="Filter projects">
        {cats.map((c) => (
          <button key={c} role="tab" aria-selected={cat === c} className={`filter ${cat === c ? "is-active" : ""}`} onClick={() => setCat(c)}>
            {c} <small style={{ opacity: 0.6 }}>({c === "All" ? projects.length : projects.filter((p) => p.category === c).length})</small>
          </button>
        ))}
      </div>
      <div className="projects-grid" key={cat}>
        {list.map((p, k) => <ProjectCard key={p.slug} p={p} style={{ animationDelay: `${k * 70}ms` }} />)}
      </div>
    </>
  );
}
