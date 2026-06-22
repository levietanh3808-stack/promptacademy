export const pricingTiers = [
  { id: "learn", name: "Skill Path", audience: "B2C", price: "$29", period: "/month", description: "Domain-specific AI-Job Toolkits for learners building employability.", features: ["1 active academy toolkit", "Progress & readiness scoring", "Practice lab access", "Starter marketplace tasks", "Auto portfolio entries"], highlighted: false, cta: "Start Learning" },
  { id: "pro", name: "Pro Operator", audience: "B2C", price: "$59", period: "/month", description: "For learners targeting income + placement within 30–60 days.", features: ["All 10 academies", "Priority marketplace matching", "Mentor review credits", "Recruiter profile boost", "Advanced assessments"], highlighted: true, cta: "Go Pro" },
  { id: "earn", name: "Marketplace", audience: "B2B2C", price: "10–15%", period: " commission", description: "SMEs post micro-tasks. Platform commission on approved work.", features: ["Escrow-protected payments", "Mentor quality gate", "Talent matching", "Dispute resolution", "Business dashboard"], highlighted: false, cta: "Post a Project" },
  { id: "hired", name: "Talent Discovery", audience: "B2B", price: "Custom", description: "Recruiter packages for verified talent sourcing.", features: ["Proof-of-work search", "Match score engine", "Custom assessments", "Hiring pipeline", "Dedicated success manager"], highlighted: false, cta: "Book Demo" },
];

export const revenueStreams = [
  { stream: "LEARN", model: "B2C subscriptions", note: "Recurring toolkit access" },
  { stream: "EARN", model: "10–15% transaction fee", note: "SME micro-task marketplace" },
  { stream: "HIRED", model: "B2B recruiter packages", note: "Premium talent discovery" },
];
