"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Full-page flowing gradient — no grid. Spans entire scroll height of parent. */
export function FlowingPageBackground({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      <div className="page-flow-gradient absolute inset-0" />
      <div className="page-flow-orb page-flow-orb-1" />
      <div className="page-flow-orb page-flow-orb-2" />
      <div className="page-flow-orb page-flow-orb-3" />
      <div className="page-flow-orb page-flow-orb-4" />
    </div>
  );
}

/** Compact flowing layer for inner page heroes — no grid squares */
export function AnimatedBackground({ variant = "light" }: { variant?: "hero" | "light" }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className={variant === "hero" ? "page-flow-gradient absolute inset-0" : "page-flow-gradient-soft absolute inset-0"} />
      <div className="page-flow-orb page-flow-orb-2 opacity-70" />
      <div className="page-flow-orb page-flow-orb-3 opacity-60" />
    </div>
  );
}

export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay, duration: 0.55, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function DashboardFrame({
  title,
  children,
  className,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-white/40 bg-white/95 shadow-xl glow-blue backdrop-blur-sm", className)}>
      <div className="flex items-center gap-2 border-b border-border/60 bg-white/90 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        {title && <span className="ml-2 text-xs font-medium text-muted">{title}</span>}
      </div>
      <div className="p-4 sm:p-6">{children}</div>
    </div>
  );
}

export function CountUpStat({ value, label, note }: { value: string; label: string; note?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-white/50 bg-white/80 p-6 shadow-sm backdrop-blur-sm"
    >
      <p className="text-3xl font-bold text-gradient">{value}</p>
      <p className="mt-2 text-sm font-semibold text-foreground">{label}</p>
      {note && <p className="mt-1 text-xs text-muted">{note}</p>}
    </motion.div>
  );
}
