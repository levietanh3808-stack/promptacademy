"use client";

import { useState } from "react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionContainer } from "@/components/shared/section-container";
import { talentCandidates, recruiterFilters } from "@/data/talent";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrustScoreBadge } from "@/components/shared/cards";
import { Star, CheckCircle2, Search } from "lucide-react";

export default function TalentPage() {
  const [verifiedOnly, setVerifiedOnly] = useState(true);
  const filtered = talentCandidates.filter((c) => !verifiedOnly || c.verifiedOnly);

  return (
    <>
      <PageHero compact eyebrow="Talent Discovery" title="Hire by execution history, not empty CVs" description="Match scores, verified work previews, trust signals, and side-by-side comparison." />
      <SectionContainer className="pt-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <aside className="lg:col-span-3 space-y-4">
            <Card>
              <CardContent className="p-4">
                <p className="mb-3 text-sm font-semibold">Filters</p>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={verifiedOnly} onChange={(e) => setVerifiedOnly(e.target.checked)} />
                  Verified only
                </label>
                <p className="mt-4 text-xs font-semibold uppercase text-muted">Academy</p>
                {recruiterFilters.academies.slice(0, 4).map((a) => (
                  <div key={a} className="mt-1 text-xs text-muted">{a}</div>
                ))}
              </CardContent>
            </Card>
          </aside>
          <div className="lg:col-span-9">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input placeholder="Search verified talent..." className="w-full rounded-xl border border-border py-3 pl-10 pr-4 text-sm focus:border-primary/40 focus:outline-none" />
            </div>
            <div className="space-y-4">
              {filtered.map((c) => (
                <Card key={c.id}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-deep to-primary text-lg font-bold text-white">{c.avatar}</div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div>
                            <h3 className="font-bold">{c.name}</h3>
                            <p className="text-sm text-muted">{c.title}</p>
                            <p className="text-xs text-muted">{c.academy}</p>
                          </div>
                          <Badge variant="success">{c.matchScore}% match</Badge>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <TrustScoreBadge score={c.trustScore} />
                          <Badge variant="outline">{c.completedProjects} projects</Badge>
                          <Badge variant="outline">{c.availability}</Badge>
                        </div>
                        <div className="mt-3 flex items-center gap-1 text-sm">
                          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                          {c.clientRating} client rating
                        </div>
                        <div className="mt-3 space-y-1">
                          {c.recentTasks.map((t) => (
                            <div key={t.title} className="flex items-center justify-between rounded-lg border border-border bg-panel px-3 py-2 text-xs">
                              <span className="truncate text-muted">{t.title}</span>
                              {t.verified && <CheckCircle2 className="h-3.5 w-3.5 text-success" />}
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 flex gap-2">
                          <Button size="sm">Shortlist</Button>
                          <Button size="sm" variant="secondary">Request test</Button>
                          <Button size="sm" variant="secondary">View proof</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
