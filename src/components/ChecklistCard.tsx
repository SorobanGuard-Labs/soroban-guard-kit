import type { ReactNode } from "react";

interface ChecklistCardProps {
  title: string;
  value: string;
  children: ReactNode;
}

export function ChecklistCard({ title, value, children }: ChecklistCardProps) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-lg font-semibold text-slate-950">{title}</h2>
        <span className="rounded-md bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">{value}</span>
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}
