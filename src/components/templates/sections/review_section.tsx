import { ArrowRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Been using Fozara for cross-border payments and honestly it's changed how I move money. The naira rate is consistent and it just works.",
    name: "SwankyOG",
    handle: "@SwankyOG21",
  },
  {
    quote:
      "If you hold crypto and you're in Nigeria, you need Fozara. The conversion speed is insane. Naira hits your bank in seconds, not minutes.",
    name: "Gbolasere Michael",
    handle: "@gma_ox",
  },
  {
    quote:
      "The thing about Fozara is they don't overcomplicate it. You hold, you send, you spend. Done. No seed phrases, no confusion.",
    name: "Khalee",
    handle: "@theyoruba_boy",
  },
];

export default function ReviewsSection() {
  return (
    <section className="w-full bg-[#FAFAF7] py-32 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 max-w-2xl">
          <p className="mb-4 text-[13px] font-medium tracking-[0.2em] uppercase text-[#0B291D]/45">
            Social proof
          </p>

          <h2 className="text-[40px] font-semibold leading-[1.12] tracking-tight text-[#0B291D] sm:text-[50px]">
            What people are saying.
          </h2>

          <p className="mt-6 text-[17px] leading-relaxed text-[#0B291D]/65">
            From real users, posted on X.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="rounded-[32px] bg-white p-9 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FAFAF7] flex items-center justify-center mb-6">
                  <Quote className="h-4 w-4 text-[#0B291D]/40" />
                </div>
                <p className="text-[16px] leading-relaxed text-[#0B291D]/80 mb-8">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6">
                <p className="text-[14.5px] font-semibold text-[#0B291D]">
                  {item.name}
                </p>
                <p className="text-[13px] text-[#0B291D]/45 mt-0.5">
                  {item.handle}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-[36px] bg-[#0B291D] p-10 sm:p-16 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="max-w-xl">
            <h3 className="text-[32px] sm:text-[40px] font-semibold tracking-tight leading-[1.15] mb-4">
              Wherever you're going, your money can come with you.
            </h3>
            <p className="text-[16px] text-white/70 leading-relaxed">
              Fozara gives people and businesses a simpler way to move and use
              money across borders.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <a
              href="#"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-[#E7EC32] px-8 py-4 text-[14.5px] font-medium text-[#0B291D] transition-transform duration-300 hover:scale-[1.02]"
            >
              Get started
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-white/10 px-8 py-4 text-[14.5px] font-medium text-white transition-colors duration-300 hover:bg-white/20"
            >
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
