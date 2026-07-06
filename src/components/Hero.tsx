"use client";

import { Button } from "@/components/ui/button";
import { Lock, ArrowDown } from "lucide-react";


const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-primary/5 blur-[150px]" />
      <div className="pointer-events-none absolute top-1/3 left-1/3 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-purple-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-cyan-500/3 blur-[100px]" />

      <div className="container relative z-10 py-20 text-center">
        <div className="fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
          <span className="text-primary">✦</span> Free Chrome Extension
        </div>

        <h1 className="fade-in-up mx-auto max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Export AI Conversations <span className="text-gradient-hero">Beautifully.</span>
        </h1>

        <p className="fade-in-up mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Save any ChatGPT, Gemini, or AI Studio chat as formatted PDF, Markdown, or JSON. Download locally — <strong className="text-foreground">your conversations stay private, no cloud, no accounts.</strong>
        </p>

        <div className="fade-in-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="hero" size="lg" className="px-6" asChild>
            <a href="https://chromewebstore.google.com/detail/chat-exporter-for-google/pmccmopibnkjfmaddlloincblhcnmndd">
              <img src="/assets/web-store-logo.png" alt="Chrome Web Store" className="h-7 w-7 mr-2.5" />
              <span className="text-base">Add to Chrome — It's Free</span>
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" className="px-6" asChild>
            <a href="#how-it-works">
              <span className="text-base">See How It Works</span> <ArrowDown className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>

        <p className="fade-in-up mt-8 flex items-center justify-center gap-3 text-sm text-muted-foreground">
          <Lock className="h-3.5 w-3.5" />
          Local only · Conversations never leave your browser · No account required
        </p>

        <div className="fade-in-up mx-auto mt-16 max-w-md">
          <div className="screenshot-frame">
            <img
              src="/assets/extension-screenshot-placeholder.png"
              alt="AI Chat Exporter extension popup showing PDF, Markdown, and JSON export options with dark mode toggle and progress bar"
              className="w-full h-auto"
              loading="lazy"
              width={800}
              height={1024}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
