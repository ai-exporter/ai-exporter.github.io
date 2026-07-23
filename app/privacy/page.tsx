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
        alt: "AI Chat Exporter — Privacy Policy",
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
      <div className="min-h-screen bg-[#FAF9F6] text-[#0F0F0F] flex flex-col">
        <Navbar />
        <main id="main-content" className="flex-1 mx-auto max-w-3xl px-6 pt-32 pb-24 sm:pt-40 sm:pb-32 w-full">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2 font-serif">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#0F0F0F]/50 mb-12">
            Updated: July 2026 (v2.1.0)
          </p>

          <div className="space-y-8 text-[15px] leading-relaxed text-[#0F0F0F]/70">
            <section>
              <h2 className="text-lg font-semibold text-[#0F0F0F] mb-3 font-serif">
                What Data is Accessed
              </h2>
              <p>
                The extension reads the text and formatting content of your active conversation turn on the supported platforms—specifically including message text, code blocks, tables, lists, system instructions (where supported, like Google AI Studio), and optionally the page URL.
              </p>
              <p className="mt-3">The extension operates strictly on:</p>
              <ul className="list-disc pl-5 space-y-1.5 marker:text-[#0F0F0F]/30 mt-2">
                <li><code className="font-mono text-[#0F0F0F]/80">aistudio.google.com</code></li>
                <li><code className="font-mono text-[#0F0F0F]/80">chatgpt.com</code></li>
                <li><code className="font-mono text-[#0F0F0F]/80">chat.openai.com</code></li>
                <li><code className="font-mono text-[#0F0F0F]/80">gemini.google.com</code></li>
              </ul>
              <p className="mt-3">
                No permissions beyond active tab access, content scripting, local storage, file downloads, and specified host permissions are requested.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#0F0F0F] mb-3 font-serif">
                How it is Used
              </h2>
              <p>
                The accessed data is used <strong className="font-semibold text-[#0F0F0F]">solely</strong> to generate the export files you request (PDF, Markdown, or JSON).
              </p>
              <p className="mt-3">
                All data processing is performed <strong className="font-semibold text-[#0F0F0F]">entirely within your browser locally</strong>. No conversation data is ever sent to, stored on, or transmitted to any external server.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#0F0F0F] mb-3 font-serif">
                What is NOT Done
              </h2>
              <ul className="list-disc pl-5 space-y-1.5 marker:text-[#0F0F0F]/30">
                <li><strong className="font-semibold text-[#0F0F0F]">No Analytics or Tracking:</strong> No user behavior analytics, event logs, or telemetry are collected during normal use.</li>
                <li><strong className="font-semibold text-[#0F0F0F]">Uninstall Survey:</strong> When you uninstall the extension, a browser tab opens with an optional anonymous survey hosted by Typeform. No extension data is included in the request. You are never required to fill it out.</li>
                <li><strong className="font-semibold text-[#0F0F0F]">No User Accounts:</strong> No user accounts or personal profiles are created.</li>
                <li><strong className="font-semibold text-[#0F0F0F]">No Long-term Storage:</strong> No conversation content is cached or stored beyond the active export session.</li>
                <li><strong className="font-semibold text-[#0F0F0F]">No Third-Party Scripts:</strong> No third-party tracking, advertising, or analysis scripts are included.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#0F0F0F] mb-3 font-serif">
                Permissions Used
              </h2>
              <ul className="list-disc pl-5 space-y-1.5 marker:text-[#0F0F0F]/30">
                <li><strong className="font-semibold text-[#0F0F0F]">activeTab</strong> — Granted to read the active conversation tab when you click the extension popup icon.</li>
                <li><strong className="font-semibold text-[#0F0F0F]">scripting</strong> — Used to safely extract the conversation DOM content from the active tab.</li>
                <li><strong className="font-semibold text-[#0F0F0F]">downloads</strong> — Used to save generated PDF, Markdown, or JSON files directly to your device's downloads folder.</li>
                <li><strong className="font-semibold text-[#0F0F0F]">storage</strong> — Used to persist your preferred settings locally (e.g., dark/light mode preference).</li>
                <li><strong className="font-semibold text-[#0F0F0F]">Host Permissions</strong> — Host permissions for <code className="font-mono text-[#0F0F0F]/80">aistudio.google.com</code>, <code className="font-mono text-[#0F0F0F]/80">chatgpt.com</code>, <code className="font-mono text-[#0F0F0F]/80">chat.openai.com</code>, and <code className="font-mono text-[#0F0F0F]/80">gemini.google.com</code> are used strictly to pre-inject native Export action buttons directly into the headers of supported AI chat interfaces at document start. All extraction and file creation remain 100% local on your machine.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#0F0F0F] mb-3 font-serif">
                Limited Use Disclosure
              </h2>
              <p>
                The use of information received from Google APIs will adhere to the Chrome Web Store User Data Policy, including the Limited Use requirements.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#0F0F0F] mb-3 font-serif">
                Contact
              </h2>
              <p>
                If you have any questions or concerns regarding this privacy policy, please contact{" "}
                <a
                  href="mailto:rajatjain.dev@gmail.com"
                  className="text-[#0F0F0F]/70 underline underline-offset-4 decoration-[#0F0F0F]/30 hover:text-[#0F0F0F] hover:decoration-[#0F0F0F] transition-colors"
                >
                  <strong className="font-semibold text-[#0F0F0F]">rajatjain.dev@gmail.com</strong>
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
