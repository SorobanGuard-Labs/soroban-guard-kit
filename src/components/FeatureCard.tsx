import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <Icon className="h-6 w-6 text-emerald-600" aria-hidden="true" />
      <h3 className="mt-4 text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}
