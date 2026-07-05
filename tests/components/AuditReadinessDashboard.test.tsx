import { render, screen } from "@testing-library/react";
import { AuditReadinessDashboard } from "@/components/AuditReadinessDashboard";
import { auditReadinessItems } from "@/lib/auditReadiness";

describe("AuditReadinessDashboard", () => {
  it("renders readiness counts and items", () => {
    render(<AuditReadinessDashboard items={auditReadinessItems} />);
    expect(screen.getByRole("region", { name: /audit readiness dashboard/i })).toBeInTheDocument();
    expect(screen.getByText("Audit readiness")).toBeInTheDocument();
    expect(screen.getByText("Threat model")).toBeInTheDocument();
    expect(screen.getByText("40%")).toBeInTheDocument();
  });
});
