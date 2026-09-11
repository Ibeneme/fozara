import { importedImages } from "@/constants/image";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NAV_ITEMS = [
  { id: "personal", label: "Personal", href: "#personal" },
  { id: "business", label: "Business", href: "#business" },
  { id: "solutions", label: "Solutions", href: "#solutions" },
  { id: "resources", label: "Resources", href: "#resources" },
  { id: "company", label: "Company", href: "#company" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 pt-4">
      <nav
        className={`relative mx-auto flex max-w-[1180px] items-center justify-between rounded-full border px-5 py-3 transition-all duration-300 ease-out ${
          scrolled
            ? "border-[#143628] bg-[#0b291d]/90 backdrop-blur-xl"
            : "border-[#143628]/60 bg-[#0b291d]/80 backdrop-blur-md"
        }`}
        style={{
          boxShadow: scrolled
            ? "0 10px 30px -12px rgba(0,0,0,0.3)"
            : "0 8px 32px 0 rgba(0,0,0,0.2)",
        }}
      >
        {/* Brand - Redirects to Home */}
        <Link to="/" className="flex items-center">
          <img src={importedImages.logo} alt="FOZARA" className="h-7 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center md:flex">
          <div className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="rounded-full px-4 py-2 text-[14px] font-medium text-[#E2E8F0]"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Hackathon badge */}
          <a
            href="#hackathon"
            className="ml-3 flex items-center gap-1.5 rounded-full bg-[#E0EC27]/25 px-3.5 py-1.5 text-[13px] font-semibold text-[#E2E8F0]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#E0EC27]" />
            Hackathon
          </a>
        </div>

        <div className="flex items-center gap-2">
          <button className="hidden rounded-full px-4 py-2 text-[13px] font-semibold text-[#E2E8F0] sm:block">
            Sign in
          </button>
          <button className="hidden rounded-full bg-[#E0EC27] px-4.5 py-2 text-[13px] font-semibold text-[#0B1220] sm:block">
            Get started
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#E2E8F0] md:hidden"
          >
            <svg
              className="h-4.5 w-4.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            >
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mx-auto mt-2 max-w-[1180px] rounded-[14px] border border-[#143628] bg-[#0b291d] p-4 shadow-[0_20px_44px_-20px_rgba(0,0,0,0.4)] backdrop-blur-xl md:hidden">
          <div className="flex flex-col divide-y divide-[#143628]">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="py-3 text-[15px] font-medium text-[#E2E8F0]"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#hackathon"
              className="flex items-center gap-1.5 py-3 text-[15px] font-semibold text-[#E2E8F0]"
              onClick={() => setMobileOpen(false)}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#E0EC27]" />
              Hackathon
            </a>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <button className="flex-1 rounded-full border border-[#143628] px-4 py-2.5 text-[13px] font-semibold text-[#E2E8F0]">
              Sign in
            </button>
            <button className="flex-1 rounded-full bg-[#E0EC27] px-4 py-2.5 text-[13px] font-semibold text-[#0B1220]">
              Get started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
