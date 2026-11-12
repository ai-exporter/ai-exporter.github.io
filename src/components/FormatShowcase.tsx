import {
  ArrowUpRight,
  Braces,
  Check,
  FileText,
  Hash,
  MoonStar,
  Sparkles,
} from "lucide-react";

const FormatShowcase = () => {
  return (
    <section id="formats" className="relative py-20 sm:py-24 lg:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">One chat, three formats</p>
            <h2 className="mt-3 text-[36px] leading-[1.04] tracking-[-0.035em] text-ink text-balance sm:text-[46px] lg:text-[52px]">
              Pick the format that fits your workflow.
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-[15px] leading-7 text-body lg:pb-2">
            The same conversation, shaped for sharing, writing, or building.
            Every format is generated locally and downloads straight to your
            device.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:mt-12 lg:grid-cols-12">
          {/* PDF */}
          <article className="group flex flex-col rounded-[28px] border border-hairline bg-white p-2.5 shadow-soft transition-shadow duration-300 hover:shadow-lift lg:col-span-7">
            <div className="relative flex-1 overflow-hidden rounded-[22px] bg-[linear-gradient(145deg,#eef8f3_0%,#eaf4f9_55%,#eef3ff_100%)] p-5 sm:p-7 lg:min-h-[380px]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.3] [background-image:radial-gradient(#0c3b2e_0.55px,transparent_0.55px)] [background-size:18px_18px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_72%)]"
              />

              <div className="relative mx-auto flex h-full max-w-[500px] items-center justify-center py-2">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-8 bottom-7 top-6 -rotate-2 rounded-2xl border border-white/70 bg-white/45"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-4 bottom-4 top-3 rotate-1 rounded-2xl border border-white/80 bg-white/70"
                />

                <div className="relative w-full rounded-2xl border border-white bg-white/95 p-5 shadow-[0_24px_60px_rgba(12,59,46,0.14)] sm:p-6">
                  <div className="flex items-center justify-between border-b border-hairline-soft pb-3">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted">
                      ChatGPT / Gemini
                    </span>
                    <span className="font-mono text-[8.5px] text-muted">
                      Page 1 of 12
                    </span>
                  </div>

                  <p className="mt-4 text-[13px] font-semibold text-ink">
                    Pagination helper
                  </p>
                  <p className="mt-2 text-[10.5px] leading-[1.7] text-body">
                    Here&apos;s a Python function that handles pagination
                    efficiently:
                  </p>

                  <div className="mt-3 rounded-lg border border-hairline-soft bg-surface-soft px-3 py-3 font-mono text-[9.5px] leading-[1.9] text-ink">
                    <p>def paginate(items, page=1, size=20):</p>
                    <p className="text-muted">
                      {"  "}start = (page - 1) * size
                    </p>
                    <p className="text-muted">
                      {"  "}return items[start:start+size]
                    </p>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="h-1.5 w-full rounded-full bg-surface" />
                    <div className="h-1.5 w-[88%] rounded-full bg-surface" />
                    <div className="h-1.5 w-[64%] rounded-full bg-surface" />
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-hairline-soft pt-2.5">
                    <span className="text-[8.5px] text-muted">
                      AI Chat Exporter
                    </span>
                    <span className="font-mono text-[8.5px] text-muted">
                      conversation.pdf
                    </span>
                  </div>
                </div>

                <div className="absolute right-2 top-1 hidden items-center gap-1.5 rounded-full border border-white/80 bg-white/95 px-3 py-1.5 text-[9.5px] font-semibold text-ink shadow-soft backdrop-blur sm:inline-flex">
                  <MoonStar className="h-3 w-3" />
                  Dark mode ready
                </div>
                <div className="absolute bottom-1 left-2 hidden items-center gap-1.5 rounded-full border border-white/80 bg-white/95 px-3 py-1.5 text-[9.5px] font-semibold text-ink shadow-soft backdrop-blur sm:inline-flex">
                  <FileText className="h-3 w-3" />
                  12 pages · 2.4 MB
                </div>
              </div>
            </div>

            <div className="px-3 pb-4 pt-5 sm:px-4 sm:pb-5">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-soft text-ink">
                    <FileText className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="text-[26px] leading-none tracking-[-0.03em] text-ink">
                      PDF
                    </h3>
                    <p className="mt-1 text-[10.5px] font-medium text-muted">
                      For sharing
                    </p>
                  </div>
                </div>
                <span className="format-badge">Print-ready</span>
              </div>
              <p className="mt-3 max-w-xl text-[13.5px] leading-6 text-body">
                Beautiful, shareable, ready to send. Supports dark mode, code
                blocks, tables, inline formatting, and system instructions.
              </p>
            </div>
          </article>

          <div className="flex flex-col gap-4 lg:col-span-5">
            {/* Markdown */}
            <article className="group flex flex-col rounded-[28px] border border-hairline bg-white p-2.5 shadow-soft transition-shadow duration-300 hover:shadow-lift">
              <div className="relative h-[186px] overflow-hidden rounded-[22px] bg-[linear-gradient(145deg,#edf8f2_0%,#edf6fa_100%)] p-4">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.28] [background-image:radial-gradient(#0c3b2e_0.55px,transparent_0.55px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]"
                />
                <div className="relative mx-auto flex h-full max-w-[360px] flex-col overflow-hidden rounded-xl border border-white/80 bg-white/95 shadow-[0_16px_40px_rgba(12,59,46,0.1)]">
                  <div className="flex shrink-0 items-center justify-between border-b border-hairline-soft px-3 py-2">
                    <span className="font-mono text-[8px] font-medium text-muted">
                      conversation.md
                    </span>
                    <span className="inline-flex items-center gap-1 text-[8px] font-semibold text-ink">
                      <Check className="h-2.5 w-2.5" />
                      Copied
                    </span>
                  </div>
                  <div className="flex-1 p-3 font-mono text-[9px] leading-[1.9]">
                    <p className="font-semibold text-ink">### User</p>
                    <p className="text-body">
                      How do I handle API rate limits?
                    </p>
                    <p className="my-1 text-hairline">---</p>
                    <p className="font-semibold text-ink">
                      ### ChatGPT / Gemini
                    </p>
                    <p className="text-body">
                      Implement exponential backoff with jitter.
                    </p>
                    <span className="mt-1 inline-block h-3 w-1 animate-pulse bg-ink/30" />
                  </div>
                </div>
              </div>

              <div className="px-3 pb-4 pt-5 sm:px-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-soft text-ink">
                      <Hash className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="text-[24px] leading-none tracking-[-0.03em] text-ink">
                        Markdown
                      </h3>
                      <p className="mt-1 text-[10.5px] font-medium text-muted">
                        For notes
                      </p>
                    </div>
                  </div>
                  <span className="format-badge">Editable</span>
                </div>
                <p className="mt-3 text-[13.5px] leading-6 text-body">
                  Perfect for pasting into Obsidian, Notion, or any Markdown
                  editor. Works with Copy as Markdown for instant clipboard
                  access.
                </p>
              </div>
            </article>

            {/* JSON */}
            <article className="group flex flex-col rounded-[28px] border border-hairline bg-white p-2.5 shadow-soft transition-shadow duration-300 hover:shadow-lift">
              <div className="relative h-[186px] overflow-hidden rounded-[22px] bg-[linear-gradient(145deg,#edf8f2_0%,#edf6fa_100%)] p-4">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.28] [background-image:radial-gradient(#0c3b2e_0.55px,transparent_0.55px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]"
                />
                <div className="relative mx-auto flex h-full max-w-[360px] flex-col overflow-hidden rounded-xl border border-white/80 bg-white/95 shadow-[0_16px_40px_rgba(12,59,46,0.1)]">
                  <div className="flex shrink-0 items-center justify-between border-b border-hairline-soft px-3 py-2">
                    <span className="font-mono text-[8px] font-medium text-muted">
                      conversation.json
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[8px] font-semibold text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-ink/50" />
                      Valid
                    </span>
                  </div>
                  <div className="flex-1 p-3 font-mono text-[8.5px] leading-[1.85] text-muted">
                    <p>{"{"}</p>
                    <p className="pl-3">
                      <span className="font-medium text-ink">
                        &quot;role&quot;
                      </span>
                      :{" "}
                      <span className="text-body">&quot;assistant&quot;</span>,
                    </p>
                    <p className="pl-3">
                      <span className="font-medium text-ink">
                        &quot;model&quot;
                      </span>
                      :{" "}
                      <span className="text-body">&quot;gemini-2.5-pro&quot;</span>
                      ,
                    </p>
                    <p className="pl-3">
                      <span className="font-medium text-ink">
                        &quot;content&quot;
                      </span>
                      :{" "}
                      <span className="text-body">
                        &quot;Use retry with backoff...&quot;
                      </span>
                    </p>
                    <p>{"}"}</p>
                  </div>
                </div>
              </div>

              <div className="px-3 pb-4 pt-5 sm:px-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-soft text-ink">
                      <Braces className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="text-[24px] leading-none tracking-[-0.03em] text-ink">
                        JSON
                      </h3>
                      <p className="mt-1 text-[10.5px] font-medium text-muted">
                        For developers
                      </p>
                    </div>
                  </div>
                  <span className="format-badge">Structured</span>
                </div>
                <p className="mt-3 text-[13.5px] leading-6 text-body">
                  Use exported JSON to feed into Python scripts, analysis tools,
                  or AI pipelines. Structured and machine-readable.
                </p>
              </div>
            </article>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-hairline pt-6 sm:flex-row">
          <p className="inline-flex items-center gap-2 text-[11px] font-medium text-muted">
            <Sparkles className="h-3.5 w-3.5 text-forest" />
            Auto-generated filenames · Full conversation capture · Zero uploads
          </p>
          <a
            href="#reviews"
            className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-forest transition-opacity hover:opacity-70"
          >
            See what people export
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FormatShowcase;
