export interface Assessment {
  id: string;
  title: string;
  layer: number;
  academy: string;
  duration: string;
  score?: number;
  status: "available" | "in_progress" | "completed" | "locked";
  tier?: string;
}

export const assessments: Assessment[] = [
  { id: "a1", title: "Marketing Knowledge Check", layer: 1, academy: "Marketing AI Academy", duration: "25 min", score: 88, status: "completed", tier: "Project-ready" },
  { id: "a2", title: "Campaign Workflow Simulation", layer: 2, academy: "Marketing AI Academy", duration: "45 min", score: 82, status: "completed", tier: "Project-ready" },
  { id: "a3", title: "Healthcare Marketing Case Test", layer: 3, academy: "Marketing AI Academy", duration: "60 min", status: "in_progress" },
  { id: "a4", title: "Partner-Style Performance Task", layer: 4, academy: "Marketing AI Academy", duration: "90 min", status: "locked" },
  { id: "a5", title: "Content QA Simulation", layer: 2, academy: "Content & Copywriting AI Academy", duration: "40 min", status: "available" },
];

export const practiceSimulations = [
  { id: "s1", title: "Case Study: Launch a wellness campaign", type: "Case challenge", progress: 60 },
  { id: "s2", title: "Workflow Builder: Content pipeline", type: "Workflow builder", progress: 40 },
  { id: "s3", title: "Prompt Response Testing", type: "Prompt lab", progress: 85 },
];
