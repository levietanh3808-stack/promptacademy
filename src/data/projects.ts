export type ProjectStatus = "open" | "applied" | "mentor_review" | "revision" | "approved" | "paid" | "disputed" | "escalated";

export interface MarketplaceProject {
  id: string;
  title: string;
  client: string;
  domain: string;
  category: string;
  payout: number;
  deadline: string;
  skills: string[];
  status: ProjectStatus;
  escrowHeld: boolean;
  description: string;
  trustThreshold: number;
  mentorReview: boolean;
}

export const marketplaceProjects: MarketplaceProject[] = [
  { id: "p1", title: "Generate 20 fashion product images for summer drop", client: "Nova Apparel Co.", domain: "Design", category: "AI Image Generation", payout: 50, deadline: "3 days", skills: ["Midjourney", "Brand QA"], status: "open", escrowHeld: true, description: "On-brand product visuals for sustainable fashion line.", trustThreshold: 75, mentorReview: true },
  { id: "p2", title: "Write 5 SEO blog posts for wellness brand", client: "GreenLeaf Wellness", domain: "Marketing", category: "Content Writing", payout: 75, deadline: "5 days", skills: ["SEO", "Research"], status: "open", escrowHeld: true, description: "Research-backed wellness articles with meta descriptions.", trustThreshold: 78, mentorReview: true },
  { id: "p3", title: "Create 10 social media captions for product launch", client: "Pulse Beverages", domain: "Content", category: "Content Writing", payout: 35, deadline: "2 days", skills: ["Copywriting", "Hooks"], status: "mentor_review", escrowHeld: true, description: "Short-form captions with A/B hook variants.", trustThreshold: 70, mentorReview: true },
  { id: "p4", title: "Build chatbot FAQ prompt pack for SaaS helpdesk", client: "StackFlow SaaS", domain: "Operations", category: "Workflow Automation", payout: 60, deadline: "4 days", skills: ["Prompt Engineering", "Support Ops"], status: "approved", escrowHeld: true, description: "FAQ intents and escalation rules for tier-1 support.", trustThreshold: 74, mentorReview: true },
  { id: "p5", title: "Reconcile Q2 expense CSV and flag anomalies", client: "BrightLedger SMB", domain: "Finance", category: "AI Data Analysis", payout: 85, deadline: "3 days", skills: ["Data Cleaning", "Variance Analysis"], status: "paid", escrowHeld: false, description: "Clean 2,400-row export and produce anomaly report.", trustThreshold: 80, mentorReview: true },
  { id: "p6", title: "Screen 200 CVs against sales competency matrix", client: "ScaleHire Partners", domain: "HR", category: "Workflow Automation", payout: 55, deadline: "2 days", skills: ["CV Screening", "Rubrics"], status: "disputed", escrowHeld: true, description: "Rank candidates using STAR rubric. SLA breach triggers escalation.", trustThreshold: 76, mentorReview: true },
];

export const escrowStates = [
  { label: "Payment held in escrow", key: "held" },
  { label: "Work under mentor review", key: "review" },
  { label: "Revision requested", key: "revision" },
  { label: "Approved and released", key: "released" },
  { label: "Missed deadline — escalation", key: "escalated" },
  { label: "Refund / fallback protection", key: "refund" },
];
