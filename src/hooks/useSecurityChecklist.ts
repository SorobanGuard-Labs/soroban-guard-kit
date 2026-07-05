import { useMemo, useState } from "react";
import type { RiskSignal } from "@/types/risk";

export function useSecurityChecklist(initialRules: RiskSignal[]) {
  const [rules, setRules] = useState(initialRules);
  const detectedCount = useMemo(() => rules.filter((rule) => rule.detected).length, [rules]);

  function toggleRule(id: string) {
    setRules((currentRules) =>
      currentRules.map((rule) => (rule.id === id ? { ...rule, detected: !rule.detected } : rule)),
    );
  }

  return { rules, detectedCount, toggleRule };
}
