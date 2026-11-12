import Link from "next/link";
import { ArrowDR } from "@/components/Icon";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="not-found">
      <div>
        <h1>404</h1>
        <h2>This page went off the map</h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: 30 }}>The page you are looking for doesn&apos;t exist or has moved.</p>
        <Link href="/" className="btn">Back to home <ArrowDR /></Link>
      </div>
    </section>
  );
}
