import { useEffect, useState, useMemo } from "react";

export function useFadeIn(delayMs: number) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delayMs);
    return () => clearTimeout(t);
  }, [delayMs]);

  return {
    className: `transition-all duration-700 ease-out ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    }`,
  };
}


export const LANDMASSES = [
  { cx: 165, cy: 140, rx: 95, ry: 75 },
  { cx: 225, cy: 225, rx: 35, ry: 28 },
  { cx: 255, cy: 330, rx: 48, ry: 95 },
  { cx: 505, cy: 105, rx: 48, ry: 38 },
  { cx: 525, cy: 265, rx: 62, ry: 105 },
  { cx: 690, cy: 145, rx: 135, ry: 80 },
  { cx: 760, cy: 235, rx: 75, ry: 55 },
  { cx: 835, cy: 345, rx: 48, ry: 28 },
];

export function useWorldDots() {
  return useMemo(() => {
    const dots: { x: number; y: number; r: number }[] = [];
    const step = 22; // was 15 → much fewer dots
    for (let gx = 0; gx <= 1000; gx += step) {
      for (let gy = 0; gy <= 500; gy += step) {
        const inLand = LANDMASSES.some((c) => {
          const dx = (gx - c.cx) / c.rx;
          const dy = (gy - c.cy) / c.ry;
          return dx * dx + dy * dy <= 1;
        });
        if (!inLand) continue;
        if ((gx / step + gy / step) % 2 !== 0) continue;
        dots.push({ x: gx, y: gy, r: 1.35 });
      }
    }
    return dots;
  }, []);
}

export const FLOW_ROUTES = [
  { from: [190, 150], to: [520, 280], id: "usd-ngn" },
  { from: [500, 100], to: [700, 220], id: "gbp-kes" },
  { from: [500, 110], to: [520, 300], id: "eur-uga" },
];

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

export const SEND_CURRENCIES: CurrencyOption[] = [
  {
    code: "USD",
    name: "US Dollar",
    symbol: "$",
    rateToUsd: 1,
    iconBg: "bg-blue-600",
    iconText: "$",
  },
  {
    code: "EUR",
    name: "Euro",
    symbol: "€",
    rateToUsd: 0.92,
    iconBg: "bg-blue-700",
    iconText: "€",
  },
  {
    code: "GBP",
    name: "British Pound",
    symbol: "£",
    rateToUsd: 0.79,
    iconBg: "bg-indigo-700",
    iconText: "£",
  },
];

export const STABLE_COINS: CurrencyOption[] = [
  {
    code: "USDC",
    name: "USD Coin",
    symbol: "USDC",
    rateToUsd: 1,
    iconBg: "bg-blue-500",
    iconText: "C",
  },
  {
    code: "USDT",
    name: "Tether",
    symbol: "USDT",
    rateToUsd: 1,
    iconBg: "bg-emerald-600",
    iconText: "T",
  },
  {
    code: "PYUSD",
    name: "PayPal USD",
    symbol: "PYUSD",
    rateToUsd: 1,
    iconBg: "bg-sky-700",
    iconText: "P",
  },
];

export const RECEIVE_CURRENCIES: CurrencyOption[] = [
  {
    code: "NGN",
    name: "Nigerian Naira",
    symbol: "₦",
    ratePerUsd: 1500,
    iconBg: "bg-green-700",
    iconText: "₦",
  },
  {
    code: "KES",
    name: "Kenyan Shilling",
    symbol: "KSh ",
    ratePerUsd: 130,
    iconBg: "bg-red-700",
    iconText: "K",
  },
  {
    code: "UGX",
    name: "Ugandan Shilling",
    symbol: "USh ",
    ratePerUsd: 3750,
    iconBg: "bg-amber-600",
    iconText: "U",
  },
  {
    code: "GHS",
    name: "Ghanaian Cedi",
    symbol: "GH₵ ",
    ratePerUsd: 15.5,
    iconBg: "bg-yellow-600",
    iconText: "₵",
  },
  {
    code: "EUR",
    name: "Euro",
    symbol: "€",
    ratePerUsd: 0.92,
    iconBg: "bg-blue-700",
    iconText: "€",
  },
];
