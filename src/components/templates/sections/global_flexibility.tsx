import { useState } from "react";

interface Persona {
  index: string;
  title: string;
  description: string;
  cta?: { label: string; href: string };
}

const PERSONAS: Persona[] = [
  {
    index: "01",
    title: "Freelancer",
    description: "Get paid by clients anywhere in the world.",
  },
  {
    index: "02",
    title: "Remote Worker",
    description: "Receive your income wherever you choose to live.",
  },
  {
    index: "03",
    title: "Digital Nomad",
    description: "Take your money with you.",
  },
  {
    index: "04",
    title: "Business",
    description:
      "Collect revenue globally and send payouts to contractors and vendors from one platform.",
    cta: {
      label: "Explore for business",
      href: "",
    },
  },
  {
    index: "05",
    title: "NGO",
    description: "Move funds where they are needed.",
  },
];

function PersonaRow({
  persona,
  isOpen,
  onOpen,
}: {
  persona: Persona;
  isOpen: boolean;
  onOpen: () => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      onMouseEnter={onOpen}
      onFocus={onOpen}
      onClick={onOpen}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen()}
      className={`cursor-pointer border-b border-white/10 py-6 outline-none transition-colors duration-300 first:pt-0 last:border-b-0 sm:py-7 ${
        isOpen ? "bg-white/[0.03]" : ""
      }`}
    >
      <div className="flex items-baseline gap-4 px-1 sm:gap-6 sm:px-2">
        <span
          className={`text-[13px] font-medium tabular-nums transition-colors duration-300 ${
            isOpen ? "text-[#D7E639]" : "text-white/35"
          }`}
        >
          {persona.index}
        </span>
        <h3
          className={`text-[22px] font-semibold tracking-[-0.01em] transition-colors duration-300 sm:text-[26px] ${
            isOpen ? "text-white" : "text-white/60"
          }`}
        >
          {persona.title}
        </h3>
      </div>

      <div
        className="grid transition-[grid-template-rows] duration-500 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="max-w-[520px] px-1 pl-[52px] pt-3 sm:px-2 sm:pl-[68px]">
            <p className="text-[15px] leading-relaxed text-white/55 sm:text-[16px]">
              {persona.description}
            </p>
            {persona.cta && (
              <a
                href={persona.cta.href}
                className="group mt-4 inline-flex items-center gap-1.5 text-[14px] font-medium text-[#D7E639] transition-opacity hover:opacity-80"
              >
                {persona.cta.label}
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GlobalFlexibility() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-[#0b291d] px-5 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
          <h2 className="text-[36px] font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-[42px]">
            Global flexibility.
          </h2>
          <p className="mt-3 text-[18px] font-medium text-white/70 sm:text-[19px]">
            Built for the way you work.
          </p>
          <p className="mt-5 max-w-[380px] text-[16px] leading-relaxed text-white/50">
            Whether you're working remotely, running a business, or moving
            between countries, Fozara gives you one place to manage money across
            borders.
          </p>
          <a
            href=""
            className="group relative mt-8 inline-flex items-center gap-2 overflow-hidden rounded-[8px] px-6 py-3.5 text-[15px] font-semibold text-[#0E1116] transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_10px_36px_-6px_rgba(215,230,57,0.55)] active:scale-[0.98]"
            style={{ background: "linear-gradient(90deg, #D7E639, #B8F24C)" }}
          >
            <span className="relative z-10">Get started in minutes</span>
            <span
              className="absolute inset-0 -translate-x-full transition-transform duration-500 group-hover:translate-x-0"
              style={{ background: "linear-gradient(90deg, #B8F24C, #D7E639)" }}
            />
          </a>
        </div>

        <div className="relative lg:col-span-8">
          <div className="absolute left-0 top-0 hidden h-full w-px bg-white/10 sm:block" />
          <div
            className="absolute left-0 hidden w-px bg-gradient-to-b from-[#D7E639] to-[#B8F24C] transition-all duration-500 ease-out sm:block"
            style={{
              height: `${100 / PERSONAS.length}%`,
              top: `${(activeIndex / PERSONAS.length) * 100}%`,
              boxShadow: "0 0 12px 1px rgba(215,230,57,0.5)",
            }}
          />
          <div className="sm:pl-6">
            {PERSONAS.map((persona, i) => (
              <PersonaRow
                key={persona.index}
                persona={persona}
                isOpen={activeIndex === i}
                onOpen={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
