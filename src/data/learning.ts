import type { Academy } from "./academies";

export interface LearnerDashboard {
  name: string;
  avatar: string;
  academy: string;
  academySlug: string;
  vertical: string;
  progress: number;
  readinessScore: number;
  currentScore: number;
  activeCourse: string;
  mentorNote: string;
  marketplaceUnlocked: boolean;
  assessmentDeadline: string;
  roadmap: { step: string; status: "done" | "active" | "locked" }[];
}

export const demoDashboard: LearnerDashboard = {
  name: "Maya Chen",
  avatar: "MC",
  academy: "Marketing AI Academy",
  academySlug: "marketing-ai",
  vertical: "Healthcare",
  progress: 68,
  readinessScore: 74,
  currentScore: 82,
  activeCourse: "AI SEO Content & Topic Clustering",
  mentorNote: "Strong MECE prompting. Complete attribution lab to unlock premium marketplace tasks.",
  marketplaceUnlocked: false,
  assessmentDeadline: "Jun 28, 2026",
  roadmap: [
    { step: "Complete Module 7", status: "active" },
    { step: "Domain Case Test", status: "locked" },
    { step: "Unlock Marketplace (75+)", status: "locked" },
    { step: "First verified project", status: "locked" },
  ],
};

export function getToolkitForAcademy(academy: Academy) {
  return {
    title: `AI-Job Toolkit: ${academy.shortName}`,
    modules: academy.courses.slice(0, 6).map((c, i) => ({
      ...c,
      completed: i < 3,
    })),
  };
}
