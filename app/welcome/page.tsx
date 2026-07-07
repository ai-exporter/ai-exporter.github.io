import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Welcome to AI Chat Exporter",
  description:
    "You're all set! Export ChatGPT, Gemini, and Google AI Studio conversations in 3 simple steps — all locally, no cloud.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Welcome to AI Chat Exporter",
    description:
      "You're all set! Export ChatGPT, Gemini, and Google AI Studio conversations in 3 simple steps — all locally, no cloud.",
    type: "website",
    url: "/welcome",
    siteName: "AI Chat Exporter",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "AI Chat Exporter — Welcome",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome to AI Chat Exporter",
    description:
      "You're all set! Export ChatGPT, Gemini, and Google AI Studio conversations in 3 simple steps.",
    images: ["/og-image.svg"],
  },
};

export default function WelcomePage() {
  return (
    <>
      <div className="min-h-screen bg-[#FAF9F6] text-[#0F0F0F] flex flex-col">
        <Navbar showInstalled />
        <main id="main-content" className="flex-1">

          {/* ── Hero ── */}
          <section className="pt-32 pb-8 md:pt-40 md:pb-12 relative overflow-hidden">
            <div className="container">
              <div className="max-w-2xl mx-auto text-center">
                <div className="mb-6 inline-flex items-center justify-center">
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28 6 L33 22 L50 22 L36 33 L40 50 L28 40 L16 50 L20 33 L6 22 L23 22 L28 6Z" stroke="#0F0F0F" strokeWidth="1.5" strokeLinejoin="round" fill="#E5D9F2" />
                  </svg>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-serif leading-[1.1] squiggle-underline inline-block">
                  You&apos;re all set!
                </h1>
                <p className="mt-8 text-lg md:text-xl text-[#0F0F0F]/70 max-w-md mx-auto leading-relaxed">
                  AI Chat Exporter is installed. Here&apos;s how to use it in{" "}
                  <strong className="text-[#0F0F0F]">3 simple steps</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* ── Steps ── */}
          <section className="pb-24 md:pb-32">
            <div className="container max-w-3xl">

              {/* Step 1 */}
              <div className="relative max-w-lg ml-0 md:ml-8 lg:ml-0">
                <div className="rounded-xl border-[1.5px] border-[#0F0F0F] bg-white p-8 shadow-[4px_4px_0_0_#0F0F0F] -rotate-[1.5deg] hover:shadow-[6px_6px_0_0_#0F0F0F] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border-[1.5px] border-[#0F0F0F] bg-[#E5D9F2] text-lg font-bold font-serif shadow-[2px_2px_0_0_#0F0F0F] shrink-0">
                      1
                    </span>
                    <h2 className="text-xl font-semibold font-serif">Open your AI chat</h2>
                  </div>
                  <p className="text-[#0F0F0F]/70 leading-relaxed">
                    Go to <strong className="text-[#0F0F0F]">ChatGPT</strong>,{" "}
                    <strong className="text-[#0F0F0F]">Gemini</strong>, or{" "}
                    <strong className="text-[#0F0F0F]">Google AI Studio</strong> in your browser.
                    Open any conversation you want to save.
                  </p>
                </div>
              </div>

              {/* Arrow 1 → 2 (desktop) */}
              <div className="hidden md:flex justify-center py-6 -ml-16">
                <svg width="140" height="50" viewBox="0 0 140 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 8 C50 5 90 42 128 38" stroke="#0F0F0F" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <path d="M116 30 L130 40 L118 48" stroke="#0F0F0F" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex justify-center py-4 md:hidden">
                <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
                  <path d="M12 2v24M4 18l8 8 8-8" stroke="#0F0F0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Step 2 */}
              <div className="relative max-w-lg ml-auto mr-0 md:mr-8 lg:mr-0">
                <div className="rounded-xl border-[1.5px] border-[#0F0F0F] bg-white p-8 shadow-[4px_4px_0_0_#0F0F0F] rotate-[1deg] hover:shadow-[6px_6px_0_0_#0F0F0F] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border-[1.5px] border-[#0F0F0F] bg-[#E5D9F2] text-lg font-bold font-serif shadow-[2px_2px_0_0_#0F0F0F] shrink-0">
                      2
                    </span>
                    <h2 className="text-xl font-semibold font-serif">Pin the extension</h2>
                  </div>
                  <p className="text-[#0F0F0F]/70 leading-relaxed">
                    Click the puzzle piece (<span className="text-lg">🧩</span>) in your browser toolbar,
                    find <strong className="text-[#0F0F0F]">AI Chat Exporter</strong>, and pin it.
                    One click and you&apos;re ready to export.
                  </p>
                </div>
              </div>

              {/* Arrow 2 → 3 (desktop) */}
              <div className="hidden md:flex justify-center py-6 -mr-16">
                <svg width="140" height="50" viewBox="0 0 140 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M125 8 C90 5 50 42 12 38" stroke="#0F0F0F" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <path d="M24 30 L10 40 L22 48" stroke="#0F0F0F" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex justify-center py-4 md:hidden">
                <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
                  <path d="M12 2v24M4 18l8 8 8-8" stroke="#0F0F0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Step 3 */}
              <div className="relative max-w-lg ml-0 md:ml-16 lg:ml-8">
                <div className="rounded-xl border-[1.5px] border-[#0F0F0F] bg-white p-8 shadow-[4px_4px_0_0_#0F0F0F] -rotate-[0.5deg] hover:shadow-[6px_6px_0_0_#0F0F0F] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border-[1.5px] border-[#0F0F0F] bg-[#E5D9F2] text-lg font-bold font-serif shadow-[2px_2px_0_0_#0F0F0F] shrink-0">
                      3
                    </span>
                    <h2 className="text-xl font-semibold font-serif">Choose &amp; export</h2>
                  </div>
                  <p className="text-[#0F0F0F]/70 leading-relaxed">
                    Click the AI Chat Exporter icon. Pick{" "}
                    <strong className="text-[#0F0F0F]">PDF</strong>,{" "}
                    <strong className="text-[#0F0F0F]">Markdown</strong>, or{" "}
                    <strong className="text-[#0F0F0F]">JSON</strong> — then download.
                    Or copy as Markdown and paste straight into your notes.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* ── Bottom section ── */}
          <section className="pb-24 md:pb-32">
            <div className="container">
              <div className="max-w-lg mx-auto text-center">
                {/* Privacy reassurance */}
                <div className="inline-flex items-start gap-2 rounded-lg border-[1.5px] border-[#0F0F0F] bg-white px-4 py-2 text-sm shadow-[2px_2px_0_0_#0F0F0F] -rotate-[0.5deg] mb-8">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5">
                    <rect x="1" y="3" width="12" height="10" rx="1" stroke="#0F0F0F" strokeWidth="1.2"/>
                    <path d="M4 3V2a3 3 0 016 0v1" stroke="#0F0F0F" strokeWidth="1.2"/>
                    <path d="M7 8v2" stroke="#0F0F0F" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  <div>
                    <p>Everything runs locally. Your conversations stay yours.</p>
                    <p className="mt-0.5">No account needed. Private by design.</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://chatgpt.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-lg border-[1.5px] border-[#0F0F0F] bg-[#D1E9D2] px-8 py-4 text-lg font-semibold shadow-[4px_4px_0_0_#0F0F0F] transition-all hover:shadow-[5px_5px_0_0_#0F0F0F] hover:translate-x-[-1px] hover:translate-y-[-1px]"
                  >
                    Open ChatGPT
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M5 13l8-8M7 5h6v6" stroke="#0F0F0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a
                    href="https://gemini.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-lg border-[1.5px] border-[#0F0F0F] bg-[#E5D9F2] px-8 py-4 text-lg font-semibold shadow-[4px_4px_0_0_#0F0F0F] transition-all hover:shadow-[5px_5px_0_0_#0F0F0F] hover:translate-x-[-1px] hover:translate-y-[-1px]"
                  >
                    Open Gemini
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M5 13l8-8M7 5h6v6" stroke="#0F0F0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
                <p className="mt-4 text-sm text-[#0F0F0F]/50">
                  Works with Google AI Studio too.
                </p>
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
