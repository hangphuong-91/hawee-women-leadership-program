import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Globe } from 'lucide-react'

const IconFacebook = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const IconLinkedIn = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="text-white" style={{ background: 'linear-gradient(135deg, #1A2F5A 0%, #50002F 100%)' }}>
      <div className="border-t border-white/10">
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/images/logo-hcm.png" alt="UBND TP.HCM" className="h-9 object-contain brightness-0 invert opacity-80" />
                <div className="w-px h-8 bg-white/20" />
                <img src="/images/logo-hawee.png" alt="HAWEE" className="h-10 object-contain brightness-0 invert opacity-90" />
              </div>
              <p className="text-white/55 text-sm leading-relaxed">
                HAWEE Women Leadership Program 2026 — Chương trình đào tạo lãnh đạo nữ cấp cao
                do HAWEE và UBND TP.HCM đồng tổ chức.
              </p>
            </div>

            {/* Liên hệ + Social */}
            <div id="lien-he">
              <h4 className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-5">Liên hệ</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2.5">
                  <Phone size={13} className="text-white/35 flex-shrink-0" />
                  <a href="tel:0919479955" className="text-white/65 hover:text-white text-sm transition-colors">
                    091 947 99 55
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail size={13} className="text-white/35 flex-shrink-0" />
                  <a href="mailto:hawee.hochiminh@gmail.com" className="text-white/65 hover:text-white text-sm transition-colors break-all">
                    hawee.hochiminh@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin size={13} className="text-white/35 flex-shrink-0 mt-0.5" />
                  <span className="text-white/55 text-sm leading-relaxed">
                    Hội Doanh Nhân Nữ TP.HCM (HAWEE)<br />TP. Hồ Chí Minh
                  </span>
                </li>
              </ul>
              <div className="flex items-center gap-2.5">
                {[
                  { href: 'https://www.facebook.com/hawee.hochiminh', Icon: IconFacebook, label: 'Facebook' },
                  { href: 'https://www.linkedin.com/company/hawee', Icon: IconLinkedIn, label: 'LinkedIn' },
                  { href: 'https://hawee-website.vercel.app', Icon: () => <Globe size={14} />, label: 'Website' },
                ].map(({ href, Icon, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white/65 hover:text-white transition-all duration-200"
                    style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.20)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.10)'}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Khám phá */}
            <div>
              <h4 className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-5">Khám phá</h4>
              <ul className="space-y-2.5">
                {[
                  { to: '/#chuong-trinh', label: 'Giới thiệu chương trình' },
                  { to: '/#lo-trinh', label: 'Lộ trình học tập' },
                  { to: '/#cau-chuyen', label: 'Câu chuyện tác động' },
                  { to: '/kho-tai-lieu', label: 'Kho tài liệu học viên' },
                  { to: '/dang-ky', label: 'Đăng ký tham gia' },
                  { to: '/nop-cau-chuyen', label: 'Nộp câu chuyện của bạn' },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className="text-white/55 hover:text-white text-sm transition-colors hover:pl-1 duration-200 inline-block">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-custom py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-white/35 text-xs">
              © 2026 Hội Doanh Nhân Nữ TP.HCM (HAWEE). Bảo lưu mọi quyền.
            </p>
            <p className="text-white/25 text-xs">
              Rise in Full · Giàu Toàn Diện
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
