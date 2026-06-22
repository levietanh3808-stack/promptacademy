import Link from "next/link";
import { Share2, Shield, Star, TrendingUp } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionContainer } from "@/components/shared/section-container";
import { demoLearner } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrustScoreBadge } from "@/components/shared/cards";
import { formatCurrency } from "@/lib/utils";

export default function PortfolioPage() {
  const p = demoLearner;
  return (
    <>
      <PageHero compact eyebrow="Verified Portfolio" title="Proof of work over proof of claims" description="Validated by real client tasks and mentor review — not self-reported claims." />
      <SectionContainer className="pt-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-6">
            <Card className="glow-blue">
              <CardContent className="p-6 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary-deep to-primary text-2xl font-bold text-white">{p.avatar}</div>
                <h2 className="mt-4 text-xl font-bold">{p.name}</h2>
                <p className="text-sm text-muted">{p.title}</p>
                <p className="mt-2 text-xs text-muted">{p.academy} · {p.vertical}</p>
                <TrustScoreBadge score={p.trustScore} />
                {p.recruiterReady && <Badge variant="success" className="mt-3">Recruiter-ready</Badge>}
                <Button className="mt-6 w-full" variant="secondary"><Share2 className="mr-2 h-4 w-4" />Share profile</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-3 p-6 text-sm">
                <div className="flex justify-between"><span className="text-muted">Quality</span><span className="flex items-center gap-1 font-bold"><Star className="h-4 w-4 fill-amber-400 text-amber-400" />{p.qualityScore}</span></div>
                <div className="flex justify-between"><span className="text-muted">Earnings</span><span className="font-bold text-primary">{formatCurrency(p.totalEarnings)}</span></div>
                <div className="flex justify-between"><span className="text-muted">On-time</span><span className="font-bold">{p.onTimeRate}%</span></div>
                <Badge variant="success" className="w-full justify-center gap-1 py-2"><Shield className="h-3.5 w-3.5" />Platform verified</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="mb-4 text-sm font-semibold">Skill graph</p>
                {p.skillGraph.map((s) => (
                  <div key={s.skill} className="mb-3">
                    <div className="mb-1 flex justify-between text-xs"><span>{s.skill}</span><span>{s.level}%</span></div>
                    <div className="h-1.5 rounded-full bg-panel"><div className="h-full rounded-full bg-primary" style={{ width: `${s.level}%` }} /></div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-8 space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-2"><TrendingUp className="h-5 w-5 text-primary" /><h3 className="font-semibold">Score trend</h3></div>
                <div className="flex h-24 items-end gap-2">
                  {p.scoreTrend.map((s, i) => (
                    <div key={i} className="flex-1 rounded-t bg-primary/20" style={{ height: `${s}%` }} title={`${s}`} />
                  ))}
                </div>
              </CardContent>
            </Card>
            <div>
              <h3 className="mb-4 font-semibold">Verified projects</h3>
              <div className="space-y-4">
                {p.projects.map((proj) => (
                  <Card key={proj.id}>
                    <CardContent className="p-6">
                      <Badge variant="success">Verified</Badge>
                      <h4 className="mt-2 text-lg font-semibold">{proj.title}</h4>
                      <p className="text-sm text-muted">{proj.client} · {formatCurrency(proj.payout)}</p>
                      <p className="mt-3 text-sm italic text-muted">&quot;{proj.feedback}&quot;</p>
                      {proj.mentorNote && <p className="mt-2 text-xs text-primary">Mentor: {proj.mentorNote}</p>}
                      <p className="mt-2 text-sm font-medium text-success">Outcome: {proj.outcome}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <Button asChild><Link href="/talent">View as recruiter →</Link></Button>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
