import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
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

export function SplitComparison({ left, right, center }: { left: { title: string; items: string[] }; right: { title: string; items: string[] }; center?: string }) {
  return (
    <div className="relative grid gap-8 lg:grid-cols-2">
      {[left, right].map((side, i) => (
        <div key={side.title} className={cn("rounded-2xl border p-8", i === 0 ? "border-primary/20 bg-panel" : "border-primary-deep/15 bg-white")}>
          <h3 className="text-xl font-bold text-foreground">{side.title}</h3>
          <ul className="mt-4 space-y-3">
            {side.items.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-muted">
                <span className={cn("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full", i === 0 ? "bg-primary" : "bg-primary-deep")} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {center && (
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg lg:block">
          {center}
        </div>
      )}
    </div>
  );
}
