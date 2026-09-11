import { importedImages } from "@/constants/image";

const STEPS = [
  { number: "01", title: "Get Paid" },
  { number: "02", title: "Hold" },
  { number: "03", title: "Convert" },
  { number: "04", title: "Send" },
  { number: "05", title: "Payout" },
  { number: "06", title: "Spend" },
];

export default function ProductSection() {
  return (
    <section className="w-full bg-[#fff] py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        {/* Top content with fade-in */}
        <div className="max-w-2xl animate-fade-in-up">
          <p className="mb-5 text-[13px] font-medium tracking-[0.18em] uppercase text-[#0B1220]/50">
            The product
          </p>

          <h2 className="text-[42px] font-semibold leading-[1.15] tracking-tight text-[#0B1220] sm:text-[48px]">
            One place for your money.
          </h2>

          <p className="mt-6 text-[17px] leading-relaxed text-[#0B1220]/70">
            Money enters Fozara once — digital or fiat. From there it can stay,
            change form, move across a border, or become something you spend in
            everyday life.
          </p>
        </div>

        {/* Illustration + Steps */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* SVG World Map Illustration with Floating Effect */}
          <div className="lg:col-span-7 w-full flex items-center justify-center">
            <div className="animate-float w-full">
              <img
                src={importedImages.world_b}
                alt="Fozara global network map"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Steps spanning 5 columns */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-x-8 gap-y-9">
              {STEPS.map((step, index) => (
                <div
                  key={step.number}
                  className="group cursor-pointer transition-transform duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-2 text-[12px] font-medium tracking-widest text-[#0B1220]/40 transition-colors duration-300 group-hover:text-[#E7EC32] group-hover:drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                    {step.number}
                  </div>
                  <div className="text-[16px] font-medium tracking-tight text-[#0B1220] transition-colors duration-300 group-hover:text-black">
                    {step.title}
                  </div>
                  <div className="mt-2.5 h-px w-7 bg-[#0B1220]/15 transition-all duration-300 group-hover:w-12 group-hover:bg-[#0B1220]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS Animation Keyframes for React + Vite */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
}
