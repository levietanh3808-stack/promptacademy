"use client";

import { cn } from "@/lib/utils";

interface TabSwitcherProps<T extends string> {
  tabs: { id: T; label: string }[];
  active: T;
  onChange: (id: T) => void;
  className?: string;
}

export function TabSwitcher<T extends string>({
  tabs,
  active,
  onChange,
  className,
}: TabSwitcherProps<T>) {
  return (
    <div
      className={cn(
        "inline-flex flex-wrap gap-1 rounded-xl border border-border bg-panel p-1",
        className
      )}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          className={cn(
            "rounded-lg px-4 py-2 text-sm font-medium transition-all",
            active === tab.id
              ? "bg-primary/15 text-blue-200 shadow-sm"
              : "text-muted hover:bg-panel-elevated hover:text-foreground"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
