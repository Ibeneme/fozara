import logo from "@/assets/logo.svg";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B291D] text-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        {/* Top Brand & Mission statement */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20 pb-16 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Fozara Logo" className="h-8 w-auto" />
            </div>
            <p className="text-[18px] font-medium text-white/90">
              Global money. Made useful.
            </p>
          </div>

          <div className="flex items-center gap-3 text-[13.5px] text-white/60 bg-white/5 px-4 py-2 rounded-full">
            <span>Backed by</span>
            <span className="font-semibold text-white">
              Modern Money Thoughts Inc.
            </span>
          </div>
        </div>

        {/* Footer Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
          {/* Column 1: Personal */}
          <div>
            <h4 className="text-[14px] font-semibold tracking-wider uppercase text-[#E7EC32] mb-5">
              Personal
            </h4>
            <ul className="space-y-3.5 text-[14.5px] text-white/70">
              <li>
                <span className="cursor-default">Freelancers</span>
              </li>
              <li>
                <span className="cursor-default">Remote Workers</span>
              </li>
              <li>
                <span className="cursor-default">Digital Nomads</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Business */}
          <div>
            <h4 className="text-[14px] font-semibold tracking-wider uppercase text-[#E7EC32] mb-5">
              Business
            </h4>
            <ul className="space-y-3.5 text-[14.5px] text-white/70">
              <li>
                <span className="cursor-default">SMEs</span>
              </li>
              <li>
                <span className="cursor-default">Businesses</span>
              </li>
              <li>
                <span className="cursor-default">NGOs</span>
              </li>
              <li>
                <span className="cursor-default">Developers</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <h4 className="text-[14px] font-semibold tracking-wider uppercase text-[#E7EC32] mb-5">
              Solutions
            </h4>
            <ul className="space-y-3.5 text-[14.5px] text-white/70">
              <li>
                <span className="cursor-default">Get Paid</span>
              </li>
              <li>
                <span className="cursor-default">Send</span>
              </li>
              <li>
                <span className="cursor-default">Convert</span>
              </li>
              <li>
                <span className="cursor-default">Local Payouts</span>
              </li>
              <li>
                <span className="cursor-default">Digital Assets</span>
              </li>
              <li>
                <span className="cursor-default">API</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="text-[14px] font-semibold tracking-wider uppercase text-[#E7EC32] mb-5">
              Company
            </h4>
            <ul className="space-y-3.5 text-[14.5px] text-white/70">
              <li>
                <span className="cursor-default">Careers</span>
              </li>
              <li>
                <span className="cursor-default">Hackathon</span>
              </li>
              <li>
                <span className="cursor-default">Hackathon API docs</span>
              </li>
              <li>
                <span className="cursor-default">Privacy</span>
              </li>
              <li>
                <span className="cursor-default">Delete Account</span>
              </li>
            </ul>
          </div>
        </div>
        <h2 className="relative z-15 pb-4 text-5xl font-extrabold tracking-tight text-white drop-shadow-md md:text-8xl">
          Fozara <span style={{ color: "#E7EC32" }}>.</span>
        </h2>
        {/* Legal Disclaimer & Copyright */}
        <div className="pt-12 border-t border-white/10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <p className="text-[13px] text-white/50 leading-relaxed max-w-3xl">
            Fozara is a product of Modern Money Thoughts Inc. Fozara is a
            financial technology company, not a bank. We provide money services
            powered by stablecoins. Virtual accounts, payment services and fiat
            on/off-ramp services are offered through licensed banking and
            financial partners. Service availability may vary by jurisdiction.
          </p>

          <p className="text-[13px] text-white/40 shrink-0">
            © 2026 Fozara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
