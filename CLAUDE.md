# CLAUDE.md — HAWEE Women Leadership Program Landing Page

**For:** Claude instances working on this project  
**Project:** HAWEE Women Leadership Program 2026 — Landing Page  
**Stack:** React 18 + Vite + Tailwind CSS + Vercel  

---

## Quick Reference

### Key Files
- `src/pages/Landing.jsx` — Main landing page (all content + components)
- `src/index.css` — Brand styles, animations, design system
- `tailwind.config.js` — Custom colors + theme
- `scripts/export-pdf.js` — PDF export utility
- `vercel.json` — Deployment config

### Important URLs
- **Live:** https://hawee-leadership-program.vercel.app/
- **GitHub:** https://github.com/hangphuong-91/hawee-women-leadership-program
- **Custom Domain:** leadership.hawee.vn (pending DNS)

---

## Design System

### Colors (Tailwind Custom)
```javascript
{
  primary: '#CB5184',        // HAWEE magenta (buttons, highlights)
  'primary-dark': '#991B55', // Dark magenta (hover states)
  navy: '#1A2F5A',           // Government navy (headers, authority)
  'govt-red': '#BE1E2D',     // Communist Party red (sparse accent)
  gold: '#D8A84F',           // Prestige gold (CTA, badges)
  cream: '#FCEDF4',          // Warm background
}
```

### Typography
- **Headings:** `font-semibold` or `font-bold` (MonaSans Condensed-SemiBold)
- **Body:** `font-normal` (MonaSans SemiExpanded-Medium)
- **Sizes:** `text-sm` (12px), `text-base` (16px), `text-lg` (18px), `text-xl+` (large headings)

### CSS Animations
- `.hero-leadership` — Hero overlay + dual-brand gradient
- `.lotus-petal` — Petal bloom animation (0-0.6s stagger)
- `.orbit-ring` — Gold ring spinning (25s loop)
- `.arrow-light-trail` — Light sweep effect (2.5s)
- `.ctaDarkPulse` — CTA button pulse + glow (2.5s)
- `.lightSweep` — Horizontal light sweep (2.6s)

---

## Content Structure (Landing.jsx)

```jsx
// Hero Section (line ~50)
- KV background + overlay
- Logo strip (PNJ, UBND, HAWEE)
- Tagline

// Program Overview (line ~300)
- "6 Buổi × 2 Tháng = 12 Tháng Hành Trình"
- 6 session cards with descriptions

// Benefits Section (line ~620)
- 5 benefit cards (Toolkit, E-Learning, Chứng nhận, Network, Alumni)
- 1 CTA card (Giới hạn + Nộp hồ sơ)

// Instructors Section (line ~700)
- 2 instructor profiles (Lương Ngọc Tiên, Nguyễn Thị Thanh Hương)
- 2 placeholder slots

// Leadership Team Section (line ~840)
- 6 team members (Ban Chỉ đạo HAWEE)
```

---

## Common Tasks

### Update Content/Copy
**File:** `src/pages/Landing.jsx` (search for the text)
```jsx
// Example: Update tagline
<p>Từ quản lý hiệu quả đến lãnh đạo tạo tác động</p> // Line ~310
```

### Update Colors/Styles
**File:** `tailwind.config.js` (global) or inline in `Landing.jsx`
```jsx
// Gradient example
style={{ background: 'linear-gradient(135deg, #CB5184, #DC76B0)' }}
```

### Add/Remove Section
1. Add new `<section>` component in `Landing.jsx`
2. Wrap with `<FadeUp>` for scroll animation
3. Style with Tailwind + custom CSS

### Fix Mobile Layout
- Use `sm:` (640px), `md:` (768px), `lg:` (1024px) prefixes
- Example: `text-sm sm:text-base md:text-lg`
- Test at 375px (mobile), 768px (tablet), 1280px (desktop)

### Update Images
1. Place image in `public/images/`
2. Reference as `src="/images/filename.png"`
3. No import needed (static asset)

### Export to PDF
```bash
node scripts/export-pdf.js
# Output: outputs/HAWEE-Leadership-Program-Landing.pdf
```

---

## Responsive Breakpoints

| Breakpoint | Width | Use Case |
|-----------|-------|----------|
| Mobile | < 640px | Single column, compact |
| `sm:` | 640px+ | 2 columns |
| `md:` | 768px+ | Tablets |
| `lg:` | 1024px+ | Desktop (3+ columns) |

---

## Git Workflow

```bash
# Create branch
git checkout -b feature/name

# Make changes
# Commit
git add -A
git commit -m "Description"

# Push to GitHub
git push origin feature/name

# Create PR on github.com
```

**Commit messages:**
- "Update section copy: [section name]"
- "Fix mobile layout: [component]"
- "Add feature: [description]"

---

## Build & Deploy

```bash
# Local build test
npm run build

# Preview production build
npm run preview

# Deploy to Vercel (auto-deploys on git push)
vercel --prod
```

---

## Troubleshooting

**Text wrapping issues?**
- Use `whitespace-nowrap` on title fields
- Adjust font size with responsive classes: `text-[10px] sm:text-[11px]`

**Animation not smooth?**
- Check `loading-relaxed` or `leading-snug` on text
- Ensure `duration-300`, `duration-400` on transitions

**Mobile looks broken?**
- Check responsive classes are applied (sm:, md:, lg:)
- Test at actual mobile widths (375px, 425px)

**Build fails?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## Key Variables & Data

**Program Info:**
- Duration: 12 months (6 sessions × 2 months each)
- Intake: 20 seats (limited)
- Partnership: HAWEE × UBND TP.HCM / Thành Ủy
- Sponsor: PNJ

**Session List:**
1. Lãnh đạo Bản Thân
2. Lãnh đạo Thấu Cảm
3. Dẫn Dắt Đội Ngũ Hiệu Quả
4. Giao Tiếp Hiệu Quả & Phong Thái Lãnh Đạo
5. Văn Hóa Tổ Chức & Đổi Mới Sáng Tạo
6. Kết Nối & Tạo Ảnh Hưởng

---

## Language Rules (Tiếng Việt)

Following CLAUDE.md from parent workspace:
- **Marketing terms:** Tiếng Việt (English in parenthesis)
  - Tỷ lệ tương tác (Engagement Rate)
  - Trụ cột nội dung (Content Pillar)
  - Lời kêu gọi hành động (CTA)
- **Keep English:** Platform names (Facebook, LinkedIn, YouTube), tool names (Canva, Notion), official terms
- **No mixing:** Don't write "check content plan" → "kiểm tra kế hoạch nội dung"

---

## Questions?

Check README.md for setup & PLAN.md for roadmap.
