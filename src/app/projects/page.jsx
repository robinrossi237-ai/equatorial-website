import { PageHero, SectionHead, Stats, Cta } from "@/components/Blocks";
import ProjectsGrid from "@/components/ProjectsGrid";
import ProjectMap from "@/components/ProjectMap";
import { img, projects, stats, places } from "@/data/site";

export const metadata = { title: "Projects", description: "Drilling engineering for Addax and Perenco, LPG pipeline engineering for SCDP, rig supply for Euroil, manpower for Schlumberger and more." };

export default function Projects() {
  return (
    <>
      <PageHero title="Projects" text="A track record of successful projects with leading operators across Cameroon and the Gulf of Guinea." image={img.heroYellow} crumbs={[{ label: "Projects" }]} />
      <section className="section">
        <div className="container">
          <SectionHead kicker="Our work" title="Successfully completed projects for our clients" text="Filter by activity to explore what we have delivered." />
          <ProjectsGrid projects={projects} />
        </div>
      </section>
      <section className="section section--soft">
        <div className="container">
          <SectionHead kicker="Where we work" title="Our projects across Cameroon" text="From our head office in Douala to offshore fields in the Gulf of Guinea. Select a location to see the projects delivered there." />
          <ProjectMap projects={projects} places={places} />
        </div>
      </section>
      <Stats items={stats} />
      <Cta title={<>Have a project in mind? <em>Let&apos;s build it together.</em></>} />
    </>
  );
}
