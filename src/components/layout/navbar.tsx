"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/constants";

export function Navbar({ transparent = false }: { transparent?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors",
        transparent && isHome
          ? "border-white/10 bg-transparent"
          : "border-border glass-light"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-deep to-primary text-white">
            <GraduationCap className="h-4 w-4" />
          </span>
          <div className="leading-tight">
            <span className={cn("block text-sm font-bold tracking-tight", transparent && isHome ? "text-white" : "text-foreground")}>
              PromptAcademy
            </span>
            <span className={cn("block text-[10px] font-medium uppercase tracking-widest", transparent && isHome ? "text-white/60" : "text-muted")}>
              by Moneyfest
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex">
          <Link
            href="/"
            className={cn("rounded-lg px-3 py-2 text-sm font-medium transition-colors", transparent && isHome ? "text-white/80 hover:text-white" : "text-muted hover:text-foreground")}
          >
            Home
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === link.href
                  ? transparent && isHome ? "bg-white/15 text-white" : "bg-primary/10 text-primary"
                  : transparent && isHome ? "text-white/80 hover:text-white" : "text-muted hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button variant={transparent && isHome ? "outline" : "ghost"} size="sm" asChild>
            <Link href="/demo">Watch Demo</Link>
          </Button>
          <Button variant={transparent && isHome ? "secondary" : "default"} size="sm" asChild className={transparent && isHome ? "bg-white text-primary-deep hover:bg-white/90" : ""}>
            <Link href="/learners/onboarding">Get Started</Link>
          </Button>
        </div>

        <button type="button" className={cn("rounded-lg p-2 lg:hidden", transparent && isHome ? "text-white" : "text-muted")} onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            <Link href="/" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted">Home</Link>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted">{link.label}</Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-border pt-3">
              <Button variant="secondary" asChild><Link href="/demo">Watch Demo</Link></Button>
              <Button asChild><Link href="/learners/onboarding">Get Started</Link></Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
