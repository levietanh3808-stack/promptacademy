"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Briefcase, Shield, Users, CheckCircle2 } from "lucide-react";
import {
  ScrollMorphBackground,
  FadeIn,
  DashboardFrame,
  heroRevealContainer,
  heroRevealItem,
  heroRevealCard,
} from "@/components/shared/motion";
import { SectionContainer, SectionHeader } from "@/components/shared/section-container";
import { StatCard, RoleCard, SplitComparison } from "@/components/shared/cards";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { whyNowStats, journeyStats } from "@/data/analytics";
import { brandMessages, brand } from "@/lib/constants";
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
      <ScrollMorphBackground />

      <div className="relative">
        {/* HERO */}
        <section className="relative flex min-h-[calc(100vh-4rem)] flex-col">
          <div className="relative z-10 flex flex-1 flex-col">
            <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <motion.div variants={heroRevealContainer} initial="hidden" animate="show">
                  <motion.div variants={heroRevealItem}>
                    <Badge className="mb-6 border-white/20 bg-white/10 text-white backdrop-blur-md">
                      Vertical AI Academy + Employability Ecosystem
                    </Badge>
                  </motion.div>
                  <motion.h1
                    variants={heroRevealItem}
                    className="text-4xl font-bold leading-[1.08] tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl"
                  >
                    From AI Anxiety to Verified Employability
                  </motion.h1>
                  <motion.p variants={heroRevealItem} className="mt-6 max-w-xl text-lg leading-relaxed text-white/88">
                    {brand.name} is a vertical AI academy and employability ecosystem where learners gain domain-specific AI skills, apply them to real business work, build verified proof-of-work, and get hired through measurable execution.
                  </motion.p>
                  <motion.p variants={heroRevealItem} className="mt-4 text-sm font-medium text-sky-soft/90">
                    {brandMessages.ecosystem}
                  </motion.p>
                  <motion.div variants={heroRevealItem} className="mt-8 flex flex-wrap gap-3">
                    <Button size="lg" className="bg-white text-[#020617] shadow-lg shadow-black/20 hover:bg-white/92" asChild>
                      <Link href="/learners/onboarding">I&apos;m a Learner <ArrowRight className="h-4 w-4" /></Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/35 bg-white/8 text-white backdrop-blur-sm hover:bg-white/15 hover:text-white"
                      asChild
                    >
                      <Link href="/business/onboarding">I&apos;m a Business</Link>
                    </Button>
                    <Button size="lg" variant="ghost" className="text-white/90 hover:bg-white/10 hover:text-white" asChild>
                      <Link href="/demo">Watch Demo</Link>
                    </Button>
                  </motion.div>
                  <motion.div variants={heroRevealItem} className="mt-10 flex flex-wrap gap-2">
                    {trustSignals.map((s) => (
                      <span key={s} className="rounded-full border border-white/15 bg-black/15 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
                        {s}
                      </span>
                    ))}
                  </motion.div>
                </motion.div>

                <motion.div variants={heroRevealCard} initial="hidden" animate="show">
                  <DashboardFrame title={`${brand.name} — Closed-Loop Pipeline`}>
                    <div className="space-y-3">
                      {workflowSteps.map((item) => (
                        <div
                          key={item.num}
                          className="flex items-center gap-4 rounded-xl border border-border/40 bg-white/80 p-4 backdrop-blur-sm transition-colors hover:border-primary/25"
                        >
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <item.icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <p className="text-xs font-bold uppercase tracking-wider text-muted">{item.num} · {item.title}</p>
                            <p className="font-semibold text-foreground">{item.subtitle}</p>
                          </div>
                          <CheckCircle2 className="h-5 w-5 text-success" />
                        </div>
                      ))}
                      <div className="rounded-xl border border-primary/15 bg-primary/[0.06] p-3 text-center text-sm font-semibold text-primary">
                        Average journey: {journeyStats.avgDays} days → {journeyStats.validatedProjects} validated projects → placement
                      </div>
                    </div>
                  </DashboardFrame>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <SectionContainer>
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

        <SectionContainer>
          <SectionHeader eyebrow="The Market Gap" title="A critical supply-demand disconnect" />
          <SplitComparison
            left={{ title: "Supply-side crisis", items: ["Gen Z anxiety about AI displacement", "Generic AI learning without practical evidence", "Certificates without proof-of-work", "No employability bridge to hiring"] }}
            right={{ title: "Demand-side bottleneck", items: ["SMEs need affordable AI execution", "Recruiters need proof, not claims", "CVs fail to validate real skills", "Companies want ready-to-contribute talent"] }}
            center={`${brand.name} closes this gap`}
          />
        </SectionContainer>

        <SectionContainer id="how-it-works">
          <SectionHeader eyebrow="How the Ecosystem Works" title={brandMessages.onePipeline} description="From learning to income to employability — LEARN → EARN → BUILD PROOF → GET HIRED" />
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="space-y-2 lg:col-span-5">
              {workflowSteps.map((s, i) => (
                <button
                  key={s.num}
                  type="button"
                  onClick={() => setActiveStep(i)}
                  className={`flex w-full items-start gap-4 rounded-xl border p-4 text-left transition-all backdrop-blur-md ${
                    activeStep === i
                      ? "border-primary/30 bg-white/95 shadow-md glow-blue"
                      : "border-border/30 bg-white/75 hover:bg-white/90"
                  }`}
                >
                  <span className="text-xs font-bold text-muted">{s.num}</span>
                  <div>
                    <p className="font-bold text-foreground">{s.title}</p>
                    <p className="text-sm text-primary">{s.subtitle}</p>
                  </div>
                </button>
              ))}
            </div>
            <div className="lg:col-span-7">
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-card rounded-2xl p-8"
              >
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

        <SectionContainer>
          <SectionHeader title="Why generic EdTech fails" description={brandMessages.ecosystem} />
          <div className="glass-card overflow-hidden rounded-2xl">
            <div className="grid grid-cols-2 border-b border-border/50 bg-white/60 text-sm font-semibold">
              <div className="p-4 text-muted">Generic AI courses</div>
              <div className="border-l border-border/50 p-4 text-primary">{brand.name}</div>
            </div>
            {comparisonRows.map((row) => (
              <div key={row.generic} className="grid grid-cols-2 border-b border-border/50 last:border-0 text-sm">
                <div className="p-4 text-muted">{row.generic}</div>
                <div className="flex items-center gap-2 border-l border-border/50 p-4 text-foreground">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-success" />{row.pa}
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>

        <SectionContainer>
          <SectionHeader title="Choose your path" description="Every journey starts with a role. The platform adapts to learner or business needs." />
          <div className="grid gap-8 md:grid-cols-2">
            <RoleCard title="I'm a Learner" items={["Learn AI by profession", "Build a verified portfolio", "Earn through real tasks", "Get discovered by employers"]} cta="Enter Learner Path" href="/learners" variant="learner" />
            <RoleCard title="I'm a Business" items={["Post real business tasks", "Review verified talent", "Filter by skill and trust score", "Hire with confidence"]} cta="Enter Business Path" href="/business" variant="business" />
          </div>
        </SectionContainer>
      </div>
    </>
  );
}
