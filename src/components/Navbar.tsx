"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Check, Chrome, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

const CHROME_STORE_URL =
  "https://chromewebstore.google.com/detail/ai-chat-exporter-save-ai/pmccmopibnkjfmaddlloincblhcnmndd";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Formats", href: "/#formats" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
];

const Navbar = ({ showInstalled }: { showInstalled?: boolean }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-hairline/80 bg-white/85 backdrop-blur-xl">
        <nav
          className="container-page flex h-16 items-center justify-between gap-4"
          aria-label="Main"
        >
          <Logo />

          <div className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-body transition-colors hover:bg-surface-soft hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/privacy"
              className="rounded-full px-3.5 py-2 text-sm font-medium text-body transition-colors hover:bg-surface-soft hover:text-ink"
            >
              Privacy
            </Link>
            {showInstalled ? (
              <span className="inline-flex h-10 cursor-default items-center gap-2 rounded-full border border-hairline bg-surface-soft px-5 text-sm font-semibold text-muted">
                <Check className="h-4 w-4" />
                Added to Chrome
              </span>
            ) : (
              <a
                href={CHROME_STORE_URL}
                className="btn-primary h-10 px-5"
                aria-label="Add AI Chat Exporter to Chrome"
              >
                <Chrome className="h-4 w-4" />
                Add to Chrome
              </a>
            )}
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-white text-ink transition-colors hover:bg-surface-soft lg:hidden"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {open && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-white lg:hidden"
        >
          <div className="container-page flex min-h-full flex-col py-8">
            <div className="flex flex-col divide-y divide-hairline">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 text-lg font-medium text-ink"
                >
                  {link.label}
                  <ArrowUpRight className="h-4 w-4 text-muted" />
                </a>
              ))}
              <Link
                href="/privacy"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-4 text-lg font-medium text-ink"
              >
                Privacy
                <ArrowUpRight className="h-4 w-4 text-muted" />
              </Link>
            </div>

            <div className="mt-auto pt-10">
              {showInstalled ? (
                <span className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-hairline bg-surface-soft text-sm font-semibold text-muted">
                  <Check className="h-4 w-4" />
                  Added to Chrome
                </span>
              ) : (
                <a
                  href={CHROME_STORE_URL}
                  className="btn-primary h-12 w-full"
                  onClick={() => setOpen(false)}
                >
                  <Chrome className="h-4 w-4" />
                  Add to Chrome
                </a>
              )}
              <p className="mt-4 text-center text-xs text-muted">
                Free forever · No account required
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
