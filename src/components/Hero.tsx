"use client";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20 pb-24">
      <div className="container relative pt-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Left column: text content */}
          <div className="flex-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-lg border-[1.5px] border-[#0F0F0F] bg-white px-4 py-1.5 text-sm shadow-[3px_3px_0_0_#0F0F0F] -rotate-1">
              <span className="text-lg leading-none">✦</span> Free Chrome Extension
            </div>

            {/* Main heading */}
            <div className="mt-8 max-w-3xl">
              <h1 className="text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl font-serif">
                Export AI Conversations <br className="hidden sm:block" /><span className="italic">Beautifully.</span>
              </h1>
            </div>

            {/* Sub-headline (now between heading and CTA) */}
            <div className="mt-6 max-w-xl">
              <p className="text-lg text-[#0F0F0F]/70 md:text-xl">
                Save any ChatGPT, Gemini, or AI Studio chat as formatted PDF, Markdown, or JSON. Download locally — <strong className="text-[#0F0F0F]">your conversations stay private, no cloud, no accounts.</strong>
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
              <a
                href="https://chromewebstore.google.com/detail/chat-exporter-for-google/pmccmopibnkjfmaddlloincblhcnmndd"
                className="inline-flex items-center gap-2.5 rounded-lg border-[1.5px] border-[#0F0F0F] bg-[#D1E9D2] px-6 py-3 text-base font-semibold shadow-[4px_4px_0_0_#0F0F0F] transition-all hover:shadow-[5px_5px_0_0_#0F0F0F] hover:translate-x-[-1px] hover:translate-y-[-1px]"
              >
                <img src="/assets/web-store-logo.png" alt="Chrome Web Store" className="h-7 w-7 mr-1" />
                Add to Chrome
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

            {/* Trust line */}
            <div className="relative mt-8">
              <p className="inline-flex items-center gap-3 text-sm text-[#0F0F0F]/60">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                  <rect x="1" y="3" width="12" height="10" rx="1" stroke="#0F0F0F" strokeWidth="1.2"/>
                  <path d="M4 3V2a3 3 0 016 0v1" stroke="#0F0F0F" strokeWidth="1.2"/>
                  <path d="M7 8v2" stroke="#0F0F0F" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                Local only · Conversations never leave your browser · No account required
              </p>
            </div>
          </div>

          {/* Right column: screenshot */}
          <div className="flex-1 mt-12 lg:mt-0 flex justify-center">
            <div className="rounded-xl border-[1.5px] border-[#0F0F0F] bg-white shadow-[6px_6px_0_0_#0F0F0F] overflow-hidden max-w-sm">
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
      </div>
    </section>
  );
};

export default Hero;
