"use client";

import { useState } from "react";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { SectionContainer } from "@/components/shared/section-container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PostTaskPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero compact eyebrow="Post Task" title="Define a micro-task for verified learners" description="Escrow protection, mentor review, and trust-score filtering built in." />
      <SectionContainer className="pt-8">
        <div className="mx-auto max-w-2xl">
          {!submitted ? (
            <Card>
              <CardContent className="space-y-4 p-8">
                {[
                  { label: "Task title", placeholder: "Write 5 SEO blog posts for wellness brand" },
                  { label: "Industry", placeholder: "Healthcare" },
                  { label: "Function", placeholder: "Marketing / Content" },
                  { label: "Scope & expected output", placeholder: "5 articles, 1200 words each, meta descriptions" },
                  { label: "Deadline", placeholder: "5 days" },
                  { label: "Budget", placeholder: "$75" },
                ].map((f) => (
                  <div key={f.label}>
                    <label className="text-sm font-medium text-foreground">{f.label}</label>
                    <input className="mt-1 w-full rounded-xl border border-border px-4 py-2.5 text-sm focus:border-primary/40 focus:outline-none" placeholder={f.placeholder} />
                  </div>
                ))}
                <div className="flex flex-wrap gap-4 pt-2">
                  <label className="flex items-center gap-2 text-sm"><input type="checkbox" defaultChecked /> NDA required</label>
                  <label className="flex items-center gap-2 text-sm"><input type="checkbox" defaultChecked /> Mentor review required</label>
                </div>
                <div>
                  <label className="text-sm font-medium">Trust score threshold</label>
                  <input type="range" min="60" max="95" defaultValue="75" className="mt-2 w-full" />
                  <p className="text-xs text-muted">Minimum 75 recommended</p>
                </div>
                <label className="flex items-center gap-2 text-sm"><input type="checkbox" /> Add custom assessment</label>
                <Button className="w-full" onClick={() => setSubmitted(true)}>Publish task · Escrow funds</Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="glow-blue">
              <CardContent className="p-8 text-center">
                <Badge variant="success" className="mb-4">Task published</Badge>
                <h2 className="text-xl font-bold">Funds held in escrow</h2>
                <p className="mt-2 text-sm text-muted">Qualified learners will be matched. Mentor review required before release.</p>
                <div className="mt-6 flex justify-center gap-3">
                  <Button asChild><Link href="/marketplace">View marketplace</Link></Button>
                  <Button variant="secondary" asChild><Link href="/hiring">Hiring pipeline</Link></Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </SectionContainer>
    </>
  );
}
