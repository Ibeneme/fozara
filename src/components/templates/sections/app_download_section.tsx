import React, { useState, useEffect, useRef } from "react";
import { Apple, Play } from "lucide-react";
import { QrCode, StoreBadge } from "@/utils/qrcode";
import { importedImages } from "@/constants/image";

export default function AppDownloadSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width - 0.5;
    const y = (clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="w-full bg-[#f8fafc] px-4 py-16 md:px-8 overflow-hidden"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-12">
        <div
          style={{
            transform: isVisible
              ? `perspective(1000px) rotateY(${mousePos.x * 3}deg) rotateX(${
                  -mousePos.y * 3
                }deg)`
              : "none",
          }}
          className={`relative flex h-[460px] flex-col justify-between overflow-hidden rounded-[28px] p-8 shadow-sm md:h-[520px] md:p-10 lg:col-span-7 transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="absolute inset-0 z-0">
            <img
              src={importedImages.section_b}
              alt="Friends walking on grass"
              style={{
                transform: `scale(1.08) translate(${mousePos.x * -15}px, ${
                  mousePos.y * -15
                }px)`,
              }}
              className="h-full w-full object-cover object-center transition-transform duration-200 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/25" />
          </div>

          <div
            className={`relative z-10 max-w-sm transition-all duration-700 delay-150 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-sm font-medium leading-relaxed tracking-tight text-white/95 drop-shadow-sm md:text-base">
              Built for the way money moves today. Move supported digital assets
              including USDC, USDT, BTC, and ETH — alongside major currencies.
            </p>
          </div>

          <div
            className={`relative z-10 flex w-full items-center gap-4 rounded-2xl border border-white/40 bg-white/25 p-4 shadow-xl backdrop-blur-2xl sm:w-[400px] transition-all duration-700 delay-300 hover:scale-[1.02] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-md">
              <QrCode />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-sm font-semibold tracking-tight text-white md:text-base">
                Scan to download
              </h4>
              <p className="mt-0.5 text-xs leading-snug text-white/85">
                Point your phone's camera at the code to get the app.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <StoreBadge
                  icon={<Apple className="h-3.5 w-3.5 fill-current" />}
                  label="App Store"
                />
                <StoreBadge
                  icon={<Play className="h-3.5 w-3.5 fill-current" />}
                  label="Google Play"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            transform: isVisible
              ? `perspective(1000px) rotateY(${mousePos.x * 3}deg) rotateX(${
                  -mousePos.y * 3
                }deg)`
              : "none",
          }}
          className={`relative flex h-[460px] flex-col justify-between overflow-hidden rounded-[28px] bg-[#dbeafe] p-6 shadow-sm md:h-[520px] md:p-8 lg:col-span-5 transition-all duration-700 delay-200 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="absolute inset-0 z-0">
            <div className="relative h-full w-full overflow-hidden">
              <img
                src={importedImages.section_b_a}
                alt="Person wearing a green sweater, smiling"
                style={{
                  transform: `scale-105 scale-x-[-1] translate(${
                    mousePos.x * 20
                  }px, ${mousePos.y * 20}px)`,
                }}
                className="h-full w-full object-cover object-center transition-transform duration-200 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 mix-blend-multiply pointer-events-none" />
            </div>
            <div className="absolute inset-0 bg-black/10" />
          </div>

          <div
            className={`relative z-10 flex min-w-[130px] flex-col items-start self-end rounded-2xl border border-white/20 bg-white/90 px-5 py-3 shadow-lg backdrop-blur-md transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-6"
            }`}
          >
            <span className="text-xs font-medium tracking-wide text-gray-500">
              Earnings
            </span>
            <span className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
              $160.00
            </span>
          </div>

          <h2
            className={`relative z-15 text-5xl font-extrabold tracking-tight text-white drop-shadow-md md:text-8xl transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Fozara <span style={{ color: "#E7EC32" }}>.</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
