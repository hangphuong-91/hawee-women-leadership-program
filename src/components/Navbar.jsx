import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, LogOut, Phone } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const anchorLinks = [
  { href: '#chuong-trinh', label: 'Chương trình' },
  { href: '#lo-trinh', label: 'Lộ trình' },
  { href: '#cau-chuyen', label: 'Câu chuyện' },
  { href: '#dang-ky', label: 'Đăng ký' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { user, signOut } = useAuth()
  const isLanding = pathname === '/'

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const handleSignOut = async () => { await signOut(); navigate('/') }

  const handleAnchor = (e, href) => {
    if (!isLanding) {
      e.preventDefault()
      navigate('/' + href)
    }
    setOpen(false)
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: (!scrolled && isLanding)
          ? 'transparent'
          : 'linear-gradient(135deg, rgba(26,47,90,0.97) 0%, rgba(80,0,47,0.97) 55%, rgba(201,24,127,0.93) 100%)',
        backdropFilter: (!scrolled && isLanding) ? 'none' : 'blur(12px)',
        boxShadow: scrolled ? '0 4px 28px rgba(26,47,90,0.45)' : 'none',
      }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logos */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/images/logo-hcm.png" alt="UBND TP.HCM" className="h-11 md:h-12 object-contain brightness-0 invert drop-shadow-sm" />
            <div className="w-px h-8 bg-white/30" />
            <img src="/images/logo-hawee.png" alt="HAWEE" className="h-11 md:h-12 object-contain brightness-0 invert drop-shadow-sm" />
            <div className="hidden sm:block pl-1">
              <p className="text-white font-semibold text-xs uppercase tracking-widest leading-none">Women Leadership</p>
              <p className="text-white/70 text-[10px] tracking-wide leading-none mt-0.5">Program 2026</p>
            </div>
          </Link>

          {/* Desktop: anchor links + kho tai lieu + CTA */}
          <div className="hidden md:flex items-center gap-6">
            {isLanding && anchorLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-base font-semibold text-white/75 hover:text-white transition-colors duration-200"
                onClick={e => handleAnchor(e, href)}
              >
                {label}
              </a>
            ))}
            <Link
              to="/kho-tai-lieu"
              className={`text-base font-semibold transition-colors duration-200 ${
                pathname === '/kho-tai-lieu' ? 'text-white' : 'text-white/75 hover:text-white'
              }`}
            >
              Kho tài liệu
            </Link>
            {user && (
              <button
                onClick={handleSignOut}
                className="flex items-center gap-1.5 text-white/60 hover:text-white text-base transition-colors"
              >
                <LogOut size={14} /> Đăng xuất
              </button>
            )}
            <a
              href="#lien-he"
              className="flex items-center gap-1.5 border border-white/30 text-white/85 hover:text-white hover:border-white/55 font-semibold text-sm py-2 px-5 rounded-full transition-all duration-200"
            >
              <Phone size={13} strokeWidth={2} />
              Liên hệ
            </a>
          </div>

          <button className="md:hidden text-white p-1" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/20" style={{ background: 'linear-gradient(to right, #A01060, #C9187F, #BE1E2D)' }}>
          <div className="container-custom py-4 flex flex-col gap-4">
            {isLanding && anchorLinks.map(({ href, label }) => (
              <a key={href} href={href} className="text-sm font-semibold text-white/80 py-2 border-b border-white/15" onClick={e => handleAnchor(e, href)}>
                {label}
              </a>
            ))}
            <Link to="/kho-tai-lieu" className="text-sm font-semibold text-white/80 py-2 border-b border-white/15">
              Kho tài liệu
            </Link>
            {user && (
              <button onClick={handleSignOut} className="text-left text-sm text-white/60 py-2 border-b border-white/15">
                Đăng xuất
              </button>
            )}
            <a href="#lien-he" onClick={() => setOpen(false)} className="bg-white/15 text-white font-semibold text-sm text-center py-3 rounded-full mt-1 border border-white/25 hover:bg-white/25 transition-colors">
              Liên hệ
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
