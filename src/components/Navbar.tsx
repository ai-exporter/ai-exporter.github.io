import { Button } from "@/components/ui/button";


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-foreground/5 bg-background/60 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <img src="/assets/logo-placeholder.png" alt="AI Chat Exporter logo" className="h-8 w-8 rounded-lg" width={32} height={32} />
          <span className="text-base font-semibold tracking-tight text-foreground whitespace-nowrap">
            AI Chat Exporter
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="/#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Features</a>
          <a href="/#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">How It Works</a>
          <a href="/#faq" className="text-sm text-muted-foreground transition-colors hover:text-foreground relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">FAQ</a>
          <a href="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-foreground relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Privacy</a>
          <Button variant="hero" size="sm" asChild>
            <a href="https://chromewebstore.google.com/detail/chat-exporter-for-google/pmccmopibnkjfmaddlloincblhcnmndd">
              <img src="/assets/web-store-logo.png" alt="Chrome Web Store" className="h-4 w-4 mr-1.5" />
              <span className="text-[13px]">Add to Chrome — Free</span>
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
