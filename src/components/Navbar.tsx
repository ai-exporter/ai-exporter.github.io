const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b-[1.5px] border-[#0F0F0F] bg-[#FAF9F6]">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <img src="/assets/logo-placeholder.png" alt="AI Chat Exporter logo" className="h-8 w-8" width={32} height={32} />
          <span className="text-base font-semibold tracking-tight whitespace-nowrap font-serif">
            AI Chat Exporter
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="/#features" className="text-sm text-[#0F0F0F] transition-opacity hover:opacity-60">Features</a>
          <a href="/#how-it-works" className="text-sm text-[#0F0F0F] transition-opacity hover:opacity-60">How It Works</a>
          <a href="/#faq" className="text-sm text-[#0F0F0F] transition-opacity hover:opacity-60">FAQ</a>
          <a href="/privacy" className="text-sm text-[#0F0F0F] transition-opacity hover:opacity-60">Privacy</a>
          <a
            href="https://chromewebstore.google.com/detail/ai-chat-exporter-save-ai/pmccmopibnkjfmaddlloincblhcnmndd"
            className="inline-flex items-center gap-1.5 rounded-lg border-[1.5px] border-[#0F0F0F] bg-[#E5D9F2] px-4 py-2 text-[13px] font-semibold text-[#0F0F0F] shadow-[3px_3px_0_0_#0F0F0F] transition-all hover:shadow-[4px_4px_0_0_#0F0F0F] hover:translate-x-[-1px] hover:translate-y-[-1px]"
          >
            <img src="/assets/web-store-logo.png" alt="Chrome Web Store" className="h-4 w-4 mr-1" />
            Add to Chrome
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
