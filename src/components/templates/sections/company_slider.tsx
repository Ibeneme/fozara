const BRANDS = [
  { name: "PAY", icon: "◈" },
  { name: "KWANZA", icon: "⬡" },
  { name: "NILE CAPITAL", icon: "◎" },
  { name: "AFROT&RADE", icon: "◇" },
  { name: "SAVANNAH", icon: "△" },
  { name: "ZENITH REMIT", icon: "✦" },
  { name: "APEX GLOBAL", icon: "◯" },
  { name: "VELA PAY", icon: "◈" },
];

function BrandItem({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex shrink-0 items-center gap-2.5 px-5">
      <span className="text-[15px] text-[#0B1220]/55 leading-none">{icon}</span>
      <span className="text-[13px] font-medium tracking-wide text-[#0B1220]/55">
        {name}
      </span>
    </div>
  );
}

export default function BrandScroller() {
  const items = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section className="w-full bg-[#E7EC32] py-10">
      <p className="mb-8 text-center text-[13px] font-medium tracking-wide text-[#0B1220]/60">
        Trusted by 200,000+ users worldwide
      </p>

      <div className="relative overflow-hidden">
        {/* Left Gradient Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#E7EC32] to-transparent" />

        {/* Right Gradient Fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#E7EC32] to-transparent" />

        {/* Marquee Track */}
        <div className="flex w-max animate-marquee items-center gap-10">
          {items.map((brand, i) => (
            <BrandItem
              key={`${brand.name}-${i}`}
              name={brand.name}
              icon={brand.icon}
            />
          ))}
        </div>
      </div>

      {/* Standard HTML style tag compatible with React + Vite */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-marquee {
          animation: marquee 45s linear infinite;
          will-change: transform;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
