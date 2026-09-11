import React from "react";

export const DOWNLOAD_URL = "";
export const QR_MODULES = 29;

export function StoreBadge({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={DOWNLOAD_URL}
      className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-black/50 px-2.5 py-1.5 text-[11px] font-medium text-white shadow-sm backdrop-blur-md transition-colors hover:bg-black/65"
    >
      {icon}
      {label}
    </a>
  );
}

export function QrCode() {
  return (
    <svg
      viewBox={`-2 -2 ${QR_MODULES + 4} ${QR_MODULES + 4}`}
      className="h-full w-full"
      shapeRendering="crispEdges"
      role="img"
      aria-label={`QR code linking to ${DOWNLOAD_URL}`}
    >
      <rect
        x={-2}
        y={-2}
        width={QR_MODULES + 4}
        height={QR_MODULES + 4}
        fill="#ffffff"
      />
      <g fill="#0f172a">
        <rect x="0" y="0" width="7" height="1" />
        <rect x="9" y="0" width="1" height="1" />
        <rect x="12" y="0" width="1" height="1" />
        <rect x="14" y="0" width="1" height="1" />
        <rect x="17" y="0" width="3" height="1" />
        <rect x="22" y="0" width="7" height="1" />
        <rect x="0" y="1" width="1" height="1" />
        <rect x="6" y="1" width="1" height="1" />
        <rect x="8" y="1" width="4" height="1" />
        <rect x="13" y="1" width="1" height="1" />
        <rect x="18" y="1" width="3" height="1" />
        <rect x="22" y="1" width="1" height="1" />
        <rect x="28" y="1" width="1" height="1" />
        <rect x="0" y="2" width="1" height="1" />
        <rect x="2" y="2" width="3" height="1" />
        <rect x="6" y="2" width="1" height="1" />
        <rect x="9" y="2" width="2" height="1" />
        <rect x="12" y="2" width="1" height="1" />
        <rect x="15" y="2" width="1" height="1" />
        <rect x="18" y="2" width="2" height="1" />
        <rect x="22" y="2" width="1" height="1" />
        <rect x="24" y="2" width="3" height="1" />
        <rect x="28" y="2" width="1" height="1" />
        <rect x="0" y="3" width="1" height="1" />
        <rect x="2" y="3" width="3" height="1" />
        <rect x="6" y="3" width="1" height="1" />
        <rect x="9" y="3" width="2" height="1" />
        <rect x="13" y="3" width="1" height="1" />
        <rect x="16" y="3" width="1" height="1" />
        <rect x="18" y="3" width="3" height="1" />
        <rect x="22" y="3" width="1" height="1" />
        <rect x="24" y="3" width="3" height="1" />
        <rect x="28" y="3" width="1" height="1" />
        <rect x="0" y="4" width="1" height="1" />
        <rect x="2" y="4" width="3" height="1" />
        <rect x="6" y="4" width="1" height="1" />
        <rect x="8" y="4" width="2" height="1" />
        <rect x="13" y="4" width="1" height="1" />
        <rect x="16" y="4" width="4" height="1" />
        <rect x="22" y="4" width="1" height="1" />
        <rect x="24" y="4" width="3" height="1" />
        <rect x="28" y="4" width="1" height="1" />
        <rect x="0" y="5" width="1" height="1" />
        <rect x="6" y="5" width="1" height="1" />
        <rect x="9" y="5" width="1" height="1" />
        <rect x="11" y="5" width="2" height="1" />
        <rect x="14" y="5" width="7" height="1" />
        <rect x="22" y="5" width="1" height="1" />
        <rect x="28" y="5" width="1" height="1" />
        <rect x="0" y="6" width="7" height="1" />
        <rect x="8" y="6" width="1" height="1" />
        <rect x="10" y="6" width="1" height="1" />
        <rect x="12" y="6" width="1" height="1" />
        <rect x="14" y="6" width="1" height="1" />
        <rect x="16" y="6" width="1" height="1" />
        <rect x="18" y="6" width="1" height="1" />
        <rect x="20" y="6" width="1" height="1" />
        <rect x="22" y="6" width="7" height="1" />
        <rect x="10" y="7" width="1" height="1" />
        <rect x="15" y="7" width="1" height="1" />
        <rect x="17" y="7" width="1" height="1" />
        <rect x="20" y="7" width="1" height="1" />
        <rect x="0" y="8" width="1" height="1" />
        <rect x="2" y="8" width="1" height="1" />
        <rect x="4" y="8" width="1" height="1" />
        <rect x="6" y="8" width="1" height="1" />
        <rect x="11" y="8" width="1" height="1" />
        <rect x="16" y="8" width="2" height="1" />
        <rect x="19" y="8" width="2" height="1" />
        <rect x="24" y="8" width="1" height="1" />
        <rect x="27" y="8" width="1" height="1" />
        <rect x="1" y="9" width="3" height="1" />
        <rect x="5" y="9" width="1" height="1" />
        <rect x="9" y="9" width="1" height="1" />
        <rect x="11" y="9" width="3" height="1" />
        <rect x="15" y="9" width="2" height="1" />
        <rect x="20" y="9" width="1" height="1" />
        <rect x="22" y="9" width="1" height="1" />
        <rect x="25" y="9" width="1" height="1" />
        <rect x="28" y="9" width="1" height="1" />
        <rect x="0" y="10" width="2" height="1" />
        <rect x="3" y="10" width="1" height="1" />
        <rect x="6" y="10" width="1" height="1" />
        <rect x="14" y="10" width="4" height="1" />
        <rect x="20" y="10" width="1" height="1" />
        <rect x="22" y="10" width="3" height="1" />
        <rect x="26" y="10" width="3" height="1" />
        <rect x="2" y="11" width="1" height="1" />
        <rect x="4" y="11" width="2" height="1" />
        <rect x="11" y="11" width="1" height="1" />
        <rect x="13" y="11" width="2" height="1" />
        <rect x="16" y="11" width="8" height="1" />
        <rect x="27" y="11" width="1" height="1" />
        <rect x="4" y="12" width="1" height="1" />
        <rect x="6" y="12" width="1" height="1" />
        <rect x="10" y="12" width="2" height="1" />
        <rect x="14" y="12" width="2" height="1" />
        <rect x="17" y="12" width="1" height="1" />
        <rect x="20" y="12" width="3" height="1" />
        <rect x="25" y="12" width="1" height="1" />
        <rect x="27" y="12" width="2" height="1" />
        <rect x="1" y="13" width="1" height="1" />
        <rect x="3" y="13" width="2" height="1" />
        <rect x="7" y="13" width="1" height="1" />
        <rect x="10" y="13" width="3" height="1" />
        <rect x="14" y="13" width="2" height="1" />
        <rect x="17" y="13" width="1" height="1" />
        <rect x="20" y="13" width="3" height="1" />
        <rect x="25" y="13" width="1" height="1" />
        <rect x="28" y="13" width="1" height="1" />
        <rect x="1" y="14" width="2" height="1" />
        <rect x="4" y="14" width="4" height="1" />
        <rect x="13" y="14" width="1" height="1" />
        <rect x="18" y="14" width="1" height="1" />
        <rect x="22" y="14" width="1" height="1" />
        <rect x="25" y="14" width="1" height="1" />
        <rect x="27" y="14" width="2" height="1" />
        <rect x="1" y="15" width="2" height="1" />
        <rect x="5" y="15" width="1" height="1" />
        <rect x="7" y="15" width="2" height="1" />
        <rect x="11" y="15" width="2" height="1" />
        <rect x="15" y="15" width="1" height="1" />
        <rect x="17" y="15" width="2" height="1" />
        <rect x="20" y="15" width="1" height="1" />
        <rect x="23" y="15" width="3" height="1" />
        <rect x="27" y="15" width="1" height="1" />
        <rect x="4" y="16" width="1" height="1" />
        <rect x="6" y="16" width="1" height="1" />
        <rect x="8" y="16" width="1" height="1" />
        <rect x="10" y="16" width="1" height="1" />
        <rect x="12" y="16" width="1" height="1" />
        <rect x="16" y="16" width="2" height="1" />
        <rect x="19" y="16" width="2" height="1" />
        <rect x="22" y="16" width="2" height="1" />
        <rect x="25" y="16" width="1" height="1" />
        <rect x="27" y="16" width="2" height="1" />
        <rect x="1" y="17" width="5" height="1" />
        <rect x="7" y="17" width="1" height="1" />
        <rect x="11" y="17" width="3" height="1" />
        <rect x="15" y="17" width="3" height="1" />
        <rect x="21" y="17" width="2" height="1" />
        <rect x="25" y="17" width="2" height="1" />
        <rect x="28" y="17" width="1" height="1" />
        <rect x="0" y="18" width="1" height="1" />
        <rect x="2" y="18" width="1" height="1" />
        <rect x="5" y="18" width="3" height="1" />
        <rect x="10" y="18" width="2" height="1" />
        <rect x="14" y="18" width="3" height="1" />
        <rect x="20" y="18" width="2" height="1" />
        <rect x="23" y="18" width="1" height="1" />
        <rect x="27" y="18" width="2" height="1" />
        <rect x="1" y="19" width="1" height="1" />
        <rect x="3" y="19" width="2" height="1" />
        <rect x="8" y="19" width="1" height="1" />
        <rect x="12" y="19" width="3" height="1" />
        <rect x="16" y="19" width="2" height="1" />
        <rect x="19" y="19" width="1" height="1" />
        <rect x="21" y="19" width="2" height="1" />
        <rect x="24" y="19" width="2" height="1" />
        <rect x="27" y="19" width="1" height="1" />
        <rect x="0" y="20" width="1" height="1" />
        <rect x="3" y="20" width="2" height="1" />
        <rect x="6" y="20" width="3" height="1" />
        <rect x="11" y="20" width="2" height="1" />
        <rect x="14" y="20" width="2" height="1" />
        <rect x="18" y="20" width="1" height="1" />
        <rect x="20" y="20" width="5" height="1" />
        <rect x="8" y="21" width="2" height="1" />
        <rect x="11" y="21" width="1" height="1" />
        <rect x="14" y="21" width="2" height="1" />
        <rect x="20" y="21" width="1" height="1" />
        <rect x="24" y="21" width="1" height="1" />
        <rect x="26" y="21" width="3" height="1" />
        <rect x="0" y="22" width="7" height="1" />
        <rect x="12" y="22" width="2" height="1" />
        <rect x="17" y="22" width="1" height="1" />
        <rect x="19" y="22" width="2" height="1" />
        <rect x="22" y="22" width="1" height="1" />
        <rect x="24" y="22" width="2" height="1" />
        <rect x="27" y="22" width="2" height="1" />
        <rect x="0" y="23" width="1" height="1" />
        <rect x="6" y="23" width="1" height="1" />
        <rect x="10" y="23" width="1" height="1" />
        <rect x="15" y="23" width="1" height="1" />
        <rect x="20" y="23" width="1" height="1" />
        <rect x="24" y="23" width="2" height="1" />
        <rect x="28" y="23" width="1" height="1" />
        <rect x="0" y="24" width="1" height="1" />
        <rect x="2" y="24" width="3" height="1" />
        <rect x="6" y="24" width="1" height="1" />
        <rect x="8" y="24" width="1" height="1" />
        <rect x="10" y="24" width="1" height="1" />
        <rect x="16" y="24" width="1" height="1" />
        <rect x="20" y="24" width="5" height="1" />
        <rect x="0" y="25" width="1" height="1" />
        <rect x="2" y="25" width="3" height="1" />
        <rect x="6" y="25" width="1" height="1" />
        <rect x="9" y="25" width="3" height="1" />
        <rect x="15" y="25" width="3" height="1" />
        <rect x="19" y="25" width="1" height="1" />
        <rect x="23" y="25" width="2" height="1" />
        <rect x="26" y="25" width="1" height="1" />
        <rect x="0" y="26" width="1" height="1" />
        <rect x="2" y="26" width="3" height="1" />
        <rect x="6" y="26" width="1" height="1" />
        <rect x="8" y="26" width="1" height="1" />
        <rect x="11" y="26" width="1" height="1" />
        <rect x="13" y="26" width="1" height="1" />
        <rect x="15" y="26" width="2" height="1" />
        <rect x="18" y="26" width="1" height="1" />
        <rect x="20" y="26" width="1" height="1" />
        <rect x="23" y="26" width="3" height="1" />
        <rect x="28" y="26" width="1" height="1" />
        <rect x="0" y="27" width="1" height="1" />
        <rect x="6" y="27" width="1" height="1" />
        <rect x="9" y="27" width="1" height="1" />
        <rect x="11" y="27" width="1" height="1" />
        <rect x="14" y="27" width="1" height="1" />
        <rect x="16" y="27" width="3" height="1" />
        <rect x="20" y="27" width="2" height="1" />
        <rect x="23" y="27" width="2" height="1" />
        <rect x="27" y="27" width="1" height="1" />
        <rect x="0" y="28" width="7" height="1" />
        <rect x="8" y="28" width="3" height="1" />
        <rect x="12" y="28" width="2" height="1" />
        <rect x="15" y="28" width="1" height="1" />
        <rect x="18" y="28" width="7" height="1" />
        <rect x="27" y="28" width="2" height="1" />
      </g>
    </svg>
  );
}
