import Link from "next/link";

type LogoProps = {
  dark?: boolean;
  className?: string;
};

const Logo = ({ dark = false, className = "" }: LogoProps) => {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="AI Chat Exporter home"
    >
      <span
        className={`inline-flex h-8 w-8 items-center justify-center rounded-[10px] shadow-[0_4px_12px_rgba(12,59,46,0.16)] transition-transform duration-200 group-hover:-translate-y-0.5 ${
          dark ? "bg-mint text-forest" : "bg-forest text-white"
        }`}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M7.5 3.75h5.6L18 8.55V18a2.25 2.25 0 0 1-2.25 2.25h-8.25A2.25 2.25 0 0 1 5.25 18V6A2.25 2.25 0 0 1 7.5 3.75Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M13 3.9v4.4c0 .4.3.7.7.7h4.2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M12 10.6v5.2m0 0-2.2-2.2m2.2 2.2 2.2-2.2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span
        className={`font-display text-[17px] leading-none tracking-[-0.015em] [word-spacing:0.1em] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        AI Chat Exporter
      </span>
    </Link>
  );
};

export default Logo;
