import React, { useEffect, useState, useRef } from "react";
import {
  useWorldDots,
  FLOW_ROUTES,
  SEND_CURRENCIES,
  STABLE_COINS,
  RECEIVE_CURRENCIES,
} from "@/components/atoms/hero_section_atoms";


export type CurrencyOption = {
    code: string;
    symbol: string;
    name: string;
    flag?: string;
    rateToUsd?: number;
    ratePerUsd?: number;
    iconBg?: string;
    iconText?: string;
  };
  
export function FlowArc({
  from,
  to,
  delay,
}: {
  from: number[];
  to: number[];
  delay: number;
}) {
  const midX = (from[0] + to[0]) / 2;
  const midY = Math.min(from[1], to[1]) - 55;
  const d = `M ${from[0]} ${from[1]} Q ${midX} ${midY} ${to[0]} ${to[1]}`;

  return (
    <g>
      <path
        d={d}
        fill="none"
        stroke="#E7EC32"
        strokeOpacity="0.14"
        strokeWidth="1.5"
      />
      <path
        d={d}
        fill="none"
        stroke="#E7EC32"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="6 220"
        className="fzr-flow"
        style={{ animationDelay: `${delay}s` }}
      />
      <circle
        cx={from[0]}
        cy={from[1]}
        r="2.8"
        fill="#E7EC32"
        fillOpacity="0.75"
      />
      <circle
        cx={to[0]}
        cy={to[1]}
        r="3"
        fill="#E7EC32"
        className="fzr-pulse"
        style={{ animationDelay: `${delay}s` }}
      />
    </g>
  );
}

export function WorldMap() {
  const dots = useWorldDots();

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1000 500"
      preserveAspectRatio="xMidYMid slice"
      style={{ contain: "strict" }}
    >
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.x}
          cy={d.y}
          r={d.r}
          fill="#F7F7F2"
          fillOpacity="0.16"
        />
      ))}
      {/* Only 2 arcs instead of 3 */}
      {FLOW_ROUTES.slice(0, 2).map((r, i) => (
        <FlowArc key={r.id} from={r.from} to={r.to} delay={i * 1.3} />
      ))}
    </svg>
  );
}

export function HeroBackground() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#0E1116]" />

      {/* Lighter blur + smaller size on mobile */}
      <div
        className="absolute -left-[12%] -top-[28%] h-[700px] w-[700px] rounded-full opacity-[0.38] blur-[100px] md:h-[900px] md:w-[900px] md:opacity-[0.45] md:blur-[160px]"
        style={{
          background:
            "radial-gradient(circle, #E7EC32 0%, #B8F24C 45%, transparent 72%)",
          animation: "fzr-drift-a 28s ease-in-out infinite",
        }}
      />
      <div
        className="absolute right-[-18%] top-[8%] h-[480px] w-[480px] rounded-full opacity-[0.14] blur-[90px] md:h-[600px] md:w-[600px] md:opacity-[0.18] md:blur-[150px]"
        style={{
          background: "#5EE0C0",
          animation: "fzr-drift-b 32s ease-in-out infinite",
        }}
      />

      <div className="absolute inset-0 opacity-[0.9]">
        <WorldMap />
      </div>

      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="fzr-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0E1116" stopOpacity="0.15" />
            <stop offset="55%" stopColor="#0E1116" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#0E1116" stopOpacity="0.92" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#fzr-fade)" />
      </svg>

      <style>{`
        @keyframes fzr-drift-a {
          0%, 100% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(30px,22px,0) scale(1.06); }
        }
        @keyframes fzr-drift-b {
          0%, 100% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(-22px,16px,0) scale(1.05); }
        }
        @keyframes fzr-flow {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -226; }
        }
        .fzr-flow {
          animation: fzr-flow 5.5s linear infinite;
        }
        @keyframes fzr-pulse {
          0%, 100% { r: 3; opacity: 0.8; }
          50% { r: 6.5; opacity: 0; }
        }
        .fzr-pulse {
          animation: fzr-pulse 2.8s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .fzr-flow,
          .fzr-pulse,
          [style*="fzr-drift"] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export function CustomDropdown({
  options,
  selected,
  onSelect,
  align = "right",
}: {
  options: CurrencyOption[];
  selected: CurrencyOption;
  onSelect: (option: CurrencyOption) => void;
  align?: "left" | "right";
}) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node))
        setIsOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={wrapRef}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
        className={`group inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[13px] font-semibold outline-none transition-all duration-200 ${
          isOpen
            ? "border-[#E7EC32] bg-[#E7EC32] text-[#0B1220]"
            : "border-[#143628] bg-[#0b291d] text-[#E2E8F0] hover:border-[#143628]/80 hover:bg-[#103525]"
        }`}
      >
        <span
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white shadow-inner ${selected.iconBg}`}
        >
          {selected.iconText}
        </span>
        <span>{selected.code}</span>
        <svg
          className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[#0B1220]" : "text-[#9CA3AF]"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        role="listbox"
        className={`absolute z-[99999] mt-2.5 w-[14rem] max-w-[85vw] origin-top rounded-xl border border-[#143628] bg-[#0b291d] p-1.5 shadow-2xl backdrop-blur-xl transition-all duration-200 ${
          align === "right"
            ? "right-0 origin-top-right"
            : "left-0 origin-top-left"
        } ${
          isOpen
            ? "pointer-events-auto scale-100 opacity-100 translate-y-0"
            : "pointer-events-none scale-95 opacity-0 -translate-y-1"
        }`}
      >
        {options.map((option) => (
          <button
            key={option.code}
            role="option"
            aria-selected={selected.code === option.code}
            onClick={() => {
              onSelect(option);
              setIsOpen(false);
            }}
            className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] font-medium transition-colors ${
              selected.code === option.code
                ? "bg-[#143628] text-white font-semibold"
                : "text-[#E2E8F0]/80 hover:bg-[#143628]/50 hover:text-white"
            }`}
          >
            <span className="flex min-w-0 items-center gap-2.5">
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white shadow-sm ${option.iconBg}`}
              >
                {option.iconText}
              </span>
              <span className="flex min-w-0 flex-col">
                <span className="leading-tight text-white">{option.code}</span>
                <span
                  className={`truncate text-[11px] font-normal ${
                    selected.code === option.code
                      ? "text-white/70"
                      : "text-[#9CA3AF]"
                  }`}
                >
                  {option.name}
                </span>
              </span>
            </span>
            {selected.code === option.code && (
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#E7EC32]" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

function CorridorStage({
  label,
  control,
  children,
  isLast = false,
}: {
  label: string;
  control: React.ReactNode;
  children: React.ReactNode;
  isLast?: boolean;
}) {
  return (
    <div
      className={`group relative flex-1 border-b border-[#143628] bg-[#0b291d] px-6 py-7 transition-colors duration-300 last:border-b-0 sm:px-8 md:border-b-0 md:py-8 ${
        !isLast ? "md:border-r md:border-[#143628]" : ""
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-[12px] font-semibold uppercase tracking-wider text-[#9CA3AF]">
          {label}
        </span>
        {control}
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function ConnectorDot({ active }: { active: boolean }) {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block">
      <span
        className={`block h-3 w-3 rounded-full border-2 border-[#0b291d] transition-all duration-500 ${
          active
            ? "scale-125 bg-[#E7EC32] shadow-[0_0_0_6px_rgba(231,236,50,0.22)]"
            : "bg-[#143628]"
        }`}
      />
    </div>
  );
}

export function TransactionCorridor() {
  const [stage, setStage] = useState(0);
  const [sendCurrency, setSendCurrency] = useState(SEND_CURRENCIES[0]);
  const [sendAmount, setSendAmount] = useState(500);
  const [stableCoin, setStableCoin] = useState(STABLE_COINS[0]);
  const [receiveCurrency, setReceiveCurrency] = useState(RECEIVE_CURRENCIES[0]);

  useEffect(() => {
    const interval = setInterval(() => setStage((s) => (s + 1) % 3), 3200);
    return () => clearInterval(interval);
  }, []);

  const amountInUsd = sendAmount / (sendCurrency.rateToUsd || 1);
  const convertedStableAmount = amountInUsd.toFixed(2);
  const calculatedReceiveAmount = (
    amountInUsd * (receiveCurrency.ratePerUsd || 1)
  ).toLocaleString(undefined, { maximumFractionDigits: 2 });

  return (
    <div className="group/card relative rounded-2xl border border-[#143628] bg-[#0b291d] shadow-[0_30px_90px_-25px_rgba(0,0,0,0.6)]">
      <div className="flex flex-col md:flex-row md:items-stretch overflow-visible rounded-t-2xl">
        <CorridorStage
          label="Send"
          control={
            <CustomDropdown
              options={SEND_CURRENCIES}
              selected={sendCurrency}
              onSelect={setSendCurrency}
            />
          }
        >
          <div className="flex items-baseline gap-1.5">
            <span className="text-[28px] font-bold text-white sm:text-[32px]">
              {sendCurrency.symbol}
            </span>
            <input
              type="number"
              value={sendAmount}
              onChange={(e) =>
                setSendAmount(Math.max(0, Number(e.target.value)))
              }
              className="w-full min-w-0 bg-transparent text-[28px] font-bold tabular-nums text-white outline-none sm:text-[32px]"
            />
          </div>
        </CorridorStage>

        <ConnectorDot active={stage === 0} />

        <CorridorStage
          label="Convert"
          control={
            <div className="flex items-center gap-2">
              <span className="hidden text-[12px] font-medium text-[#9CA3AF] sm:inline">
                at par
              </span>
              <CustomDropdown
                options={STABLE_COINS}
                selected={stableCoin}
                onSelect={setStableCoin}
              />
            </div>
          }
        >
          <div className="flex items-baseline gap-1.5">
            <span className="text-[28px] font-bold tabular-nums text-white sm:text-[32px]">
              {convertedStableAmount}
            </span>
          </div>
        </CorridorStage>

        <ConnectorDot active={stage === 1} />

        <CorridorStage
          label="Receive"
          isLast
          control={
            <CustomDropdown
              options={RECEIVE_CURRENCIES}
              selected={receiveCurrency}
              onSelect={setReceiveCurrency}
              align="right"
            />
          }
        >
          <div className="flex items-baseline gap-1.5 overflow-hidden">
            <span className="truncate text-[28px] font-bold tabular-nums text-white sm:text-[32px]">
              {receiveCurrency.symbol} {calculatedReceiveAmount}
            </span>
          </div>
        </CorridorStage>
      </div>

      <div className="relative h-[3px] w-full bg-[#143628]">
        <div
          className="absolute top-0 h-[3px] transition-all duration-[1400ms] ease-in-out"
          style={{
            left: stage === 2 ? "66.6%" : stage === 1 ? "33.3%" : "0%",
            width: "33.3%",
            background: "linear-gradient(90deg, #E7EC32, #B8F24C)",
            boxShadow: "0 0 16px 1px rgba(231,236,50,0.7)",
          }}
        />
      </div>

      <div className="flex items-center justify-between border-t border-[#143628] bg-[#072016] px-6 py-4 sm:px-8 rounded-b-2xl">
        <div className="flex gap-6 sm:gap-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#9CA3AF]">
              Fee
            </p>
            <p className="mt-0.5 text-[14px] font-semibold text-white">$2.50</p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#9CA3AF]">
              Arrival
            </p>
            <p className="mt-0.5 text-[14px] font-semibold text-white">
              Under a minute
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`inline-block h-2 w-2 rounded-full transition-colors duration-500 ${
              stage === 2 ? "bg-[#E7EC32]" : "bg-[#143628] animate-pulse"
            }`}
          />
          <span className="text-[13px] font-semibold text-white">
            {stage === 2 ? "Settled" : "Processing"}
          </span>
        </div>
      </div>
    </div>
  );
}
