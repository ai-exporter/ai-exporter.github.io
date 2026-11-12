import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Page Not Found | AI Chat Exporter",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-white text-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,#eaf8f2_0%,#eef6fa_42%,#ffffff_74%)]"
      />
      <header className="container-page flex h-20 items-center">
        <Logo />
      </header>

      <main
        id="main-content"
        className="flex flex-1 items-center justify-center px-5 pb-24 pt-10"
      >
        <div className="mx-auto max-w-lg text-center">
          <p className="eyebrow">Error 404</p>
          <h1 className="mt-4 font-display text-[88px] leading-[0.8] tracking-[-0.05em] text-forest sm:text-[120px]">
            404
          </h1>
          <h2 className="mt-6 text-[28px] leading-tight tracking-[-0.03em] text-ink sm:text-[34px]">
            Oops! Page not found
          </h2>
          <p className="mx-auto mt-3 max-w-sm text-pretty text-[15px] leading-7 text-body">
            The page you&apos;re looking for may have moved, or it never
            existed.
          </p>
          <Link href="/" className="btn-primary mt-7 h-11 px-6">
            <ArrowLeft className="h-4 w-4" />
            Return to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
