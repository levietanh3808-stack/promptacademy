# Skill Launch by Moneyfest

**Vertical AI Academy + AI Employability Ecosystem**

> From AI Anxiety to Verified Employability

Closed-loop pipeline: **LEARN → EARN → BUILD PROOF → GET HIRED**

Premium white + blue investor-ready platform built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

---

## Quick Start

```bash
cd promptacademy
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

```bash
npm run build   # production build
npm start       # production server
```

---

## Deploy lên GitHub Pages (miễn phí)

Project đã cấu hình **static export** + **GitHub Actions** tự deploy khi push lên `main`.

### Bước 1 — Tạo repository trên GitHub

1. Vào [github.com/new](https://github.com/new)
2. Tên repo: **`promptacademy`**
3. Chọn **Public**
4. **Không** tick "Add README" (repo trống)
5. Create repository

### Bước 2 — Push code lên GitHub

Trong terminal, chạy (thay `USERNAME` nếu khác):

```bash
cd "/Users/leevietanh/AS/ghbc/web mới/promptacademy"

git add .
git commit -m "Skill Launch: deploy to GitHub Pages"

git remote add origin https://github.com/USERNAME/promptacademy.git
git branch -M main
git push -u origin main
```

Nếu đã có `origin`, chỉ cần:

```bash
git push -u origin main
```

### Bước 3 — Bật GitHub Pages

1. Vào repo trên GitHub → **Settings** → **Pages**
2. **Build and deployment** → Source: **GitHub Actions**
3. Đợi workflow **Deploy to GitHub Pages** chạy xong (tab **Actions**, ~2–3 phút)

### Bước 4 — Mở website

URL sẽ là:

**https://USERNAME.github.io/promptacademy/**

(Ví dụ: `https://levietanh3808-stack.github.io/promptacademy/`)

### Lần sau cập nhật site

```bash
git add .
git commit -m "Update content"
git push
```

GitHub Actions sẽ tự build và deploy lại.

### Lưu ý

- Repo **public** thì GitHub Pages miễn phí
- Nếu đổi tên repo, URL đổi theo `/TEN-REPO/`
- Deploy log: repo → **Actions** → workflow **Deploy to GitHub Pages**

---

## Routes

| Route | Description |
|-------|-------------|
| `/` | Fullscreen hero homepage — Why Now, market gap, ecosystem, role paths |
| `/learners` | Learner journey — academies, assessments, practice, portfolio |
| `/business` | Business journey — task posting, talent, hiring pipeline |
| `/learners/onboarding` | Multi-step learner needs assessment wizard |
| `/business/onboarding` | Business objective & filter configuration |
| `/academies` | All 10 AI academies overview |
| `/academy/[slug]` | Academy detail — 10 courses each |
| `/learn` | Learning Hub dashboard |
| `/practice` | Practice Lab simulations |
| `/assessments` | 4-layer testing center |
| `/marketplace` | SME micro-task marketplace + escrow flow |
| `/portfolio` | Verified proof-of-work portfolio |
| `/opportunities` | Learner referral / placement opportunities |
| `/talent` | Talent discovery for recruiters & businesses |
| `/post-task` | Business task posting form |
| `/hiring` | Hiring pipeline kanban |
| `/admin` | Light ops dashboard mockup |
| `/pricing` | B2C / B2B2C / B2B revenue model |
| `/about` | Mission, vision, impact |
| `/demo` | Interactive ecosystem walkthrough |

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/
│   ├── home/               # Homepage
│   ├── layout/             # Navbar, Footer
│   ├── shared/             # Reusable UI (cards, motion, hero)
│   └── ui/                 # shadcn-style primitives
├── data/
│   ├── academies.ts        # 10 academies × 10 courses each
│   ├── learning.ts         # Learner dashboard mock
│   ├── assessments.ts      # Tests & practice simulations
│   ├── projects.ts         # Marketplace tasks & escrow states
│   ├── portfolio.ts        # Verified learner profile
│   ├── talent.ts           # Recruiter candidate cards
│   ├── business.ts         # Hiring pipeline & opportunities
│   ├── pricing.ts          # Pricing tiers
│   └── analytics.ts        # Impact stats & admin ops
└── lib/
    ├── constants.ts        # Nav links, brand messages
    └── utils.ts            # cn(), formatCurrency()
```

---

## Customization Guide

### Copy & messaging
- Brand messages: `src/lib/constants.ts`
- Homepage sections: `src/components/home/homepage.tsx`
- Page content: each `src/app/*/page.tsx`

### Colors & theme
Edit **`src/app/globals.css`**:

```css
--background: #ffffff;
--primary: #1e6fff;
--primary-deep: #0e3a8a;
--panel: #f6faff;
```

Animated backgrounds: `src/components/shared/motion.tsx` (`AnimatedBackground`)

### Mock data
| File | Edit for |
|------|----------|
| `src/data/academies.ts` | Academies, courses, onboarding options, score tiers |
| `src/data/learning.ts` | Learning Hub dashboard state |
| `src/data/assessments.ts` | Tests & practice lab |
| `src/data/projects.ts` | Marketplace tasks & escrow |
| `src/data/portfolio.ts` | Demo learner portfolio |
| `src/data/talent.ts` | Recruiter candidates |
| `src/data/business.ts` | Hiring pipeline & opportunities |
| `src/data/pricing.ts` | Pricing tiers & revenue streams |
| `src/data/analytics.ts` | Impact metrics & admin ops |

### Navigation & branding
- Nav links: `src/lib/constants.ts`
- Logo & navbar: `src/components/layout/navbar.tsx`
- Metadata: `src/app/layout.tsx`

---

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — scroll reveals, animated backgrounds, workflow connectors
- **Lucide React** — icons
- **Radix UI** — accessible primitives

---

## Design Principles

- White + blue premium SaaS — optimistic, enterprise-ready
- Subtle animated backgrounds on every major section
- Product UI as primary storytelling
- 10 academies × 10 courses — realistic seeded content
- One pipeline — every feature serves LEARN → EARN → PROOF → HIRED
- Proof of work over proof of claims

© 2026 Skill Launch by Moneyfest
