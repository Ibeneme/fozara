"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Coins } from "lucide-react";

const ASSETS = [
  { symbol: "USDC", name: "USD Coin", badge: "Stablecoin" },
  { symbol: "USDT", name: "Tether", badge: "Stablecoin" },
  { symbol: "BTC", name: "Bitcoin", badge: "Crypto" },
  { symbol: "ETH", name: "Ethereum", badge: "Crypto" },
];

const STEPS = [
  {
    label: "Digital assets",
    detail: "Initiate funds using stablecoins or crypto",
  },
  {
    label: "Fozara",
    detail: "Instant cross-border routing engine",
  },
  {
    label: "Local payout",
    detail: "Delivered cleanly to everyday local accounts",
    dark: true,
  },
];

export default function PoweredBySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const assetsContainerRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header reveal animation
      gsap.from(headerRef.current?.children || [], {
        y: 35,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          once: true,
        },
      });

      // 2. Asset cards stagger fade-in & upward slide
      if (assetsContainerRef.current) {
        const cards = assetsContainerRef.current.children;
        gsap.from(cards, {
          y: 45,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: assetsContainerRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }

      // 3. Routing steps stagger reveal from right
      if (stepsContainerRef.current) {
        const stepItems = stepsContainerRef.current.children;
        gsap.from(stepItems, {
          x: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stepsContainerRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert(); // Clean up GSAP context on unmount
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FAFAF7] px-6 py-28 sm:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div
          ref={headerRef}
          className="mb-16 flex flex-col gap-6 sm:mb-20 sm:flex-row sm:items-end sm:justify-between"
        >
          <h2 className="max-w-lg text-[38px] font-semibold leading-[1.15] tracking-tight text-[#0B291D] sm:text-[48px]">
            Powered by digital assets
          </h2>
          <p className="max-w-sm text-[16px] leading-relaxed text-[#0B291D]/60 sm:text-right">
            Stablecoin and crypto rails connect to the banking networks people
            already use, so money moves fast and lands where it's spent.
          </p>
        </div>

        {/* Layout grid */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
          {/* Left: asset grid */}
          <div
            ref={assetsContainerRef}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7"
          >
            {ASSETS.map((asset) => (
              <div
                key={asset.symbol}
                className="rounded-3xl border border-[#0B291D]/[0.06] bg-white p-7 shadow-xs"
              >
                <div className="mb-7 flex items-center justify-between">
                  <span className="text-[22px] font-semibold tracking-tight text-[#0B291D]">
                    {asset.symbol}
                  </span>
                  <span className="rounded-full bg-[#FAFAF7] px-3 py-1 text-[12px] font-medium text-[#0B291D]/50">
                    {asset.badge}
                  </span>
                </div>
                <p className="text-[14.5px] font-medium text-[#0B291D]/75">
                  {asset.name}
                </p>
              </div>
            ))}

            {/* Note card */}
            <div className="flex items-center gap-4 rounded-3xl bg-[#E7EC32] p-7 sm:col-span-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#0B291D]/10">
                <Coins
                  className="h-[18px] w-[18px] text-[#0B291D]"
                  strokeWidth={1.8}
                />
              </div>
              <p className="text-[14px] font-medium leading-snug text-[#0B291D]">
                Supported assets include the above and others — the list isn't
                exhaustive.
              </p>
            </div>
          </div>

          {/* Right: routing pipeline */}
          <div className="relative lg:col-span-5">
            <div className="absolute bottom-6 left-[35px] top-6 w-px bg-[#0B291D]/10" />

            <div ref={stepsContainerRef} className="flex flex-col gap-4">
              {STEPS.map((step) => (
                <div
                  key={step.label}
                  className={`relative flex items-center gap-5 rounded-3xl p-7 ${
                    step.dark
                      ? "bg-[#0B291D] text-white"
                      : "border border-[#0B291D]/[0.06] bg-white shadow-xs"
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                      step.dark ? "bg-white/10" : "bg-[#FAFAF7]"
                    }`}
                  >
                    <div
                      className={`h-2 w-2 rounded-full ${
                        step.dark ? "bg-[#E7EC32]" : "bg-[#0B291D]/25"
                      }`}
                    />
                  </div>
                  <div>
                    <h4
                      className={`text-[16px] font-semibold ${
                        step.dark ? "text-white" : "text-[#0B291D]"
                      }`}
                    >
                      {step.label}
                    </h4>
                    <p
                      className={`mt-0.5 text-[13.5px] ${
                        step.dark ? "text-white/60" : "text-[#0B291D]/55"
                      }`}
                    >
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
