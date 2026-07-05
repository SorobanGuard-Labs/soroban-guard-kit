import { useMemo } from "react";
import { buildAuditReadinessReport } from "@/lib/auditReadiness";
import type { AuditReadinessItem } from "@/types/audit";

export function useAuditReadiness(items: AuditReadinessItem[]) {
  return useMemo(() => buildAuditReadinessReport(items), [items]);
}
