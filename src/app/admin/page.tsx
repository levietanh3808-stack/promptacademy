import { PageHero } from "@/components/shared/page-hero";
import { SectionContainer } from "@/components/shared/section-container";
import { adminOpsSnapshot, impactMetrics } from "@/data/analytics";
import { escrowStates } from "@/data/projects";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AdminPage() {
  const metrics = [
    { label: "Active learners", value: adminOpsSnapshot.activeLearners.toLocaleString() },
    { label: "Assessment queue", value: adminOpsSnapshot.assessmentQueue },
    { label: "Mentor review queue", value: adminOpsSnapshot.mentorQueue },
    { label: "Open projects", value: adminOpsSnapshot.openProjects },
    { label: "Escrow held", value: adminOpsSnapshot.escrowHeld },
    { label: "Flagged cases", value: adminOpsSnapshot.flaggedCases },
    { label: "Recruiter requests", value: adminOpsSnapshot.recruiterRequests },
    { label: "Placement conversion", value: adminOpsSnapshot.conversionRate },
  ];

  return (
    <>
      <PageHero compact eyebrow="Ops Dashboard" title="Platform operations" description="Light mock admin view — learner activity, queues, escrow, and risk cases." />
      <SectionContainer className="pt-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <Card key={m.label}><CardContent className="p-5"><p className="text-2xl font-bold text-primary">{m.value}</p><p className="text-sm text-muted">{m.label}</p></CardContent></Card>
          ))}
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold">Escrow states</h3>
              <div className="mt-4 space-y-2">
                {escrowStates.map((e) => (
                  <div key={e.key} className="flex justify-between rounded-lg border border-border bg-panel px-4 py-2 text-sm">
                    <span>{e.label}</span>
                    <Badge variant="outline">Active</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold">Impact snapshot</h3>
              <div className="mt-4 space-y-3">
                {impactMetrics.slice(0, 4).map((m) => (
                  <div key={m.label} className="flex justify-between text-sm">
                    <span className="text-muted">{m.label}</span>
                    <span className="font-semibold">{m.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionContainer>
    </>
  );
}
