const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#0F0F0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h12v12H4z"/><path d="M8 8h8"/><path d="M8 11h6"/><path d="M8 14h4"/>
      </svg>
    ),
    title: "Three Export Formats",
    description: "Export to PDF, Markdown, or JSON. Choose your format with one click — each optimized for its use case.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#0F0F0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="14" height="14" rx="2"/><path d="M7 7h6"/><path d="M7 10h6"/><path d="M7 13h4"/>
      </svg>
    ),
    title: "Copy as Markdown",
    description: "Skip the file entirely. One click copies the full conversation as Markdown — paste straight into Notion, Obsidian, or GitHub.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#0F0F0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 5h12"/><path d="M4 10h12"/><path d="M4 15h8"/><circle cx="16" cy="15" r="2"/>
      </svg>
    ),
    title: "Auto-Title Filenames",
    description: "Files are named from your first message. No more \"untitled-export-37.pdf\" — get meaningful names automatically.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#0F0F0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 3H3a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"/><path d="M12 8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2 .9 2 2-.9 2-2 2-2-.9-2-2"/>
      </svg>
    ),
    title: "Dark Mode PDF",
    description: "Export PDFs with a dark background and light text that matches your chat's aesthetic. Code blocks, headers, all tuned.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#0F0F0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="14" height="14" rx="2"/><path d="M10 7v6"/><path d="M7 10h6"/>
      </svg>
    ),
    title: "100% Private",
    description: "Private by Design — No server, no API calls, no account. Your conversations are processed entirely in your browser and never leave your device. An optional anonymous uninstall survey helps us improve — that's it.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#0F0F0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l12 12"/><path d="M16 4L4 16"/><path d="M10 4v12"/><path d="M4 10h12"/>
      </svg>
    ),
    title: "Full Conversation Capture",
    description: "ChatGPT, Gemini and AI Studio use virtual rendering. The extension performs an intelligent multi-pass scroll to capture every turn — even in 100+ message chats.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl font-serif">
            Everything you need to keep your AI work.
          </h2>
          <p className="mt-4 text-[#0F0F0F]/70">
            <strong className="text-[#0F0F0F]">AI Chat Exporter</strong> is a free Chrome extension that exports ChatGPT, Gemini, and Google AI Studio conversations to PDF, Markdown, and JSON files. All processing happens locally in the browser — no data is sent to any server.
          </p>
        </div>

        {/* Asymmetric card grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`rounded-xl border-[1.5px] border-[#0F0F0F] bg-white p-6 shadow-[4px_4px_0_0_#0F0F0F] transition-all hover:shadow-[6px_6px_0_0_#0F0F0F] hover:translate-x-[-2px] hover:translate-y-[-2px] ${
                i === 1 ? "lg:translate-y-8" : ""
              } ${i === 4 ? "lg:translate-y-4 relative" : ""}`}
            >
              {i === 4 && (
                <div className="pointer-events-none absolute -top-8 -right-8 hidden lg:block">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 40 C10 15 30 5 40 5 C50 5 70 15 70 40 C70 65 50 75 40 75 C30 75 10 65 10 40" stroke="#0F0F0F" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.35"/>
                    <path d="M22 32 L14 28 L18 38" stroke="#0F0F0F" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.35"/>
                  </svg>
                </div>
              )}
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border-[1.5px] border-[#0F0F0F] bg-[#E5D9F2] shadow-[2px_2px_0_0_#0F0F0F]">
                {f.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-[#0F0F0F]/70">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
