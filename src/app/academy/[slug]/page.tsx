import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/page-hero";
import { SectionContainer } from "@/components/shared/section-container";
import { getAcademy } from "@/data/academies";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
export function generateStaticParams() {
  return [
    "marketing-ai", "content-copywriting-ai", "design-visual-ai", "ecommerce-sales-ai",
    "accounting-finance-ai", "hr-talent-ai", "operations-admin-ai", "customer-service-ai",
    "education-learning-design-ai", "research-business-analysis-ai",
  ].map((slug) => ({ slug }));
}

export default async function AcademyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const academy = getAcademy(slug);
  if (!academy) notFound();

  return (
    <>
      <PageHero eyebrow="Academy" title={academy.name} description={academy.description} compact>
        <div className="flex flex-wrap gap-2">
          {academy.industries.map((i) => <Badge key={i} variant="outline">{i}</Badge>)}
        </div>
      </PageHero>
      <SectionContainer className="pt-8">
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <Card><CardContent className="p-5"><p className="text-2xl font-bold text-primary">{academy.courseCount}</p><p className="text-sm text-muted">Courses</p></CardContent></Card>
          <Card><CardContent className="p-5"><p className="text-2xl font-bold text-primary">{academy.readinessThreshold}+</p><p className="text-sm text-muted">Marketplace threshold</p></CardContent></Card>
          <Card><CardContent className="p-5"><p className="text-sm font-medium text-foreground">{academy.tagline}</p></CardContent></Card>
        </div>
        <h2 className="mb-6 text-xl font-bold">Course curriculum</h2>
        <div className="space-y-3">
          {academy.courses.map((c, i) => (
            <div key={c.id} className="flex items-center gap-4 rounded-xl border border-border bg-white p-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-panel text-xs font-bold text-primary">{i + 1}</span>
              <div className="flex-1">
                <p className="font-medium text-foreground">{c.title}</p>
                <p className="text-xs capitalize text-muted">{c.type} · {c.duration} · {c.modules} modules</p>
              </div>
              {c.type === "capstone" && <Badge variant="success">Capstone</Badge>}
            </div>
          ))}
        </div>
        <div className="mt-8 flex gap-3">
          <Button asChild><Link href="/learn">Start in Learning Hub</Link></Button>
          <Button variant="secondary" asChild><Link href="/learners/onboarding">Take needs assessment</Link></Button>
        </div>
      </SectionContainer>
    </>
  );
}
