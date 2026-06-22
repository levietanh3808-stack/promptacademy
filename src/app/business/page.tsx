"use client";

import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { SectionContainer, SectionHeader } from "@/components/shared/section-container";
import { FeatureCard, SplitComparison } from "@/components/shared/cards";
import { DashboardFrame } from "@/components/shared/motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { hiringPipeline } from "@/data/business";
import { adminOpsSnapshot } from "@/data/analytics";
import { brand } from "@/lib/constants";
import { FileText, Users, ClipboardCheck, Briefcase, Shield, BarChart3, ArrowRight } from "lucide-react";

const objectives = ["Post short-term tasks", "Build a talent pool", "Run custom assessments", "Hire interns / part-time / full-time"];

export default function BusinessPage() {
  return (
    <>
      <PageHero
        eyebrow="For Businesses"
        title="Hire verified AI-ready talent. Post tasks. Test execution. Reduce risk."
        description={`${brand.name} helps businesses source practical AI execution through real tasks, mentor-reviewed outputs, verified portfolios, and confidence-based hiring.`}
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild><Link href="/business/onboarding">Start business onboarding</Link></Button>
          <Button variant="secondary" asChild><Link href="/post-task">Post a task</Link></Button>
        </div>
      </PageHero>

      <SectionContainer>
        <SectionHeader align="left" title="Business pain" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Too many low-trust CVs", "No clear AI execution signal", "SMEs need affordable real work", "Recruiters need faster confidence"].map((t) => (
            <div key={t} className="rounded-xl border border-border bg-white p-5 text-sm text-muted">{t}</div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="bg-panel">
        <SectionHeader title="Choose your objective" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {objectives.map((o) => (
            <Card key={o}><CardContent className="p-5 text-sm font-medium text-foreground">{o}</CardContent></Card>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer>
        <SectionHeader align="left" title="How it works for business" />
        <ol className="space-y-4">
          {["Post task or define role", "Select domain + skill requirement", "Platform filters qualified learners", "Learners complete task", "Mentor review ensures quality", "Approved work becomes proof", "Business shortlists or hires confidently"].map((step, i) => (
            <li key={step} className="flex gap-3 text-sm text-muted">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">{i + 1}</span>
              {step}
            </li>
          ))}
        </ol>
      </SectionContainer>

      <SectionContainer className="bg-panel">
        <SectionHeader title="Business dashboard features" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon={FileText} title="Task Builder" description="Define scope, budget, deadline, and trust thresholds." />
          <FeatureCard icon={Users} title="Talent Pool" description="Build pipelines from verified execution history." />
          <FeatureCard icon={Briefcase} title="Portfolio Search" description="Search proof-of-work by domain and score." />
          <FeatureCard icon={ClipboardCheck} title="Assessments" description="Create custom tests and compare candidates." />
          <FeatureCard icon={BarChart3} title="Hiring Pipeline" description="Track shortlist → assessment → interview → offer." />
          <FeatureCard icon={Shield} title="Escrow & Risk Control" description="Payment held until mentor-approved delivery." />
        </div>
      </SectionContainer>

      <SectionContainer>
        <SectionHeader title="Better than traditional hiring" />
        <SplitComparison
          left={{ title: "Traditional CV screening", items: ["Self-reported skills", "No execution evidence", "High false-positive rate", "Slow validation cycles"] }}
          right={{ title: `${brand.name} proof pipeline`, items: ["Verified task history", "Mentor-reviewed outputs", "Trust score + match engine", "Hire with execution confidence"] }}
        />
      </SectionContainer>

      <SectionContainer className="border-t border-border bg-panel">
        <div className="grid gap-8 lg:grid-cols-2">
          <DashboardFrame title="Hiring Pipeline">
            {hiringPipeline.map((s) => (
              <div key={s.stage} className="mb-3 flex justify-between rounded-lg border border-border bg-panel p-3 text-sm">
                <span className="font-medium">{s.stage}</span>
                <span className="text-muted">{s.count} candidates</span>
              </div>
            ))}
          </DashboardFrame>
          <DashboardFrame title="Escrow snapshot">
            <p className="text-2xl font-bold text-primary">{adminOpsSnapshot.escrowHeld}</p>
            <p className="text-sm text-muted">In escrow · {adminOpsSnapshot.openProjects} open projects</p>
          </DashboardFrame>
        </div>
        <Button className="mt-8" asChild><Link href="/hiring">Open hiring pipeline <ArrowRight className="h-4 w-4" /></Link></Button>
      </SectionContainer>
    </>
  );
}
