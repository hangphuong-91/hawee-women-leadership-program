# HAWEE Women Leadership Program 2026 — Landing Page

**Website tuyển sinh & thương hiệu cho chương trình đào tạo lãnh đạo nữ cấp cao**

🌐 **Live:** https://hawee-leadership-program.vercel.app/  
📍 **Custom Domain:** https://leadership.hawee.vn/ (pending DNS setup)  
🔗 **GitHub:** https://github.com/hangphuong-91/hawee-women-leadership-program  

---

## 📋 Tổng Quan

**HAWEE Women Leadership Program 2026** là chương trình đào tạo lãnh đạo nữ cấp cao, phối hợp **HAWEE × UBND TP.HCM / Thành Ủy**, sponsor chính **PNJ**.

**Mục tiêu:**
- Tuyển 20 suất học viên đặc biệt (hội viên HAWEE + nhà nước)
- Xây dựng thương hiệu Công-Tư dài hạn
- Kết nối lãnh đạo nữ: nhà nước, doanh nhân, alumni

**Tagline:** "Từ quản lý hiệu quả đến lãnh đạo tạo tác động"

---

## 🛠 Tech Stack

| Layer | Tool |
|-------|------|
| Frontend | React 18 + Vite |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion + pure CSS |
| Hosting | Vercel |
| Font | MonaSans (self-hosted) |

---

## 📁 Project Structure

```
website/
├── public/
│   ├── fonts/          # MonaSans .ttf files
│   └── images/         # Logo + KV images
├── src/
│   ├── components/     # Navbar, Footer, Modal, etc.
│   ├── pages/
│   │   └── Landing.jsx # Main page
│   ├── index.css       # Brand styles + animations
│   ├── App.jsx
│   └── main.jsx
├── scripts/
│   └── export-pdf.js   # PDF export utility
├── outputs/            # Generated files
├── CLAUDE.md           # Claude instructions
├── PLAN.md             # Project roadmap
├── README.md           # This file
└── package.json
```

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Deploy to Vercel
vercel --prod

# Export to PDF
npm run export-pdf
```

---

## 🎨 Design System

**Colors:** Magenta (#CB5184) + Navy (#1A2F5A) + Gold (#D8A84F)  
**Font:** MonaSans (Condensed SemiBold for headers, SemiExpanded Medium for body)  
**Responsive:** Mobile-first, 640px (sm) & 1024px (lg) breakpoints

---

## 📱 Features

✓ Hero section with animated lotus  
✓ Partner logos (PNJ, UBND TPHCM, HAWEE)  
✓ Program overview (6 sessions)  
✓ Student benefits (5 boxes + CTA)  
✓ Instructor profiles  
✓ Smooth scroll animations  
✓ Mobile responsive  
✓ PDF export capability  

---

## 🌐 Deployment

**Current:** https://hawee-leadership-program.vercel.app/  
**Setup custom domain:** Add CNAME `leadership → cname.vercel-dns.com` at DNS registrar

---

## 📞 Support

See CLAUDE.md for development guidelines & PLAN.md for project roadmap.
