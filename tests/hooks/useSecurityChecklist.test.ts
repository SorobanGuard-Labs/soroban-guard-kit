import { act, renderHook } from "@testing-library/react";
import { useSecurityChecklist } from "@/hooks/useSecurityChecklist";
import { securityRules } from "@/lib/securityRules";

describe("useSecurityChecklist", () => {
  it("tracks detected rules and toggles by id", () => {
    const { result } = renderHook(() => useSecurityChecklist(securityRules));
    expect(result.current.detectedCount).toBe(4);
    act(() => result.current.toggleRule("dependency-policy"));
    expect(result.current.detectedCount).toBe(5);
  });
});
