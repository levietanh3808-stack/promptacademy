"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AnimatedBackground({ variant = "hero" }: { variant?: "hero" | "light" }) {
  if (variant === "light") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-panel via-background to-panel opacity-80" />
        <motion.div
          className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-sky/60 blur-[100px]"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -left-20 bottom-20 h-80 w-80 rounded-full bg-primary-light/20 blur-[90px]"
          animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 opacity-[0.03] animated-grid" style={{ animation: "none", backgroundImage: "linear-gradient(rgba(30,111,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(30,111,255,0.15) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg" />
      <div className="absolute inset-0 animated-grid opacity-40" />
      <motion.div
        className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-white/10 blur-[80px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute right-1/4 bottom-1/4 h-48 w-48 rounded-full bg-sky-soft/30 blur-[60px]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
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
    <div className={cn("overflow-hidden rounded-2xl border border-border bg-white shadow-xl glow-blue", className)}>
      <div className="flex items-center gap-2 border-b border-border bg-panel px-4 py-3">
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
      className="rounded-2xl border border-border bg-white p-6 shadow-sm"
    >
      <p className="text-3xl font-bold text-gradient">{value}</p>
      <p className="mt-2 text-sm font-semibold text-foreground">{label}</p>
      {note && <p className="mt-1 text-xs text-muted">{note}</p>}
    </motion.div>
  );
}
