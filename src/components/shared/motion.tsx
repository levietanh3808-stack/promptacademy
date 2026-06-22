"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

/** Fixed viewport bg: deep blue at top → white on scroll, with load reveal */
export function ScrollMorphBackground() {
  const { scrollY } = useScroll();

  const heroOpacity = useTransform(scrollY, [0, 320, 640], [1, 0.45, 0]);
  const lightOpacity = useTransform(scrollY, [0, 180, 520], [0, 0.55, 1]);

  const heroSpring = useSpring(heroOpacity, { stiffness: 70, damping: 28, mass: 0.8 });
  const lightSpring = useSpring(lightOpacity, { stiffness: 70, damping: 28, mass: 0.8 });

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[#020617]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.35, ease: easeOutExpo, delay: 0.05 }}
      />

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: easeOutExpo, delay: 0.15 }}
      >
        <motion.div style={{ opacity: heroSpring }} className="absolute inset-0">
          <div className="mesh-hero-base absolute inset-0" />
          <div className="mesh-orb mesh-orb-hero-1" />
          <div className="mesh-orb mesh-orb-hero-2" />
          <div className="mesh-orb mesh-orb-hero-3" />
          <div className="mesh-shimmer mesh-shimmer-hero" />
        </motion.div>

        <motion.div style={{ opacity: lightSpring }} className="absolute inset-0">
          <div className="mesh-light-base absolute inset-0" />
          <div className="mesh-orb mesh-orb-light-1" />
          <div className="mesh-orb mesh-orb-light-2" />
          <div className="mesh-shimmer mesh-shimmer-light" />
        </motion.div>
      </motion.div>
    </div>
  );
}

/** @deprecated Use ScrollMorphBackground on homepage */
export function FlowingPageBackground({ className }: { className?: string }) {
  return <ScrollMorphBackground />;
}

export function AnimatedBackground({ variant = "light" }: { variant?: "hero" | "light" }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className={variant === "hero" ? "mesh-hero-base absolute inset-0" : "mesh-light-base absolute inset-0"} />
      {variant === "hero" ? (
        <>
          <div className="mesh-orb mesh-orb-hero-2 opacity-80" />
          <div className="mesh-orb mesh-orb-hero-3 opacity-60" />
        </>
      ) : (
        <>
          <div className="mesh-orb mesh-orb-light-1 opacity-70" />
          <div className="mesh-orb mesh-orb-light-2 opacity-50" />
        </>
      )}
    </div>
  );
}

export const heroRevealContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.55 },
  },
};

export const heroRevealItem = {
  hidden: { opacity: 0, y: 36, filter: "blur(14px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.05, ease: easeOutExpo },
  },
};

export const heroRevealCard = {
  hidden: { opacity: 0, y: 48, scale: 0.94, filter: "blur(16px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: easeOutExpo, delay: 0.35 },
  },
};

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
      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay, duration: 0.7, ease: easeOutExpo }}
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
    <div className={cn("overflow-hidden rounded-2xl border border-white/50 bg-white/[0.97] shadow-2xl shadow-black/20 glow-blue backdrop-blur-md", className)}>
      <div className="flex items-center gap-2 border-b border-border/50 bg-white/95 px-4 py-3">
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
      className="rounded-2xl border border-border/40 bg-white/90 p-6 shadow-sm backdrop-blur-md"
    >
      <p className="text-3xl font-bold text-gradient">{value}</p>
      <p className="mt-2 text-sm font-semibold text-foreground">{label}</p>
      {note && <p className="mt-1 text-xs text-muted">{note}</p>}
    </motion.div>
  );
}
