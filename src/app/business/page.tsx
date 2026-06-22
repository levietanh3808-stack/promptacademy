"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionContainer, SectionHeader } from "@/components/shared/section-container";
import { FeatureCard, SplitComparison } from "@/components/shared/cards";
import { DashboardFrame } from "@/components/shared/motion";
import { TabSwitcher } from "@/components/shared/tab-switcher";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { hiringPipeline } from "@/data/business";
import { adminOpsSnapshot } from "@/data/analytics";
import {
  FileText,
  Users,
  ClipboardCheck,
  Briefcase,
  Shield,
  BarChart3,
  ArrowRight,
  HelpCircle,
  LayoutDashboard,
} from "lucide-react";

const objectives = [
  "Post short-term tasks",
  "Build a talent pool",
  "Run custom assessments",
  "Hire interns / part-time / full-time",
];

const explainSections = [
  {
    title: "Trang này dành cho ai?",
    body: "Dành cho doanh nghiệp / SME / nhà tuyển dụng muốn thuê người biết dùng AI thật sự — không chỉ đọc CV. Bạn có thể đăng task, xem talent đã được xác minh, và tuyển dụng dựa trên proof-of-work.",
  },
  {
    title: "Hiring Pipeline là gì?",
    body: "Giống bảng Kanban tuyển dụng: theo dõi ứng viên từ lúc vào shortlist → gửi bài test → phỏng vấn → offer. Mỗi cột cho biết có bao nhiêu người đang ở giai đoạn đó — giúp bạn biết pipeline đang nghẽn ở đâu.",
  },
  {
    title: "Escrow snapshot là gì?",
    body: "Escrow = tiền thuê task được giữ an toàn trên nền tảng. SME trả trước, nhưng tiền chỉ chuyển cho learner sau khi mentor duyệt chất lượng. Số $24,600 là demo — tổng tiền đang giữ + 86 project đang mở.",
  },
  {
    title: "Liên quan closed-loop thế nào?",
    body: "Learner học → làm task thật → mentor duyệt → portfolio được xác minh → bạn thấy trong Hiring Pipeline và Talent Discovery. Escrow bảo vệ cả hai phía: SME không mất tiền oan, learner được trả khi làm đúng.",
  },
];

export default function BusinessPage() {
  const [dashboardTab, setDashboardTab] = useState<"preview" | "explain">("preview");

  return (
    <>
      <PageHero
        eyebrow="For Businesses"
        title="Hire verified AI-ready talent. Post tasks. Test execution. Reduce risk."
        description="Skill Launch helps businesses source practical AI execution through real tasks, mentor-reviewed outputs, verified portfolios, and confidence-based hiring."
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/business/onboarding">Start business onboarding</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/post-task">Post a task</Link>
          </Button>
        </div>
      </PageHero>

      <SectionContainer>
        <SectionHeader
          align="left"
          eyebrow="Vấn đề doanh nghiệp"
          title="Business pain"
          description="CV nhiều nhưng khó biết ai thực sự làm được việc với AI trong domain của bạn."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Too many low-trust CVs",
            "No clear AI execution signal",
            "SMEs need affordable real work",
            "Recruiters need faster confidence",
          ].map((t) => (
            <div key={t} className="rounded-xl border border-border bg-white p-5 text-sm text-muted">
              {t}
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="bg-panel">
        <SectionHeader
          title="Choose your objective"
          description="Chọn mục tiêu — platform sẽ gợi ý workflow phù hợp."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {objectives.map((o) => (
            <Card key={o}>
              <CardContent className="p-5 text-sm font-medium text-foreground">{o}</CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer>
        <SectionHeader
          align="left"
          title="How it works for business"
          description="7 bước từ đăng task đến tuyển dụng có bằng chứng thực thi."
        />
        <ol className="space-y-4">
          {[
            "Post task or define role",
            "Select domain + skill requirement",
            "Platform filters qualified learners",
            "Learners complete task",
            "Mentor review ensures quality",
            "Approved work becomes proof",
            "Business shortlists or hires confidently",
          ].map((step, i) => (
            <li key={step} className="flex gap-3 text-sm text-muted">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </SectionContainer>

      <SectionContainer className="bg-panel">
        <SectionHeader title="Business dashboard features" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon={FileText} title="Task Builder" description="Define scope, budget, deadline, and trust thresholds." />
          <FeatureCard icon={Users} title="Talent Pool" description="Build pipelines from verified execution history." />
          <FeatureCard icon={Briefcase} title="Portfolio Search" description="Search proof-of-work by domain and score." />
          <FeatureCard icon={ClipboardCheck} title="Assessments" description="Create custom tests and compare candidates." />
          <FeatureCard icon={BarChart3} title="Hiring Pipeline" description="Track shortlist → assessment → interview → offer." />
          <FeatureCard icon={Shield} title="Escrow & Risk Control" description="Payment held until mentor-approved delivery." />
        </div>
      </SectionContainer>

      <SectionContainer>
        <SectionHeader title="Better than traditional hiring" />
        <SplitComparison
          left={{
            title: "Traditional CV screening",
            items: [
              "Self-reported skills",
              "No execution evidence",
              "High false-positive rate",
              "Slow validation cycles",
            ],
          }}
          right={{
            title: "Skill Launch proof pipeline",
            items: [
              "Verified task history",
              "Mentor-reviewed outputs",
              "Trust score + match engine",
              "Hire with execution confidence",
            ],
          }}
        />
      </SectionContainer>

      {/* Dashboard preview + Explain tab */}
      <SectionContainer className="border-t border-border bg-panel">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge variant="outline" className="mb-3">
              Demo dashboard
            </Badge>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Bảng điều khiển doanh nghiệp
            </h2>
            <p className="mt-2 max-w-2xl text-muted">
              Xem trước cách SME theo dõi tuyển dụng và tiền escrow — dữ liệu mẫu để demo, không phải số thật.
            </p>
          </div>
          <TabSwitcher
            tabs={[
              { id: "preview", label: "Xem demo" },
              { id: "explain", label: "Giải thích" },
            ]}
            active={dashboardTab}
            onChange={setDashboardTab}
          />
        </div>

        {dashboardTab === "preview" ? (
          <div className="grid gap-8 lg:grid-cols-2">
            <DashboardFrame title="Hiring Pipeline — Ai đang ở giai đoạn nào?">
              <p className="mb-4 text-xs text-muted">
                Theo dõi ứng viên đã xác minh qua từng bước tuyển dụng.
              </p>
              {hiringPipeline.map((s) => (
                <div
                  key={s.stage}
                  className="mb-3 rounded-xl border border-border bg-white p-4"
                >
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-foreground">{s.stage}</span>
                    <Badge variant="outline">
                      {s.count} {s.count === 1 ? "candidate" : "candidates"}
                    </Badge>
                  </div>
                  {s.candidates.length > 0 && (
                    <p className="mt-2 text-xs text-muted">
                      Ví dụ: {s.candidates.join(", ")}
                    </p>
                  )}
                </div>
              ))}
            </DashboardFrame>

            <DashboardFrame title="Escrow snapshot — Tiền được giữ an toàn">
              <p className="mb-4 text-xs text-muted">
                SME đã trả nhưng tiền chưa chuyển cho learner cho đến khi mentor duyệt xong.
              </p>
              <div className="rounded-xl border border-primary/20 bg-panel p-6">
                <p className="text-3xl font-bold text-primary">{adminOpsSnapshot.escrowHeld}</p>
                <p className="mt-2 text-sm font-medium text-foreground">Đang giữ trong escrow</p>
                <p className="mt-1 text-sm text-muted">
                  {adminOpsSnapshot.openProjects} dự án đang mở trên marketplace
                </p>
              </div>
              <ul className="mt-4 space-y-2 text-xs text-muted">
                <li>✓ Mentor duyệt → tiền được giải phóng</li>
                <li>✓ Tranh chấp / trễ deadline → có quy trình hoàn tiền</li>
              </ul>
            </DashboardFrame>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-2">
            {explainSections.map((block) => (
              <Card key={block.title}>
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <HelpCircle className="h-4 w-4 text-primary" />
                    <h3 className="font-semibold text-foreground">{block.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">{block.body}</p>
                </CardContent>
              </Card>
            ))}
            <Card className="lg:col-span-2 border-primary/20 bg-gradient-to-r from-panel to-white">
              <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <LayoutDashboard className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Muốn thử đầy đủ?</p>
                    <p className="mt-1 text-sm text-muted">
                      Vào Hiring Pipeline, Post Task, hoặc Talent Discovery để xem product module thật (demo data).
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" asChild>
                    <Link href="/hiring">Hiring Pipeline</Link>
                  </Button>
                  <Button size="sm" variant="secondary" asChild>
                    <Link href="/post-task">Post Task</Link>
                  </Button>
                  <Button size="sm" variant="secondary" asChild>
                    <Link href="/talent">Talent</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {dashboardTab === "preview" && (
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/hiring">
                Mở Hiring Pipeline đầy đủ <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="secondary" onClick={() => setDashboardTab("explain")}>
              <HelpCircle className="h-4 w-4" /> Chưa hiểu? Xem giải thích
            </Button>
          </div>
        )}
      </SectionContainer>
    </>
  );
}
