import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { SectionContainer } from "@/components/shared/section-container";
import { AcademyCard } from "@/components/shared/cards";
import { academies } from "@/data/academies";

export default function AcademiesPage() {
  return (
    <>
      <PageHero eyebrow="Academies" title="10 vertical AI academies" description="Each academy includes 10 execution-focused courses, industry packs, and a capstone project." compact />
      <SectionContainer className="pt-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {academies.map((a) => (
            <AcademyCard key={a.slug} slug={a.slug} name={a.name} description={a.description} courseCount={a.courseCount} industries={a.industries} />
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
