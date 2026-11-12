import type { Metadata } from "next";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Download,
  ExternalLink,
  MousePointerClick,
  Pin,
  Puzzle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Welcome to AI Chat Exporter",
  description:
    "You're all set! Export ChatGPT, Gemini, and Google AI Studio conversations in 3 simple steps, all locally, no cloud.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Welcome to AI Chat Exporter",
    description:
      "You're all set! Export ChatGPT, Gemini, and Google AI Studio conversations in 3 simple steps, all locally, no cloud.",
    type: "website",
    url: "/welcome",
    siteName: "AI Chat Exporter",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "AI Chat Exporter: Welcome",
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

type PreviewType = "chat" | "pin" | "export";

type Step = {
  num: string;
  tag: string;
  icon: LucideIcon;
  title: string;
  description: ReactNode;
  preview: PreviewType;
};

const steps: Step[] = [
  {
    num: "01",
    tag: "Open",
    icon: ExternalLink,
    title: "Open your AI chat",
    description: (
      <>
        Go to <strong className="font-semibold text-ink">ChatGPT</strong>,{" "}
        <strong className="font-semibold text-ink">Gemini</strong>, or{" "}
        <strong className="font-semibold text-ink">Google AI Studio</strong> in
        your browser. Open any conversation you want to save.
      </>
    ),
    preview: "chat",
  },
  {
    num: "02",
    tag: "Pin",
    icon: MousePointerClick,
    title: "Pin the extension",
    description: (
      <>
        Click the puzzle piece (
        <Puzzle
          className="inline h-3.5 w-3.5 align-[-2px] text-forest"
          aria-hidden="true"
        />
        ) in your browser toolbar, find{" "}
        <strong className="font-semibold text-ink">AI Chat Exporter</strong>, and
        pin it. One click and you&apos;re ready to export.
      </>
    ),
    preview: "pin",
  },
  {
    num: "03",
    tag: "Export",
    icon: Download,
    title: "Choose & export",
    description: (
      <>
        Click the AI Chat Exporter icon. Pick{" "}
        <strong className="font-semibold text-ink">PDF</strong>,{" "}
        <strong className="font-semibold text-ink">Markdown</strong>, or{" "}
        <strong className="font-semibold text-ink">JSON</strong>, then
        download. Or copy as Markdown and paste straight into your notes.
      </>
    ),
    preview: "export",
  },
];

const ChatPreview = () => (
  <div className="rounded-xl border border-hairline bg-white shadow-soft">
    <div className="flex items-center gap-1.5 border-b border-hairline-soft px-3 py-2">
      <span className="h-1.5 w-1.5 rounded-full bg-[#fda4af]" />
      <span className="h-1.5 w-1.5 rounded-full bg-[#fcd34d]" />
      <span className="h-1.5 w-1.5 rounded-full bg-[#6ee7b7]" />
      <span className="ml-1 flex-1 truncate rounded-full bg-surface-soft px-2 py-0.5 font-mono text-[7px] text-muted">
        chatgpt.com
      </span>
    </div>
    <div className="space-y-1.5 p-3">
      <div className="ml-auto h-5 w-[58%] rounded-md bg-surface-soft" />
      <div className="h-5 w-[88%] rounded-md border border-hairline bg-white" />
      <div className="h-5 w-[72%] rounded-md border border-hairline bg-white" />
      <div className="ml-auto inline-flex items-center gap-1 rounded-full bg-mint px-2 py-0.5 text-[6px] font-semibold text-forest">
        <Sparkles className="h-2 w-2" />
        ready
      </div>
    </div>
  </div>
);

const PinPreview = () => (
  <div className="rounded-xl border border-hairline bg-white p-3">
    <div className="flex items-center gap-2">
      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-forest text-white">
        <Puzzle className="h-3 w-3" />
      </span>
      <span className="font-mono text-[7px] uppercase tracking-[0.12em] text-muted">
        Extensions
      </span>
      <span className="ml-auto h-1.5 w-8 rounded-full bg-hairline-soft" />
    </div>
    <div className="mt-2 flex items-center justify-between rounded-lg border border-hairline bg-surface-soft/70 px-2.5 py-2">
      <span className="text-[8px] font-semibold text-ink">
        AI Chat Exporter
      </span>
      <span className="inline-flex items-center gap-1 rounded-full bg-forest px-2 py-1 text-[6px] font-semibold text-white">
        <Pin className="h-2 w-2" />
        Pin
      </span>
    </div>
  </div>
);

const ExportPreview = () => (
  <div className="rounded-xl border border-hairline bg-white p-3">
    <div className="grid grid-cols-3 gap-1.5">
      <span className="rounded-md border border-[#fecaca] bg-[#fef2f2] py-1.5 text-center font-mono text-[7px] font-semibold text-[#b91c1c]">
        PDF
      </span>
      <span className="rounded-md border border-[#bbf7d0] bg-mint py-1.5 text-center font-mono text-[7px] font-semibold text-forest">
        MD
      </span>
      <span className="rounded-md border border-[#bae6fd] bg-aqua py-1.5 text-center font-mono text-[7px] font-semibold text-[#0369a1]">
        JSON
      </span>
    </div>
    <div className="mt-2 flex items-center justify-between rounded-lg bg-surface-soft px-2.5 py-1.5">
      <span className="truncate font-mono text-[7px] text-muted">
        conversation.pdf
      </span>
      <Download className="h-3 w-3 shrink-0 text-forest" />
    </div>
  </div>
);

const StepPreview = ({ type }: { type: PreviewType }) => {
  const rotate =
    type === "chat"
      ? "sm:rotate-[1.25deg]"
      : type === "pin"
        ? "sm:-rotate-[1.25deg]"
        : "sm:rotate-[0.75deg]";

  return (
    <div
      aria-hidden="true"
      className={`hidden transition-transform duration-300 group-hover:rotate-0 sm:block ${rotate}`}
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/80 bg-white/65 p-2.5 shadow-[0_16px_40px_rgba(16,24,40,0.1)] backdrop-blur">
        {type === "chat" && <ChatPreview />}
        {type === "pin" && <PinPreview />}
        {type === "export" && <ExportPreview />}
      </div>
    </div>
  );
};

export default function WelcomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <Navbar showInstalled />
      <main id="main-content" className="flex-1">
        {/* Welcome + quickstart */}
        <section
          id="quickstart"
          className="relative pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pb-28 lg:pt-36"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px] overflow-hidden"
          >
            <div className="absolute left-[-200px] top-[-320px] h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle,rgba(234,248,242,0.95),transparent_68%)] blur-2xl" />
            <div className="absolute right-[-240px] top-[-220px] h-[680px] w-[680px] rounded-full bg-[radial-gradient(circle,rgba(231,244,249,0.85),transparent_68%)] blur-2xl" />
            <div className="absolute left-1/2 top-[-120px] h-px w-[720px] -translate-x-1/2 bg-gradient-to-r from-transparent via-hairline to-transparent" />
          </div>

          <div className="container-page">
            <div className="grid gap-14 lg:grid-cols-[0.84fr_1.16fr] lg:gap-16">
              <div>
                <div className="lg:sticky lg:top-28">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="chip">
                      <CheckCircle2 className="h-3.5 w-3.5 text-forest" />
                      Extension installed
                    </span>
                    <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted/70">
                      About a minute
                    </span>
                  </div>

                  <h1 className="mt-7 text-[54px] leading-[0.92] tracking-[-0.05em] text-ink sm:text-[76px] lg:text-[84px]">
                    Open. Pin.
                    <span className="block text-forest">Export.</span>
                  </h1>

                  <p className="mt-6 max-w-md text-pretty text-[17px] leading-8 text-body sm:text-lg">
                    AI Chat Exporter is installed. Here&apos;s how to use it in{" "}
                    <strong className="font-semibold text-ink">
                      3 simple steps
                    </strong>
                    .
                  </p>

                  <div className="mt-8 flex flex-col items-start gap-3">
                    <a
                      href="https://chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary h-12 w-full px-7 text-[15px] sm:w-auto sm:min-w-[188px]"
                    >
                      Open ChatGPT
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a
                      href="https://gemini.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary h-12 w-full px-7 text-[15px] sm:w-auto sm:min-w-[188px]"
                    >
                      Open Gemini
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>

                  <p className="mt-5 flex items-center gap-1.5 text-[12px] text-muted">
                    <Check className="h-3.5 w-3.5 text-forest" />
                    No account. No setup.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-forest">
                    The quickstart
                  </span>
                  <span className="h-px flex-1 bg-hairline" />
                  <span className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-muted/60">
                    3 steps
                  </span>
                </div>

                <ol className="relative mt-8">
                  <span
                    aria-hidden="true"
                    className="absolute bottom-10 left-7 top-10 w-px bg-gradient-to-b from-forest/25 via-hairline to-transparent"
                  />
                  {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <li
                        key={step.num}
                        className={`group relative grid gap-5 pl-16 sm:grid-cols-[1fr_200px] sm:items-center sm:gap-8 lg:grid-cols-[1fr_210px] ${
                          index > 0
                            ? "mt-8 border-t border-hairline-soft pt-8"
                            : ""
                        } pb-8 last:pb-0`}
                      >
                        <span className="absolute left-0 top-0 z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-hairline bg-white text-forest shadow-soft transition-colors duration-300 group-hover:bg-forest group-hover:text-white">
                          <Icon className="h-5 w-5" strokeWidth={1.8} />
                        </span>

                        <div>
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-[10px] font-medium tracking-[0.18em] text-forest">
                              {step.num}
                            </span>
                            <span className="h-px flex-1 bg-hairline-soft" />
                            <span className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-muted/60">
                              {step.tag}
                            </span>
                          </div>
                          <h2 className="mt-3 text-[24px] leading-tight tracking-[-0.02em] text-ink">
                            {step.title}
                          </h2>
                          <p className="mt-2 max-w-md text-[14px] leading-7 text-body">
                            {step.description}
                          </p>
                        </div>

                        <StepPreview type={step.preview} />
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy + CTA */}
        <section className="pb-20 sm:pb-24 lg:pb-28">
          <div className="container-page">
            <div className="stage relative overflow-hidden px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.3] [background-image:radial-gradient(#0c3b2e_0.55px,transparent_0.55px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_72%)]"
              />

              <div className="relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div>
                  <p className="eyebrow">Local-first</p>
                  <h2 className="mt-4 max-w-xl text-[34px] leading-[1.05] tracking-[-0.035em] text-ink text-balance sm:text-[44px]">
                    Everything runs locally. Your conversations stay yours.
                  </h2>
                  <p className="mt-4 text-[14px] leading-7 text-body">
                    No account needed. Private by design.
                  </p>

                  <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                    <a
                      href="https://chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary h-12 w-full px-7 text-[15px] sm:w-auto"
                    >
                      Open ChatGPT
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a
                      href="https://gemini.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary h-12 w-full px-7 text-[15px] sm:w-auto"
                    >
                      Open Gemini
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>

                  <p className="mt-5 flex items-center gap-1.5 text-[12px] text-muted">
                    <Check className="h-3.5 w-3.5 text-forest" />
                    Works with Google AI Studio too.
                  </p>
                </div>

                <div className="relative mx-auto hidden h-64 w-64 items-center justify-center lg:flex">
                  <div className="absolute inset-0 rounded-full border border-forest/10" />
                  <div className="absolute inset-5 rounded-full border border-dashed border-forest/15" />
                  <div className="absolute inset-10 rounded-full bg-white/60 shadow-soft" />
                  <ShieldCheck
                    className="relative h-16 w-16 text-forest"
                    strokeWidth={1.4}
                  />
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/80 bg-white px-3 py-1.5 font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-forest shadow-soft">
                    No servers
                  </span>
                  <span className="absolute -left-2 bottom-6 whitespace-nowrap rounded-full border border-white/80 bg-white px-3 py-1.5 font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-forest shadow-soft">
                    No tracking
                  </span>
                  <span className="absolute -right-2 bottom-6 whitespace-nowrap rounded-full border border-white/80 bg-white px-3 py-1.5 font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-forest shadow-soft">
                    0 uploads
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
