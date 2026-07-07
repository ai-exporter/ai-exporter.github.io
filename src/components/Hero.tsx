"use client";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20 pb-24">
      {/* Hand-drawn squiggle arrow pointing to CTA */}
      <div className="pointer-events-none absolute top-[35%] right-[18%] z-20 hidden lg:block">
        <svg width="160" height="100" viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 10 C30 2 40 30 60 20 S80 50 100 40 S120 70 140 55 S150 80 158 70" stroke="#0F0F0F" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M150 78 L158 70 L148 64" stroke="#0F0F0F" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <text x="18" y="8" className="text-[10px]" fill="#0F0F0F" fontFamily="Inter" fontWeight="500">Try it free</text>
        </svg>
      </div>

      <div className="container relative pt-16">
        {/* Badge - offset to the left */}
        <div className="inline-flex items-center gap-2 rounded-lg border-[1.5px] border-[#0F0F0F] bg-white px-4 py-1.5 text-sm shadow-[3px_3px_0_0_#0F0F0F] -rotate-1 ml-4 md:ml-8">
          <span className="text-lg leading-none">✦</span> Free Chrome Extension
        </div>

        {/* Main heading with asymmetric layout */}
        <div className="mt-8 max-w-3xl">
          <h1 className="text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl font-serif">
            Export AI Conversations <br className="hidden sm:block" /><span className="italic">Beautifully.</span>
          </h1>
        </div>

        {/* Sub-headline */}
        <div className="mt-6 max-w-xl ml-auto mr-12 md:mr-24">
          <p className="text-lg text-[#0F0F0F]/70 md:text-xl">
            Save any ChatGPT, Gemini, or AI Studio chat as formatted PDF, Markdown, or JSON. Download locally — <strong className="text-[#0F0F0F]">your conversations stay private, no cloud, no accounts.</strong>
          </p>
        </div>

        {/* CTAs - asymmetric placement */}
        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row ml-4 md:ml-8">
          <a
            href="https://chromewebstore.google.com/detail/chat-exporter-for-google/pmccmopibnkjfmaddlloincblhcnmndd"
            className="inline-flex items-center gap-2.5 rounded-lg border-[1.5px] border-[#0F0F0F] bg-[#D1E9D2] px-6 py-3 text-base font-semibold shadow-[4px_4px_0_0_#0F0F0F] transition-all hover:shadow-[5px_5px_0_0_#0F0F0F] hover:translate-x-[-1px] hover:translate-y-[-1px]"
          >
            <img src="/assets/web-store-logo.png" alt="Chrome Web Store" className="h-7 w-7 mr-1" />
            Add to Chrome — It's Free
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 rounded-lg border-[1.5px] border-[#0F0F0F] bg-white px-6 py-3 text-base font-semibold shadow-[4px_4px_0_0_#0F0F0F] transition-all hover:shadow-[5px_5px_0_0_#0F0F0F] hover:translate-x-[-1px] hover:translate-y-[-1px]"
          >
            See How It Works
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
              <path d="M8 3v10M4 9l4 4 4-4" stroke="#0F0F0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Trust line with squiggle underline */}
        <div className="relative mt-8 ml-4 md:ml-8">
          <p className="inline-flex items-center gap-3 text-sm text-[#0F0F0F]/60">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
              <rect x="1" y="3" width="12" height="10" rx="1" stroke="#0F0F0F" strokeWidth="1.2"/>
              <path d="M4 3V2a3 3 0 016 0v1" stroke="#0F0F0F" strokeWidth="1.2"/>
              <path d="M7 8v2" stroke="#0F0F0F" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            Local only · Conversations never leave your browser · No account required
          </p>
          {/* Hand-drawn circle around the trust line */}
          <svg width="320" height="40" viewBox="0 0 320 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute -top-2 -left-4">
            <path d="M8 20 C20 4 310 2 312 20 C314 36 20 37 8 20" stroke="#0F0F0F" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.3"/>
          </svg>
        </div>

        {/* Screenshot with offset shadow, slightly rotated */}
        <div className="relative mt-16 max-w-lg mx-auto md:mr-8 md:ml-auto">
          <div className="rounded-xl border-[1.5px] border-[#0F0F0F] bg-white shadow-[6px_6px_0_0_#0F0F0F] rotate-1 overflow-hidden">
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
