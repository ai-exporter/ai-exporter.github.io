import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t-[1.5px] border-[#0F0F0F] py-12 bg-white">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <img src="/assets/logo-placeholder.png" alt="AI Chat Exporter logo" className="h-6 w-6" width={24} height={24} />
              <p className="text-xl font-semibold tracking-tight whitespace-nowrap font-serif">
                AI Chat Exporter
              </p>
            </div>
            <p className="mt-3 text-sm text-[#0F0F0F]/60 max-w-md">ChatGPT is a trademark of OpenAI. Gemini and Google AI Studio are trademarks of Google LLC. Not affiliated with or endorsed by OpenAI or Google LLC.</p>
          </div>
          <div className="flex gap-6 text-sm text-[#0F0F0F]/70">
            <a href="https://chromewebstore.google.com/detail/ai-chat-exporter-save-ai/pmccmopibnkjfmaddlloincblhcnmndd" className="transition-opacity hover:opacity-60">Chrome Web Store</a>
            <Link href="/privacy" className="transition-opacity hover:opacity-60">Privacy Policy</Link>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t-[1.5px] border-[#0F0F0F]/20">
          <p className="text-center text-xs text-[#0F0F0F]/50 max-w-xl mx-auto">
            Save and export your ChatGPT, Gemini, and Google AI Studio conversations to PDF, Markdown, and JSON — 100% free. Your chat content stays private
          </p>
          <p className="mt-3 text-center text-xs text-[#0F0F0F]/50">
            © 2026 AI Chat Exporter, made with ♥ by Rajat Jain. <span className="inline-block mx-1">·</span> v2.1.0
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
