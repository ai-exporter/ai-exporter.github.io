export type Review = {
  name: string;
  date: string;
  rating: number;
  quote: string;
  initials: string;
  avatarClass: string;
};

/**
 * Real reviews from the Chrome Web Store listing for AI Chat Exporter.
 * Source: https://chromewebstore.google.com/detail/ai-chat-exporter-save-ai/pmccmopibnkjfmaddlloincblhcnmndd/reviews
 * Quotes are lightly excerpted for card length; ratings and dates are unchanged.
 */
export const reviews: Review[] = [
  {
    name: "Huang Guan",
    date: "Apr 20, 2026",
    rating: 5,
    quote:
      "Does exactly what it promises: clean, reliable chat export from Google AI Studio. Lightweight, efficient, and saves a lot of time. Great addition to my workflow.",
    initials: "HG",
    avatarClass: "bg-[#eaf8f2] text-forest",
  },
  {
    name: "vikk",
    date: "Apr 12, 2026",
    rating: 5,
    quote:
      "Really useful extension, makes exporting chats super quick and clean without any hassle. I like that everything runs locally, so it feels safe and private too. Only wish it handled very long chats a bit more consistently, but overall it works great.",
    initials: "V",
    avatarClass: "bg-[#e7f4f9] text-[#075985]",
  },
  {
    name: "Bunny Press",
    date: "Aug 15, 2026",
    rating: 5,
    quote:
      "Wonderful app. Saved me a ton of time and works well. The developer is also very responsive to bug fix.",
    initials: "BP",
    avatarClass: "bg-[#fef3c7] text-[#92400e]",
  },
  {
    name: "Yousuf Abdur Rehman Javed",
    date: "Jul 15, 2026",
    rating: 5,
    quote:
      "I don't usually take out the time to rate apps But this one did its work really well. Well done!! Cheers",
    initials: "YJ",
    avatarClass: "bg-[#ede9fe] text-[#6d28d9]",
  },
  {
    name: "Lee Menloar",
    date: "Nov 10, 2026",
    rating: 5,
    quote: "excellent！ The only one I tried that worked!",
    initials: "LM",
    avatarClass: "bg-[#ffe4e6] text-[#be123c]",
  },
  {
    name: "Mohammad Amir Nazarpour",
    date: "Jul 19, 2026",
    rating: 5,
    quote: "Time Saving Extension Thank You!",
    initials: "MN",
    avatarClass: "bg-[#f5f5f4] text-[#44403c]",
  },
  {
    name: "Kanhaiya Kumar",
    date: "Sep 10, 2026",
    rating: 5,
    quote: "best extension.",
    initials: "KK",
    avatarClass: "bg-[#dcfce7] text-[#166534]",
  },
  {
    name: "Rahil B.",
    date: "Oct 20, 2026",
    rating: 5,
    quote: "Works well.",
    initials: "RB",
    avatarClass: "bg-[#e0f2fe] text-[#0c4a6e]",
  },
];
