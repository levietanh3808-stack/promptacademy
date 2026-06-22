import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { SectionContainer } from "@/components/shared/section-container";
import { opportunities } from "@/data/business";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function OpportunitiesPage() {
  return (
    <>
      <PageHero compact eyebrow="Opportunities" title="Referrals and partner placements" description="Strong performers receive dossiers forwarded to partner businesses for internships, part-time, and full-time roles." />
      <SectionContainer className="pt-8">
        <div className="space-y-4">
          {opportunities.map((o) => (
            <Card key={o.id}>
              <CardContent className="flex flex-wrap items-center justify-between gap-4 p-6">
                <div>
                  <Badge variant="outline">{o.type}</Badge>
                  <h3 className="mt-2 font-semibold text-foreground">{o.role}</h3>
                  <p className="text-sm text-muted">{o.company} · {o.academy}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">{o.match}%</p>
                  <p className="text-xs text-muted">Match score</p>
                </div>
                <Button size="sm">View dossier</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button className="mt-8" variant="secondary" asChild><Link href="/learners/onboarding">Complete onboarding to unlock</Link></Button>
      </SectionContainer>
    </>
  );
}
