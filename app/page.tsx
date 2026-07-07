import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import FormatShowcase from "@/components/FormatShowcase";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://ai-exporter.github.io/",
              },
            ],
          }),
        }}
      />
      <div className="min-h-screen">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Features />
        <HowItWorks />
        <FormatShowcase />
        <FAQ />
      </main>
      <Footer />
    </div>
    </>
  );
}
