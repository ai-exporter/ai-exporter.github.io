import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy: AI Chat Exporter",
  description:
    "Privacy policy for AI Chat Exporter. All data is processed locally in your browser. No servers, no tracking, no data collection.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy: AI Chat Exporter",
    description:
      "Your conversations stay on your device. No servers, no cloud, no data collection. Read the full privacy policy.",
    type: "website",
    url: "/privacy",
    siteName: "AI Chat Exporter",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "AI Chat Exporter: Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy: AI Chat Exporter",
    description:
      "Your conversations stay on your device. No servers, no cloud, no data collection.",
    images: ["/og-image.svg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://ai-exporter.github.io/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Privacy Policy",
      item: "https://ai-exporter.github.io/privacy",
    },
  ],
};

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="flex min-h-screen flex-col bg-white text-ink">
        <Navbar />
        <main
          id="main-content"
          className="mx-auto w-full max-w-3xl flex-1 bg-[radial-gradient(ellipse_90%_55%_at_50%_0%,#f1faf6_0%,#ffffff_68%)] px-5 pb-24 pt-28 sm:px-8 sm:pb-32 sm:pt-36"
        >
          <h1 className="text-[42px] leading-[1] tracking-[-0.04em] text-ink sm:text-[54px]">
            Privacy Policy
          </h1>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            Updated: September 2026 (v2.2.0)
          </p>

          <div className="mt-10 space-y-9 border-t border-hairline pt-9 text-[15px] leading-8 text-body">
            <section>
              <h2 className="mb-3 text-[21px] leading-tight tracking-[-0.02em] text-ink">
                What Data is Accessed
              </h2>
              <p>
                The extension reads the text and formatting content of your active conversation turn on the supported platforms, specifically including message text, code blocks, tables, lists, system instructions (where supported, like Google AI Studio), attached images and files you uploaded to the chat, and optionally the page URL.
              </p>
              <p className="mt-3">The extension operates strictly on:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-forest/30">
                <li><code className="rounded-md border border-hairline bg-surface-soft px-1.5 py-0.5 font-mono text-[12.5px] text-forest">aistudio.google.com</code></li>
                <li><code className="rounded-md border border-hairline bg-surface-soft px-1.5 py-0.5 font-mono text-[12.5px] text-forest">chatgpt.com</code></li>
                <li><code className="rounded-md border border-hairline bg-surface-soft px-1.5 py-0.5 font-mono text-[12.5px] text-forest">chat.openai.com</code></li>
                <li><code className="rounded-md border border-hairline bg-surface-soft px-1.5 py-0.5 font-mono text-[12.5px] text-forest">gemini.google.com</code></li>
              </ul>
              <p className="mt-3">
                No permissions beyond active tab access, content scripting, local storage, file downloads, extended local staging quota (unlimitedStorage), and specified host permissions are requested.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[21px] leading-tight tracking-[-0.02em] text-ink">
                How it is Used
              </h2>
              <p>
                The accessed data is used <strong className="font-semibold text-ink">solely</strong> to generate the export files you request (PDF, Markdown, or JSON).
              </p>
              <p className="mt-3">
                All data processing is performed <strong className="font-semibold text-ink">entirely within your browser locally</strong>. No conversation data is ever sent to, stored on, or transmitted to any external server.
              </p>
              <p className="mt-3">
                Two content-only fetches can occur while rendering an export: the Inter display font, and the bytes of pictures already visible in your chat (so they print offline instead of as links). Both fetch file content only. No conversation text, identity, or browsing data accompanies them.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[21px] leading-tight tracking-[-0.02em] text-ink">
                What is NOT Done
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-forest/30">
                <li><strong className="font-semibold text-ink">No Analytics or Tracking:</strong> No user behavior analytics, event logs, or telemetry are collected during normal use.</li>
                <li><strong className="font-semibold text-ink">Uninstall Survey:</strong> When you uninstall the extension, a browser tab opens with an optional anonymous survey hosted by Typeform. No extension data is included in the request. You are never required to fill it out.</li>
                <li><strong className="font-semibold text-ink">No User Accounts:</strong> No user accounts or personal profiles are created.</li>
                <li><strong className="font-semibold text-ink">No Long-term Storage:</strong> No conversation content is cached or stored beyond the active export session.</li>
                <li><strong className="font-semibold text-ink">No Third-Party Scripts:</strong> No third-party tracking, advertising, or analysis scripts are included.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-[21px] leading-tight tracking-[-0.02em] text-ink">
                Permissions Used
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-forest/30">
                <li><strong className="font-semibold text-ink">activeTab</strong>: Granted to read the active conversation tab when you click the extension popup icon.</li>
                <li><strong className="font-semibold text-ink">scripting</strong>: Used to safely extract the conversation DOM content from the active tab.</li>
                <li><strong className="font-semibold text-ink">downloads</strong>: Used to save generated PDF, Markdown, or JSON files directly to your device's downloads folder.</li>
                <li><strong className="font-semibold text-ink">storage</strong>: Used to persist your preferred settings locally (e.g., dark/light mode preference).</li>
                <li><strong className="font-semibold text-ink">unlimitedStorage</strong>: Lets large exports (long chats with code and images) exceed the default 10MB local staging quota while the export renders. Nothing is retained afterward.</li>
                <li><strong className="font-semibold text-ink">Host Permissions</strong>: Host permissions for <code className="rounded-md border border-hairline bg-surface-soft px-1.5 py-0.5 font-mono text-[12.5px] text-forest">aistudio.google.com</code>, <code className="rounded-md border border-hairline bg-surface-soft px-1.5 py-0.5 font-mono text-[12.5px] text-forest">chatgpt.com</code>, <code className="rounded-md border border-hairline bg-surface-soft px-1.5 py-0.5 font-mono text-[12.5px] text-forest">chat.openai.com</code>, and <code className="rounded-md border border-hairline bg-surface-soft px-1.5 py-0.5 font-mono text-[12.5px] text-forest">gemini.google.com</code> are used strictly to pre-inject native Export action buttons directly into the headers of supported AI chat interfaces at document start. All extraction and file creation remain 100% local on your machine.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-[21px] leading-tight tracking-[-0.02em] text-ink">
                Limited Use Disclosure
              </h2>
              <p>
                The use of information received from Google APIs will adhere to the Chrome Web Store User Data Policy, including the Limited Use requirements.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[21px] leading-tight tracking-[-0.02em] text-ink">
                Contact
              </h2>
              <p>
                If you have any questions or concerns regarding this privacy policy, please contact{" "}
                <a
                  href="mailto:rajatjain.dev@gmail.com"
                  className="font-semibold text-forest underline decoration-forest/30 underline-offset-4 transition-colors hover:decoration-forest"
                >
                  <strong className="font-semibold text-ink">rajatjain.dev@gmail.com</strong>
                </a>.
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
