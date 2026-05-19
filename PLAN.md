# PLAN.md — HAWEE Women Leadership Program Landing Page

**Project:** HAWEE Women Leadership Program 2026  
**Phase:** MVP Complete / Production Active  
**Status:** ✅ Live & Deployed

---

## 📍 Current State

### ✅ Completed
- [x] React + Vite + Tailwind CSS setup
- [x] Hero section with animated lotus + orbits
- [x] Partner logos strip (PNJ, UBND TPHCM, HAWEE)
- [x] Program overview (6 sessions)
- [x] Benefits section (5 cards + CTA)
- [x] Instructor profiles (2 confirmed)
- [x] Leadership team section (6 members)
- [x] Responsive design (mobile/tablet/desktop)
- [x] Smooth scroll animations (FadeUp)
- [x] PDF export utility
- [x] GitHub integration
- [x] Vercel deployment
- [x] Content copywriting (3 iterations)
- [x] Design system & brand guide
- [x] Mobile layout fixes & optimization

### 📋 Pending (Phase 2)
- [ ] Custom domain setup (leadership.hawee.vn DNS)
- [ ] Analytics integration (GA4)
- [ ] A/B testing (CTA variants)
- [ ] Form integration (Formspree)
- [ ] Email capture (newsletter)
- [ ] Supabase integration (enrollment tracking)
- [ ] Instagram/Facebook API (social feed)
- [ ] Multi-language support (EN)

---

## 🎯 Goals & Success Metrics

### Primary Goal: Tuyển Sinh
- **Target:** 20 suất học viên (hội viên HAWEE + nhà nước)
- **KPI:** Form submissions + enrollment rate
- **Timeline:** Tháng 5-6/2026

### Secondary Goal: Thương Hiệu
- **Target:** Xây dựng partnership image (Công-Tư)
- **KPI:** Social reach, media mentions, PR coverage
- **Timeline:** Dài hạn (12 tháng)

---

## 📊 Architecture

### Stack
```
Frontend: React 18 + Vite
├── UI Framework: React Components
├── Styling: Tailwind CSS + Custom CSS
├── Routing: Single page (no routing needed currently)
├── Animation: Framer Motion + pure CSS
└── Icons: Lucide React

Hosting: Vercel
├── Auto-deploy on git push
├── CDN + Edge caching
├── Security headers + HTTPS
└── Analytics + performance monitoring

Build: Vite
├── Fast HMR (dev)
├── Optimized bundles (prod)
└── Asset optimization (images, fonts)

Utilities:
├── PDF export: Puppeteer
├── Version control: Git + GitHub
└── Package management: npm
```

### Page Structure
```
Landing Page (Single Page)
├── Hero Section
│   ├── KV background image
│   ├── Logo animation (lotus + orbits)
│   ├── Partner logos
│   └── Tagline + tagline
├── Program Overview
│   ├── Section title
│   ├── 6 session cards
│   └── Timeline visual
├── Benefits Section
│   ├── 5 benefit cards (grid)
│   └── 1 CTA card (call-to-action)
├── Instructors
│   ├── 2 confirmed profiles
│   └── 2 placeholder slots
├── Leadership Team
│   ├── 6 team member cards
│   └── Roles + titles
└── Footer
    ├── Partner logos
    └── Contact info
```

---

## 📱 Responsive Design

| Device | Width | Grid | Font |
|--------|-------|------|------|
| Mobile | 375px | 1-2 col | text-xs/sm |
| Tablet | 768px | 2 col | text-sm/base |
| Desktop | 1280px | 3-4 col | text-base/lg |

**Tested & Optimized:**
- ✓ 375px (iPhone SE)
- ✓ 425px (iPhone 12)
- ✓ 768px (iPad)
- ✓ 1024px (iPad Pro)
- ✓ 1280px (Desktop)

---

## 🎨 Design Decisions

### Color Palette
- **Primary (Magenta):** #CB5184 — HAWEE brand identity
- **Navy:** #1A2F5A — Government authority
- **Gold:** #D8A84F — Prestige + premium feel
- **Govt Red:** #BE1E2D — Communist Party (minimal use)
- **Cream:** #FCEDF4 — Warm, welcoming background

**Rationale:** Merges HAWEE's modern magenta with government's traditional navy + gold, creating a "official yet innovative" aesthetic.

### Typography
- **Font:** MonaSans (self-hosted)
  - Condensed-SemiBold (600) for headings → authoritative
  - SemiExpanded-Medium (400) for body → readable + warm
- **Sizes:** Responsive (smaller on mobile, larger on desktop)

### Animation Philosophy
- **Subtle:** FadeUp scroll animations (150ms-300ms)
- **Purposeful:** CTA button pulses to draw attention
- **Professional:** No excessive movement (keeps focus on content)

---

## 🚀 Deployment Strategy

### Current Setup
- **Repository:** GitHub (hangphuong-91/hawee-women-leadership-program)
- **Hosting:** Vercel (auto-deploy on push)
- **Domain:** hawee-leadership-program.vercel.app (temporary)

### Domain Setup (To-Do)
1. Vercel Dashboard → Settings → Domains
2. Add: `leadership.hawee.vn`
3. DNS Registrar → Add CNAME: `leadership → cname.vercel-dns.com`
4. Wait 5-15 min for propagation

### CI/CD
- Push to GitHub → Vercel auto-deploys
- No manual deployment needed
- Build logs: vercel.com dashboard

---

## 📋 Content Roadmap

### Phase 1: Foundation (Completed)
- [x] Tagline & messaging
- [x] 6 session descriptions
- [x] Benefits copy
- [x] Instructor bios
- [x] Team member info

### Phase 2: Engagement (Pending)
- [ ] FAQ section
- [ ] Testimonials (alumni)
- [ ] Blog posts (3-5 articles)
- [ ] Case studies (company success)
- [ ] Video testimonials

### Phase 3: Conversion (Future)
- [ ] Email drip campaign
- [ ] Retargeting ads
- [ ] SMS campaigns
- [ ] Referral program
- [ ] Limited-time offers

---

## 🔧 Technical Roadmap

### Short-term (Q2 2026)
- [ ] Custom domain + DNS setup
- [ ] Analytics integration (GA4)
- [ ] Form submission tracking
- [ ] Error logging (Sentry)

### Medium-term (Q3 2026)
- [ ] Supabase enrollment DB
- [ ] Email notifications (Resend)
- [ ] Student portal (auth-gated)
- [ ] Resource library (for enrolled)

### Long-term (Q4 2026)
- [ ] Multi-language support (EN, FR)
- [ ] Mobile app (React Native)
- [ ] Community platform
- [ ] Alumni network app

---

## 📈 Success Metrics

### Recruitment KPIs
- **Page Views:** 1000+ per month
- **Form Submissions:** 30+ applications
- **Conversion Rate:** 3-5% (views → submissions)
- **Enrollment Rate:** 70%+ (submissions → enrolled)

### Engagement KPIs
- **Scroll Depth:** 70%+ reach benefits section
- **Time on Page:** 2+ minutes average
- **CTA Click Rate:** 5%+ click on "Nộp hồ sơ"
- **Mobile Traffic:** 40%+

### Brand KPIs
- **Social Shares:** 50+ per month
- **Email Opens:** 25%+
- **PR Mentions:** 5+ articles
- **Referral Traffic:** 10%+

---

## 🤝 Stakeholders

| Role | Name | Contact |
|------|------|---------|
| Project Lead | Lương Ngọc Tiên | (nội dung & truyền thông) |
| Design Lead | Cao Thị Ngọc Dung | (chỉ đạo dự án) |
| Partnership | HAWEE × UBND TPHCM | (co-organizers) |
| Sponsor | PNJ Group | (main sponsor) |

---

## 📝 Documentation

- **README.md** — Setup & features
- **CLAUDE.md** — Development guidelines
- **PLAN.md** — This file (roadmap & decisions)

---

## ❓ FAQ

**Q: Can I edit the copy?**  
A: Yes, edit `src/pages/Landing.jsx`, commit, and push. Vercel auto-deploys.

**Q: How to export to PDF?**  
A: Run `npm run export-pdf` → generates `outputs/HAWEE-Leadership-Program-Landing.pdf`

**Q: How to deploy?**  
A: Push to GitHub. Vercel auto-deploys. No manual steps needed.

**Q: How to setup custom domain?**  
A: Add CNAME record at DNS registrar, then in Vercel Dashboard add domain. Takes 5-15 min.

**Q: Can I add a form?**  
A: Yes, integrate Formspree. See Phase 2 roadmap.

---

## 🎓 Learning Resources

- **React:** https://react.dev
- **Tailwind:** https://tailwindcss.com
- **Vite:** https://vitejs.dev
- **Vercel:** https://vercel.com/docs
- **Framer Motion:** https://framer.com/motion

---

**Last Updated:** 2026-05-19  
**Version:** 1.0 (MVP Complete)
