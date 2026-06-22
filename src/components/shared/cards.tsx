import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FeatureCard({ icon: Icon, title, description, className }: { icon: LucideIcon; title: string; description: string; className?: string }) {
  return (
    <div className={cn("group rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5", className)}>
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-panel text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}

export function StatCard({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <p className="text-3xl font-bold text-gradient">{value}</p>
      <p className="mt-2 text-sm font-semibold text-foreground">{label}</p>
      {note && <p className="mt-1 text-xs text-muted">{note}</p>}
    </div>
  );
}

export function RoleCard({
  title,
  items,
  cta,
  href,
  variant = "learner",
}: {
  title: string;
  items: string[];
  cta: string;
  href: string;
  variant?: "learner" | "business";
}) {
  return (
    <div className={cn("flex flex-col rounded-3xl border p-8 transition-all hover:shadow-xl", variant === "learner" ? "border-primary/20 bg-gradient-to-br from-panel to-white hover:border-primary/40" : "border-primary-deep/20 bg-gradient-to-br from-sky/30 to-white hover:border-primary-deep/40")}>
      <h3 className="text-2xl font-bold text-foreground">{title}</h3>
      <ul className="mt-6 flex-1 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-muted">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            {item}
          </li>
        ))}
      </ul>
      <Button className="mt-8 w-full" variant={variant === "learner" ? "default" : "cta"} asChild>
        <Link href={href}>{cta} <ArrowRight className="h-4 w-4" /></Link>
      </Button>
    </div>
  );
}

export function AcademyCard({ slug, name, description, courseCount, industries }: { slug: string; name: string; description: string; courseCount: number; industries: string[] }) {
  return (
    <Link href={`/academy/${slug}`} className="group block rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
      <p className="text-xs font-semibold uppercase tracking-wider text-primary">{courseCount} courses</p>
      <h3 className="mt-2 text-lg font-bold text-foreground group-hover:text-primary">{name}</h3>
      <p className="mt-2 line-clamp-2 text-sm text-muted">{description}</p>
      <p className="mt-4 text-xs text-muted">Industries: {industries.slice(0, 3).join(" · ")}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Explore Academy <ArrowRight className="h-3.5 w-3.5" /></span>
    </Link>
  );
}

export function TrustScoreBadge({ score }: { score: number }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-emerald-50 px-3 py-1 text-xs font-semibold text-success">
      Trust {score}
    </span>
  );
}

function ComparisonCard({
  title,
  items,
  variant,
}: {
  title: string;
  items: string[];
  variant: "left" | "right";
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-2xl border p-6 sm:p-8",
        variant === "left"
          ? "border-primary/25 bg-gradient-to-br from-panel to-white"
          : "border-primary-deep/20 bg-white"
      )}
    >
      <div className="mb-4 flex items-center gap-3">
        <span
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-bold uppercase",
            variant === "left" ? "bg-primary/15 text-primary" : "bg-primary-deep/10 text-primary-deep"
          )}
        >
          {variant === "left" ? "Supply" : "Demand"}
        </span>
        <h3 className="text-lg font-bold leading-snug text-foreground sm:text-xl">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
            <span
              className={cn(
                "mt-2 h-1.5 w-1.5 shrink-0 rounded-full",
                variant === "left" ? "bg-primary" : "bg-primary-deep"
              )}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SplitComparison({
  left,
  right,
  center,
}: {
  left: { title: string; items: string[] };
  right: { title: string; items: string[] };
  center?: string;
}) {
  const connector = center ? (
    <div className="flex items-center justify-center py-2 lg:px-2 lg:py-0">
      <div className="flex w-full max-w-md flex-row items-center gap-3 rounded-2xl border border-primary/20 bg-white px-5 py-4 shadow-sm lg:max-w-[12rem] lg:flex-col lg:px-4 lg:py-6 lg:text-center">
        <span className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-primary/50 lg:block lg:h-8 lg:w-px lg:flex-none lg:bg-gradient-to-b" />
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <ArrowRightLeft className="h-4 w-4" />
        </div>
        <p className="text-sm font-semibold leading-snug text-primary">{center}</p>
        <span className="hidden h-px flex-1 bg-gradient-to-l from-transparent via-primary/30 to-primary/50 lg:block lg:h-8 lg:w-px lg:flex-none lg:bg-gradient-to-b" />
      </div>
    </div>
  ) : null;

  if (!center) {
    return (
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <ComparisonCard title={left.title} items={left.items} variant="left" />
        <ComparisonCard title={right.title} items={right.items} variant="right" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-stretch lg:gap-5">
        <ComparisonCard title={left.title} items={left.items} variant="left" />
        {connector}
        <ComparisonCard title={right.title} items={right.items} variant="right" />
      </div>
    </div>
  );
}
