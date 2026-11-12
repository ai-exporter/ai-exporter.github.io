"use client";

import { useState } from "react";
import {
  Check,
  Download,
  ExternalLink,
  FileJson,
  FileText,
  Lock,
  MousePointerClick,
  Puzzle,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    num: "01",
    icon: ExternalLink,
    title: "Open Chat",
    description:
      "Navigate to any conversation in ChatGPT, Gemini, or Google AI Studio.",
  },
  {
    num: "02",
    icon: MousePointerClick,
    title: "Click the Extension",
    description:
      "Click the AI Chat Exporter icon in your Chrome toolbar. Pick your format and options.",
  },
  {
    num: "03",
    icon: Download,
    title: "Export",
    description:
      "Hit Export Now or Copy. Your file downloads instantly, or it's in your clipboard. Runs in under 3 seconds for most chats.",
  },
];

const StepVisual = ({ step }: { step: number }) => {
  if (step === 0) {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-hairline bg-white shadow-soft">
        <div className="flex items-center gap-2 border-b border-hairline bg-surface-soft/70 px-4 py-2.5">
          <div className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-[#fca5a5]" />
            <span className="h-2 w-2 rounded-full bg-[#fcd34d]" />
            <span className="h-2 w-2 rounded-full bg-[#6ee7b7]" />
          </div>
          <span className="ml-2 inline-flex items-center gap-1.5 rounded-full border border-hairline bg-white px-2.5 py-0.5 text-[9px] font-medium text-muted">
            <Lock className="h-2.5 w-2.5 text-forest" />
            chatgpt.com
          </span>
        </div>
        <div className="space-y-2.5 p-4 sm:p-5">
          <div className="ml-auto max-w-[82%] rounded-2xl rounded-br-md bg-surface-soft px-3 py-2 text-[11px] leading-5 text-body">
            Summarize this research into a shareable doc.
          </div>
          <div className="max-w-[88%] rounded-2xl rounded-bl-md border border-hairline bg-white px-3 py-2 text-[11px] leading-5 text-body">
            Here&apos;s the short version, with the key findings and sources
            grouped by theme.
          </div>
          <div className="flex items-center gap-1.5 pt-1 text-[10px] font-medium text-muted">
            <Sparkles className="h-3 w-3 text-forest" />
            Conversation ready
          </div>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-hairline bg-white p-4 shadow-soft sm:p-5">
        <div className="flex items-center gap-2 rounded-xl border border-hairline bg-surface-soft px-3 py-2">
          <div className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#cbd5e1]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#cbd5e1]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#cbd5e1]" />
          </div>
          <div className="ml-1 h-4 flex-1 rounded-full bg-white" />
          <Puzzle className="h-3.5 w-3.5 text-muted" />
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-lg bg-forest text-white shadow-[0_4px_12px_rgba(12,59,46,0.25)]">
            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-emerald ring-2 ring-white" />
            <FileText className="h-3.5 w-3.5" />
          </span>
        </div>

        <div className="mt-4 rounded-xl border border-hairline bg-white p-3 shadow-[0_10px_30px_rgba(16,24,40,0.08)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-forest text-white">
                <FileText className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="text-[10px] font-semibold text-ink">
                  AI Chat Exporter
                </p>
                <p className="text-[8px] text-muted">Choose a format</p>
              </div>
            </div>
            <span className="rounded-full bg-mint px-2 py-0.5 text-[8px] font-semibold text-forest">
              Local
            </span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-1.5">
            {[
              { label: "PDF", icon: FileText },
              { label: "MD", icon: FileText },
              { label: "JSON", icon: FileJson },
            ].map((format, index) => {
              const Icon = format.icon;
              return (
                <span
                  key={format.label}
                  className={`flex items-center justify-center gap-1 rounded-lg border px-2 py-2 text-[9px] font-semibold ${
                    index === 0
                      ? "border-forest bg-mint text-forest"
                      : "border-hairline bg-white text-muted"
                  }`}
                >
                  <Icon className="h-3 w-3" />
                  {format.label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-hairline bg-white p-4 shadow-soft sm:p-5">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-semibold text-ink">Export complete</p>
        <span className="inline-flex items-center gap-1 rounded-full bg-mint px-2 py-0.5 text-[8px] font-semibold text-forest">
          <Check className="h-2.5 w-2.5" />
          Saved locally
        </span>
      </div>

      <div className="mt-3 space-y-2">
        <div className="flex items-center gap-2.5 rounded-xl border border-hairline bg-surface-soft/60 p-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fef2f2] text-[#dc2626]">
            <FileText className="h-4 w-4" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[10px] font-semibold text-ink">
              japan-trip-planning.pdf
            </p>
            <p className="text-[8px] text-muted">PDF · 2.4 MB · 12 pages</p>
          </div>
          <Check className="h-4 w-4 text-forest" />
        </div>
        <div className="flex items-center gap-2.5 rounded-xl border border-hairline bg-white p-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-mint text-forest">
            <FileText className="h-4 w-4" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[10px] font-semibold text-ink">
              japan-trip-planning.md
            </p>
            <p className="text-[8px] text-muted">Markdown · 18 KB</p>
          </div>
          <Check className="h-4 w-4 text-forest" />
        </div>
      </div>

      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-surface">
        <div className="h-full w-full rounded-full bg-forest" />
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const [active, setActive] = useState(0);
  const current = steps[active];

  return (
    <section id="how-it-works" className="py-8 sm:py-10 lg:py-12">
      <div className="container-page">
        <div className="stage-soft px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">How it works</p>
            <h2 className="mt-3 text-[38px] leading-[1] tracking-[-0.04em] text-ink sm:text-[48px] lg:text-[56px]">
              Open. Click. Export.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-[15px] leading-7 text-body sm:text-base">
              Three steps from a conversation to a file you own. No setup, no
              account, no waiting on a server.
            </p>
          </div>

          <div className="mt-9 flex justify-center sm:mt-10">
            <div className="no-scrollbar flex max-w-full gap-1 overflow-x-auto rounded-full border border-hairline bg-white/90 p-1.5 shadow-soft">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === active;
                return (
                  <button
                    key={step.title}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-pressed={isActive}
                    className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-[12.5px] font-semibold transition-all sm:px-5 sm:text-sm ${
                      isActive
                        ? "bg-forest text-white shadow-[0_4px_14px_rgba(12,59,46,0.2)]"
                        : "text-muted hover:bg-surface-soft hover:text-ink"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">{step.title}</span>
                    <span className="sm:hidden">{step.num}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-4xl sm:mt-10">
            <div className="grid items-center gap-8 rounded-2xl border border-white/80 bg-white/70 p-6 shadow-[0_20px_60px_rgba(12,59,46,0.08)] backdrop-blur sm:p-8 md:grid-cols-[1fr_0.95fr] md:gap-12 md:p-10">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-sm font-semibold text-white">
                    {current.num}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                    Step {active + 1} of 3
                  </span>
                </div>
                <h3 className="mt-5 text-[28px] leading-tight tracking-[-0.03em] text-ink sm:text-[34px]">
                  {current.title}
                </h3>
                <p className="mt-3 text-pretty text-[15px] leading-7 text-body sm:text-base">
                  {current.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-white px-3 py-1.5 text-[10px] font-semibold text-muted">
                    <Lock className="h-3 w-3 text-forest" />
                    Runs locally
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-white px-3 py-1.5 text-[10px] font-semibold text-muted">
                    <Check className="h-3 w-3 text-forest" />
                    No account
                  </span>
                </div>
              </div>

              <StepVisual step={active} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
