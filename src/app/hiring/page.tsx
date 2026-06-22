import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { SectionContainer } from "@/components/shared/section-container";
import { hiringPipeline } from "@/data/business";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HiringPage() {
  return (
    <>
      <PageHero compact eyebrow="Hiring Pipeline" title="From shortlist to offer with proof" description="Track candidates through assessment, interview, and offer stages with verified execution data." />
      <SectionContainer className="pt-8">
        <div className="grid gap-6 lg:grid-cols-4">
          {hiringPipeline.map((stage) => (
            <Card key={stage.stage}>
              <CardContent className="p-5">
                <Badge variant="outline">{stage.count}</Badge>
                <h3 className="mt-3 font-semibold text-foreground">{stage.stage}</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {stage.candidates.map((c) => (
                    <li key={c} className="rounded-lg border border-border bg-panel px-3 py-2">{c}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex gap-3">
          <Button asChild><Link href="/talent">Browse talent</Link></Button>
          <Button variant="secondary" asChild><Link href="/assessments">Send custom test</Link></Button>
        </div>
      </SectionContainer>
    </>
  );
}
