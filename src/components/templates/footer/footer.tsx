import { importedImages } from "@/constants/image";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B291D] text-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20 pb-16 border-b border-white/10">
          <div>
            <Link to="/" className="inline-block">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={importedImages.logo}
                  alt="Fozara Logo"
                  className="h-8 w-auto"
                />
              </div>
            </Link>
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
          <div>
            <h4 className="text-[14px] font-semibold tracking-wider uppercase text-[#E7EC32] mb-5">
              Personal
            </h4>
            <ul className="space-y-3.5 text-[14.5px] text-white/70">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Freelancers
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Remote Workers
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Digital Nomads
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] font-semibold tracking-wider uppercase text-[#E7EC32] mb-5">
              Business
            </h4>
            <ul className="space-y-3.5 text-[14.5px] text-white/70">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  SMEs
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Businesses
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  NGOs
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Developers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] font-semibold tracking-wider uppercase text-[#E7EC32] mb-5">
              Solutions
            </h4>
            <ul className="space-y-3.5 text-[14.5px] text-white/70">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Get Paid
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Send
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Convert
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Local Payouts
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Digital Assets
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  API
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] font-semibold tracking-wider uppercase text-[#E7EC32] mb-5">
              Company
            </h4>
            <ul className="space-y-3.5 text-[14.5px] text-white/70">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Hackathon
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Hackathon API docs
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Delete Account
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Link to="/" className="inline-block">
          <h2 className="relative z-15 pb-4 text-5xl font-extrabold tracking-tight text-white drop-shadow-md md:text-8xl hover:opacity-90 transition-opacity">
            Fozara <span style={{ color: "#E7EC32" }}>.</span>
          </h2>
        </Link>

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
