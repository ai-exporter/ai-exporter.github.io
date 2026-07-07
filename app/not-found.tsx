import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found — AI Chat Exporter",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAF9F6]">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-[#0F0F0F]">404</h1>
        <p className="mb-4 text-xl text-[#0F0F0F]/70">
          Oops! Page not found
        </p>
        <a
          href="/"
          className="text-[#0F0F0F] underline underline-offset-4 decoration-[#0F0F0F]/30 hover:text-[#0F0F0F]/70 transition-colors"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
}
