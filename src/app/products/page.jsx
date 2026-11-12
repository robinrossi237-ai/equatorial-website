import Link from "next/link";
import { PageHero, SectionHead, ProductCard, Cta } from "@/components/Blocks";
import Carousel from "@/components/Carousel";
import { ArrowDR } from "@/components/Icon";
import { img, products, productCategories, supplyBlocks } from "@/data/site";

export const metadata = { title: "Our Products", description: "Flow assurance chemicals (B-EXO, B-CLENZ), man-less tank cleaning and downhole tools (GeoGLIDER, GeoproHYDRA, REACTv, HYDRA) — plus rig supply and diesel generators." };

export default function Products() {
  return (
    <>
      <PageHero title="Our Products" text="Field-proven chemicals and downhole tools that restore flow, protect your wells and save rig time." image={img.heroRig} crumbs={[{ label: "Our Products" }]} />

      {productCategories.map((c, k) => (
        <section className={`section ${k % 2 ? "section--soft" : ""}`} key={c.id} id={c.id}>
          <div className="container">
            <Carousel label={c.title} head={
              <div>
                <div className="kicker reveal">{k === 0 ? "Production enhancement" : "Drilling procurement solutions"}</div>
                <h2 className="reveal" style={{ fontSize: "clamp(30px,4vw,46px)", "--d": "80ms" }}>{c.title}</h2>
                <p className="reveal" style={{ "--d": "160ms" }}>{c.text}</p>
              </div>
            }>
              {products.filter((p) => p.category === c.id).map((p) => <ProductCard key={p.slug} p={p} />)}
            </Carousel>
          </div>
        </section>
      ))}

      <section className="section section--navy">
        <div className="container">
          <SectionHead kicker="Facilities procurement" title="Rig supply & power generation" />
          <div className="cols-2">
            {supplyBlocks.map((b, k) => (
              <div className="reveal" key={b.title} style={{ "--d": `${k * 120}ms` }}>
                <div className="img-reveal" style={{ aspectRatio: "16/10", borderRadius: 4, marginBottom: 28 }}>
                  <img src={b.images[0]} alt={b.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                </div>
                <h3 style={{ fontSize: 26 }}>{b.title}</h3>
                <p>{b.text}</p>
                <Link href="/contacts/" className="link-arrow">Request a quote <ArrowDR /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
