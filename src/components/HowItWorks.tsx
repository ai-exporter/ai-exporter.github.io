import { ExternalLink, MousePointerClick, Download } from "lucide-react";

const steps = [
  {
    num: "1",
    icon: ExternalLink,
    title: "Open Chat",
    description: "Navigate to any conversation in ChatGPT, Gemini, or Google AI Studio.",
  },
  {
    num: "2",
    icon: MousePointerClick,
    title: "Click the Extension",
    description: "Click the AI Chat Exporter icon in your Chrome toolbar. Pick your format and options.",
  },
  {
    num: "3",
    icon: Download,
    title: "Export",
    description: "Hit Export Now or Copy. Your file downloads instantly — or it's in your clipboard. Runs in under 3 seconds for most chats.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl font-serif">
            Three steps. Seconds.
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.num} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="pointer-events-none absolute right-0 top-12 hidden w-full translate-x-1/2 md:block">
                  <div className="mx-12 border-t-[1.5px] border-dashed border-[#0F0F0F]" />
                </div>
              )}
              <div className="relative mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-xl border-[1.5px] border-[#0F0F0F] bg-white shadow-[3px_3px_0_0_#0F0F0F]">
                <s.icon className="h-7 w-7 text-[#0F0F0F]" />
                <span className="absolute -top-2.5 -right-2.5 flex h-7 w-7 items-center justify-center rounded-full border-[1.5px] border-[#0F0F0F] bg-[#E5D9F2] text-xs font-bold shadow-[2px_2px_0_0_#0F0F0F]">
                  {s.num}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
              <p className="mx-auto max-w-xs text-sm text-[#0F0F0F]/70">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
