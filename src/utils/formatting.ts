import type { RiskSeverity } from "@/types/risk";

export function formatPercent(value: number) {
  return `${Math.round(value)}%`;
}

export function formatSeverity(severity: RiskSeverity) {
  return severity
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function joinList(items: string[]) {
  return items.length === 0 ? "None listed" : items.join(", ");
}
