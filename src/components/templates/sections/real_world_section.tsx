import { User, Building2, Compass, ArrowRight } from "lucide-react";

const USE_CASES = [
  {
    tag: "Freelancer",
    icon: User,
    steps: [
      { label: "Client pays", detail: "USDC / USDT" },
      { label: "Fozara routes it", detail: "Instant conversion" },
      { label: "Lands in your bank", detail: "Local currency" },
    ],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    caption: "Global clients, local security.",
  },
  {
    tag: "Business",
    icon: Building2,
    steps: [
      { label: "Payroll is funded", detail: "Digital asset" },
      { label: "Fozara routes it", detail: "Bulk disbursement" },
      { label: "Contractor is paid", detail: "Local payout" },
    ],
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80",
    caption: "Seamless contractor payouts.",
  },
  {
    tag: "Nomad",
    icon: Compass,
    steps: [
      { label: "You hold digital money", detail: "Any wallet" },
      { label: "Fozara routes it", detail: "Real-time sync" },
      { label: "You spend locally", detail: "Everyday life" },
    ],
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80",
    caption: "Spend anywhere you travel.",
  },
];

export default function RealWorldUtilitySection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B291D] px-6 py-28 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-16 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-[#E7EC32]/[0.07] blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col gap-6 sm:mb-20 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-lg text-[38px] font-semibold leading-[1.15] tracking-tight text-white sm:text-[48px]">
            From digital money to real life
          </h2>
          <p className="max-w-sm text-[16px] leading-relaxed text-white/60 sm:text-right">
            Move digital assets across borders, then turn them into money people
            can actually spend.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {USE_CASES.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.tag}
                className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0F3326] p-7"
              >
                <div className="mb-8 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E7EC32]/12">
                    <Icon
                      className="h-[18px] w-[18px] text-[#E7EC32]"
                      strokeWidth={1.8}
                    />
                  </div>
                  <span className="text-[15px] font-medium text-white">
                    {item.tag}
                  </span>
                </div>

                <div className="relative mb-8 pl-5">
                  <div className="absolute bottom-2 left-[3px] top-2 w-px bg-white/12" />

                  {item.steps.map((step, idx) => {
                    const isRouter = idx === 1;
                    return (
                      <div
                        key={step.label}
                        className={idx > 0 ? "mt-3" : undefined}
                      >
                        <div className="relative flex items-center justify-between rounded-xl bg-white/[0.04] py-3 pl-4 pr-3.5">
                          <div
                            className={`absolute -left-5 h-1.5 w-1.5 rounded-full ${
                              isRouter ? "bg-[#E7EC32]" : "bg-white/25"
                            }`}
                          />
                          <span
                            className={`text-[13.5px] ${
                              isRouter
                                ? "font-medium text-[#E7EC32]"
                                : "font-medium text-white/90"
                            }`}
                          >
                            {step.label}
                          </span>
                          <span className="text-[12px] text-white/45">
                            {step.detail}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="relative h-40 overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0B291D]/55 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B291D] via-[#0B291D]/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-4">
                    <p className="text-[13.5px] font-medium leading-snug text-white">
                      {item.caption}
                    </p>
                    <ArrowRight
                      className="h-4 w-4 shrink-0 text-[#E7EC32]"
                      strokeWidth={2}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
