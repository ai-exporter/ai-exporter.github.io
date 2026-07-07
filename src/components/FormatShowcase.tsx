const FormatShowcase = () => {
  return (
    <section id="formats" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-lg ml-auto text-right">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl font-serif">
            Pick the format that fits your workflow.
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* PDF - Editorial style card */}
          <article className="rounded-xl border-[1.5px] border-[#0F0F0F] bg-white shadow-[4px_4px_0_0_#0F0F0F] transition-all hover:shadow-[6px_6px_0_0_#0F0F0F] hover:translate-x-[-2px] hover:translate-y-[-2px]">
            <div className="p-6">
              <h3 className="mb-1 text-xl font-bold font-serif">📄 PDF</h3>
              <p className="mb-4 text-sm text-[#0F0F0F]/70">Beautiful, shareable, ready to send.</p>
              <div className="rounded-lg border-[1px] border-[#0F0F0F]/20 bg-[#FAF9F6] p-4 text-xs font-mono">
                <p className="mb-2 font-bold text-[#0F0F0F]">ChatGPT / Gemini</p>
                <p className="mb-2 text-[#0F0F0F]/80">Here's a Python function that handles pagination efficiently:</p>
                <div className="rounded border-[1px] border-[#0F0F0F]/10 bg-white p-3 text-[#0F0F0F]/70">
                  <code>def paginate(items, page=1, size=20):</code><br />
                  <code>{"  "}start = (page - 1) * size</code><br />
                  <code>{"  "}return items[start:start+size]</code>
                </div>
              </div>
              <p className="mt-4 text-xs text-[#0F0F0F]/60">Supports dark mode, code blocks, tables, inline formatting, and system instructions.</p>
            </div>
          </article>

          {/* Markdown - Dark terminal interior */}
          <article className="rounded-xl border-[1.5px] border-[#0F0F0F] bg-white shadow-[4px_4px_0_0_#0F0F0F] transition-all hover:shadow-[6px_6px_0_0_#0F0F0F] hover:translate-x-[-2px] hover:translate-y-[-2px] ">
            <div className="p-6">
              <h3 className="mb-1 text-xl font-bold font-serif">📝 Markdown</h3>
              <p className="mb-4 text-sm text-[#0F0F0F]/70">Perfect for pasting into Obsidian, Notion, or any Markdown editor.</p>
              <div className="rounded-lg border-[1.5px] border-[#0F0F0F] bg-[#18181B] p-4 text-xs font-mono text-[#A1A1AA]">
                <p className="text-[#E5D9F2] font-semibold">### User</p>
                <p>How do I handle API rate limits?</p>
                <p className="my-1 text-[#A1A1AA]/30">---</p>
                <p className="text-[#E5D9F2] font-semibold">### ChatGPT / Gemini</p>
                <p>Implement exponential backoff with</p>
                <p>jitter. Here's a pattern...</p>
              </div>
              <p className="mt-4 text-xs text-[#0F0F0F]/60">Paste directly into any markdown editor. Works with Copy as Markdown for instant clipboard access.</p>
            </div>
          </article>

          {/* JSON - Dark terminal interior */}
          <article className="rounded-xl border-[1.5px] border-[#0F0F0F] bg-white shadow-[4px_4px_0_0_#0F0F0F] transition-all hover:shadow-[6px_6px_0_0_#0F0F0F] hover:translate-x-[-2px] hover:translate-y-[-2px]">
            <div className="p-6">
              <h3 className="mb-1 text-xl font-bold font-serif">{"{ } "}JSON</h3>
              <p className="mb-4 text-sm text-[#0F0F0F]/70">Use exported JSON to feed into Python scripts, analysis tools, or AI pipelines.</p>
              <div className="rounded-lg border-[1.5px] border-[#0F0F0F] bg-[#18181B] p-4 text-xs font-mono text-[#A1A1AA]">
                <p>{"{"}</p>
                <p>{"  "}<span className="text-[#D1E9D2]">"role"</span>: "model",</p>
                <p>{"  "}<span className="text-[#D1E9D2]">"content"</span>: "Use retry...",</p>
                <p>{"  "}<span className="text-[#D1E9D2]">"model"</span>: "gemini-2.5-pro",</p>
                <p>{"  "}<span className="text-[#D1E9D2]">"systemInstruction"</span>: "..."</p>
                <p>{"}"}</p>
              </div>
              <p className="mt-4 text-xs text-[#0F0F0F]/60">Pipe into scripts, LLM pipelines, or databases. Structured and machine-readable.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default FormatShowcase;
