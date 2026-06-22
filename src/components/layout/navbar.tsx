"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/constants";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";
  const glassHero = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-[100] isolate border-b transition-all duration-500 ease-out",
        glassHero
          ? "nav-glass-dark border-white/10 shadow-none"
          : "border-border bg-white/95 shadow-sm backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-deep to-primary text-white">
            <GraduationCap className="h-4 w-4" />
          </span>
          <div className="leading-tight">
            <span className={cn("block text-sm font-bold tracking-tight", glassHero ? "text-white" : "text-foreground")}>
              PromptAcademy
            </span>
            <span className={cn("block text-[10px] font-medium uppercase tracking-widest", glassHero ? "text-white/60" : "text-muted")}>
              by Moneyfest
            </span>
          </div>
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex">
          <Link
            href="/"
            className={cn(
              "shrink-0 rounded-lg px-2.5 py-2 text-sm font-medium transition-colors xl:px-3",
              glassHero
                ? pathname === "/"
                  ? "bg-white/15 text-white"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
                : pathname === "/"
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/80 hover:bg-panel hover:text-foreground"
            )}
          >
            Home
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "shrink-0 rounded-lg px-2.5 py-2 text-sm font-medium transition-colors xl:px-3",
                glassHero
                  ? pathname === link.href
                    ? "bg-white/15 font-semibold text-white"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                  : pathname === link.href
                    ? "bg-primary/10 font-semibold text-primary"
                    : "text-foreground/80 hover:bg-panel hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className={cn("hidden sm:inline-flex", glassHero && "text-white/90 hover:bg-white/10 hover:text-white")}
            asChild
          >
            <Link href="/demo">Watch Demo</Link>
          </Button>
          <Button
            size="sm"
            className={cn(glassHero && "border border-white/25 bg-white/15 text-white hover:bg-white/25")}
            asChild
          >
            <Link href="/learners/onboarding">Get Started</Link>
          </Button>
          <button
            type="button"
            className={cn("rounded-lg p-2 lg:hidden", glassHero ? "text-white" : "text-foreground")}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            <Link
              href="/"
              className={cn(
                "rounded-lg px-3 py-2.5 text-sm font-medium",
                pathname === "/" ? "bg-primary/10 text-primary" : "text-foreground"
              )}
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium",
                  pathname === link.href ? "bg-primary/10 text-primary" : "text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-border pt-3">
              <Button variant="secondary" asChild>
                <Link href="/demo">Watch Demo</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
