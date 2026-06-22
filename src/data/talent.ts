export interface TalentCandidate {
  id: string;
  name: string;
  title: string;
  avatar: string;
  academy: string;
  domains: string[];
  matchScore: number;
  trustScore: number;
  qualityScore: number;
  availability: "Available" | "Limited" | "Booked";
  verifiedOnly: boolean;
  completedProjects: number;
  clientRating: number;
  recentTasks: { title: string; verified: boolean }[];
  skills: string[];
}

export const talentCandidates: TalentCandidate[] = [
  { id: "t1", name: "Maya Chen", title: "AI Marketing Operator", avatar: "MC", academy: "Marketing AI Academy", domains: ["Marketing", "Content"], matchScore: 96, trustScore: 94, qualityScore: 4.9, availability: "Available", verifiedOnly: true, completedProjects: 11, clientRating: 4.9, skills: ["SEO", "Campaign Ops"], recentTasks: [{ title: "SEO blog series", verified: true }, { title: "Launch captions", verified: true }] },
  { id: "t2", name: "James Okonkwo", title: "AI Finance Analyst", avatar: "JO", academy: "Accounting & Finance AI Academy", domains: ["Finance", "Operations"], matchScore: 91, trustScore: 89, qualityScore: 4.7, availability: "Limited", verifiedOnly: true, completedProjects: 8, clientRating: 4.7, skills: ["Reconciliation", "Reporting"], recentTasks: [{ title: "Q2 expense reconciliation", verified: true }] },
  { id: "t3", name: "Sofia Rivera", title: "AI Visual Designer", avatar: "SR", academy: "Design & Visual AI Academy", domains: ["Design", "E-commerce"], matchScore: 93, trustScore: 92, qualityScore: 5.0, availability: "Available", verifiedOnly: true, completedProjects: 14, clientRating: 5.0, skills: ["Midjourney", "Brand Systems"], recentTasks: [{ title: "Fashion product images", verified: true }] },
  { id: "t4", name: "Daniel Park", title: "AI HR Specialist", avatar: "DP", academy: "HR & Talent AI Academy", domains: ["HR", "Operations"], matchScore: 87, trustScore: 86, qualityScore: 4.6, availability: "Booked", verifiedOnly: true, completedProjects: 6, clientRating: 4.6, skills: ["CV Screening", "Rubrics"], recentTasks: [{ title: "Sales CV shortlist", verified: true }] },
];

export const recruiterFilters = {
  academies: ["Marketing AI Academy", "Content & Copywriting AI Academy", "Design & Visual AI Academy", "Accounting & Finance AI Academy", "HR & Talent AI Academy"],
  industries: ["Healthcare", "Education", "Retail", "SaaS", "Hospitality"],
};
