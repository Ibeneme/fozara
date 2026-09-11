import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Wallet, Plane, CreditCard } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    id: 1,
    icon: Wallet,
    title: "Get paid",
    subtitle: "From anywhere in the world",
    description:
      "Receive money from clients and employers around the world — whether they pay in crypto, USD, EUR or local currency. No more chasing invoices across borders.",
    points: [
      "International client payments",
      "Employer payroll support",
      "Instant notification when funds arrive",
    ],
  },
  {
    id: 2,
    icon: Plane,
    title: "Move",
    subtitle: "Without starting over",
    description:
      "Send money across borders without building a new financial setup every time you move. Your money stays accessible no matter which city or country you land in next.",
    points: [
      "Borderless transfers",
      "Keep the same account while relocating",
      "Low, transparent fees",
    ],
  },
  {
    id: 3,
    icon: CreditCard,
    title: "Use",
    subtitle: "In real everyday life",
    description:
      "Turn digital money into something you can actually use locally — pay rent, buy groceries, or withdraw cash. Your money works where you live, not just where it was sent from.",
    points: [
      "Local currency conversion",
      "Spend with card or mobile money",
      "ATM withdrawals & bill payments",
    ],
  },
];

export default function ForPeopleSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // ——— DESKTOP ONLY: stacking effect ———
      const ctx = gsap.context(() => {
        const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
        if (cards.length === 0) return;

        cards.forEach((card, index) => {
          const isLast = index === cards.length - 1;

          if (!isLast) {
            ScrollTrigger.create({
              trigger: card,
              start: "top 15%",
              endTrigger: cards[cards.length - 1],
              end: "top 15%",
              pin: true,
              pinSpacing: false,
              scrub: true,
              anticipatePin: 1,
              onUpdate: (self) => {
                const progress = self.progress;

                gsap.to(card, {
                  scale: 1 - progress * 0.06,
                  y: -progress * 40,
                  opacity: 1 - progress * 0.3,
                  ease: "none",
                  overwrite: "auto",
                  duration: 0.1,
                });
              },
            });
          }

          // subtle entrance
          gsap.fromTo(
            card,
            { y: 60, opacity: 0.6 },
            {
              y: 0,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 50%",
                scrub: true,
              },
            }
          );
        });

        ScrollTrigger.refresh();
      }, sectionRef);

      return () => ctx.revert();
    });

    // Mobile (< 768px): no ScrollTrigger, just normal flow
    // (nothing to clean up)

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0B291D] py-24 sm:py-32 overflow-hidden"
    >
      {/* soft glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[400px] sm:h-[500px] bg-[#E7EC32]/8 blur-[100px] sm:blur-[120px] rounded-full" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-6">
        {/* Header */}
        <div className="mb-16 sm:mb-28 max-w-2xl">
          <p className="mb-4 sm:mb-5 text-[12px] sm:text-[13px] font-medium tracking-[0.2em] uppercase text-[#E7EC32]/80">
            For people
          </p>

          <h2 className="text-[34px] sm:text-[42px] md:text-[50px] font-semibold leading-[1.12] tracking-tight text-white">
            Work anywhere.
            <br />
            Get paid anywhere.
          </h2>

          <p className="mt-5 sm:mt-7 text-[15px] sm:text-[17px] leading-relaxed text-white/65 max-w-xl">
            For freelancers, remote workers, and digital nomads whose clients,
            employers, and life aren’t confined to one country.
          </p>
        </div>

        {/* Cards */}
        <div className="relative pb-16 sm:pb-24 space-y-10 sm:space-y-16">
          {CARDS.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="relative will-change-transform"
                style={{ zIndex: CARDS.length - index }}
              >
                <div className="rounded-[22px] sm:rounded-[28px] border border-white/10 bg-[#0F3326]/90 backdrop-blur-xl p-7 sm:p-9 md:p-12 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.5)]">
                  <div className="flex items-start justify-between mb-7 sm:mb-9">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-[#E7EC32]/15 border border-[#E7EC32]/25">
                      <Icon
                        className="h-5 w-5 sm:h-6 sm:w-6 text-[#E7EC32]"
                        strokeWidth={1.7}
                      />
                    </div>

                    <span className="text-[12px] sm:text-[13px] font-medium tracking-widest text-white/30">
                      0{card.id}
                    </span>
                  </div>

                  <div className="mb-4 sm:mb-5">
                    <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold tracking-tight text-white">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-[14px] sm:text-[15px] text-[#E7EC32]/90 font-medium">
                      {card.subtitle}
                    </p>
                  </div>

                  <p className="text-[15px] sm:text-[16px] leading-relaxed text-white/65 max-w-lg">
                    {card.description}
                  </p>

                  <ul className="mt-6 sm:mt-8 space-y-2.5 sm:space-y-3">
                    {card.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2.5 sm:gap-3 text-[13.5px] sm:text-[14.5px] text-white/70"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#E7EC32] shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 sm:mt-10 h-px w-16 sm:w-20 bg-gradient-to-r from-[#E7EC32] to-transparent" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
