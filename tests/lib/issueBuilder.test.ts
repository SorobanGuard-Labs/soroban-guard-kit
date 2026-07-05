import { buildContributorIssue } from "@/lib/issueBuilder";
import { sampleIssueInput } from "@/utils/sampleData";

describe("buildContributorIssue", () => {
  it("builds labels and a contributor-ready body", () => {
    const issue = buildContributorIssue(sampleIssueInput);
    expect(issue.title).toBe(sampleIssueInput.title);
    expect(issue.labels).toContain("contributor-task");
    expect(issue.labels).toContain("severity:high");
    expect(issue.body).toContain("## Acceptance criteria");
    expect(issue.body).toContain("List privileged entrypoints");
  });
});
