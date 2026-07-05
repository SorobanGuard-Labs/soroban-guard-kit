import { buildContributorIssue } from "@/lib/issueBuilder";
import type { ContributorIssueInput } from "@/types/issue";

interface Props { input: ContributorIssueInput; }

export function IssueGenerator({ input }: Props) {
  const issue = buildContributorIssue(input);
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" aria-label="Issue generator">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-950">Issue generator</h2>
          <p className="mt-1 text-sm text-slate-600">Contributor-ready task output with labels and acceptance criteria.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {issue.labels.map((label) => <span key={label} className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">{label}</span>)}
        </div>
      </div>
      <h3 className="mt-5 font-semibold text-slate-950">{issue.title}</h3>
      <pre className="mt-3 max-h-80 overflow-auto rounded-md bg-slate-950 p-4 text-sm leading-6 text-slate-100"><code>{issue.body}</code></pre>
    </section>
  );
}
