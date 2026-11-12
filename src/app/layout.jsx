import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";
import { company } from "@/data/site";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-manrope", display: "swap" });

export const metadata = {
  metadataBase: new URL("https://equatorial-os.com"),
  title: { default: `${company.name} — ${company.tagline}`, template: `%s | ${company.name}` },
  description: "Equatorial Oilfield Services (EQOS) — engineering, procurement, construction and management of oil & gas assets, and petroleum products trading & supply. Based in Douala, Cameroon, since 2011.",
  keywords: ["oil and gas Cameroon", "drilling engineering", "facilities engineering", "flow assurance", "petroleum products supply", "Douala", "Gulf of Guinea", "EQOS"],
  openGraph: { type: "website", siteName: company.name, locale: "en_US", images: ["/images/2023-02-offshore-oil-rig-platform-in-the-gulf-from-aerial-view.jpg"] },
  icons: { icon: "/favicon.svg" },
};

export const viewport = { themeColor: "#090133" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: "https://equatorial-os.com",
  email: company.email,
  telephone: company.phones[0],
  foundingDate: String(company.founded),
  address: { "@type": "PostalAddress", addressLocality: "Douala", addressRegion: "Akwa", addressCountry: "CM" },
  sameAs: [company.linkedin],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body id="top">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <Motion />
      </body>
    </html>
  );
}
