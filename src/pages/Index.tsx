import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import FormatShowcase from "@/components/FormatShowcase";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Index = () => {
  useScrollAnimation();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Google AI Studio Chat Exporter — Export to PDF, Markdown & JSON | Free Chrome Extension</title>
        <meta name="description" content="Free Chrome extension to export Google AI Studio conversations to PDF, Markdown, or JSON. 100% private — all processing happens locally in your browser." />
        <link rel="canonical" href="https://aistudio-chat-exporter.vercel.app/" />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <FormatShowcase />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
