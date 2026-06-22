export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  domain: string;
  payout: number;
  rating: number;
  verified: boolean;
  feedback: string;
  skills: string[];
  outcome: string;
  mentorNote?: string;
}

export interface LearnerProfile {
  id: string;
  name: string;
  title: string;
  avatar: string;
  academy: string;
  vertical: string;
  domainTags: string[];
  trustScore: number;
  qualityScore: number;
  recruiterReady: boolean;
  totalEarnings: number;
  verifiedProjects: number;
  onTimeRate: number;
  projects: PortfolioProject[];
  skillGraph: { skill: string; level: number }[];
  timeline: { month: string; projects: number; earnings: number }[];
  scoreTrend: number[];
}

export const demoLearner: LearnerProfile = {
  id: "learner-1",
  name: "Maya Chen",
  title: "AI Marketing Operator · Verified Talent",
  avatar: "MC",
  academy: "Marketing AI Academy",
  vertical: "Healthcare",
  domainTags: ["Marketing", "Content Writing", "SEO"],
  trustScore: 94,
  qualityScore: 4.9,
  recruiterReady: true,
  totalEarnings: 1240,
  verifiedProjects: 11,
  onTimeRate: 96,
  projects: [
    { id: "vp1", title: "SEO blog series — wellness brand", client: "GreenLeaf Wellness", domain: "Marketing", payout: 75, rating: 5, verified: true, feedback: "Exceeded brief. Organic traffic up 18%.", skills: ["SEO", "Content Writing"], outcome: "+18% organic traffic", mentorNote: "Excellent research depth." },
    { id: "vp2", title: "20 product images — fashion drop", client: "Nova Apparel Co.", domain: "Design", payout: 50, rating: 5, verified: true, feedback: "Studio-quality outputs. Zero revisions.", skills: ["AI Image Generation"], outcome: "0 revision rounds" },
    { id: "vp3", title: "Chatbot FAQ prompt pack", client: "StackFlow SaaS", domain: "Operations", payout: 60, rating: 4.8, verified: true, feedback: "Reduced tier-1 tickets by 22%.", skills: ["Prompt Engineering"], outcome: "-22% support tickets" },
  ],
  skillGraph: [
    { skill: "Prompt Engineering", level: 88 },
    { skill: "Content Writing", level: 92 },
    { skill: "SEO", level: 85 },
    { skill: "AI Analytics", level: 71 },
  ],
  timeline: [
    { month: "Feb", projects: 1, earnings: 35 },
    { month: "Mar", projects: 2, earnings: 110 },
    { month: "Apr", projects: 3, earnings: 185 },
    { month: "May", projects: 5, earnings: 910 },
  ],
  scoreTrend: [62, 68, 74, 78, 82, 85],
};
