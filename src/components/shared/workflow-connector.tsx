"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function WorkflowConnector({
  steps,
  activeIndex,
  className,
}: {
  steps: string[];
  activeIndex: number;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center justify-between gap-2", className)}>
      {steps.map((step, i) => (
        <div key={step} className="flex flex-1 items-center">
          <motion.div
            initial={false}
            animate={{
              scale: activeIndex === i ? 1.05 : 1,
              opacity: i <= activeIndex ? 1 : 0.45,
            }}
            className={cn(
              "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-xs font-bold transition-colors sm:h-12 sm:w-12",
              i === activeIndex
                ? "border-primary bg-primary text-white shadow-sm shadow-primary/20"
                : i < activeIndex
                  ? "border-primary/40 bg-primary/10 text-primary-deep"
                  : "border-border bg-panel text-muted"
            )}
          >
            {String(i + 1).padStart(2, "0")}
          </motion.div>
          {i < steps.length - 1 && (
            <div className="relative mx-1 h-px flex-1 overflow-hidden bg-border sm:mx-2">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-secondary"
                initial={false}
                animate={{ width: i < activeIndex ? "100%" : "0%" }}
                transition={{ duration: 0.4 }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function WorkflowLabels({ steps }: { steps: string[] }) {
  return (
    <div className="mt-3 flex justify-between gap-2 text-center">
      {steps.map((step) => (
        <span key={step} className="flex-1 text-[10px] font-semibold uppercase tracking-wider text-muted sm:text-xs">
          {step}
        </span>
      ))}
    </div>
  );
}
