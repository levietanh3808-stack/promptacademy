import { cn } from "@/lib/utils";

const variants = {
  default: "border-primary/20 bg-primary/10 text-primary-deep",
  success: "border-success/30 bg-emerald-50 text-success",
  warning: "border-amber-200 bg-amber-50 text-amber-700",
  outline: "border-border bg-white text-muted",
  violet: "border-primary/30 bg-sky/50 text-primary-deep",
} as const;

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: keyof typeof variants }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
