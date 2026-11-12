import Link from "next/link";
import {
  ArrowUpRight,
  Chrome,
  FileJson,
  FileText,
  Hash,
  Heart,
  Mail,
  ShieldCheck,
} from "lucide-react";
import Logo from "@/components/Logo";

const CHROME_STORE_URL =
  "https://chromewebstore.google.com/detail/ai-chat-exporter-save-ai/pmccmopibnkjfmaddlloincblhcnmndd";

const exploreLinks = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Formats", href: "/#formats" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-forest text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:radial-gradient(#ffffff_0.55px,transparent_0.55px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,white,transparent_62%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[-180px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(215,240,229,0.18),transparent_68%)] blur-2xl"
      />

      <div className="container-page relative pt-14 sm:pt-16">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.5fr_0.8fr_0.9fr] lg:gap-10">
          <div>
            <Logo dark />
            <p className="mt-5 max-w-sm text-[14px] leading-7 text-white/65">
              Save and export your ChatGPT, Gemini, and Google AI Studio
              conversations to PDF, Markdown, and JSON, 100% free. Your chat
              content stays private.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[10.5px] font-semibold text-white/70">
                <FileText className="h-3 w-3 text-[#fca5a5]" />
                PDF
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[10.5px] font-semibold text-white/70">
                <Hash className="h-3 w-3 text-mint" />
                Markdown
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[10.5px] font-semibold text-white/70">
                <FileJson className="h-3 w-3 text-[#7dd3fc]" />
                JSON
              </span>
            </div>

            <a
              href={CHROME_STORE_URL}
              className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-forest transition-all duration-200 hover:bg-mint hover:shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
            >
              <Chrome className="h-4 w-4" />
              Add to Chrome
            </a>
          </div>

          <div>
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13.5px] text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Resources
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={CHROME_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13.5px] text-white/70 transition-colors hover:text-white"
                >
                  Chrome Web Store
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-[13.5px] text-white/70 transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href="mailto:rajatjain.dev@gmail.com"
                  className="inline-flex items-center gap-1.5 text-[13.5px] text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="h-3 w-3" />
                  Contact
                </a>
              </li>
            </ul>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[10.5px] font-medium text-white/60">
              <ShieldCheck className="h-3.5 w-3.5 text-mint" />
              Local only, always
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-b border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-[11px] leading-5 text-white/40">
            ChatGPT is a trademark of OpenAI. Gemini and Google AI Studio are
            trademarks of Google LLC. Not affiliated with or endorsed by OpenAI
            or Google LLC.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.producthunt.com/products/chat-exporter-for-google-ai-studio/launches/chat-exporter-for-google-ai-studio?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-chat-exporter-for-google-ai-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex overflow-hidden rounded-lg transition-opacity hover:opacity-100 sm:opacity-80"
            >
              <img
                alt="Chat Exporter for Google AI Studio - Export AI Studio chats to beautiful PDF, Markdown & JSON | Product Hunt"
                width="250"
                height="54"
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1119263&theme=light&t=1790604298289"
                className="h-[46px] w-auto"
                loading="lazy"
              />
            </a>
            <a
              href="https://startupfa.me/s/ai-chat-exporter?utm_source=ai-exporter.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex overflow-hidden rounded-lg transition-opacity hover:opacity-100 sm:opacity-80"
            >
              <img
                src="https://startupfa.me/badges/featured-badge.webp"
                alt="AI Chat Exporter - Featured on Startup Fame"
                width="171"
                height="54"
                className="h-[46px] w-auto"
                loading="lazy"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 py-6 text-[11px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 AI Chat Exporter, made with{" "}
            <Heart className="inline h-3 w-3 fill-current text-mint" /> by Rajat
            Jain.
          </p>
          <p className="font-mono text-[10px] tracking-wide text-white/35">
            v2.2.0 · Local-first
          </p>
        </div>

        <div aria-hidden="true" className="relative select-none pb-7 pt-4">
          <p className="whitespace-nowrap text-center font-display text-[clamp(36px,11vw,176px)] leading-[0.9] tracking-[-0.055em] text-white/[0.08]">
            AI Chat Exporter
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
