"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Briefcase, Shield, Users, CheckCircle2 } from "lucide-react";
import { AnimatedBackground, FadeIn, DashboardFrame } from "@/components/shared/motion";
import { SectionContainer, SectionHeader } from "@/components/shared/section-container";
import { StatCard, RoleCard, SplitComparison } from "@/components/shared/cards";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { whyNowStats, journeyStats } from "@/data/analytics";
import { brandMessages } from "@/lib/constants";
import { useState } from "react";

const trustSignals = ["Domain-Specific AI Toolkits", "Real SME Projects", "Verified Portfolios", "Recruiter-Ready Talent"];

const workflowSteps = [
  { num: "01", title: "Learn", subtitle: "Domain-Specific AI Upskilling", desc: "Bypassing generic theory. Learners unlock exclusive AI-Job Toolkits tailored exactly to their real-world professions.", icon: BookOpen, href: "/learn" },
  { num: "02", title: "Earn", subtitle: "Micro-Task Marketplace", desc: "Execute real-world projects sourced from SME partners. All outputs are mentor-reviewed to ensure enterprise-grade quality.", icon: Briefcase, href: "/marketplace" },
  { num: "03", title: "Build Proof", subtitle: "Platform-Validated Portfolio", desc: "Every completed micro-task automatically builds a dynamic, proof-of-work competency dashboard for the user.", icon: Shield, href: "/portfolio" },
  { num: "04", title: "Get Hired", subtitle: "Predictive Talent Matching", desc: "B2B recruiters bypass traditional CVs, sourcing verified talent directly through real-time execution track records.", icon: Users, href: "/talent" },
];

const comparisonRows = [
  { generic: "Generic AI theory", pa: "Domain-specific AI-Job Toolkits" },
  { generic: "Self-reported skills", pa: "Mentor-reviewed verified outputs" },
  { generic: "No income pathway", pa: "Real SME micro-task marketplace" },
  { generic: "CV claims without evidence", pa: "Proof-of-work talent discovery" },
];

export function HomePage() {
  const [activeStep, setActiveStep] = useState(0);
  const step = workflowSteps[activeStep];

  return (
    <>
      {/* FULLSCREEN HERO */}
      <section className="relative flex min-h-screen flex-col">
        <AnimatedBackground variant="hero" />
        <div className="relative z-10 flex flex-1 flex-col">
          <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <Badge className="mb-6 border-white/20 bg-white/10 text-white">Vertical AI Academy + Employability Ecosystem</Badge>
                <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  From AI Anxiety to Verified Employability
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
                  PromptAcademy is a vertical AI academy and employability ecosystem where learners gain domain-specific AI skills, apply them to real business work, build verified proof-of-work, and get hired through measurable execution.
                </p>
                <p className="mt-4 text-sm font-medium text-sky-soft">{brandMessages.ecosystem}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button size="lg" className="bg-white text-primary-deep hover:bg-white/90" asChild>
                    <Link href="/learners/onboarding">I&apos;m a Learner <ArrowRight className="h-4 w-4" /></Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/business/onboarding">I&apos;m a Business</Link>
                  </Button>
                  <Button size="lg" variant="ghost" className="text-white hover:bg-white/10" asChild>
                    <Link href="/demo">Watch Demo</Link>
                  </Button>
                </div>
                <div className="mt-10 flex flex-wrap gap-2">
                  {trustSignals.map((s) => (
                    <span key={s} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80">{s}</span>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
                <DashboardFrame title="PromptAcademy — Closed-Loop Pipeline">
                  <div className="space-y-3">
                    {workflowSteps.map((item, i) => (
                      <div key={item.num} className="flex items-center gap-4 rounded-xl border border-border bg-panel p-4 transition-colors hover:border-primary/30">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-bold uppercase tracking-wider text-muted">{item.num} · {item.title}</p>
                          <p className="font-semibold text-foreground">{item.subtitle}</p>
                        </div>
                        <CheckCircle2 className="h-5 w-5 text-success" />
                        {i < 3 && <div className="absolute hidden" />}
                      </div>
                    ))}
                    <div className="rounded-xl border border-primary/20 bg-primary/5 p-3 text-center text-sm font-semibold text-primary">
                      Average journey: {journeyStats.avgDays} days → {journeyStats.validatedProjects} validated projects → placement
                    </div>
                  </div>
                </DashboardFrame>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY NOW */}
      <SectionContainer className="light-section-bg">
        <SectionHeader eyebrow="Why Now" title="The challenge is verified execution" description="AI is transforming work. Businesses need execution-ready talent now. Generic education pathways are failing. The future of hiring is proof-of-work." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyNowStats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.08}><StatCard value={s.value} label={s.label} note={s.note} /></FadeIn>
          ))}
        </div>
        <p className="mt-10 text-center text-lg font-medium text-foreground">
          The challenge is no longer AI awareness. The challenge is verified, domain-specific execution.
        </p>
      </SectionContainer>

      {/* MARKET GAP */}
      <SectionContainer>
        <SectionHeader eyebrow="The Market Gap" title="A critical supply-demand disconnect" />
        <SplitComparison
          left={{ title: "Supply-side crisis", items: ["Gen Z anxiety about AI displacement", "Generic AI learning without practical evidence", "Certificates without proof-of-work", "No employability bridge to hiring"] }}
          right={{ title: "Demand-side bottleneck", items: ["SMEs need affordable AI execution", "Recruiters need proof, not claims", "CVs fail to validate real skills", "Companies want ready-to-contribute talent"] }}
          center="PromptAcademy closes this gap"
        />
      </SectionContainer>

      {/* HOW IT WORKS */}
      <SectionContainer id="how-it-works" className="border-y border-border bg-panel">
        <SectionHeader eyebrow="How the Ecosystem Works" title={brandMessages.onePipeline} description="From learning to income to employability — LEARN → EARN → BUILD PROOF → GET HIRED" />
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-2 lg:col-span-5">
            {workflowSteps.map((s, i) => (
              <button key={s.num} type="button" onClick={() => setActiveStep(i)} className={`flex w-full items-start gap-4 rounded-xl border p-4 text-left transition-all ${activeStep === i ? "border-primary/40 bg-white shadow-md glow-blue" : "border-border bg-white/60 hover:bg-white"}`}>
                <span className="text-xs font-bold text-muted">{s.num}</span>
                <div>
                  <p className="font-bold text-foreground">{s.title}</p>
                  <p className="text-sm text-primary">{s.subtitle}</p>
                </div>
              </button>
            ))}
          </div>
          <div className="lg:col-span-7">
            <motion.div key={step.num} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <step.icon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">{step.subtitle}</h3>
              <p className="mt-3 leading-relaxed text-muted">{step.desc}</p>
              <Button className="mt-6" variant="secondary" asChild>
                <Link href={step.href}>Explore module <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </motion.div>
          </div>
        </div>
        <p className="mt-10 text-center text-sm font-semibold text-primary">
          The Average Journey: {journeyStats.avgDays} Days of Upskilling → {journeyStats.validatedProjects} Validated SME Projects → Direct Job Placement
        </p>
      </SectionContainer>

      {/* COMPARISON */}
      <SectionContainer>
        <SectionHeader title="Why generic EdTech fails" description={brandMessages.ecosystem} />
        <div className="overflow-hidden rounded-2xl border border-border bg-white">
          <div className="grid grid-cols-2 border-b border-border bg-panel text-sm font-semibold">
            <div className="p-4 text-muted">Generic AI courses</div>
            <div className="border-l border-border p-4 text-primary">PromptAcademy</div>
          </div>
          {comparisonRows.map((row) => (
            <div key={row.generic} className="grid grid-cols-2 border-b border-border last:border-0 text-sm">
              <div className="p-4 text-muted">{row.generic}</div>
              <div className="flex items-center gap-2 border-l border-border p-4 text-foreground">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-success" />{row.pa}
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* CHOOSE YOUR PATH */}
      <SectionContainer className="bg-gradient-to-b from-panel to-white">
        <SectionHeader title="Choose your path" description="Every journey starts with a role. The platform adapts to learner or business needs." />
        <div className="grid gap-8 md:grid-cols-2">
          <RoleCard title="I'm a Learner" items={["Learn AI by profession", "Build a verified portfolio", "Earn through real tasks", "Get discovered by employers"]} cta="Enter Learner Path" href="/learners" variant="learner" />
          <RoleCard title="I'm a Business" items={["Post real business tasks", "Review verified talent", "Filter by skill and trust score", "Hire with confidence"]} cta="Enter Business Path" href="/business" variant="business" />
        </div>
      </SectionContainer>
    </>
  );
}
