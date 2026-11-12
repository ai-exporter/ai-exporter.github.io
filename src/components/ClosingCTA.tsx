import {
  ArrowRight,
  Check,
  Chrome,
  FileJson,
  FileText,
  Hash,
  ShieldCheck,
  Star,
} from "lucide-react";

const CHROME_STORE_URL =
  "https://chromewebstore.google.com/detail/ai-chat-exporter-save-ai/pmccmopibnkjfmaddlloincblhcnmndd";

const ClosingCTA = () => {
  return (
    <section id="get-started" className="pb-20 pt-4 sm:pb-24 lg:pb-28">
      <div className="container-page">
        <div className="stage relative overflow-hidden px-5 py-16 text-center sm:px-10 sm:py-20 lg:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.3] [background-image:radial-gradient(#0c3b2e_0.55px,transparent_0.55px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_72%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[-220px] h-[460px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.9),transparent_70%)]"
          />

          {/* Floating format marks */}
          <div
            aria-hidden="true"
            className="absolute left-[6%] top-[24%] hidden animate-float xl:block"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/85 px-3.5 py-2 text-[11px] font-semibold text-forest shadow-[0_10px_26px_rgba(12,59,46,0.1)] backdrop-blur">
              <FileText className="h-3.5 w-3.5 text-[#dc2626]" />
              PDF
            </span>
          </div>
          <div
            aria-hidden="true"
            className="absolute right-[7%] top-[32%] hidden animate-float-slow xl:block"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/85 px-3.5 py-2 text-[11px] font-semibold text-forest shadow-[0_10px_26px_rgba(12,59,46,0.1)] backdrop-blur">
              <Hash className="h-3.5 w-3.5 text-forest" />
              Markdown
            </span>
          </div>
          <div
            aria-hidden="true"
            className="absolute bottom-[18%] left-[12%] hidden animate-float-slow xl:block"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/85 px-3.5 py-2 text-[11px] font-semibold text-forest shadow-[0_10px_26px_rgba(12,59,46,0.1)] backdrop-blur">
              <FileJson className="h-3.5 w-3.5 text-[#0369a1]" />
              JSON
            </span>
          </div>

          <div className="relative mx-auto max-w-2xl">
            <span className="chip">
              <Star className="h-3.5 w-3.5 fill-[#f59e0b] text-[#f59e0b]" />
              4.6 stars on the Chrome Web Store
            </span>

            <h2 className="mt-6 text-[40px] leading-[0.98] tracking-[-0.045em] text-ink text-balance sm:text-[56px] lg:text-[64px]">
              Keep every conversation worth keeping.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-[15.5px] leading-7 text-body sm:text-base">
              Export any ChatGPT, Gemini, or Google AI Studio chat to a clean
              PDF, Markdown, or JSON file, generated locally, saved straight to
              your device.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={CHROME_STORE_URL}
                className="btn-primary h-12 w-full px-7 text-[15px] sm:w-auto"
                aria-label="Add AI Chat Exporter to Chrome"
              >
                <Chrome className="h-4 w-4" />
                Add to Chrome
              </a>
              <a
                href="#reviews"
                className="btn-secondary h-12 w-full px-7 text-[15px] sm:w-auto"
              >
                Read the reviews
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11.5px] font-medium text-muted sm:text-xs">
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-forest" />
                Free forever
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-forest" />
                No account required
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-forest" />
                100% local processing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;
