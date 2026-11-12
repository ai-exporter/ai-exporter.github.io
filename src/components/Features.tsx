import type { ReactNode } from "react";
import {
  Braces,
  Check,
  Copy,
  FilePenLine,
  FileText,
  Hash,
  MoonStar,
  ScrollText,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  children: ReactNode;
};

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  className = "",
  children,
}: FeatureCardProps) => (
  <article
    className={`group flex flex-col rounded-[28px] border border-hairline bg-white p-2.5 shadow-soft transition-shadow duration-300 hover:shadow-lift ${className}`}
  >
    {children}
    <div className="px-3 pb-4 pt-5 sm:px-4 sm:pb-5">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-soft text-ink">
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </span>
        <h3 className="text-[22px] leading-tight tracking-[-0.025em] text-ink">
          {title}
        </h3>
      </div>
      <p className="mt-3 text-[13.5px] leading-6 text-body">{description}</p>
    </div>
  </article>
);

const PreviewStage = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={`relative h-[210px] overflow-hidden rounded-[22px] p-4 sm:h-[230px] sm:p-5 ${className}`}
  >
    {children}
  </div>
);

const DotGrid = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 opacity-[0.28] [background-image:radial-gradient(#0c3b2e_0.55px,transparent_0.55px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]"
  />
);

const ThreeFormatsPreview = () => (
  <PreviewStage className="bg-[linear-gradient(145deg,#eef8f3_0%,#eaf4f9_55%,#eef3ff_100%)]">
    <DotGrid />
    <div className="relative mx-auto flex h-full max-w-[460px] items-center">
      <div className="w-full rounded-2xl border border-white bg-white/95 p-4 shadow-[0_18px_44px_rgba(12,59,46,0.12)]">
        <div className="flex items-center justify-between border-b border-hairline-soft pb-2.5">
          <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted">
            One conversation
          </span>
          <span className="font-mono text-[8px] text-muted">3 formats</span>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            { icon: FileText, label: "PDF", ext: ".pdf" },
            { icon: Hash, label: "Markdown", ext: ".md" },
            { icon: Braces, label: "JSON", ext: ".json" },
          ].map(({ icon: Icon, label, ext }) => (
            <div
              key={label}
              className="rounded-xl border border-hairline-soft bg-surface-soft px-2 py-2.5 text-center"
            >
              <Icon
                className="mx-auto h-4 w-4 text-ink"
                strokeWidth={1.8}
              />
              <p className="mt-1.5 text-[10px] font-semibold text-ink">
                {label}
              </p>
              <p className="font-mono text-[8px] text-muted">{ext}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between rounded-lg border border-hairline-soft bg-white px-3 py-2">
          <span className="truncate text-[9.5px] font-medium text-body">
            Pagination helper
          </span>
          <span className="inline-flex shrink-0 items-center gap-1 text-[8.5px] font-semibold text-ink">
            <Check className="h-2.5 w-2.5" /> Exported
          </span>
        </div>
      </div>
    </div>
  </PreviewStage>
);

const CopyPreview = () => (
  <PreviewStage className="bg-[linear-gradient(145deg,#f6faf8_0%,#edf4f8_100%)]">
    <div className="relative mx-auto flex h-full max-w-[360px] items-center">
      <div className="w-full overflow-hidden rounded-xl border border-white/80 bg-white/95 shadow-[0_16px_40px_rgba(12,59,46,0.1)]">
        <div className="flex items-center justify-between border-b border-hairline-soft px-3 py-2.5">
          <span className="font-mono text-[8.5px] font-medium text-muted">
            conversation.md
          </span>
          <span className="inline-flex items-center gap-1 rounded-md border border-hairline bg-surface-soft px-2 py-1 text-[8px] font-semibold text-ink">
            <Check className="h-2.5 w-2.5" /> Copied
          </span>
        </div>
        <div className="space-y-1 p-3 font-mono text-[8.5px] leading-[1.9]">
          <p className="font-semibold text-ink">### User</p>
          <p className="text-body">How do I handle API rate limits?</p>
          <p className="text-hairline">---</p>
          <p className="font-semibold text-ink">### Gemini</p>
          <p className="text-body">
            Implement exponential backoff with jitter.
          </p>
          <p className="text-body">Retry after 2s, then 4s, then 8s.</p>
        </div>
      </div>
    </div>
  </PreviewStage>
);

const AutoTitlePreview = () => (
  <PreviewStage className="bg-[linear-gradient(145deg,#f7faf9_0%,#eef4f8_100%)]">
    <div className="relative mx-auto flex h-full max-w-[360px] flex-col justify-center">
      <div className="rounded-xl border border-white/80 bg-white/95 p-4 shadow-[0_16px_40px_rgba(12,59,46,0.1)]">
        <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-muted">
          Save as
        </p>
        <div className="mt-2 flex items-center gap-2 rounded-lg border border-hairline bg-surface-soft px-3 py-2.5">
          <FileText className="h-3.5 w-3.5 shrink-0 text-ink" />
          <span className="text-[10.5px] font-medium text-ink">
            pagination-helper.pdf
          </span>
          <span className="ml-0.5 inline-block h-3.5 w-px animate-pulse bg-ink/40" />
        </div>
        <div className="mt-3 flex items-center gap-1.5">
          <Sparkles className="h-3 w-3 shrink-0 text-ink" />
          <p className="text-[9px] text-body">
            Renamed from{" "}
            <span className="font-mono text-[8.5px] text-muted line-through">
              untitled-export-37.pdf
            </span>
          </p>
        </div>
      </div>
      <span className="mx-auto mt-3 inline-flex items-center gap-1.5 rounded-full border border-white bg-white/90 px-2.5 py-1 text-[8.5px] font-semibold text-ink shadow-soft">
        Auto-named from your first message
      </span>
    </div>
  </PreviewStage>
);

const DarkModePreview = () => (
  <PreviewStage className="bg-[linear-gradient(145deg,#eef6f9_0%,#eef3f8_100%)]">
    <DotGrid />
    <div className="relative mx-auto flex h-full max-w-[430px] items-center justify-center gap-3">
      <div className="w-1/2 rounded-xl border border-white/90 bg-white p-3 shadow-soft">
        <p className="text-[7.5px] font-semibold uppercase tracking-[0.12em] text-muted">
          Light
        </p>
        <div className="mt-2.5 space-y-1.5">
          <div className="h-1.5 w-3/4 rounded-full bg-surface" />
          <div className="h-1.5 w-full rounded-full bg-surface" />
          <div className="h-1.5 w-2/3 rounded-full bg-surface" />
        </div>
        <div className="mt-2.5 rounded-md bg-surface-soft p-2">
          <div className="h-1 w-full rounded-full bg-ink/20" />
          <div className="mt-1 h-1 w-4/5 rounded-full bg-ink/10" />
        </div>
      </div>

      <div className="w-1/2 rounded-xl border border-white/10 bg-[#0b1220] p-3 shadow-[0_16px_40px_rgba(11,18,32,0.28)]">
        <p className="text-[7.5px] font-semibold uppercase tracking-[0.12em] text-white/40">
          Dark
        </p>
        <div className="mt-2.5 space-y-1.5">
          <div className="h-1.5 w-3/4 rounded-full bg-white/20" />
          <div className="h-1.5 w-full rounded-full bg-white/15" />
          <div className="h-1.5 w-2/3 rounded-full bg-white/20" />
        </div>
        <div className="mt-2.5 rounded-md bg-white/[0.06] p-2">
          <div className="h-1 w-full rounded-full bg-white/25" />
          <div className="mt-1 h-1 w-4/5 rounded-full bg-white/15" />
        </div>
      </div>

      <span className="absolute bottom-0 right-1 inline-flex items-center gap-1.5 rounded-full border border-white bg-white/95 px-3 py-1.5 text-[9px] font-semibold text-ink shadow-soft">
        <MoonStar className="h-3 w-3" /> Matches your chat
      </span>
    </div>
  </PreviewStage>
);

const PrivacyPreview = () => (
  <PreviewStage className="bg-[linear-gradient(145deg,#f7f9fa_0%,#eef3f6_100%)]">
    <div className="relative mx-auto flex h-full max-w-[340px] flex-col items-center justify-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white bg-white shadow-soft">
        <ShieldCheck className="h-7 w-7 text-ink" strokeWidth={1.6} />
      </div>
      <p className="mt-3 text-[10px] font-semibold text-ink">
        Private by default
      </p>
      <div className="mt-3 grid w-full grid-cols-3 gap-2">
        {[
          { value: "0", label: "uploads" },
          { value: "0", label: "servers" },
          { value: "0", label: "accounts" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-hairline-soft bg-white/90 px-2 py-2 text-center"
          >
            <p className="font-mono text-[13px] font-medium text-ink">
              {stat.value}
            </p>
            <p className="text-[8px] font-medium text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </PreviewStage>
);

const CapturePreview = () => (
  <PreviewStage className="bg-[linear-gradient(145deg,#eef8f3_0%,#edf4f8_100%)]">
    <DotGrid />
    <div className="relative mx-auto flex h-full max-w-[440px] items-center">
      <div className="w-full overflow-hidden rounded-xl border border-white/80 bg-white/95 shadow-[0_16px_40px_rgba(12,59,46,0.1)]">
        <div className="flex items-center justify-between border-b border-hairline-soft px-3 py-2">
          <span className="text-[8.5px] font-semibold text-ink">
            Gemini · Long conversation
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-surface-soft px-2 py-0.5 font-mono text-[7.5px] text-muted">
            <ScrollText className="h-2.5 w-2.5" /> 142 msgs
          </span>
        </div>

        <div className="space-y-1.5 p-3">
          <div className="flex justify-end">
            <p className="max-w-[72%] rounded-lg rounded-br-sm bg-ink px-2.5 py-1.5 text-[8.5px] leading-[1.6] text-white/90">
              Summarize the attached thread.
            </p>
          </div>
          <div className="flex justify-start">
            <p className="max-w-[80%] rounded-lg rounded-bl-sm border border-hairline-soft bg-surface-soft px-2.5 py-1.5 text-[8.5px] leading-[1.6] text-body">
              Here&apos;s a concise summary of all 142 messages...
            </p>
          </div>
          <div className="flex justify-end">
            <p className="max-w-[72%] rounded-lg rounded-br-sm bg-ink px-2.5 py-1.5 text-[8.5px] leading-[1.6] text-white/90">
              Keep the action items.
            </p>
          </div>
        </div>

        <div className="border-t border-hairline-soft px-3 py-2">
          <div className="flex items-center justify-between text-[7.5px]">
            <span className="font-medium text-ink">Capture complete</span>
            <span className="font-mono text-muted">142 / 142</span>
          </div>
          <div className="mt-1 h-1 w-full rounded-full bg-surface">
            <div className="h-1 w-full rounded-full bg-ink/70" />
          </div>
        </div>
      </div>
    </div>
  </PreviewStage>
);

const Features = () => {
  return (
    <section id="features" className="relative py-20 sm:py-24 lg:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Everything in one extension</p>
            <h2 className="mt-3 text-[36px] leading-[1.04] tracking-[-0.035em] text-ink text-balance sm:text-[46px] lg:text-[52px]">
              Everything you need to keep your AI work.
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-[15px] leading-7 text-body lg:pb-2">
            <strong className="font-semibold text-ink">
              AI Chat Exporter
            </strong>{" "}
            is a free Chrome extension that exports ChatGPT, Gemini, and Google
            AI Studio conversations to PDF, Markdown, and JSON files.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:mt-12 lg:grid-cols-12">
          <FeatureCard
            icon={FileText}
            title="Three Export Formats"
            description="Export to PDF, Markdown, or JSON. Choose your format with one click, each optimized for its use case."
            className="lg:col-span-7"
          >
            <ThreeFormatsPreview />
          </FeatureCard>

          <FeatureCard
            icon={Copy}
            title="Copy as Markdown"
            description="Skip the file entirely. One click copies the full conversation as Markdown. Paste straight into Notion, Obsidian, or GitHub."
            className="lg:col-span-5"
          >
            <CopyPreview />
          </FeatureCard>

          <FeatureCard
            icon={FilePenLine}
            title="Auto-Title Filenames"
            description='Files are named from your first message. No more "untitled-export-37.pdf". Get meaningful names automatically.'
            className="lg:col-span-5"
          >
            <AutoTitlePreview />
          </FeatureCard>

          <FeatureCard
            icon={MoonStar}
            title="Dark Mode PDF"
            description="Export PDFs with a dark background and light text that matches your chat's aesthetic. Code blocks, headers, all tuned."
            className="lg:col-span-7"
          >
            <DarkModePreview />
          </FeatureCard>

          <FeatureCard
            icon={ShieldCheck}
            title="Private by Design"
            description="No server, no API calls, no account. Your conversations stay on your device. An anonymous uninstall survey (via Chrome's API) is optional. No data is sent otherwise."
            className="lg:col-span-5"
          >
            <PrivacyPreview />
          </FeatureCard>

          <FeatureCard
            icon={ScrollText}
            title="Full Conversation Capture"
            description="ChatGPT, Gemini and AI Studio use virtual rendering. The extension performs an intelligent multi-pass scroll to capture every turn, even in 100+ message chats."
            className="lg:col-span-7"
          >
            <CapturePreview />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default Features;
