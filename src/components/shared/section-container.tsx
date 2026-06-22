import { cn } from "@/lib/utils";

export function SectionContainer({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", className)}>
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div className={cn("mb-12", align === "center" ? "text-center" : "text-left")}>
      {eyebrow && (
        <p className={cn("text-xs font-semibold uppercase tracking-[0.2em]", light ? "text-sky-soft" : "text-primary")}>
          {eyebrow}
        </p>
      )}
      <h2 className={cn("mt-3 text-3xl font-bold tracking-tight sm:text-4xl", light ? "text-white" : "text-foreground")}>
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 max-w-3xl text-lg leading-relaxed", align === "center" && "mx-auto", light ? "text-white/80" : "text-muted")}>
          {description}
        </p>
      )}
    </div>
  );
}
