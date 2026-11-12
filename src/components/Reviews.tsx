import { ArrowUpRight, Chrome, Star } from "lucide-react";
import { reviews, type Review } from "@/data/reviews";

const REVIEWS_URL =
  "https://chromewebstore.google.com/detail/ai-chat-exporter-save-ai/pmccmopibnkjfmaddlloincblhcnmndd/reviews";

const ReviewCard = ({ review }: { review: Review }) => (
  <article className="flex w-[84vw] max-w-[380px] shrink-0 flex-col justify-between rounded-2xl border border-hairline bg-white p-6 shadow-soft sm:w-[380px]">
    <div>
      <div className="flex items-center justify-between">
        <span
          className="flex items-center gap-0.5"
          aria-label={`${review.rating} out of 5 stars`}
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-3.5 w-3.5 ${
                star <= review.rating
                  ? "fill-[#f59e0b] text-[#f59e0b]"
                  : "fill-hairline-soft text-hairline"
              }`}
            />
          ))}
        </span>
        <Chrome className="h-4 w-4 text-muted/60" aria-hidden="true" />
      </div>

      <blockquote className="mt-5 text-[15px] leading-7 text-body">
        &ldquo;{review.quote}&rdquo;
      </blockquote>
    </div>

    <div className="mt-6 flex items-center gap-3 border-t border-hairline-soft pt-5">
      <span
        className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold ${review.avatarClass}`}
        aria-hidden="true"
      >
        {review.initials}
      </span>
      <div className="min-w-0">
        <p className="truncate text-[12.5px] font-semibold text-ink">
          {review.name}
        </p>
        <p className="text-[10.5px] text-muted">
          {review.date} · Chrome Web Store
        </p>
      </div>
    </div>
  </article>
);

const ReviewGroup = ({ duplicate = false }: { duplicate?: boolean }) => (
  <div
    className={`flex shrink-0 gap-4 pr-4 ${
      duplicate ? "reviews-group-duplicate hidden md:flex" : ""
    }`}
    aria-hidden={duplicate ? "true" : undefined}
  >
    {reviews.map((review) => (
      <ReviewCard key={`${review.name}-${review.date}`} review={review} />
    ))}
  </div>
);

const Reviews = () => {
  return (
    <section id="reviews" className="relative py-20 sm:py-24 lg:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Reviews</p>
            <h2 className="mt-3 text-[36px] leading-[1.04] tracking-[-0.035em] text-ink text-balance sm:text-[46px] lg:text-[52px]">
              Real reviews from people who use it every day.
            </h2>
            <p className="mt-5 text-pretty text-[15.5px] leading-7 text-body sm:text-base">
              Real words from the Chrome Web Store, written by people using AI
              Chat Exporter in their everyday work.
            </p>
          </div>

          <div className="flex items-center justify-between gap-4 lg:flex-col lg:items-end">
            <div className="inline-flex items-center gap-3 rounded-full border border-hairline bg-white px-4 py-2.5 shadow-soft">
              <span className="flex items-center gap-0.5" aria-hidden="true">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-3.5 w-3.5 fill-[#f59e0b] text-[#f59e0b]"
                  />
                ))}
              </span>
              <span className="whitespace-nowrap text-[12px] font-semibold text-ink">
                4.6 average
              </span>
            </div>
          </div>
        </div>

        <div className="relative mt-9">
          <div
            className="reviews-marquee relative rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40 focus-visible:ring-offset-4"
            tabIndex={0}
            role="region"
            aria-label="Chrome Web Store reviews, auto-scrolling. Focus to pause."
          >
            <div className="reviews-viewport no-scrollbar flex overflow-x-auto pb-4 md:overflow-hidden md:pb-0">
              <div className="reviews-track flex w-max shrink-0">
                <ReviewGroup />
                <ReviewGroup duplicate />
              </div>
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-[linear-gradient(to_right,white_0%,white_72%,transparent_100%)] md:block"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-white to-transparent md:block"
            />
          </div>
        </div>

        <div className="mt-3 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-[11px] text-muted">
            Ratings and reviews sourced from the Chrome Web Store.
          </p>
          <a
            href={REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-forest transition-opacity hover:opacity-70"
          >
            Read all reviews
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
