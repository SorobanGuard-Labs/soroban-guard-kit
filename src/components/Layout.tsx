import Head from "next/head";
import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { APP_NAME } from "@/utils/constants";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export function Layout({ children, title = APP_NAME, description = "Security and readiness toolkit for Stellar and Soroban projects." }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex min-h-screen flex-col bg-slate-50 text-slate-950">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
