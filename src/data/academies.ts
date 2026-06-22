export interface AcademyCourse {
  id: string;
  title: string;
  duration: string;
  modules: number;
  type: "foundation" | "workflow" | "industry" | "capstone";
}

export interface Academy {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  tagline: string;
  courseCount: number;
  industries: string[];
  skillTracks: string[];
  courses: AcademyCourse[];
  readinessThreshold: number;
}

const course = (
  id: string,
  title: string,
  type: AcademyCourse["type"] = "workflow"
): AcademyCourse => ({
  id,
  title,
  duration: type === "capstone" ? "6–8 hrs" : "2–4 hrs",
  modules: type === "capstone" ? 8 : type === "foundation" ? 5 : 6,
  type,
});

export const academies: Academy[] = [
  {
    slug: "marketing-ai",
    name: "Marketing AI Academy",
    shortName: "Marketing",
    description: "Execute campaign strategy, content systems, and growth analytics with domain-specific AI workflows built for modern SMEs.",
    tagline: "From brief to measurable campaign output",
    courseCount: 10,
    industries: ["Healthcare", "Education", "Retail", "SaaS"],
    skillTracks: ["Prompt Engineering", "Content Writing", "AI Analytics"],
    readinessThreshold: 75,
    courses: [
      course("m1", "AI Marketing Foundations for Modern SMEs", "foundation"),
      course("m2", "Prompting for Campaign Strategy"),
      course("m3", "AI Audience Research & Persona Mapping"),
      course("m4", "AI Social Media Planning System"),
      course("m5", "AI Ad Copy & Creative Testing"),
      course("m6", "AI Email Marketing & CRM Automation"),
      course("m7", "AI SEO Content & Topic Clustering"),
      course("m8", "AI Marketing Analytics Dashboards"),
      course("m9", "Industry Playbooks: Healthcare / Education / Retail Marketing", "industry"),
      course("m10", "Capstone: Build an AI-Powered Campaign Workflow", "capstone"),
    ],
  },
  {
    slug: "content-copywriting-ai",
    name: "Content & Copywriting AI Academy",
    shortName: "Content",
    description: "Ship SEO content, sales copy, scripts, and editorial systems that pass mentor review and client standards.",
    tagline: "Multi-format content at professional velocity",
    courseCount: 10,
    industries: ["Education", "Healthcare", "Beauty", "E-commerce"],
    skillTracks: ["Content Writing", "SEO", "Brand Voice"],
    readinessThreshold: 75,
    courses: [
      course("c1", "AI Copywriting Foundations", "foundation"),
      course("c2", "Prompt Systems for Blog & SEO Writing"),
      course("c3", "AI Sales Copy for Landing Pages"),
      course("c4", "AI Content Repurposing Across Channels"),
      course("c5", "AI Scriptwriting for Short-form Video"),
      course("c6", "Brand Voice Design with AI"),
      course("c7", "Editorial Planning & Content Operations"),
      course("c8", "AI Content QA & Fact-Checking"),
      course("c9", "Sector Writing Packs: Education / Healthcare / Beauty", "industry"),
      course("c10", "Capstone: Deliver a Multi-Format Content Kit", "capstone"),
    ],
  },
  {
    slug: "design-visual-ai",
    name: "Design & Visual AI Academy",
    shortName: "Design",
    description: "Produce client-ready visuals, brand systems, and ad creative pipelines using professional generative design workflows.",
    tagline: "Commercial-grade visual execution",
    courseCount: 10,
    industries: ["Beauty", "Real Estate", "F&B", "Fashion"],
    skillTracks: ["AI Image Generation", "Brand Systems", "Ad Creative"],
    readinessThreshold: 78,
    courses: [
      course("d1", "Design Thinking for AI Creators", "foundation"),
      course("d2", "Midjourney / Image Gen for Commercial Use"),
      course("d3", "AI Product Photography Workflows"),
      course("d4", "AI Brand Visual Systems"),
      course("d5", "Social Media Design at Scale"),
      course("d6", "AI Presentation Design for Business"),
      course("d7", "AI Image Editing & Refinement"),
      course("d8", "Ad Creative Production Pipelines"),
      course("d9", "Industry Packs: Beauty / Real Estate / F&B Visuals", "industry"),
      course("d10", "Capstone: Build a Client Visual Asset Pack", "capstone"),
    ],
  },
  {
    slug: "ecommerce-sales-ai",
    name: "E-commerce & Sales AI Academy",
    shortName: "E-commerce",
    description: "Optimize listings, sales chat, offers, and catalog operations for SME online stores and marketplaces.",
    tagline: "Revenue-focused AI execution",
    courseCount: 10,
    industries: ["Fashion", "Beauty", "Home Goods", "Retail"],
    skillTracks: ["Sales Copy", "Conversion", "Catalog Ops"],
    readinessThreshold: 74,
    courses: [
      course("e1", "AI for E-commerce Operations", "foundation"),
      course("e2", "AI Product Listing Optimization"),
      course("e3", "AI Product Description Writing"),
      course("e4", "AI Sales Chat & Lead Qualification"),
      course("e5", "AI Offer Testing & Conversion Logic"),
      course("e6", "AI Catalog & Merchandising Support"),
      course("e7", "AI Sales Analytics for SMEs"),
      course("e8", "Marketplace Growth Automation"),
      course("e9", "Industry Packs: Fashion / Beauty / Home Goods", "industry"),
      course("e10", "Capstone: Optimize a Mini Online Store System", "capstone"),
    ],
  },
  {
    slug: "accounting-finance-ai",
    name: "Accounting & Finance AI Academy",
    shortName: "Finance",
    description: "Automate reconciliation, reporting, and back-office finance workflows with audit-ready AI execution standards.",
    tagline: "Precision finance ops for SMEs",
    courseCount: 10,
    industries: ["Clinics", "Schools", "Retail", "Professional Services"],
    skillTracks: ["Data Analysis", "Spreadsheet AI", "Reporting"],
    readinessThreshold: 80,
    courses: [
      course("f1", "AI Fundamentals for Finance Workflows", "foundation"),
      course("f2", "AI Prompting for Spreadsheet Efficiency"),
      course("f3", "AI-Assisted Financial Reconciliation"),
      course("f4", "AI Invoice & Expense Processing"),
      course("f5", "AI Reporting Summaries for SMEs"),
      course("f6", "AI Forecasting Support & Scenario Planning"),
      course("f7", "AI Finance QA & Error Detection"),
      course("f8", "AI Workflow Automation for Back-office Teams"),
      course("f9", "Sector Packs: Clinics / Schools / Retail Finance Ops", "industry"),
      course("f10", "Capstone: Build a Monthly AI-Assisted Finance Workflow", "capstone"),
    ],
  },
  {
    slug: "hr-talent-ai",
    name: "HR & Talent AI Academy",
    shortName: "HR",
    description: "Design recruitment pipelines, screening systems, and employer branding with verified HR AI workflows.",
    tagline: "Hire smarter with AI execution",
    courseCount: 10,
    industries: ["Education", "Hospitality", "Retail", "Tech"],
    skillTracks: ["Recruitment", "Screening", "HR Analytics"],
    readinessThreshold: 76,
    courses: [
      course("h1", "AI for Modern Recruitment", "foundation"),
      course("h2", "Prompting for Job Description Design"),
      course("h3", "AI CV Screening & Candidate Summary"),
      course("h4", "AI Interview Question Generation"),
      course("h5", "AI Employer Branding Content"),
      course("h6", "AI Training Material Creation"),
      course("h7", "AI HR Analytics & Workforce Insights"),
      course("h8", "AI Onboarding Workflow Automation"),
      course("h9", "Sector Packs: Education / Hospitality / Retail Hiring", "industry"),
      course("h10", "Capstone: Build an AI Recruitment Pipeline", "capstone"),
    ],
  },
  {
    slug: "operations-admin-ai",
    name: "Operations & Admin AI Academy",
    shortName: "Operations",
    description: "Document SOPs, automate reporting, and build back-office systems that reduce SME operational cost.",
    tagline: "Operational leverage through AI",
    courseCount: 10,
    industries: ["Clinics", "Schools", "SMEs", "NGOs"],
    skillTracks: ["SOP Design", "Automation", "Documentation"],
    readinessThreshold: 74,
    courses: [
      course("o1", "AI for Administrative Productivity", "foundation"),
      course("o2", "AI SOP Drafting & Process Documentation"),
      course("o3", "AI Meeting Notes & Action Summaries"),
      course("o4", "AI Task Delegation Workflows"),
      course("o5", "AI Internal Reporting Automation"),
      course("o6", "AI Document Handling & Knowledge Base Support"),
      course("o7", "AI Scheduling & Coordination Systems"),
      course("o8", "AI Back-office Workflow Design"),
      course("o9", "Sector Packs: Clinics / Schools / SMEs Operations", "industry"),
      course("o10", "Capstone: Build a Team Operations Support Stack", "capstone"),
    ],
  },
  {
    slug: "customer-service-ai",
    name: "Customer Service & Community AI Academy",
    shortName: "Customer Service",
    description: "Build FAQ systems, support playbooks, and CRM workflows that improve response quality at scale.",
    tagline: "Support excellence with AI systems",
    courseCount: 10,
    industries: ["E-commerce", "Hospitality", "Education", "SaaS"],
    skillTracks: ["Support Ops", "FAQ Design", "CRM"],
    readinessThreshold: 73,
    courses: [
      course("cs1", "AI for Customer Communication", "foundation"),
      course("cs2", "AI FAQ & Help Center Creation"),
      course("cs3", "AI Chat Response Systems"),
      course("cs4", "AI Review Monitoring & Response Writing"),
      course("cs5", "AI Complaint Handling Playbooks"),
      course("cs6", "AI Community Content Moderation"),
      course("cs7", "AI Support Ticket Prioritization"),
      course("cs8", "AI CRM Notes & Customer Insights"),
      course("cs9", "Sector Packs: E-commerce / Hospitality / Education Support", "industry"),
      course("cs10", "Capstone: Build a Support Workflow with AI", "capstone"),
    ],
  },
  {
    slug: "education-learning-design-ai",
    name: "Education & Learning Design AI Academy",
    shortName: "Education",
    description: "Design lessons, assessments, and learning analytics for educators and training teams.",
    tagline: "AI-powered learning design",
    courseCount: 10,
    industries: ["K-12", "Language Centers", "Corporate Training", "EdTech"],
    skillTracks: ["Curriculum", "Assessment Design", "Engagement"],
    readinessThreshold: 75,
    courses: [
      course("ed1", "AI for Teaching & Learning Support", "foundation"),
      course("ed2", "AI Lesson Planning & Material Design"),
      course("ed3", "AI Quiz & Assessment Generation"),
      course("ed4", "AI Presentation & Class Content Creation"),
      course("ed5", "AI Feedback Systems for Learners"),
      course("ed6", "AI Curriculum Mapping"),
      course("ed7", "AI Learning Analytics Basics"),
      course("ed8", "AI Student Communication & Engagement"),
      course("ed9", "Sector Packs: K-12 / Language Centers / Corporate Training", "industry"),
      course("ed10", "Capstone: Build a Mini AI Learning Module", "capstone"),
    ],
  },
  {
    slug: "research-business-analysis-ai",
    name: "Research & Business Analysis AI Academy",
    shortName: "Research",
    description: "Deliver market research, competitor analysis, and decision-ready insights with rigorous AI workflows.",
    tagline: "Evidence-based business intelligence",
    courseCount: 10,
    industries: ["Healthcare", "Consumer", "SaaS", "Professional Services"],
    skillTracks: ["Market Research", "Analysis", "Reporting"],
    readinessThreshold: 78,
    courses: [
      course("r1", "AI Research Foundations", "foundation"),
      course("r2", "AI Market Research Workflows"),
      course("r3", "AI Competitor Analysis Systems"),
      course("r4", "AI Survey Synthesis & Insight Extraction"),
      course("r5", "AI Interview Summary & Thematic Analysis"),
      course("r6", "AI Dashboard Storytelling"),
      course("r7", "AI Business Case Writing"),
      course("r8", "AI Industry Trend Mapping"),
      course("r9", "Sector Packs: Healthcare / Education / Consumer / SaaS", "industry"),
      course("r10", "Capstone: Deliver a Decision-Ready Research Pack", "capstone"),
    ],
  },
];

export function getAcademy(slug: string) {
  return academies.find((a) => a.slug === slug);
}

export const learnerStages = ["Student", "Fresh graduate", "Early-career worker", "Career switcher"] as const;
export const functionalPaths = [
  "Marketing", "Content", "Design", "E-commerce", "Accounting / Finance",
  "HR", "Operations", "Customer Service", "Education", "Research / Business Analysis",
] as const;
export const industryVerticals = [
  "Healthcare", "Education", "Retail / E-commerce", "Beauty / Lifestyle",
  "Hospitality / Travel", "Real Estate", "F&B", "Tech / SaaS",
  "Professional Services", "NGO / Social Impact",
] as const;
export const learnerOutcomes = [
  "Build portfolio", "Earn side income", "Get internship", "Get part-time work",
  "Get full-time job", "Be referred to partner businesses",
] as const;

export const businessObjectives = [
  "Short-term task execution", "Talent pipeline", "Internship hiring",
  "Part-time hiring", "Full-time hiring",
] as const;

export const scoreTiers = [
  { range: "Below 60", label: "Not ready", color: "text-red-600" },
  { range: "60–74", label: "Foundational pass", color: "text-amber-600" },
  { range: "75–89", label: "Project-ready", color: "text-primary" },
  { range: "90+", label: "Recruiter-ready", color: "text-success" },
];

export const assessmentLayers = [
  { layer: 1, name: "Knowledge Check", desc: "Core concepts and prompt literacy" },
  { layer: 2, name: "Workflow Simulation", desc: "Execute a realistic task pipeline" },
  { layer: 3, name: "Domain Case Test", desc: "Industry-specific scenario challenge" },
  { layer: 4, name: "Partner-Style Performance Task", desc: "Mentor-reviewed client-style deliverable" },
];

export const scoringDimensions = [
  "Knowledge", "Execution", "Relevance", "Reliability", "Communication",
];
