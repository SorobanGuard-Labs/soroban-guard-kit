import { DISCLAIMER, ORGANIZATION_NAME } from "@/utils/constants";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-3 px-5 py-8 text-sm md:grid-cols-[1fr_auto]">
        <p>Built by {ORGANIZATION_NAME} for open-source Soroban readiness workflows.</p>
        <p className="max-w-2xl text-slate-400">{DISCLAIMER}</p>
      </div>
    </footer>
  );
}
