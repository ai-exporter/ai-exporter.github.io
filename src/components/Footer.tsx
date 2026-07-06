const Footer = () => {
  return (
    <footer className="border-t border-foreground/5 py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <img src="/assets/logo-placeholder.png" alt="AI Chat Exporter logo" className="h-6 w-6 rounded-md" width={24} height={24} />
              <p className="text-base font-semibold tracking-tight text-foreground whitespace-nowrap">
                AI Chat Exporter
              </p>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-md">ChatGPT is a trademark of OpenAI. Gemini and Google AI Studios are trademarks of Google LLC. Not affiliated with or endorsed by OpenAI or Google LLC.</p>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="https://chromewebstore.google.com/detail/chat-exporter-for-google/pmccmopibnkjfmaddlloincblhcnmndd" className="transition-colors hover:text-foreground relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Chrome Web Store</a>
            <a href="/privacy" className="transition-colors hover:text-foreground relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Privacy Policy</a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-foreground/5">
          <p className="text-center text-xs text-muted-foreground/70 max-w-xl mx-auto">
            Save and export your ChatGPT, Gemini, and Google AI Studio conversations to PDF, Markdown, and JSON — 100% free. Your chat content stays private
          </p>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            © 2025 AI Chat Exporter, made with ♥ by Rajat Jain.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
