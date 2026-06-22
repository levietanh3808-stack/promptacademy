import { AnimatedBackground } from "@/components/shared/motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  compact,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <section className={cn("relative overflow-hidden border-b border-border", compact ? "py-16" : "py-24")}>
      <AnimatedBackground variant="light" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow && <Badge className="mb-4">{eyebrow}</Badge>}
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{title}</h1>
        {description && <p className="mt-4 max-w-3xl text-lg text-muted">{description}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
