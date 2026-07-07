"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Does AI Chat Exporter send my conversations to any server?",
    a: "No. Everything runs locally in your browser. Your conversations are never uploaded or sent anywhere. An optional anonymous uninstall survey opens in a new tab only if you choose to fill it out — no data is collected automatically.",
  },
  {
    q: "Which formats can I export chats to?",
    a: "PDF, Markdown, and JSON. PDF is best for sharing, Markdown for notes apps like Obsidian/Notion, JSON for backups and scripts.",
  },
  {
    q: "Does it work with ChatGPT, Gemini, and Google AI Studio?",
    a: "Yes. It works on chatgpt.com, chat.openai.com, gemini.google.com, and aistudio.google.com.",
  },
  {
    q: "Is the extension free?",
    a: "Yes, 100% free with no limits, no account, and no paywall.",
  },
  {
    q: "Can I export very long conversations?",
    a: "Yes. The extension auto-scrolls and captures the full history, even for 100+ message chats.",
  },
  {
    q: "Can I save my chat to Obsidian or Notion?",
    a: "Yes, use 'Copy as Markdown' and paste directly. Formatting, code blocks, and tables are preserved.",
  },
  {
    q: "How do I save or download my chat history?",
    a: "Open any chat, click the extension, choose PDF/Markdown/JSON, then click Export Now.",
  },
  {
    q: "Does it work with GPT-4o, Gemini 2.5 Pro, and AI Studio models?",
    a: "Yes, it works with all current models on ChatGPT, Gemini, and AI Studio, including reasoning/thinking modes.",
  },
  {
    q: "Does it work with thinking/reasoning mode?",
    a: "Yes, both ChatGPT reasoning and Gemini thinking traces are captured if visible in the UI.",
  },
  {
    q: "What's the difference between PDF and Markdown export?",
    a: "PDF is a formatted document for sharing/printing. Markdown is plain text with formatting for editing in notes apps.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container max-w-3xl">
        <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl font-serif">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="rounded-xl border-[1.5px] border-[#0F0F0F] bg-white shadow-[3px_3px_0_0_#0F0F0F] overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span className="pr-4 text-sm font-medium">{f.q}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className={`shrink-0 transition-all duration-300 ${open === i ? "rotate-180" : ""}`}
                >
                  <path d="M4 6l4 4 4-4" stroke="#0F0F0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 pb-5 text-sm leading-relaxed text-[#0F0F0F]/70">
                  {f.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
