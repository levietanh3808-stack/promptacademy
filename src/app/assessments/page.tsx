import { PageHero } from "@/components/shared/page-hero";
import { SectionContainer, SectionHeader } from "@/components/shared/section-container";
import { assessments } from "@/data/assessments";
import { assessmentLayers, scoreTiers, scoringDimensions } from "@/data/academies";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AssessmentsPage() {
  return (
    <>
      <PageHero compact eyebrow="Assessments" title="Testing center" description="4-layer assessment model with score tiers from foundational to recruiter-ready." />
      <SectionContainer className="pt-8">
        <SectionHeader align="left" title="4-layer model" />
        <div className="mb-12 grid gap-4 md:grid-cols-4">
          {assessmentLayers.map((l) => (
            <Card key={l.layer}><CardContent className="p-5"><Badge>Layer {l.layer}</Badge><p className="mt-2 font-semibold">{l.name}</p><p className="text-sm text-muted">{l.desc}</p></CardContent></Card>
          ))}
        </div>
        <SectionHeader align="left" title="Score tiers" />
        <div className="mb-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {scoreTiers.map((t) => (
            <div key={t.range} className="rounded-xl border border-border bg-panel p-4 text-sm"><span className={`font-bold ${t.color}`}>{t.range}</span> — {t.label}</div>
          ))}
        </div>
        <SectionHeader align="left" title="Your assessments" />
        <div className="space-y-3">
          {assessments.map((a) => (
            <Card key={a.id}>
              <CardContent className="flex flex-wrap items-center justify-between gap-4 p-5">
                <div>
                  <Badge variant="outline">Layer {a.layer}</Badge>
                  <p className="mt-2 font-semibold text-foreground">{a.title}</p>
                  <p className="text-sm text-muted">{a.academy} · {a.duration}</p>
                </div>
                <div className="text-right">
                  {a.score && <p className="text-2xl font-bold text-primary">{a.score}</p>}
                  <Badge variant={a.status === "completed" ? "success" : a.status === "locked" ? "outline" : "default"}>{a.status.replace("_", " ")}</Badge>
                  {a.tier && <p className="mt-1 text-xs text-muted">{a.tier}</p>}
                </div>
                {a.status !== "locked" && a.status !== "completed" && <Button size="sm">Start</Button>}
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12">
          <p className="mb-4 font-semibold">Scoring dimensions</p>
          <div className="flex flex-wrap gap-2">
            {scoringDimensions.map((d) => <Badge key={d} variant="outline">{d}</Badge>)}
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
