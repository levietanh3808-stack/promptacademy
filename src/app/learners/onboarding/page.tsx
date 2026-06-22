"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionContainer } from "@/components/shared/section-container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { academies, learnerStages, functionalPaths, industryVerticals, learnerOutcomes } from "@/data/academies";

const steps = ["Current stage", "Functional path", "Industry vertical", "Desired outcome", "Your roadmap"];

export default function LearnerOnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState({ stage: "", path: "", vertical: "", outcome: "" });

  const recommendedAcademy = academies.find((a) =>
    selections.path && a.shortName.toLowerCase().includes(selections.path.split(" ")[0].toLowerCase())
  ) ?? academies[0];

  const options = [
    { key: "stage", label: steps[0], items: [...learnerStages] },
    { key: "path", label: steps[1], items: [...functionalPaths] },
    { key: "vertical", label: steps[2], items: [...industryVerticals] },
    { key: "outcome", label: steps[3], items: [...learnerOutcomes] },
  ] as const;

  const current = options[step];
  const isComplete = step >= 4;

  return (
    <>
      <PageHero compact eyebrow="Learner Onboarding" title="Find your AI employability path" description="Answer a few questions to get your academy, roadmap, and first assessment recommendation." />

      <SectionContainer className="pt-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 flex gap-2">
            {steps.map((s, i) => (
              <div key={s} className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-primary" : "bg-border"}`} title={s} />
            ))}
          </div>

          {!isComplete ? (
            <Card className="glow-blue">
              <CardContent className="p-8">
                <Badge className="mb-4">Step {step + 1} of 4</Badge>
                <h2 className="text-xl font-bold text-foreground">{current.label}</h2>
                <div className="mt-6 grid gap-2">
                  {current.items.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setSelections((s) => ({ ...s, [current.key]: item }));
                        setStep((s) => s + 1);
                      }}
                      className="rounded-xl border border-border bg-panel p-4 text-left text-sm font-medium transition-all hover:border-primary/40 hover:bg-primary/5"
                    >
                      {item}
                    </button>
                  ))}
                </div>
                {step > 0 && (
                  <Button variant="ghost" className="mt-4" onClick={() => setStep(step - 1)}>
                    <ArrowLeft className="h-4 w-4" /> Back
                  </Button>
                )}
              </CardContent>
            </Card>
          ) : (
            <Card className="glow-blue">
              <CardContent className="p-8">
                <div className="mb-4 flex items-center gap-2 text-success">
                  <CheckCircle2 className="h-5 w-5" /> Roadmap generated
                </div>
                <h2 className="text-2xl font-bold text-foreground">Your personalized path</h2>
                <div className="mt-6 space-y-4 text-sm">
                  <div className="rounded-xl border border-border bg-panel p-4">
                    <p className="text-muted">Recommended academy</p>
                    <p className="font-semibold text-foreground">{recommendedAcademy.name}</p>
                  </div>
                  <div className="rounded-xl border border-border bg-panel p-4">
                    <p className="text-muted">Industry vertical</p>
                    <p className="font-semibold text-foreground">{selections.vertical}</p>
                  </div>
                  <div className="rounded-xl border border-border bg-panel p-4">
                    <p className="text-muted">Readiness baseline</p>
                    <p className="font-semibold text-foreground">42 / 100 — Foundational</p>
                  </div>
                  <div className="rounded-xl border border-border bg-panel p-4">
                    <p className="text-muted">First toolkit</p>
                    <p className="font-semibold text-foreground">{recommendedAcademy.courses[0].title}</p>
                  </div>
                  <div className="rounded-xl border border-border bg-panel p-4">
                    <p className="text-muted">First assessment</p>
                    <p className="font-semibold text-foreground">Knowledge Check — {recommendedAcademy.shortName}</p>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild onClick={() => router.push(`/academy/${recommendedAcademy.slug}`)}>
                    <Link href={`/academy/${recommendedAcademy.slug}`}>Explore academy <ArrowRight className="h-4 w-4" /></Link>
                  </Button>
                  <Button variant="secondary" asChild><Link href="/learn">Open Learning Hub</Link></Button>
                  <Button variant="secondary" asChild><Link href="/assessments">Take first assessment</Link></Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </SectionContainer>
    </>
  );
}
