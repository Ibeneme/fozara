import { useFadeIn } from "@/components/atoms/hero_section_atoms";
import {
  HeroBackground,
  TransactionCorridor,
} from "@/components/molecules/hero_molecules";

export default function FZRHero() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const headline = useFadeIn(isMobile ? 0 : 180);
  const sub = useFadeIn(isMobile ? 0 : 320);
  const ctas = useFadeIn(isMobile ? 0 : 440);
  const corridor = useFadeIn(580);
  const routes = useFadeIn(700);

  return (
    <div className="relative min-h-[90vh] w-full overflow-hidden bg-[#051a0e]">
      {/* Hidden on mobile screens via CSS `hidden md:block` to eliminate heavy rendering overhead */}
      <div className="hidden md:block">
        <HeroBackground />
      </div>

      <section className="relative mx-auto w-full max-w-[1180px] px-5 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16 md:pt-24">
        <h1
          {...headline}
          className={`mt-16 max-w-[820px] text-[36px] font-semibold leading-[1.08] tracking-[-0.02em] text-white xs:text-[42px] sm:mt-8 sm:text-[54px] md:text-[68px] lg:text-[76px] md:${headline.className}`}
        >
          Send money home <br /> without losing to{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #E7EC32, #B8F24C)",
            }}
          >
            the exchange
          </span>
          .
        </h1>

        <p
          {...sub}
          className={`mt-6 max-w-[480px] text-[16px] leading-[1.6] text-white/70 sm:mt-7 sm:text-[18px] md:text-[19px] md:${sub.className}`}
        >
          Fozara moves dollars, pounds and euros through stablecoins and settles
          them in local currency, in under a minute, for a flat fee you see
          before you send.
        </p>

        <div
          {...ctas}
          className={`mt-8 flex flex-wrap items-center gap-5 sm:mt-9 sm:gap-6 md:${ctas.className}`}
        >
          <button
            className="group relative overflow-hidden rounded-[10px] px-6 py-3.5 text-[15px] font-semibold text-[#0B1220] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] sm:px-7"
            style={{
              background: "linear-gradient(90deg, #E7EC32, #B8F24C)",
              boxShadow: "0 8px 30px -6px rgba(231,236,50,0.55)",
            }}
          >
            <span className="relative z-10">Get started</span>
            <span
              className="absolute inset-0 -translate-x-full transition-transform duration-500 group-hover:translate-x-0"
              style={{
                background: "linear-gradient(90deg, #B8F24C, #E7EC32)",
              }}
            />
          </button>
          <button className="group text-[15px] font-medium text-white/80 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-[#E7EC32]">
            See how it works
          </button>
        </div>

        <div
          {...corridor}
          className={`mt-12 sm:mt-16 md:${corridor.className}`}
        >
          <TransactionCorridor />
        </div>

        <div
          {...routes}
          className={`mt-6 flex flex-wrap gap-x-6 gap-y-2 md:${routes.className}`}
        >
          {["USD to NGN", "GBP to KES", "EUR to UGX", "USD to GHS"].map(
            (route) => (
              <span
                key={route}
                className="cursor-default text-[13px] font-medium text-white/50 transition-colors hover:text-[#E7EC32]"
              >
                {route}
              </span>
            )
          )}
        </div>
      </section>
    </div>
  );
}
