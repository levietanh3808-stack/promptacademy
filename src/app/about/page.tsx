import Link from "next/link";
import { ArrowRight, Rocket, Heart, Globe } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionContainer, SectionHeader } from "@/components/shared/section-container";
import { FeatureCard } from "@/components/shared/cards";
import { impactMetrics } from "@/data/analytics";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="Workforce infrastructure for the AI era" description="PromptAcademy by Moneyfest — preparing the future workforce through verified, domain-specific AI execution." compact />
      <SectionContainer>
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-muted">
          <p>We exist because learners earn certificates without execution capability, while businesses desperately need AI-ready talent they can trust.</p>
          <p>Our answer is one pipeline — <strong className="text-foreground">Learn → Earn → Build Proof → Get Hired</strong> — where every feature reinforces verified employability through real work and mentor review.</p>
          <p>We are category-defining future-of-work infrastructure: practical, measurable, and commercial from day one.</p>
        </div>
      </SectionContainer>
      <SectionContainer className="bg-panel">
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard icon={Rocket} title="Mission" description="Transform AI anxiety into verified employability for Gen Z and young professionals." />
          <FeatureCard icon={Heart} title="Impact" description="Verified portfolios, learner income, SME savings, recruiter efficiency — measured, not claimed." />
          <FeatureCard icon={Globe} title="Vision" description="Become workforce infrastructure connecting upskilling to hiring at ecosystem scale." />
        </div>
      </SectionContainer>
      <SectionContainer>
        <SectionHeader title="Impact targets" description="Demo metric structure for investor conversations" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {impactMetrics.map((m) => (
            <div key={m.label} className="rounded-xl border border-border bg-white p-4 text-center">
              <p className="text-2xl font-bold text-primary">{m.value}</p>
              <p className="mt-1 text-xs text-muted">{m.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" asChild><Link href="/demo">Experience the ecosystem <ArrowRight className="h-4 w-4" /></Link></Button>
        </div>
      </SectionContainer>
    </>
  );
}
