# CLAUDE.md — HAWEE Leadership Program Website

**Project:** HAWEE Women Leadership Program 2026 — Website tuyển sinh & thương hiệu  
**Stack:** React 18 + Vite + Tailwind CSS + Supabase + Notion + Formspree → Vercel  
**Domain:** `leadership.hawee.vn` (sau khi deploy — CNAME → cname.vercel-dns.com)

---

## Commands

```bash
npm run dev      # Dev server tại http://localhost:5173
npm run build    # Production build → dist/
npm run preview  # Preview build local
```

## Cấu trúc

```
src/
├── components/
│   ├── Navbar.jsx      # Sticky navy navbar, transparent trên hero
│   ├── Footer.jsx      # Navy footer, partner logos
│   ├── FadeUp.jsx      # Scroll-triggered fade animation (shared)
│   └── LotusHero.jsx   # Animated lotus + orbit rings + arrow
├── pages/
│   ├── Home.jsx        # Hero KV + stats + program overview + CTA
│   ├── GioiThieu.jsx   # Logos đồng tổ chức + lý do + output
│   ├── LoTrinh.jsx     # 6-session timeline + 2 personas
│   ├── CauChuyen.jsx   # Impact stories (Notion CMS + fallback static)
│   ├── KhoTaiLieu.jsx  # Auth-gated resource library (Supabase)
│   ├── DangKy.jsx      # Registration form (Formspree)
│   └── DangNhap.jsx    # Login page for resource library
├── context/
│   └── AuthContext.jsx  # Supabase session, useAuth() hook
└── services/
    ├── supabase.js      # Supabase client
    └── notion.js        # Notion API helpers
api/
└── notion.js            # Vercel serverless proxy (CORS fix)
public/
├── fonts/               # MonaSans .ttf files
└── images/              # kv-hang-chon, logo-hawee, logo-hcm
```

## Design System

**Màu sắc (tailwind.config.js):**
- `primary: #C9187F` — HAWEE magenta (buttons, highlights)
- `navy: #1A2F5A` — Chính quyền (navbar, headers)
- `govt-red: #BE1E2D` — Đỏ Đảng (border accent, sparse)
- `gold: #C9A84C` — Prestige (CTA buttons, accents)
- `cream: #FCEDF4` — Background ấm

**Font:** MonaSans (self-hosted từ public/fonts/)
- 400 = SemiExpanded-Medium (body)
- 600 = Condensed-SemiBold (headings)

**CSS classes quan trọng (index.css):**
- `.hero-leadership` — KV background + dual-brand overlay
- `.section-govt` — White section với red top border (Thành Ủy style)
- `.section-navy` — Dark navy section
- `.title-gold-line` — Tiêu đề với gold underline
- `.lotus-petal` / `.orbit-ring` — Hero animation
- `.arrow-light-trail` — Light sweep effect
- `.gradient-text-gold` — Gold gradient text

## Environment Variables

```env
# .env.local (KHÔNG commit)
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
NOTION_API_KEY=          # NO VITE_ prefix — server-side only
NOTION_STORIES_DB_ID=
VITE_FORMSPREE_ID=
ALLOWED_ORIGIN=https://leadership.hawee.vn
```

## Supabase Setup (project mới — TÁCH BIỆT hawee-website)

```sql
-- Enrolled students (admin thêm thủ công)
CREATE TABLE enrolled_students (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text UNIQUE NOT NULL,
  full_name text,
  session_number int DEFAULT 1,
  enrolled_at timestamptz DEFAULT now()
);
ALTER TABLE enrolled_students ENABLE ROW LEVEL SECURITY;
CREATE POLICY "users check own enrollment" ON enrolled_students
  FOR SELECT TO authenticated USING (auth.email() = email);

-- Resources (admin điền qua Supabase Dashboard)
CREATE TABLE resources (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  description text,
  file_url text NOT NULL,
  session_number int DEFAULT 0,  -- 0 = tất cả, 1-6 = buổi cụ thể
  resource_type text DEFAULT 'pdf',  -- pdf | video | link | slide
  display_order int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;
CREATE POLICY "enrolled students read resources" ON resources
  FOR SELECT TO authenticated USING (
    EXISTS (SELECT 1 FROM enrolled_students WHERE email = auth.email())
  );
```

## Notion DB (Impact Stories)

```
Database name: "HAWEE Leadership — Impact Stories"
Properties:
- Title (title)
- Slug (rich_text) — URL-friendly
- Excerpt (rich_text)
- Author (rich_text)
- PublishedDate (date)
- Tags (multi_select): Nhà nước | Doanh nhân | Alumni
- CoverImage (url)
- Status (select): Draft | Published
```

## Deploy → Vercel

1. GitHub repo: `hawee-leadership-website`
2. Vercel → Import → Framework: Vite
3. Add env vars (Vercel Dashboard → Settings → Environment Variables)
4. Sau deploy: Settings → Domains → Add `leadership.hawee.vn`
5. DNS: CNAME record `leadership → cname.vercel-dns.com`

## Thêm Logo PNJ

Khi có logo PNJ:
1. Save vào `public/images/logo-pnj.png`
2. Trong `Home.jsx` — tìm phần "PNJ Group" placeholder và thay bằng:
   ```jsx
   <img src="/images/logo-pnj.png" alt="PNJ" className="h-10 md:h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
   ```
3. Trong `Footer.jsx` — thêm logo PNJ vào phần "Đồng tổ chức"

## Content Management (non-tech)

- **Impact Stories:** Thêm vào Notion DB → website tự cập nhật
- **Resources:** Upload file → Google Drive → paste link vào Supabase `resources` table
- **Enrolled students:** Paste email vào `enrolled_students` table (Supabase Dashboard)
- **Registration forms:** Formspree gửi email → admin xử lý thủ công
