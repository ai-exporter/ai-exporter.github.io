"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, MessageCircleQuestion, Plus } from "lucide-react";

const faqs = [
  {
    q: "Does AI Chat Exporter send my conversations to any server?",
    a: "No. Everything runs locally in your browser. Your conversations are never uploaded or sent anywhere. An optional anonymous uninstall survey (via Chrome's uninstall API) opens only if you choose to fill it out. No data is collected automatically.",
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
    q: "Does it work with thinking/reasoning mode?",
    a: "Yes, both ChatGPT reasoning and Gemini thinking traces are captured if visible in the UI.",
  },
  {
    q: "What's the difference between PDF and Markdown export?",
    a: "PDF is a formatted document for sharing/printing. Markdown is plain text with formatting for editing in notes apps.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-24 lg:py-28">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 text-[36px] leading-[1.04] tracking-[-0.035em] text-ink text-balance sm:text-[46px]">
              Questions,
              <br className="hidden sm:block" /> answered.
            </h2>
            <p className="mt-5 max-w-sm text-pretty text-[15px] leading-7 text-body">
              Everything you might want to know before installing. Still
              curious? We&apos;re a quick email away.
            </p>

            <div className="mt-8 rounded-2xl border border-hairline bg-surface-soft/70 p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-forest shadow-soft">
                  <MessageCircleQuestion className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">
                    Still have a question?
                  </p>
                  <p className="text-xs text-muted">
                    Replies usually land within a day.
                  </p>
                </div>
              </div>
              <a
                href="mailto:rajatjain.dev@gmail.com"
                className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-forest transition-opacity hover:opacity-70"
              >
                <Mail className="h-3.5 w-3.5" />
                rajatjain.dev@gmail.com
              </a>
            </div>

            <a
              href="https://chromewebstore.google.com/detail/ai-chat-exporter-save-ai/pmccmopibnkjfmaddlloincblhcnmndd/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold text-muted transition-colors hover:text-forest"
            >
              Or read reviews on the Chrome Web Store
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-hairline bg-white shadow-soft">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={f.q}
                  className="border-b border-hairline last:border-b-0"
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-button-${i}`}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-surface-soft/60 sm:px-6 sm:py-5"
                    >
                      <span className="font-sans text-[14px] font-semibold leading-6 tracking-[-0.01em] text-ink sm:text-[15px]">
                        {f.q}
                      </span>
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 border-forest bg-forest text-white"
                            : "border-hairline bg-white text-muted"
                        }`}
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 pr-12 text-[14px] leading-7 text-body sm:px-6 sm:pb-6 sm:pr-16">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
