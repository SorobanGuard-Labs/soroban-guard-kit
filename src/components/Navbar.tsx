import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { APP_NAME } from "@/utils/constants";

export function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-slate-950">
          <ShieldCheck className="h-6 w-6 text-emerald-600" aria-hidden="true" />
          <span>{APP_NAME}</span>
        </Link>
        <div className="flex items-center gap-4 text-sm font-medium text-slate-700">
          <Link href="/toolkit" className="hover:text-emerald-700">Toolkit</Link>
          <Link href="/docs" className="hover:text-emerald-700">Docs</Link>
          <a href="https://github.com" className="hidden hover:text-emerald-700 sm:inline-flex">GitHub</a>
        </div>
      </nav>
    </header>
  );
}
