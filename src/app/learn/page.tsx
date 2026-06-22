"use client";

import Link from "next/link";
import { BookOpen, Lock, Sparkles, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionContainer } from "@/components/shared/section-container";
import { demoDashboard } from "@/data/learning";
import { getAcademy } from "@/data/academies";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LearnPage() {
  const d = demoDashboard;
  const academy = getAcademy(d.academySlug)!;

  return (
    <>
      <PageHero compact eyebrow="Learning Hub" title="Your learner dashboard" description="Progress, roadmap, active toolkit, and marketplace readiness in one place." />

      <SectionContainer className="pt-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <aside className="lg:col-span-3 space-y-4">
            <Card>
              <CardContent className="p-4">
                <p className="mb-3 text-xs font-semibold uppercase text-muted">Navigation</p>
                {["Dashboard", "Roadmap", "Modules", "Assessments", "Marketplace"].map((item, i) => (
                  <div key={item} className={`rounded-lg px-3 py-2 text-sm ${i === 0 ? "bg-primary/10 text-primary font-medium" : "text-muted"}`}>{item}</div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-sm">
                <p className="font-semibold">Roadmap</p>
                {d.roadmap.map((r) => (
                  <div key={r.step} className="mt-2 flex items-center gap-2 text-xs text-muted">
                    {r.status === "done" ? "✓" : r.status === "active" ? "→" : <Lock className="h-3 w-3" />}
                    {r.step}
                  </div>
                ))}
              </CardContent>
            </Card>
          </aside>

          <div className="lg:col-span-9 space-y-6">
            <Card className="glow-blue">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-wrap justify-between gap-4">
                  <div>
                    <Badge className="mb-2">{d.academy}</Badge>
                    <h2 className="text-2xl font-bold">{d.name}</h2>
                    <p className="text-sm text-muted">Vertical: {d.vertical}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-primary">{d.readinessScore}</p>
                    <p className="text-xs text-muted">Readiness score</p>
                    <p className="mt-2 text-sm">Current score: <strong>{d.currentScore}</strong></p>
                  </div>
                </div>
                <div className="mt-6 h-2 rounded-full bg-panel">
                  <div className="h-full rounded-full bg-gradient-to-r from-primary-deep to-primary" style={{ width: `${d.progress}%` }} />
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {d.marketplaceUnlocked ? <Badge variant="success">Marketplace unlocked</Badge> : <Badge variant="warning">Unlock at 75+ readiness</Badge>}
                  <Badge variant="outline">Assessment due: {d.assessmentDeadline}</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p className="text-sm font-semibold">Active module</p>
                <p className="mt-1 text-lg font-medium text-foreground">{d.activeCourse}</p>
                <div className="mt-4 space-y-2">
                  {academy.courses.slice(0, 4).map((m, i) => (
                    <div key={m.id} className="flex items-center justify-between rounded-xl border border-border p-3 text-sm">
                      <span>{m.title}</span>
                      <ChevronRight className="h-4 w-4 text-muted" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-5">
                <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-primary" /><p className="font-semibold">Mentor note</p></div>
                <p className="mt-2 text-sm text-muted">{d.mentorNote}</p>
                <div className="mt-4 flex gap-2">
                  <Button size="sm" variant="secondary" asChild><Link href="/practice">Practice Lab</Link></Button>
                  <Button size="sm" asChild><Link href="/marketplace">Recommended tasks</Link></Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
