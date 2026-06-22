"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Briefcase, Shield, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionContainer } from "@/components/shared/section-container";
import { WorkflowConnector, WorkflowLabels } from "@/components/shared/workflow-connector";
import { DashboardFrame } from "@/components/shared/motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TabSwitcher } from "@/components/shared/tab-switcher";
import { journeyStats } from "@/data/analytics";

const roles = ["Learner", "SME", "Recruiter", "Mentor"] as const;
type Role = (typeof roles)[number];

const steps = [
  { id: "learn", title: "Learn", icon: BookOpen, headline: "Domain-Specific AI Upskilling", body: "Unlock AI-Job Toolkits tailored to real professions.", preview: "Marketing toolkit · 68% · Readiness 74" },
  { id: "earn", title: "Earn", icon: Briefcase, headline: "Micro-Task Marketplace", body: "Execute SME projects with escrow and mentor review.", preview: "SEO blog · $75 · Escrow held" },
  { id: "proof", title: "Build Proof", icon: Shield, headline: "Verified Portfolio", body: "Auto-generate proof-of-work entries on approval.", preview: "Trust +4 · Verified entry" },
  { id: "hired", title: "Get Hired", icon: Users, headline: "Talent Matching", body: "Recruiters source by execution track record.", preview: "96% match · Maya Chen" },
];

const roleCopy: Record<Role, string> = {
  Learner: "Complete toolkit → marketplace task → verified portfolio → recruiter discovery.",
  SME: "Post task → escrow → mentor-approved delivery → optional hire.",
  Recruiter: "Filter verified talent → review proof → shortlist → invite.",
  Mentor: "Review queue → quality gate → trust signal update.",
};

export default function DemoPage() {
  const [step, setStep] = useState(0);
  const [role, setRole] = useState<Role>("Learner");
  const labels = steps.map((s) => s.title);
  const current = steps[step];

  return (
    <>
      <PageHero compact eyebrow="Interactive Demo" title="See the closed loop in action" description="Learn → Earn → Build Proof → Get Hired — guided walkthrough." />
      <SectionContainer className="pt-4">
        <div className="mb-8 flex justify-center">
          <TabSwitcher tabs={roles.map((r) => ({ id: r, label: r }))} active={role} onChange={setRole} />
        </div>
        <p className="mb-8 text-center text-sm text-muted">{roleCopy[role]}</p>
        <WorkflowConnector steps={labels} activeIndex={step} />
        <WorkflowLabels steps={labels} />
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="space-y-2 lg:col-span-4">
            {steps.map((s, i) => (
              <button key={s.id} type="button" onClick={() => setStep(i)} className={`flex w-full items-center gap-3 rounded-xl border p-4 text-left ${step === i ? "border-primary/40 bg-panel glow-blue" : "border-border bg-white"}`}>
                <s.icon className="h-5 w-5 text-primary" />
                <span className="font-semibold">{s.title}</span>
              </button>
            ))}
          </div>
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div key={current.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
                <DashboardFrame title={`Demo · ${role} · Step ${step + 1}/4`}>
                  <Badge className="mb-3">{current.title}</Badge>
                  <h3 className="text-xl font-bold">{current.headline}</h3>
                  <p className="mt-2 text-sm text-muted">{current.body}</p>
                  <div className="mt-4 rounded-lg border border-border bg-panel p-4 text-sm">{current.preview}</div>
                  <div className="mt-6 flex gap-3">
                    {step > 0 && <Button variant="secondary" onClick={() => setStep(step - 1)}>Previous</Button>}
                    {step < 3 ? <Button onClick={() => setStep(step + 1)}>Next <ArrowRight className="h-4 w-4" /></Button> : <Button asChild><Link href="/learners/onboarding">Start your path</Link></Button>}
                  </div>
                </DashboardFrame>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <p className="mt-10 text-center text-sm font-semibold text-primary">
          Average journey: {journeyStats.avgDays} days → {journeyStats.validatedProjects} validated projects → placement
        </p>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {["Role onboarding", "Domain matching", "Mentor review", "Escrow logic", "Trust score", "Proof engine", "Recruiter confidence", "Dispute handling", "Admin ops"].map((item) => (
            <div key={item} className="flex gap-2 text-sm text-muted"><CheckCircle2 className="h-4 w-4 text-success" />{item}</div>
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
