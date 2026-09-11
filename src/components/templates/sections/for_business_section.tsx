
import {
  Users,
  Package,
  Globe2,
  Coins,
  Landmark,
  Layers,
  Code2,
  ArrowRight,
} from "lucide-react";

const FEATURES = [
  {
    icon: Users,
    title: "Pay contractors",
    description:
      "Send payments to freelancers and remote teams in any country.",
  },
  {
    icon: Package,
    title: "Pay suppliers",
    description:
      "Settle invoices with international vendors quickly and reliably.",
  },
  {
    icon: Globe2,
    title: "Collect international revenue",
    description:
      "Accept payments from customers around the world in one place.",
  },
  {
    icon: Coins,
    title: "Manage digital assets",
    description: "Hold, convert and move crypto alongside traditional money.",
  },
  {
    icon: Landmark,
    title: "Make local payouts",
    description:
      "Deliver funds into local bank accounts or mobile money wallets.",
  },
  {
    icon: Layers,
    title: "Manage multiple currencies",
    description:
      "Operate across currencies without opening accounts in every country.",
  },
  {
    icon: Code2,
    title: "Integrate payments into products",
    description:
      "Embed Fozara into your product with simple, developer-friendly APIs.",
  },
];

export default function ForBusinessSection() {
  return (
    <section className="w-full bg-white py-28 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="mb-5 text-[13px] font-medium tracking-[0.2em] uppercase text-[#0B1220]/45">
            For business
          </p>

          <h2 className="text-[42px] font-semibold leading-[1.12] tracking-tight text-[#0B1220] sm:text-[50px]">
            Run your business
            <br />
            across borders.
          </h2>

          <p className="mt-6 text-[17px] leading-relaxed text-[#0B1220]/65 max-w-xl">
            Pay people, collect money, and move funds globally from one
            financial platform.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#0B1220] px-7 py-3.5 text-[14px] font-medium tracking-wide text-white transition-all duration-300 hover:bg-[#0B1220]/90 hover:scale-[1.02]"
            >
              Explore Fozara for Business
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-[#0B1220]/15 bg-transparent px-7 py-3.5 text-[14px] font-medium tracking-wide text-[#0B1220] transition-all duration-300 hover:border-[#0B1220]/30 hover:bg-[#0B1220]/[0.03]"
            >
              Build with Fozara
            </a>
          </div>
        </div>

        {/* Features grid */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <div key={feature.title} className="group relative">
                {/* Icon */}
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#E7EC32]/15 border border-[#E7EC32]/25 transition-all duration-300 group-hover:bg-[#E7EC32]/25 group-hover:scale-105">
                  <Icon className="h-5 w-5 text-[#0B1220]" strokeWidth={1.7} />
                </div>

                {/* Title */}
                <h3 className="text-[17px] font-semibold tracking-tight text-[#0B1220]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-[14.5px] leading-relaxed text-[#0B1220]/60">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
