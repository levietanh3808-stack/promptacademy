"use client";

import { PageHero } from "@/components/shared/page-hero";
import { SectionContainer } from "@/components/shared/section-container";
import { practiceSimulations } from "@/data/assessments";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DashboardFrame } from "@/components/shared/motion";

export default function PracticePage() {
  return (
    <>
      <PageHero compact eyebrow="Practice Lab" title="Simulate real work before marketplace tasks" description="Case studies, workflow builders, prompt testing, and mentor feedback panels." />
      <SectionContainer className="pt-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {practiceSimulations.map((s) => (
              <Card key={s.id}>
                <CardContent className="p-6">
                  <Badge variant="outline">{s.type}</Badge>
                  <h3 className="mt-2 font-semibold text-foreground">{s.title}</h3>
                  <div className="mt-4 h-2 rounded-full bg-panel">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${s.progress}%` }} />
                  </div>
                  <p className="mt-2 text-xs text-muted">{s.progress}% complete</p>
                  <Button size="sm" className="mt-4">Continue simulation</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <DashboardFrame title="Practice Lab — Active session">
            <div className="space-y-3 text-sm">
              <div className="rounded-lg border border-border bg-panel p-4">
                <p className="font-semibold">Case: Launch wellness campaign</p>
                <p className="mt-2 text-muted">Draft MECE customer insight prompts for GreenLeaf Wellness.</p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                <p className="font-semibold text-primary">Mentor feedback</p>
                <p className="mt-1 text-muted">Strong audience segmentation. Add conversion KPIs to brief.</p>
              </div>
              <Button size="sm">Submit for review</Button>
            </div>
          </DashboardFrame>
        </div>
      </SectionContainer>
    </>
  );
}
