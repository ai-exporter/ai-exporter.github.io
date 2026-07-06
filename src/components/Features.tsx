import { FileText, ClipboardCopy, Tag, Moon, Lock, ScrollText } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Three Export Formats",
    description: "Export to PDF, Markdown, or JSON. Choose your format with one click — each optimized for its use case.",
  },
  {
    icon: ClipboardCopy,
    title: "Copy as Markdown",
    description: "Skip the file entirely. One click copies the full conversation as Markdown — paste straight into Notion, Obsidian, or GitHub.",
  },
  {
    icon: Tag,
    title: "Auto-Title Filenames",
    description: "Files are named from your first message. No more \"untitled-export-37.pdf\" — get meaningful names automatically.",
  },
  {
    icon: Moon,
    title: "Dark Mode PDF",
    description: "Export PDFs with a dark background and light text that matches your chat's aesthetic. Code blocks, headers, all tuned.",
  },
  {
    icon: Lock,
    title: "100% Private",
    description: "Private by Design — No server, no API calls, no account. Your conversations are processed entirely in your browser and never leave your device. An optional anonymous uninstall survey helps us improve — that's it.",
  },
  {
    icon: ScrollText,
    title: "Full Conversation Capture",
    description: "ChatGPT, Gemini and AI Studio use virtual rendering. The extension performs an intelligent multi-pass scroll to capture every turn — even in 100+ message chats.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/3 via-transparent to-transparent" />
      <div className="container relative">
        <div className="fade-in-up mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to keep your AI work.
          </h2>
          <p className="mt-4 text-muted-foreground">
            <strong className="text-foreground">AI Chat Exporter</strong> is a free Chrome extension that exports ChatGPT, Gemini, and Google AI Studio conversations to PDF, Markdown, and JSON files. All processing happens locally in the browser — no data is sent to any server.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <article
              key={f.title}
              className="card-premium p-6"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="icon-container mb-4 h-10 w-10">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
