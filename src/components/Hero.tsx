import {
  ArrowDown,
  Check,
  Chrome,
  Copy,
  FileJson,
  FileText,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

const CHROME_STORE_URL =
  "https://chromewebstore.google.com/detail/ai-chat-exporter-save-ai/pmccmopibnkjfmaddlloincblhcnmndd";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pt-36">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px] overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-280px] h-[620px] w-[980px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(234,248,242,0.9),rgba(231,244,249,0.45)_45%,transparent_72%)]" />
        <div className="absolute right-[-160px] top-[180px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(215,240,229,0.55),transparent_68%)] blur-2xl" />
      </div>

      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="chip">
              <Star className="h-3.5 w-3.5 fill-[#f59e0b] text-[#f59e0b]" />
              4.6 · Chrome Web Store rating
            </span>
            <span className="chip">
              <Sparkles className="h-3.5 w-3.5 text-forest" />
              Used by 1,800+ people weekly
            </span>
          </div>

          <h1 className="mt-7 text-[46px] leading-[0.98] tracking-[-0.04em] text-ink text-balance sm:text-[66px] lg:text-[78px]">
            Every AI Conversation,{" "}
            <span className="block text-forest">
              worth keeping.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-[17px] leading-8 text-body sm:text-lg">
            Save any ChatGPT, Gemini, or AI Studio chat as formatted PDF,
            Markdown, or JSON. Download locally.{" "}
            <strong className="font-semibold text-ink">
              Your conversations stay private, no accounts.
            </strong>
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={CHROME_STORE_URL}
              className="btn-primary h-12 w-full px-7 text-[15px] sm:w-auto"
              aria-label="Add AI Chat Exporter to Chrome"
            >
              <Chrome className="h-[18px] w-[18px]" />
              Add to Chrome
            </a>
            <a
              href="#how-it-works"
              className="btn-secondary h-12 w-full px-7 text-[15px] sm:w-auto"
            >
              See How It Works
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-6 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-0.5 text-xs text-muted sm:gap-x-2 sm:text-sm">
            <ShieldCheck className="hidden h-4 w-4 shrink-0 text-forest sm:block" />
            <span className="whitespace-nowrap">Local only</span>
            <span className="whitespace-nowrap">
              <span aria-hidden="true" className="mr-1.5 text-muted/60">
                ·
              </span>
              Conversations never leave your browser
            </span>
            <span className="whitespace-nowrap">
              <span aria-hidden="true" className="mr-1.5 text-muted/60">
                ·
              </span>
              No account required
            </span>
          </p>
        </div>

        {/* Product stage */}
        <div className="relative mx-auto mt-12 max-w-[1120px] sm:mt-16">
          <div className="stage relative overflow-hidden px-3 py-5 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(#0c3b2e_0.6px,transparent_0.6px)] [background-size:18px_18px] [mask-image:linear-gradient(to_bottom,white,transparent_75%)]"
            />

            {/* Floating format chips */}
            <div
              aria-hidden="true"
              className="absolute left-2 top-[16%] hidden animate-float xl:block"
            >
              <div className="flex items-center gap-2.5 rounded-2xl border border-white/80 bg-white/90 px-3.5 py-2.5 shadow-[0_12px_30px_rgba(12,59,46,0.12)] backdrop-blur">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fef2f2] text-[#dc2626]">
                  <FileText className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs font-semibold text-ink">
                    PDF ready
                  </span>
                  <span className="block text-[10px] text-muted">
                    12 pages · 2.4 MB
                  </span>
                </span>
                <Check className="h-3.5 w-3.5 text-forest" />
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute right-2 top-[27%] hidden animate-float-slow xl:block"
            >
              <div className="flex items-center gap-2.5 rounded-2xl border border-white/80 bg-white/90 px-3.5 py-2.5 shadow-[0_12px_30px_rgba(12,59,46,0.12)] backdrop-blur">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-mint text-forest">
                  <Copy className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs font-semibold text-ink">
                    Markdown copied
                  </span>
                  <span className="block text-[10px] text-muted">
                    Ready to paste
                  </span>
                </span>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute bottom-[12%] left-2 hidden animate-float-slow xl:block"
            >
              <div className="flex items-center gap-2.5 rounded-2xl border border-white/80 bg-white/90 px-3.5 py-2.5 shadow-[0_12px_30px_rgba(12,59,46,0.12)] backdrop-blur">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-aqua text-[#0369a1]">
                  <FileJson className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs font-semibold text-ink">
                    JSON exported
                  </span>
                  <span className="block text-[10px] text-muted">
                    Structured & local
                  </span>
                </span>
              </div>
            </div>

            {/* Browser window */}
            <div className="relative mx-auto max-w-[700px] overflow-hidden rounded-[20px] border border-white/80 bg-white/80 shadow-[0_30px_90px_rgba(12,59,46,0.18)] backdrop-blur-sm">
              <div className="flex items-center gap-3 border-b border-hairline bg-white/80 px-4 py-3 sm:px-5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
                </div>
                <div className="flex min-w-0 flex-1 items-center justify-center">
                  <span className="inline-flex max-w-full items-center gap-1.5 truncate rounded-full border border-hairline bg-surface-soft px-3 py-1 text-[10px] font-medium text-muted sm:text-[11px]">
                    <ShieldCheck className="h-3 w-3 shrink-0 text-forest" />
                    chatgpt.com
                  </span>
                </div>
                <span className="hidden text-[10px] font-medium text-muted sm:block">
                  AI Chat Exporter
                </span>
              </div>

              <div className="grid items-center gap-2 bg-gradient-to-br from-white to-[#f8fbfa] p-3 sm:p-5 md:grid-cols-[1.05fr_0.95fr] md:gap-6 md:p-6">
                {/* Chat context */}
                <div className="hidden rounded-2xl border border-hairline bg-white p-5 md:block">
                  <div className="flex items-center justify-between border-b border-hairline-soft pb-3">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-forest text-[10px] font-bold text-white">
                        AI
                      </span>
                      <div>
                        <p className="text-xs font-semibold leading-tight text-ink">
                          SEO Micro-Tool Strategy Analysis
                        </p>
                        <p className="text-[10px] text-muted">ChatGPT · GPT-5</p>
                      </div>
                    </div>
                    <span className="shrink-0 whitespace-nowrap rounded-full bg-mint px-2 py-0.5 text-[9px] font-semibold text-forest">
                      Active chat
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-surface-soft px-3.5 py-2.5 text-[11px] leading-5 text-body">
                      Help me plan a micro-tool strategy for SEO.
                    </div>
                    <div className="max-w-[90%] rounded-2xl rounded-bl-md border border-hairline bg-white px-3.5 py-2.5 text-[11px] leading-5 text-body shadow-sm">
                      Start with three problem-first tools: invoice generators,
                      schema checkers, and niche calculators. I&apos;ll map
                      search intent, keywords, and a simple build order.
                    </div>
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-white px-2.5 py-1 text-[9px] font-medium text-muted">
                      <Sparkles className="h-2.5 w-2.5 text-forest" />
                      Ready to export
                    </div>
                  </div>
                </div>

                {/* Extension popup */}
                <div className="relative mx-auto w-full max-w-[360px]">
                  <img
                    src="/assets/extension-screenshot-placeholder.png"
                    alt="AI Chat Exporter extension popup showing PDF, Markdown, and JSON export options with dark mode toggle and progress bar"
                    className="h-auto w-full rounded-2xl border border-hairline shadow-[0_20px_50px_rgba(16,24,40,0.18)]"
                    loading="eager"
                    fetchPriority="high"
                    width={800}
                    height={1024}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Works-with strip */}
          <div
            id="works-with"
            className="mt-9 flex flex-col items-center gap-6 sm:mt-10 sm:gap-7"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted/80">
              Works with
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-4 sm:gap-x-12 lg:gap-x-16">
              <img
                src="/logos/chatgpt.webp"
                alt="ChatGPT"
                width={400}
                height={120}
                className="h-5 w-auto opacity-70 grayscale sm:h-7"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/logos/gemini.webp"
                alt="Gemini"
                width={489}
                height={120}
                className="h-5 w-auto opacity-70 grayscale sm:h-7"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/logos/google-ai-studio.webp"
                alt="Google AI Studio"
                width={513}
                height={71}
                className="h-5 w-auto opacity-70 grayscale sm:h-7"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
