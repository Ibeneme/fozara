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
    <section className="w-full bg-[#E7EC32] py-10 overflow-hidden">
      <p className="mb-8 text-center text-[13px] font-medium tracking-wide text-[#0B1220]/60">
        Trusted by 200,000+ users worldwide
      </p>

      {/* Marquee Track using standard inline flex container */}
      <div className="flex w-max items-center gap-10">
        {items.map((brand, i) => (
          <BrandItem
            key={`${brand.name}-${i}`}
            name={brand.name}
            icon={brand.icon}
          />
        ))}
      </div>
    </section>
  );
}
