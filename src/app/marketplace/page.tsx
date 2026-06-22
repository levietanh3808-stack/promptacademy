"use client";

import { useState } from "react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionContainer } from "@/components/shared/section-container";
import { marketplaceProjects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { Shield, Clock } from "lucide-react";
import type { MarketplaceProject } from "@/data/projects";

export default function MarketplacePage() {
  const [selected, setSelected] = useState<MarketplaceProject | null>(null);

  return (
    <>
      <PageHero compact eyebrow="Marketplace" title="Turn learning into income" description="Real SME micro-tasks with escrow, mentor review, and automatic portfolio entries." />
      <SectionContainer className="pt-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8 grid gap-6 sm:grid-cols-2">
            {marketplaceProjects.map((p) => (
              <Card key={p.id} className="cursor-pointer transition-all hover:border-primary/30 hover:shadow-lg" onClick={() => setSelected(p)}>
                <CardContent className="p-6">
                  <div className="mb-2 flex flex-wrap gap-2">
                    <Badge>{p.status.replace("_", " ")}</Badge>
                    {p.escrowHeld && <Badge variant="warning"><Shield className="mr-1 h-3 w-3" />Escrow</Badge>}
                  </div>
                  <h3 className="font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted">{p.client}</p>
                  <p className="mt-3 line-clamp-2 text-sm text-muted">{p.description}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                    <span className="text-xl font-bold text-primary">{formatCurrency(p.payout)}</span>
                    <span className="flex items-center gap-1 text-xs text-muted"><Clock className="h-3.5 w-3.5" />{p.deadline}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="sticky top-24 h-fit lg:col-span-4">
            <CardContent className="p-6">
              <h3 className="font-semibold">Task flow</h3>
              {selected ? (
                <div className="mt-4 space-y-3 text-sm">
                  <p className="font-medium">{selected.title}</p>
                  <p className="text-muted">Trust threshold: {selected.trustThreshold}+</p>
                  <p className="text-muted">Mentor review: {selected.mentorReview ? "Required" : "Optional"}</p>
                  {["Apply", "Submit deliverables", "Mentor review", "Escrow release"].map((s, i) => (
                    <div key={s} className="rounded-lg border border-border bg-panel px-3 py-2">{i + 1}. {s}</div>
                  ))}
                  {selected.status === "disputed" && (
                    <p className="rounded-lg border border-red-200 bg-red-50 p-3 text-red-700">SLA breach → trust −8 → reassignment</p>
                  )}
                  <Button className="w-full">Apply to project</Button>
                </div>
              ) : (
                <p className="mt-3 text-sm text-muted">Select a project to view escrow and submission flow.</p>
              )}
            </CardContent>
          </Card>
        </div>
      </SectionContainer>
    </>
  );
}
