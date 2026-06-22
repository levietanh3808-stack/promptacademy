"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionContainer, SectionHeader } from "@/components/shared/section-container";
import { FeatureCard, AcademyCard, SplitComparison } from "@/components/shared/cards";
import { FadeIn } from "@/components/shared/motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { academies, assessmentLayers, scoreTiers } from "@/data/academies";
import { BookOpen, Target, FlaskConical, ClipboardCheck, Wallet, Shield } from "lucide-react";

export default function LearnersPage() {
  const [quizStep] = useState(0);

  return (
    <>
      <PageHero
        eyebrow="For Learners"
        title="Learn AI to do real work — not just collect certificates"
        description="Choose your profession, complete real simulations, earn from real projects, and build a portfolio that employers trust."
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild><Link href="/learners/onboarding">Start needs assessment <ArrowRight className="h-4 w-4" /></Link></Button>
          <Button variant="secondary" asChild><Link href="/academies">Browse academies</Link></Button>
        </div>
      </PageHero>

      <SectionContainer>
        <SectionHeader align="left" eyebrow="The Problem" title="What learners struggle with" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["AI anxiety without direction", "Generic learning without portfolio", "Certificates without hiring signal", "No bridge to income or employment"].map((t) => (
            <div key={t} className="rounded-xl border border-border bg-white p-5 text-sm text-muted">{t}</div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="bg-panel">
        <SectionHeader title="How Skill Launch solves it" description="Learn → Practice → Earn → Build Proof → Get Referred / Get Hired" />
        <div className="grid gap-6 md:grid-cols-5">
          {["Learn", "Practice", "Earn", "Build Proof", "Get Hired"].map((s, i) => (
            <FadeIn key={s} delay={i * 0.05}>
              <div className="rounded-xl border border-border bg-white p-4 text-center">
                <p className="text-xs font-bold text-primary">0{i + 1}</p>
                <p className="mt-2 font-semibold text-foreground">{s}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer>
        <SectionHeader align="left" eyebrow="Needs Assessment" title="Personalized onboarding" description="Multi-step wizard matches learners to the right academy, vertical, and roadmap." />
        <Card className="glow-blue">
          <CardContent className="p-8">
            <div className="mb-6 flex gap-2">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className={`h-2 flex-1 rounded-full ${s <= quizStep + 1 ? "bg-primary" : "bg-border"}`} />
              ))}
            </div>
            <p className="font-semibold text-foreground">Step 1: Your current stage</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {["Student", "Fresh graduate", "Early-career worker", "Career switcher"].map((o) => (
                <div key={o} className="rounded-xl border border-border bg-panel p-4 text-sm">{o}</div>
              ))}
            </div>
            <Button className="mt-6" asChild><Link href="/learners/onboarding">Open full onboarding wizard</Link></Button>
          </CardContent>
        </Card>
      </SectionContainer>

      <SectionContainer className="bg-panel">
        <SectionHeader title="10 AI Academies" description="Each academy contains 10 job-execution courses with capstone projects." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {academies.map((a) => (
            <AcademyCard key={a.slug} slug={a.slug} name={a.name} description={a.description} courseCount={a.courseCount} industries={a.industries} />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer>
        <SectionHeader align="left" title="How learning works" />
        <FeatureCard icon={BookOpen} title="AI-Job Toolkits" description="Each toolkit contains prompts, templates, workflows, case studies, and assignments structured around job execution — not generic tutorials." className="mb-6" />
      </SectionContainer>

      <SectionContainer className="border-y border-border bg-panel">
        <SectionHeader align="left" eyebrow="Practice Lab" title="Simulations inside the platform" />
        <div className="grid gap-4 lg:grid-cols-2">
          <Card><CardContent className="p-6"><p className="font-semibold">Case study challenge</p><p className="mt-2 text-sm text-muted">Launch a wellness campaign with mentor feedback panel.</p></CardContent></Card>
          <Card><CardContent className="p-6"><p className="font-semibold">Workflow builder + prompt testing</p><p className="mt-2 text-sm text-muted">Build pipelines and test responses before marketplace tasks.</p></CardContent></Card>
        </div>
        <Button className="mt-6" variant="secondary" asChild><Link href="/practice">Open Practice Lab</Link></Button>
      </SectionContainer>

      <SectionContainer>
        <SectionHeader align="left" eyebrow="Assessment System" title="4-layer testing model" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {assessmentLayers.map((l) => (
            <div key={l.layer} className="rounded-xl border border-border bg-white p-5">
              <Badge variant="outline">Layer {l.layer}</Badge>
              <p className="mt-3 font-semibold text-foreground">{l.name}</p>
              <p className="mt-1 text-sm text-muted">{l.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {scoreTiers.map((t) => (
            <div key={t.range} className="rounded-xl border border-border bg-panel p-4 text-sm">
              <span className={`font-bold ${t.color}`}>{t.range}</span>
              <span className="text-muted"> — {t.label}</span>
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="bg-panel">
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard icon={Wallet} title="Marketplace access" description="Unlock real projects only after reaching readiness thresholds (typically 75+)." />
          <FeatureCard icon={Shield} title="Verified portfolio" description="Every task builds portfolio entries, client feedback, skill evidence, and trust score." />
          <FeatureCard icon={Target} title="Referral opportunities" description="Partner businesses receive learner dossiers after strong performance." />
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild><Link href="/learners/onboarding">Begin learner path</Link></Button>
          <Button variant="secondary" asChild><Link href="/opportunities">View opportunities</Link></Button>
        </div>
      </SectionContainer>
    </>
  );
}
