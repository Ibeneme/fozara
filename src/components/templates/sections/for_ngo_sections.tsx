import {
  ArrowRight,
  HeartHandshake,
  Globe2,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function ForNGOsSection() {
  return (
    <section className="w-full bg-[#FAFAF7] py-32 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <p className="mb-4 text-[13px] font-medium tracking-[0.2em] uppercase text-[#0B291D]/45">
              For NGOs
            </p>
            <h2 className="text-[40px] font-semibold leading-[1.15] tracking-tight text-[#0B291D] sm:text-[48px]">
              Move money where it’s needed.
            </h2>
          </div>
          <p className="text-[17px] leading-relaxed text-[#0B291D]/65 max-w-md">
            Give your teams, partners, and programs a simpler way to move funds
            across borders — with clarity and control at every step.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-5 rounded-[32px] bg-[#E7EC32] p-9 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-12">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/10 backdrop-blur-md">
                  <HeartHandshake
                    className="h-6 w-6 text-[#0B291D]"
                    strokeWidth={1.8}
                  />
                </div>
                <span className="text-[12px] font-semibold uppercase tracking-widest text-[#0B291D]/60 bg-black/5 px-3 py-1 rounded-full">
                  Impact First
                </span>
              </div>
              <h3 className="text-[32px] font-semibold tracking-tight text-[#0B291D] leading-[1.15] mb-4">
                Transparent movement of funds
              </h3>
              <p className="text-[15.5px] text-[#0B291D]/75 leading-relaxed">
                Ensure every donation and payroll transaction reaches field
                operations cleanly and completely without friction.
              </p>
            </div>

            <div className="mt-12 pt-6 border-t border-black/10 flex items-center justify-between">
              <span className="text-[14px] font-medium text-[#0B291D]">
                Global Accountability
              </span>
              <Globe2 className="h-5 w-5 text-[#0B291D]/70" />
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-[32px] relative overflow-hidden p-8 flex flex-col justify-between min-h-[320px]">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&w=800&q=80"
                  alt="Field operations"
                  className="w-full h-full object-cover brightness-[0.7] scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              <div className="relative z-10">
                <span className="text-[11.5px] font-medium tracking-widest uppercase text-[#E7EC32] bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">
                  On the Ground
                </span>
              </div>

              <div className="relative z-10 pt-16">
                <h4 className="text-[22px] font-semibold text-white tracking-tight mb-2">
                  120+ Countries
                </h4>
                <p className="text-[14px] text-white/80 leading-relaxed">
                  Supporting frontline teams and local partner programs
                  worldwide.
                </p>
              </div>
            </div>
            <div className="rounded-[32px] bg-[#0B291D] p-8 flex flex-col justify-between text-white">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                  <ShieldCheck className="h-5 w-5 text-[#E7EC32]" />
                </div>
                <h4 className="text-[20px] font-semibold tracking-tight mb-3">
                  Local Payouts
                </h4>
                <p className="text-[14.5px] text-white/70 leading-relaxed">
                  Deliver funds directly into regional bank accounts and mobile
                  wallets safely.
                </p>
              </div>

              <a
                href="#"
                className="group mt-8 inline-flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 text-[13.5px] font-medium tracking-wide text-white transition-all duration-300 hover:bg-white/20"
              >
                <span>Talk to Fozara</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 text-[#E7EC32]" />
              </a>
            </div>

            <div className="sm:col-span-2 rounded-[28px] bg-white px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E7EC32]/20 flex items-center justify-center shrink-0">
                  <Zap className="h-4 w-4 text-[#0B291D]" />
                </div>
                <p className="text-[14.5px] font-medium text-[#0B291D]">
                  Contractor Payouts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
