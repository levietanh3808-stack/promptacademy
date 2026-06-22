import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionContainer } from "@/components/shared/section-container";
import { pricingTiers, revenueStreams } from "@/data/pricing";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PricingPage() {
  return (
    <>
      <PageHero compact eyebrow="Pricing" title="Transparent, scalable, venture-ready" description="Three revenue streams aligned to LEARN · EARN · HIRED" />
      <SectionContainer className="pt-8">
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {revenueStreams.map((r) => (
            <div key={r.stream} className="rounded-xl border border-border bg-panel px-5 py-3 text-center">
              <Badge>{r.stream}</Badge>
              <p className="mt-2 text-sm font-semibold">{r.model}</p>
              <p className="text-xs text-muted">{r.note}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pricingTiers.map((tier) => (
            <Card key={tier.id} className={tier.highlighted ? "border-primary/40 glow-blue ring-1 ring-primary/20" : ""}>
              <CardContent className="flex h-full flex-col p-6">
                <Badge variant="outline">{tier.audience}</Badge>
                <h3 className="mt-4 text-xl font-bold">{tier.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-gradient">{tier.price}</span>
                  {tier.period && <span className="text-sm text-muted">{tier.period}</span>}
                </div>
                <p className="mt-3 text-sm text-muted">{tier.description}</p>
                <ul className="mt-6 flex-1 space-y-2">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-muted"><CheckCircle2 className="h-4 w-4 shrink-0 text-success" />{f}</li>
                  ))}
                </ul>
                <Button className="mt-6 w-full" variant={tier.highlighted ? "default" : "secondary"} asChild>
                  <Link href={tier.audience === "B2B" ? "/business" : "/learners/onboarding"}>{tier.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
