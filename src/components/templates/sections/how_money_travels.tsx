import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { importedImages } from "@/constants/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CITIES = [
  "New York",
  "Lagos",
  "London",
  "Nairobi",
  "Berlin",
  "Accra",
  "Toronto",
];

const STAGES = [
  {
    number: "01",
    title: "Global money",
    description:
      "Crypto, digital assets, or international transfers enter the network.",
  },
  {
    number: "02",
    title: "Fozara",
    description: "Everything is unified, converted, and prepared in one place.",
  },
  {
    number: "03",
    title: "Local money",
    description:
      "Funds become local currency ready for banks, mobile money, or cash.",
  },
  {
    number: "04",
    title: "Real life",
    description:
      "Spend, save, or send — money that works where you actually live.",
  },
];

export default function HowMoneyTravels() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect: image moves slightly slower/faster than scroll
      gsap.fromTo(
        imageRef.current,
        { y: -40 },
        {
          y: 40,
          ease: "none",
          scrollTrigger: {
            trigger: imageWrapperRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // Cleanup GSAP animations on unmount
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FAFAF7] py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="mb-4 text-[13px] font-medium tracking-[0.18em] uppercase text-[#0B1220]/50">
            How money travels
          </p>
          <h2 className="text-[40px] font-semibold leading-[1.15] tracking-tight text-[#0B1220] sm:text-[46px]">
            From anywhere in the world
            <br className="hidden sm:block" /> to wherever you are.
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-[#0B1220]/70">
            Fozara isn’t just about moving crypto between wallets. It connects
            digital and global money to local financial systems and everyday
            use.
          </p>
        </div>
      </div>

      {/* Full section width image container with Parallax & Fozara badge */}
      <div
        ref={imageWrapperRef}
        className="mt-12 w-full px-4 sm:px-6 overflow-hidden"
      >
        {/* Added 'relative' here so the absolute text positions inside this box */}
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl p-6 sm:p-10 flex flex-col items-start justify-end">
          <img
            ref={imageRef}
            src={importedImages.hero}
            alt="Money travel network illustration"
            className="w-full h-auto rounded-2xl object-cover max-h-[480px] scale-105"
          />

          {/* Added 'absolute' positioning, padding, and bottom/left anchors */}
          <h2 className="absolute bottom-12 left-12 sm:bottom-16 sm:left-16 z-15 text-5xl font-extrabold tracking-tight text-white drop-shadow-md md:text-8xl">
            Fozara <span style={{ color: "#E7EC32" }}>.</span>
          </h2>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* Cities as pills */}
        <div className="mt-8 flex flex-wrap gap-3">
          {CITIES.map((city) => (
            <span
              key={city}
              className="rounded-full border border-[#0B1220]/10 bg-white px-4 py-1.5 text-[13px] font-medium tracking-wide text-[#0B1220]/70 shadow-sm"
            >
              {city}
            </span>
          ))}
        </div>

        {/* Journey stages */}
        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((stage, index) => (
            <div key={stage.number} className="group relative">
              {index < STAGES.length - 1 && (
                <div
                  className="absolute top-5 left-full hidden h-px w-full bg-[#0B1220]/10 lg:block"
                  style={{ width: "calc(100% - 2rem)" }}
                />
              )}
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#0B1220]/15 bg-white text-[13px] font-medium tracking-widest text-[#0B1220]/60 transition-all duration-300 group-hover:border-[#0B1220]/30 group-hover:text-[#0B1220]">
                {stage.number}
              </div>
              <h3 className="text-[17px] font-medium tracking-tight text-[#0B1220]">
                {stage.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#0B1220]/60">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Standard HTML style tag compatible with React + Vite */}
      <style>{`
        @keyframes flow {
          to {
            stroke-dashoffset: -60;
          }
        }
        .animate-flow {
          animation: flow 3.8s linear infinite;
        }
        .delay-1 {
          animation-delay: 0.7s;
        }
        .delay-2 {
          animation-delay: 1.4s;
        }
        .delay-3 {
          animation-delay: 2.1s;
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.4;
          }
          70% {
            transform: scale(1.8);
            opacity: 0;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }
        .animate-ping-slow {
          animation: ping-slow 3.5s cubic-bezier(0, 0, 0.2, 1) infinite;
          transform-origin: center;
          transform-box: fill-box;
        }
      `}</style>
    </section>
  );
}
