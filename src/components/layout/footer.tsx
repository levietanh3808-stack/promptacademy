import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { navLinks } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-white/70 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-deep to-primary text-white">
                <GraduationCap className="h-4 w-4" />
              </span>
              <div>
                <p className="font-bold text-foreground">PromptAcademy</p>
                <p className="text-[10px] uppercase tracking-widest text-muted">by Moneyfest</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted">
              Vertical AI Academy + Employability Ecosystem. Proof of work over proof of claims.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">Platform</p>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.slice(0, 5).map((l) => (
                <li key={l.href}><Link href={l.href} className="text-muted hover:text-primary">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">Product</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/learn" className="text-muted hover:text-primary">Learning Hub</Link></li>
              <li><Link href="/practice" className="text-muted hover:text-primary">Practice Lab</Link></li>
              <li><Link href="/assessments" className="text-muted hover:text-primary">Assessments</Link></li>
              <li><Link href="/portfolio" className="text-muted hover:text-primary">Portfolio</Link></li>
              <li><Link href="/admin" className="text-muted hover:text-primary">Ops Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">Company</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="text-muted hover:text-primary">About</Link></li>
              <li><Link href="/pricing" className="text-muted hover:text-primary">Pricing</Link></li>
              <li><Link href="/demo" className="text-muted hover:text-primary">Demo</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-xs text-muted">
          © 2026 PromptAcademy by Moneyfest · Learn AI. Do real work. Get hired.
        </div>
      </div>
    </footer>
  );
}
