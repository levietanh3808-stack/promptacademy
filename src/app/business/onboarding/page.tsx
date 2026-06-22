"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionContainer } from "@/components/shared/section-container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { businessObjectives } from "@/data/academies";

const industries = ["Healthcare", "Education", "Retail", "SaaS", "Hospitality", "Professional Services"];
const functions = ["Marketing", "Content", "Design", "Finance", "HR", "Operations", "Support"];
const budgets = ["Under $500", "$500–$2,000", "$2,000–$5,000", "$5,000+"];

export default function BusinessOnboardingPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Record<string, string>>({});
  const done = step >= 5;

  const questions = [
    { key: "objective", label: "What do you need?", options: [...businessObjectives] },
    { key: "industry", label: "Industry", options: industries },
    { key: "function", label: "Function needed", options: functions },
    { key: "budget", label: "Budget", options: budgets },
    { key: "timeline", label: "Shortlist delivery timeline?", options: ["Within 1 week", "2 weeks", "1 month", "Flexible"] },
  ];

  const q = questions[step];

  return (
    <>
      <PageHero compact eyebrow="Business Onboarding" title="Configure your hiring or task workflow" />

      <SectionContainer className="pt-8">
        <div className="mx-auto max-w-2xl">
          {!done && q ? (
            <Card>
              <CardContent className="p-8">
                <Badge className="mb-4">Step {step + 1} of 5</Badge>
                <h2 className="text-xl font-bold">{q.label}</h2>
                <div className="mt-6 grid gap-2">
                  {q.options.map((o) => (
                    <button key={o} type="button" onClick={() => { setData((d) => ({ ...d, [q.key]: o })); setStep(step + 1); }} className="rounded-xl border border-border p-4 text-left text-sm hover:border-primary/40 hover:bg-panel">{o}</button>
                  ))}
                </div>
                {step > 0 && <Button variant="ghost" className="mt-4" onClick={() => setStep(step - 1)}><ArrowLeft className="h-4 w-4" /> Back</Button>}
              </CardContent>
            </Card>
          ) : (
            <Card className="glow-blue">
              <CardContent className="p-8">
                <CheckCircle2 className="mb-4 h-6 w-6 text-success" />
                <h2 className="text-2xl font-bold">Your business path</h2>
                <div className="mt-6 space-y-3 text-sm">
                  <div className="rounded-xl border border-border bg-panel p-4"><p className="text-muted">Recommended path</p><p className="font-semibold">{data.objective === "Short-term task execution" ? "Post Task → Escrow → Mentor Review" : "Talent Pool → Assess → Hire"}</p></div>
                  <div className="rounded-xl border border-border bg-panel p-4"><p className="text-muted">Candidate filters</p><p className="font-semibold">{data.function} · Trust 80+ · Verified only</p></div>
                  <div className="rounded-xl border border-border bg-panel p-4"><p className="text-muted">Sample task brief</p><p className="font-semibold">AI-assisted {data.function} deliverable for {data.industry} SME</p></div>
                  <div className="rounded-xl border border-border bg-panel p-4"><p className="text-muted">Pricing suggestion</p><p className="font-semibold">Marketplace commission 10–15% · Budget tier: {data.budget}</p></div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild><Link href="/post-task">Post a task</Link></Button>
                  <Button variant="secondary" asChild><Link href="/talent">Browse talent</Link></Button>
                  <Button variant="secondary" asChild><Link href="/hiring">Open hiring pipeline</Link></Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </SectionContainer>
    </>
  );
}
