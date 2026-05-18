import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, animate, useInView } from 'framer-motion'
import { ArrowRight, Globe, Target, Network, TrendingUp, Layers, Compass, GraduationCap, Users, Shield, User } from 'lucide-react'
import FadeUp from '../components/FadeUp'

/* ─── Animated counter ─── */
function AnimatedNumber({ value, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const motionVal = useMotionValue(0)
  const [display, setDisplay] = useState('0')
  useEffect(() => {
    if (!inView) return
    const c = animate(motionVal, value, { duration: 2, ease: 'easeOut' })
    const u = motionVal.on('change', v => setDisplay(Math.round(v).toLocaleString('vi-VN')))
    return () => { c.stop(); u() }
  }, [inView, value, motionVal])
  return <span ref={ref}>{display}{suffix}</span>
}

/* ─── Geo icon ─── */
function GeoIcon({ icon: Icon, gradient, size = 20 }) {
  return (
    <div className="relative w-12 h-12 mb-4 flex-shrink-0">
      <div className="absolute inset-0 rounded-xl rotate-12 opacity-30 blur-sm" style={{ background: gradient }} />
      <div className="absolute inset-0 rounded-xl flex items-center justify-center" style={{ background: gradient }}>
        <Icon size={size} color="white" strokeWidth={1.8} />
      </div>
    </div>
  )
}

/* ─── Shared styles ─── */
const card = 'bg-white rounded-2xl shadow-sm border border-[#F5D5E5]'
const cardHover = 'bg-white rounded-2xl shadow-sm border border-[#F5D5E5] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300'

/* ─── Data ─── */
const whyItems = [
  {
    icon: Globe,
    gradient: 'linear-gradient(135deg, #BE1E2D, #E04020)',
    stat: '14+ triệu dân — "Tam giác vàng" kinh tế',
    title: 'Cửa Sổ Cơ Hội Đang Mở',
    desc: 'TP.HCM vừa mở rộng gấp đôi quy mô — sáp nhập Bình Dương và Bà Rịa–Vũng Tàu từ 01/07/2025. Bản đồ quyền lực mới đang định hình. Ai đặt nền tảng lãnh đạo ngay bây giờ sẽ quyết định người viết lịch sử của thành phố này.',
  },
  {
    icon: Target,
    gradient: 'linear-gradient(135deg, #C9187F, #E04020)',
    stat: 'Còn 4 năm — Mục tiêu 2030 không chờ đợi',
    title: 'Chính Sách Đang Gọi Tên Bạn',
    desc: '2030 đang đến — 70% cơ quan nhà nước phải có nữ lãnh đạo. Nghị quyết đã ký, chỉ tiêu đã có. Câu hỏi duy nhất: Tên bạn trong danh sách những người đã chuẩn bị, hay những người ước mình đã bắt đầu sớm hơn?',
  },
  {
    icon: Network,
    gradient: 'linear-gradient(135deg, #1A2F5A, #C9187F)',
    stat: 'Lần đầu tiên & Duy nhất tại TP.HCM',
    title: 'Kết Nối Này Không Có Lần Hai',
    desc: 'HAWEE × UBND tạo ra điều chưa từng xảy ra: nữ lãnh đạo nhà nước và doanh nhân cùng ngồi học — cùng chia sẻ, cùng đồng hành. Khi khóa học này kết thúc, cánh cửa tuyển chọn sẽ đóng lại cho đến 2028.',
  },
]

const sessions = [
  {
    num: '01', phase: 0,
    title: 'Lãnh Đạo Bản Thân',
    sub: '',
    desc: 'Xác định la bàn lãnh đạo cá nhân, phân tích SWOT bản thân và lập kế hoạch hành động 60 ngày. Mọi ảnh hưởng bền vững đều bắt đầu từ nội lực bên trong.',
  },
  {
    num: '02', phase: 0,
    title: 'Lãnh Đạo Thấu Cảm',
    sub: '',
    desc: 'Xây dựng niềm tin và môi trường tâm lý an toàn, lập bản đồ thấu cảm (Empathy Mapping) qua Team Building tương tác và case study thực tế khối Công–Tư.',
  },
  {
    num: '03', phase: 0,
    title: 'Dẫn Dắt Đội Ngũ Hiệu Quả',
    sub: '',
    desc: 'Đồng bộ hóa mục tiêu (OKR/Cascading), kỹ năng ủy quyền và ra quyết định, quản trị nhịp độ hiệu suất. Thực hành đóng vai tình huống và đánh giá sau hành động (AAR).',
  },
  {
    num: '04', phase: 1,
    title: 'Giao Tiếp Hiệu Quả',
    sub: '',
    desc: 'Làm chủ khung thông điệp (Message Framing), kỹ năng kể chuyện (Storytelling) và phong thái hiện diện trước stakeholders. Luyện tập qua 3-minute leadership pitch và video feedback.',
  },
  {
    num: '05', phase: 1,
    title: 'Văn Hóa Tổ Chức',
    sub: '',
    desc: 'Thiết kế văn hóa đổi mới sáng tạo, rèn luyện bộ kỹ năng Mentoring & Coaching (GROW framework), tư duy ứng dụng công nghệ qua Design Thinking mini-sprint.',
  },
  {
    num: '06', phase: 2,
    title: 'Kết Nối & Tác Động',
    sub: 'Lãnh Đạo Tạo Di Sản',
    desc: 'Lập bản đồ Stakeholder, xây dựng liên minh và kỹ năng đàm phán chiến lược. Nhận Playbook tạo ảnh hưởng cá nhân và khởi động Alumni Network — hành trình để lại di sản bắt đầu từ đây.',
  },
]

const phaseConfig = [
  { label: 'Nền Tảng Lãnh Đạo', range: 'Buổi 1–3', gradient: 'linear-gradient(135deg, #C9187F, #E04020)', color: '#C9187F' },
  { label: 'Giao Tiếp & Văn Hóa', range: 'Buổi 4–5', gradient: 'linear-gradient(135deg, #E04020, #BE1E2D)', color: '#E04020' },
  { label: 'Tạo Ảnh Hưởng', range: 'Buổi 6', gradient: 'linear-gradient(135deg, #F2C200, #C9940A)', color: '#C9940A' },
]

const phasePhilosophy = [
  { phase: 'Giai đoạn 1', quote: '"Lãnh đạo bản thân trước khi lãnh đạo người khác."', color: '#C9187F' },
  { phase: 'Giai đoạn 2', quote: '"Từ nội lực đến hiện diện — biến năng lực thành tác động."', color: '#E04020' },
  { phase: 'Giai đoạn 3', quote: '"Lãnh đạo tạo di sản — từ quản lý đến kiến tạo."', color: '#C9940A' },
]

export default function Landing() {
  const [regForm, setRegForm] = useState({ name: '', email: '', phone: '', company: '', title: '', chi_hoi: '', note: '' })
  const [regSubmitting, setRegSubmitting] = useState(false)
  const [regSuccess, setRegSuccess] = useState(false)
  const [regError, setRegError] = useState('')
  const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID

  const handleRegChange = e => setRegForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleRegSubmit = async e => {
    e.preventDefault()
    setRegSubmitting(true)
    setRegError('')
    if (!FORMSPREE_ID) {
      setRegError('Vui lòng liên hệ trực tiếp: hawee.hochiminh@gmail.com')
      setRegSubmitting(false)
      return
    }
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ _subject: `Đăng ký HAWEE Leadership Program — ${regForm.name}`, ...regForm }),
      })
      if (res.ok) setRegSuccess(true)
      else setRegError('Có lỗi xảy ra. Vui lòng thử lại.')
    } catch {
      setRegError('Mất kết nối. Vui lòng kiểm tra internet và thử lại.')
    }
    setRegSubmitting(false)
  }

  return (
    <div>

      {/* ════════════ HERO ════════════ */}
      <section id="hero" className="hero-leadership min-h-screen flex flex-col md:flex-row md:items-start px-4 pt-24 md:pt-32 pb-8 md:pb-24">

        {/* ── Desktop: dots hội tụ vào ngọn lửa (hidden on mobile) ── */}
        <div className="absolute inset-0 hidden md:block pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
          {/* Soft glow aura tại tâm ngọn lửa */}
          <div className="absolute rounded-full" style={{
            right: '28%', top: '42%',
            width: '90px', height: '90px',
            background: 'radial-gradient(circle, rgba(255,200,80,0.50) 0%, rgba(255,130,30,0.28) 45%, transparent 70%)',
            animation: 'flameAuraPulse 3s ease-in-out infinite',
            transform: 'translate(50%, -50%)',
          }} />
          {/* Dots hội tụ */}
          {[
            { dx: '-52vw', dy: '18vh',  delay: '0s',    size: 4, dur: '3.2s', c: 0 },
            { dx: '-64vw', dy: '6vh',   delay: '0.85s', size: 3, dur: '3.7s', c: 1 },
            { dx: '-38vw', dy: '34vh',  delay: '1.7s',  size: 5, dur: '2.9s', c: 2 },
            { dx: '-58vw', dy: '28vh',  delay: '0.35s', size: 3, dur: '3.5s', c: 0 },
            { dx: '-70vw', dy: '14vh',  delay: '2.3s',  size: 4, dur: '3.0s', c: 1 },
            { dx: '-26vw', dy: '44vh',  delay: '1.1s',  size: 3, dur: '4.0s', c: 2 },
            { dx: '-44vw', dy: '52vh',  delay: '2.75s', size: 3, dur: '3.3s', c: 0 },
            { dx: '-66vw', dy: '42vh',  delay: '0.55s', size: 2, dur: '2.7s', c: 1 },
            { dx: '-20vw', dy: '26vh',  delay: '1.95s', size: 4, dur: '3.6s', c: 2 },
            { dx: '-48vw', dy: '-4vh',  delay: '3.05s', size: 2, dur: '2.8s', c: 0 },
            { dx: '-32vw', dy: '58vh',  delay: '1.4s',  size: 3, dur: '3.4s', c: 1 },
            { dx: '-74vw', dy: '22vh',  delay: '2.6s',  size: 2, dur: '3.1s', c: 2 },
          ].map((d, i) => {
            const colors = [
              { bg: 'rgba(255,220,60,0.95)',  glow: 'rgba(242,194,0,0.85)' },
              { bg: 'rgba(255,158,40,0.92)',  glow: 'rgba(255,130,30,0.80)' },
              { bg: 'rgba(255,245,160,0.88)', glow: 'rgba(255,215,80,0.75)' },
            ]
            const col = colors[d.c]
            return (
              <div key={i} className="absolute rounded-full" style={{
                right: '28%', top: '42%',
                width: `${d.size}px`, height: `${d.size}px`,
                background: col.bg,
                boxShadow: `0 0 ${d.size * 3}px ${col.glow}`,
                animation: `dotConverge ${d.dur} ease-in ${d.delay} infinite`,
                '--dot-dx': d.dx,
                '--dot-dy': d.dy,
              }} />
            )
          })}
        </div>

        {/* ── Mobile decorative accents (md:hidden) ── */}
        <div className="absolute inset-0 pointer-events-none md:hidden overflow-hidden" style={{ zIndex: 1 }}>
          {/* Orbit rings — centered at symbol (~28% from top) */}
          <div className="absolute rounded-full"
            style={{ top: '28%', left: '50%', width: '210px', height: '210px', border: '1px solid rgba(201,168,76,0.42)', animation: 'orbitSpin 22s linear infinite' }}
          />
          <div className="absolute rounded-full"
            style={{ top: '28%', left: '50%', width: '136px', height: '136px', border: '1px dashed rgba(201,24,127,0.30)', animation: 'orbitSpin 14s linear infinite reverse' }}
          />
          {/* Rising gold particles from base of symbol */}
          {[
            { left: '45%', delay: '0s',   size: 4 },
            { left: '50%', delay: '1.1s', size: 3 },
            { left: '55%', delay: '0.6s', size: 4 },
            { left: '48%', delay: '1.9s', size: 2 },
          ].map((p, i) => (
            <div key={i} className="absolute rounded-full"
              style={{
                bottom: '43%', left: p.left,
                width: p.size, height: p.size,
                background: 'rgba(242,194,0,0.95)',
                boxShadow: '0 0 7px rgba(242,194,0,0.85)',
                animation: `riseUp 2.8s ease-in ${p.delay} infinite`,
              }}
            />
          ))}
          {/* Bottom vignette — depth & separation from content below */}
          <div className="absolute bottom-0 left-0 right-0" style={{ height: '22%', background: 'linear-gradient(to top, rgba(40,0,15,0.50) 0%, transparent 100%)' }} />
        </div>

        <div className="container-custom w-full flex flex-col flex-1 md:block">
          <div className="max-w-2xl text-center md:text-left flex flex-col flex-1 md:block">
            <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-3 md:mb-6">
              <span className="inline-block bg-white/15 backdrop-blur-sm border border-white/25 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full">
                Hành trình chuyển hóa lãnh đạo · 06/2026 - 05/2027
              </span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight">
                HAWEE WOMEN<br />
                <span className="gradient-text-gold">LEADERSHIP PROGRAM</span>
              </h1>
              <p className="mt-2 md:mt-4 text-sm md:text-xl leading-snug md:leading-relaxed text-white/85">
                Từ quản lý xuất sắc<br />
                Đến kiến tạo ảnh hưởng chiến lược sâu sắc
              </p>
              <p className="mt-1 md:mt-1.5 text-white/55 text-xs tracking-wide md:tracking-widest uppercase">GIÀU TOÀN DIỆN - LÃNH ĐẠO TẠO DI SẢN</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="mt-3 md:mt-7">
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3 items-center md:items-start scale-95 origin-bottom md:origin-bottom-left md:scale-100">
                <a href="#dang-ky" className="arrow-light-trail btn-gold text-sm font-semibold inline-flex items-center justify-center gap-2 py-3 px-7">
                  Nộp hồ sơ ứng tuyển <ArrowRight size={15} />
                </a>
                <a href="#chuong-trinh" className="arrow-light-trail btn-outline-white text-sm font-semibold inline-flex items-center justify-center py-3 px-7">
                  Khám phá chương trình
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════ GIỚI THIỆU ════════════ */}
      <section id="chuong-trinh" className="relative overflow-hidden py-20"
        style={{ background: 'linear-gradient(175deg, #FFFFFF 0%, #FFF4F8 50%, #FFF8F0 100%)' }}>
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(201,24,127,0.15), transparent)' }} />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full blur-3xl pointer-events-none opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(242,194,0,0.2), transparent)' }} />

        <div className="container-custom relative">
          <FadeUp>
            <p className="text-primary text-sm font-bold uppercase tracking-[0.2em] text-center mb-3">Hợp tác Công–Tư đầu tiên tại TP.HCM</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1A0F1E] text-center leading-tight mb-4">
              Không Phải Khóa Học.<br />
              <span className="gradient-text">Đây Là Hành Trình Chuyển Hóa.</span>
            </h2>
            <p className="text-[#5C3545] text-center max-w-2xl mx-auto mb-14 leading-relaxed text-sm">
              Được thiết kế dành riêng cho nữ lãnh đạo cấp cao — HAWEE Women Leadership Program 2026 là hành trình chuyển dịch từ quản lý xuất sắc sang kiến tạo ảnh hưởng chiến lược sâu sắc. Nơi tiếng nói của doanh nhân và thẩm quyền của chính quyền cùng trao cho một thế hệ lãnh đạo mới.
            </p>
          </FadeUp>

          {/* 2 entity cards — compact default, hover expands detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-14">
            <FadeUp delay={0.1} className="h-full">
              <a href="https://www.hcmcpv.org.vn/" target="_blank" rel="noopener noreferrer"
                className={`${card} p-6 flex flex-col group hover:shadow-md transition-all duration-300 cursor-pointer`}>
                <div className="flex items-center gap-3 mb-4">
                  <img src="/images/logo-hcm.png" alt="UBND TP.HCM" className="h-9 object-contain" />
                  <div className="h-px flex-1 bg-[#F5D5E5]" />
                  <ArrowRight size={13} className="text-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                </div>
                <p className="text-primary text-[10px] uppercase tracking-widest font-bold mb-1">Đơn vị tổ chức</p>
                <h3 className="text-[#1A0F1E] font-semibold text-base mb-1.5">UBND & Thành Ủy TP.HCM</h3>
                <p className="text-[#9B7080] text-xs group-hover:hidden">Đơn vị nhà nước chỉ đạo và đồng hành tổ chức chương trình</p>
                <div className="grid transition-all duration-500 [grid-template-rows:0fr] group-hover:[grid-template-rows:1fr]">
                  <div className="overflow-hidden">
                    <p className="text-[#5C3545] text-sm leading-relaxed pt-2">
                      UBND & Thành Ủy TP.HCM là đơn vị chỉ đạo và đồng hành tổ chức chương trình. Với TP.HCM mở rộng từ 01/07/2025, chính quyền xác định đào tạo nữ lãnh đạo cấp cao là ưu tiên chiến lược không thể trì hoãn.
                    </p>
                  </div>
                </div>
              </a>
            </FadeUp>

            <FadeUp delay={0.2} className="h-full">
              <a href="https://hawee-website.vercel.app/" target="_blank" rel="noopener noreferrer"
                className={`${card} p-6 flex flex-col group hover:shadow-md transition-all duration-300 cursor-pointer`}>
                <div className="flex items-center gap-3 mb-4">
                  <img src="/images/logo-hawee.png" alt="HAWEE" className="h-9 object-contain" />
                  <div className="h-px flex-1 bg-[#F5D5E5]" />
                  <ArrowRight size={13} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                </div>
                <p className="text-primary text-[10px] uppercase tracking-widest font-bold mb-1">Bảo trợ nội dung</p>
                <h3 className="text-[#1A0F1E] font-semibold text-base mb-1.5">Hội Doanh Nhân Nữ TP.HCM (HAWEE)</h3>
                <p className="text-[#9B7080] text-xs group-hover:hidden">Tổ chức hàng đầu của nữ lãnh đạo & doanh nhân TP.HCM</p>
                <div className="grid transition-all duration-500 [grid-template-rows:0fr] group-hover:[grid-template-rows:1fr]">
                  <div className="overflow-hidden">
                    <p className="text-[#5C3545] text-sm leading-relaxed mb-4 pt-2">
                      Được thành lập năm 2015, HAWEE là tổ chức đại diện hàng đầu cho cộng đồng nữ lãnh đạo và doanh nhân tại TP.HCM. Trong hơn 10 năm hoạt động, HAWEE đã xây dựng mạng lưới 500+ hội viên, tổ chức 200+ chương trình và đóng góp hơn 105 tỷ VND vào cộng đồng.
                    </p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-4 border-t border-[#F5D5E5]">
                      {[['500+','Hội viên'],['200+','Chương trình'],['14.000+','Lượt tham dự'],['105 tỷ','Đóng góp (VND)']].map(([v, l]) => (
                        <div key={l} className="flex items-baseline gap-1.5">
                          <p className="font-semibold text-base" style={{ background: 'linear-gradient(135deg, #C9187F, #E04020)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{v}</p>
                          <p className="text-[#9B7080] text-xs">{l}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </FadeUp>
          </div>

          {/* Mục Tiêu Trọng Tâm */}
          <FadeUp delay={0.25}>
            <div className={`${card} p-7 max-w-3xl mx-auto mb-12`}>
              <p className="text-primary text-sm uppercase tracking-[0.2em] font-bold mb-5 text-center">Mục Tiêu Trọng Tâm</p>
              <ul className="space-y-3.5">
                {[
                  <span>Tập trung <mark style={{ background: 'rgba(201,24,127,0.12)', color: '#C9187F', borderRadius: '4px', padding: '1px 4px', fontWeight: 600 }}>phát triển nội lực</mark> và định hình <mark style={{ background: 'rgba(201,24,127,0.12)', color: '#C9187F', borderRadius: '4px', padding: '1px 4px', fontWeight: 600 }}>phong cách hiện diện</mark> của nhà lãnh đạo.</span>,
                  <span>Xây dựng năng lực <mark style={{ background: 'rgba(201,24,127,0.12)', color: '#C9187F', borderRadius: '4px', padding: '1px 4px', fontWeight: 600 }}>lãnh đạo thấu cảm</mark> và dẫn dắt đội ngũ hiệu quả.</span>,
                  <span>Nâng cao <mark style={{ background: 'rgba(201,24,127,0.12)', color: '#C9187F', borderRadius: '4px', padding: '1px 4px', fontWeight: 600 }}>kỹ năng giao tiếp</mark> và năng lực tạo ảnh hưởng, kết nối.</span>,
                  <span>Định hình văn hóa <mark style={{ background: 'rgba(201,24,127,0.12)', color: '#C9187F', borderRadius: '4px', padding: '1px 4px', fontWeight: 600 }}>đổi mới sáng tạo</mark>, rèn luyện kỹ năng Mentoring &amp; Coaching.</span>,
                  <span>Khả năng kết nối và tạo <mark style={{ background: 'rgba(201,24,127,0.12)', color: '#C9187F', borderRadius: '4px', padding: '1px 4px', fontWeight: 600 }}>tác động tích cực</mark> đến cộng đồng và xã hội.</span>,
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #C9187F, #E04020)' }}>
                      <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                        <polyline points="2 6 5 9 10 3" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-[#5C3545] text-sm leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          {/* 3 program pillars */}
          <FadeUp delay={0.3}>
            <p className="text-[#9B7080] text-sm uppercase tracking-widest text-center font-semibold mb-8">Ba trụ cột của hành trình</p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { num: '01', icon: Layers, gradient: 'linear-gradient(135deg, #C9187F 0%, #E04020 100%)', glow: 'rgba(201,24,127,0.35)', label: 'Inner Foundation', title: 'Nội Lực Từ Bên Trong', desc: 'Xây dựng nền tảng lãnh đạo từ bên trong: tự nhận thức, trí tuệ cảm xúc và bản lĩnh đối mặt áp lực. Không thể tạo ảnh hưởng bền vững nếu thiếu nội lực nền tảng.' },
              { num: '02', icon: Network, gradient: 'linear-gradient(135deg, #1A2F5A 0%, #4A1870 50%, #C9187F 100%)', glow: 'rgba(26,47,90,0.4)', label: 'Presence & Network', title: 'Hiện Diện & Kết Nối', desc: 'Biến năng lực cá nhân thành ảnh hưởng tập thể — qua giao tiếp có tác động, văn hóa đổi mới và mạng lưới Công–Tư liên ngành duy nhất tại TP.HCM.' },
              { num: '03', icon: Globe, gradient: 'linear-gradient(135deg, #C9940A 0%, #F2C200 60%, #C9A84C 100%)', glow: 'rgba(201,168,76,0.45)', label: 'Legacy Leadership', title: 'Lãnh Đạo Tạo Di Sản', desc: 'Vươn ra ngoài chức năng hiện tại, tạo tác động lan tỏa cho cộng đồng và xã hội. Lãnh đạo không cần quyền lực — lãnh đạo bằng ảnh hưởng và di sản để lại.' },
            ].map(({ num, icon: Icon, gradient, glow, label, title, desc }, i) => (
              <FadeUp key={i} delay={0.35 + i * 0.1} className="h-full">
                <div className="rounded-2xl p-7 h-full relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 cursor-default"
                  style={{ background: gradient, boxShadow: `0 4px 24px ${glow}` }}>
                  <p className="absolute top-3 right-5 font-bold select-none"
                    style={{ fontSize: '5rem', color: 'rgba(255,255,255,0.08)', lineHeight: 1 }}>{num}</p>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.25)' }}>
                    <Icon size={22} color="white" strokeWidth={1.5} />
                  </div>
                  <p className="text-white/55 text-[10px] uppercase tracking-widest mb-1.5">{label}</p>
                  <h3 className="text-white font-semibold text-lg mb-3 leading-snug">{title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* ── Hội viên HAWEE nhận được gì ── */}
          <FadeUp delay={0.5}>
            <div className="mt-14 rounded-3xl overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #FFF0F6 0%, #FFF5EC 60%, #FFF8F0 100%)', border: '1.5px solid #F5D5E5' }}>
              <div className="p-8 md:p-10">
                <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] text-center mb-3">Dành riêng cho hội viên HAWEE</p>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#1A0F1E] text-center mb-10 leading-snug">
                  Tham Gia Hành Trình Này —<br className="hidden md:block" /> Bạn Nhận Được Gì?
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                  {[
                    {
                      num: '01',
                      color: '#C9A84C',
                      bg: 'rgba(201,168,76,0.09)',
                      border: 'rgba(201,168,76,0.22)',
                      title: '20 Suất Đặc Quyền, Lần Đầu Tiên',
                      desc: 'Trở thành một trong 20 hội viên được lựa chọn tham gia hành trình lịch sử — chương trình lần đầu tiên được đồng tổ chức bởi Thành Ủy TP.HCM & HAWEE.',
                    },
                    {
                      num: '02',
                      color: '#C9187F',
                      bg: 'rgba(201,24,127,0.07)',
                      border: 'rgba(201,24,127,0.2)',
                      title: 'Nâng Tầm Lãnh Đạo Trong Kỷ Nguyên AI',
                      desc: 'Học cùng đội ngũ lãnh đạo thực chiến và chuyên gia đa lĩnh vực — được thiết kế cho bối cảnh chuyển đổi nhanh trong kỷ nguyên AI và TP.HCM mở rộng.',
                    },
                    {
                      num: '03',
                      color: '#1A2F5A',
                      bg: 'rgba(26,47,90,0.06)',
                      border: 'rgba(26,47,90,0.16)',
                      title: 'Kết Nối Trực Tiếp Lãnh Đạo Thành Phố',
                      desc: 'Mở rộng quan hệ và học hỏi từ các nhà lãnh đạo cấp cao khu vực công — cơ hội kết nối Công–Tư độc quyền chỉ có tại HAWEE.',
                    },
                  ].map(({ num, color, bg, border, title, desc }) => (
                    <div key={num} className="rounded-2xl p-6" style={{ background: bg, border: `1px solid ${border}` }}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl font-bold leading-none select-none" style={{ color, opacity: 0.4 }}>{num}</span>
                        <div className="h-px flex-1" style={{ background: `${color}30` }} />
                      </div>
                      <h4 className="text-[#1A0F1E] font-semibold text-base mb-2 leading-snug">{title}</h4>
                      <p className="text-[#5C3545] text-sm leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <a
                    href="#dang-ky"
                    onClick={(e) => { e.preventDefault(); document.getElementById('dang-ky')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                    style={{ background: 'linear-gradient(135deg, #C9187F 0%, #E04020 60%, #F08830 100%)', boxShadow: '0 4px 20px rgba(201,24,127,0.28)' }}>
                    <span>Nộp Hồ Sơ Ứng Tuyển</span>
                    <ArrowRight size={15} />
                  </a>
                  <p className="text-[#C9B0BC] text-xs mt-3">20 suất · Tuyển chọn kỹ lưỡng · Chỉ dành cho hội viên HAWEE</p>
                </div>
              </div>
            </div>
          </FadeUp>

        </div>
      </section>

      {/* ════════════ LỘ TRÌNH ════════════ */}
      <section id="lo-trinh" className="relative overflow-hidden py-20"
        style={{ background: 'linear-gradient(175deg, #FFE8E0 0%, #FFF3F8 50%, #FFFCF8 100%)' }}>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(201,24,127,0.12), transparent)' }} />

        <div className="container-custom relative">
          <FadeUp>
            <p className="text-primary text-sm font-bold uppercase tracking-[0.2em] text-center mb-3">12 tháng · 6 buổi · 3 giai đoạn</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1A0F1E] text-center mb-3">Hành Trình Từ Bên Trong Ra Bên Ngoài</h2>
            <p className="text-[#9B7080] text-center text-sm max-w-xl mx-auto mb-12">
              Mỗi 2 tháng một buổi — đủ thời gian áp dụng vào thực tiễn, thu hoạch và trở lại với chiều sâu mới.
            </p>
          </FadeUp>

          {/* Phase legend */}
          <FadeUp delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {phaseConfig.map((p, i) => (
                <div key={i} className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#F5D5E5] shadow-sm">
                  <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: p.gradient }} />
                  <span className="text-[#3D2030] text-xs font-medium">{p.label}</span>
                  <span className="text-[#9B7080] text-xs">{p.range}</span>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Phase philosophy */}
          <FadeUp delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8 max-w-4xl mx-auto">
              {phasePhilosophy.map((p, i) => (
                <div key={i} className="rounded-2xl px-4 py-4 text-center border"
                  style={{ background: `${p.color}0D`, borderColor: `${p.color}28` }}>
                  <p className="text-[10px] uppercase tracking-widest font-bold mb-2" style={{ color: p.color }}>{p.phase}</p>
                  <p className="text-[#3D2030] text-xs italic leading-relaxed">{p.quote}</p>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Roadmap timeline */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-[23px] top-2 bottom-2 w-0.5"
              style={{ background: 'linear-gradient(to bottom, #C9187F 0%, #E04020 50%, #C9940A 100%)' }} />
            <div className="space-y-5">
              {sessions.map((s, i) => {
                const ph = phaseConfig[s.phase]
                const isFirstInPhase = i === 0 || sessions[i - 1].phase !== s.phase
                return (
                  <FadeUp key={i} delay={i * 0.08}>
                    {isFirstInPhase && (
                      <div className="flex items-center gap-3 pl-14 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full flex-shrink-0"
                          style={{ color: ph.color, background: `${ph.color}12`, border: `1px solid ${ph.color}28` }}>
                          {ph.label} · {ph.range}
                        </span>
                        <div className="h-px flex-1" style={{ background: `${ph.color}25` }} />
                      </div>
                    )}
                    <div className="flex gap-4 items-start">
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm text-white"
                          style={{ background: ph.gradient, border: '2.5px solid white', boxShadow: `0 0 0 3px ${ph.color}28, 0 4px 12px ${ph.color}30` }}>
                          {s.num}
                        </div>
                      </div>
                      <div className={`${cardHover} flex-1 p-5`} style={{ borderLeft: `3px solid ${ph.color}` }}>
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <h3 className="text-[#1A0F1E] font-semibold text-sm">{s.title}</h3>
                          <span className="text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full flex-shrink-0"
                            style={{ color: ph.color, background: `${ph.color}12` }}>
                            {s.sub}
                          </span>
                        </div>
                        <p className="text-[#5C3545] text-xs leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  </FadeUp>
                )
              })}
            </div>
          </div>

          {/* Outputs — 6-card grid */}
          <FadeUp delay={0.5}>
            <div className="mt-12 max-w-4xl mx-auto">
              <p className="text-primary text-sm uppercase tracking-[0.2em] font-bold text-center mb-6">Đặc quyền học viên nhận về</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: TrendingUp, gradient: 'linear-gradient(135deg, #C9187F, #E04020)', title: 'Đánh Giá Năng Lực', sub: 'Trước & Sau chương trình — lộ trình phát triển lãnh đạo cá nhân hóa' },
                  { icon: Layers, gradient: 'linear-gradient(135deg, #F2C200, #C9940A)', title: 'Bộ Toolkit Thực Tiễn', sub: 'OKR · GROW Coaching · Stakeholder Map · Empathy Mapping' },
                  { icon: Users, gradient: 'linear-gradient(135deg, #1A2F5A, #C9187F)', title: 'Mạng Lưới Công–Tư', sub: 'Kết nối độc quyền lãnh đạo nhà nước & doanh nhân liên ngành' },
                  { icon: Compass, gradient: 'linear-gradient(135deg, #C9187F, #8C0038)', title: 'Phong Thái & Hình Ảnh Lãnh Đạo', sub: 'Tham gia cùng chương trình Hình ảnh Nữ Doanh Nhân & Nhân hiệu của HAWEE', isNew: true },
                  { icon: GraduationCap, gradient: 'linear-gradient(135deg, #C9940A, #F2C200)', title: 'Chứng Nhận Hoàn Thành', sub: 'Chứng nhận chính thức từ HAWEE × UBND TP.HCM · Lễ tốt nghiệp tháng 5/2027' },
                  { icon: Network, gradient: 'linear-gradient(135deg, #1A2F5A, #4A1870)', title: 'Alumni Network Trọn Đời', sub: 'Cộng đồng lãnh đạo nữ — kết nối và đồng hành sau chương trình' },
                ].map(({ icon: Icon, gradient, title, sub, isNew }, i) => (
                  <FadeUp key={i} delay={0.52 + i * 0.06} className="h-full">
                    <div className={`${cardHover} p-5 h-full flex items-start gap-4`}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: gradient }}>
                        <Icon size={16} color="white" strokeWidth={1.8} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <p className="text-[#1A0F1E] font-semibold text-sm">{title}</p>
                          {isNew && (
                            <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full flex-shrink-0"
                              style={{ background: 'rgba(201,24,127,0.10)', color: '#C9187F', border: '1px solid rgba(201,24,127,0.22)' }}>
                              Mới
                            </span>
                          )}
                        </div>
                        <p className="text-[#9B7080] text-xs leading-snug">{sub}</p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ════════════ GIẢNG VIÊN ════════════ */}
      <section id="giang-vien" className="relative overflow-hidden py-20"
        style={{ background: 'linear-gradient(150deg, #1E0618 0%, #480D35 30%, #7A1850 50%, #480D35 70%, #1E0618 100%)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 18% 50%, rgba(202,28,104,0.45) 0%, transparent 50%), radial-gradient(ellipse at 82% 40%, rgba(202,28,104,0.30) 0%, transparent 45%), radial-gradient(ellipse at 50% 90%, rgba(242,194,0,0.10) 0%, transparent 40%)' }} />
        <div className="container-custom relative">
          <FadeUp>
            <p className="text-primary text-sm font-bold uppercase tracking-[0.2em] text-center mb-3">Đội ngũ dẫn dắt</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-3">Giảng Viên Chương Trình</h2>
            <p className="text-white/50 text-center text-sm max-w-xl mx-auto mb-5">
              HAWEE đang hoàn thiện đội ngũ — những chuyên gia lãnh đạo thực chiến từ chính quyền TP.HCM, doanh nhân HAWEE và chuyên gia quốc tế.
            </p>
            <div className="flex items-center justify-center gap-3 mb-12">
              <div className="h-px w-12 bg-white/15" />
              <span className="flex items-center gap-1.5 text-[#C9940A] text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9940A] animate-pulse" />
                Sắp công bố — Tháng 6/2026
              </span>
              <div className="h-px w-12 bg-white/15" />
            </div>
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[0,1,2,3].map(i => (
              <FadeUp key={i} delay={i * 0.08} className="h-full">
                <div className="rounded-2xl p-5 h-full flex flex-col items-center text-center"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)' }}>
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto"
                    style={{ background: 'rgba(255,255,255,0.07)', border: '2px dashed rgba(255,255,255,0.18)' }}>
                    <User size={30} color="rgba(255,255,255,0.22)" strokeWidth={1.5} />
                  </div>
                  <div className="w-16 h-2 rounded-full mb-2" style={{ background: 'rgba(255,255,255,0.10)' }} />
                  <div className="w-24 h-1.5 rounded-full mb-4" style={{ background: 'rgba(255,255,255,0.07)' }} />
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(201,168,76,0.15)', color: '#E8C060', border: '1px solid rgba(201,168,76,0.35)' }}>
                    <span className="w-1 h-1 rounded-full bg-[#C9940A] animate-pulse" />
                    Đang cập nhật
                  </span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ 2 PERSONAS ════════════ */}
      <section className="relative overflow-hidden py-20"
        style={{ background: 'linear-gradient(175deg, #FFFCF8 0%, #FFF3F0 50%, #FFF0E8 100%)' }}>
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(201,24,127,0.12), transparent)' }} />

        <div className="container-custom relative">
          <FadeUp>
            <p className="text-primary text-sm font-bold uppercase tracking-[0.2em] text-center mb-3">Chương trình dành cho ai?</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1A0F1E] text-center mb-14">Khát Vọng Tạo Tác Động</h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <FadeUp delay={0.1} className="h-full">
              <div className={`${card} overflow-hidden h-full`} style={{ borderTop: '3px solid #1A2F5A' }}>
                <div className="h-44 overflow-hidden">
                  <img src="/images/hawee-group-formal.jpg" alt="Nữ lãnh đạo nhà nước"
                    className="w-full h-full object-cover object-center" />
                </div>
                <div className="p-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5 bg-navy/5 text-navy border border-navy/15">
                    80% — Nhóm chính
                  </div>
                  <h3 className="text-[#1A0F1E] text-xl font-semibold mb-1.5">Nữ Lãnh Đạo Nhà Nước</h3>
                  <p className="text-[#9B7080] text-xs mb-5">Được Thành Ủy & Ban Tổ Chức lựa chọn trực tiếp</p>
                  <ul className="space-y-3">
                    {['Địa bàn: TP.HCM mở rộng (HCM + BD + BRVT)', 'Nhu cầu: nâng tầm tư duy, kết nối liên ngành', 'Hành trình: từ chuyên môn đến tầm nhìn chiến lược'].map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #1A2F5A, #C9187F)' }} />
                        <span className="text-[#5C3545] text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 pt-4 border-t border-[#F5D5E5] text-[#9B7080] text-xs italic">"Tôi giỏi chuyên môn nhưng thiếu kỹ năng dẫn dắt và tạo ảnh hưởng rộng"</p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2} className="h-full">
              <div className={`${card} overflow-hidden h-full`} style={{ borderTop: '3px solid #C9187F' }}>
                <div className="h-44 overflow-hidden">
                  <img src="/images/hawee-group-aodai.jpg" alt="Nữ doanh nhân HAWEE"
                    className="w-full h-full object-cover object-center" />
                </div>
                <div className="p-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5 bg-primary/5 text-primary border border-primary/15">
                    Chỉ 20 suất cho nữ lãnh đạo HAWEE
                  </div>
                  <h3 className="text-[#1A0F1E] text-xl font-semibold mb-1.5">Nữ Doanh Nhân HAWEE</h3>
                  <p className="text-[#9B7080] text-xs mb-5">Được HAWEE đề xuất và lựa chọn từ mạng lưới hội viên</p>
                  <ul className="space-y-3">
                    {['Cấp CEO, Founder, Giám đốc điều hành', 'Hội viên HAWEE (HCM + Bình Dương + Vũng Tàu)', 'Nhu cầu: kết nối Công–Tư, mở rộng mạng lưới', 'Hành trình: từ doanh nghiệp đến ảnh hưởng chính sách'].map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #C9187F, #F2C200)' }} />
                        <span className="text-[#5C3545] text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 pt-4 border-t border-[#F5D5E5] text-[#9B7080] text-xs italic">"Tôi muốn hiểu hệ thống và xây dựng quan hệ bền vững với khu vực công"</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ════════════ BAN CHỈ ĐẠO TỔ CHỨC ════════════ */}
      <section className="relative overflow-hidden py-20"
        style={{ background: 'linear-gradient(150deg, #1E0618 0%, #480D35 30%, #7A1850 50%, #480D35 70%, #1E0618 100%)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 75% 50%, rgba(202,28,104,0.45) 0%, transparent 50%), radial-gradient(ellipse at 22% 40%, rgba(202,28,104,0.30) 0%, transparent 45%), radial-gradient(ellipse at 50% 5%, rgba(201,168,76,0.12) 0%, transparent 40%)' }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.45), transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,24,127,0.30), transparent)' }} />

        <div className="container-custom relative">
          <FadeUp>
            <p className="text-[#C9A84C] text-sm font-bold uppercase tracking-[0.2em] text-center mb-3">Dẫn dắt hành trình</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-3">Ban Chỉ Đạo Tổ Chức</h2>
            <p className="text-white/40 text-center text-sm max-w-xl mx-auto mb-12">
              Đội ngũ lãnh đạo tâm huyết — kiến tạo tầm nhìn, điều phối và hiện thực hóa sứ mệnh của chương trình.
            </p>
          </FadeUp>

          {/* Ban Chỉ Đạo — 3-col desktop / 2-col mobile (Dung solo row 1) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {[
              { img: 'cao-thi-ngoc-dung.png',     role: 'Chỉ đạo Dự án',      name: 'Bà Cao Thị Ngọc Dung',        title: 'Chủ tịch HAWEE',                roleColor: '#F2C200', roleBg: 'rgba(242,194,0,0.15)', roleBorder: 'rgba(242,194,0,0.35)' },
              { img: 'huynh-thi-xuan-lien-2.png', role: 'Trưởng Ban Tổ chức',  name: 'Bà Huỳnh Thị Xuân Liên',      title: 'Phó Chủ tịch HAWEE',            roleColor: '#FF7EB0', roleBg: 'rgba(201,24,127,0.15)', roleBorder: 'rgba(201,24,127,0.35)' },
              { img: 'tran-phuong-ngoc-thao.png', role: 'Phó Ban Tổ chức',     name: 'Bà Trần Phương Ngọc Thảo',    title: 'Ủy viên Ban Thường vụ HAWEE',   roleColor: '#FF7EB0', roleBg: 'rgba(201,24,127,0.12)', roleBorder: 'rgba(201,24,127,0.28)' },
              { img: 'nguyen-thi-hanh.png',       role: 'Ủy viên',             name: 'Bà Nguyễn Thị Hạnh',          title: 'Trưởng ban Cố vấn',             roleColor: 'rgba(255,255,255,0.55)', roleBg: 'rgba(255,255,255,0.07)', roleBorder: 'rgba(255,255,255,0.18)' },
              { img: 'tieu-yen-trinh.png',        role: 'Ủy viên',             name: 'Bà Tiêu Yến Trinh',           title: 'Phó Chủ tịch Thường trực',      roleColor: 'rgba(255,255,255,0.55)', roleBg: 'rgba(255,255,255,0.07)', roleBorder: 'rgba(255,255,255,0.18)' },
              { img: 'luong-ngoc-tien.png',       role: 'Ủy viên',             name: 'Bà Lương Ngọc Tiên',          title: 'Trưởng ban Truyền thông',       roleColor: 'rgba(255,255,255,0.55)', roleBg: 'rgba(255,255,255,0.07)', roleBorder: 'rgba(255,255,255,0.18)' },
            ].map(({ img, role, name, title, roleColor, roleBg, roleBorder }, i) => {
              const soloOnMobile = i === 0;
              return (
                <FadeUp key={i} delay={0.08 + i * 0.07}
                  className={soloOnMobile ? 'col-span-2 sm:col-span-1 flex sm:block justify-center' : ''}>
                  <div className={`group relative rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-1.5${soloOnMobile ? ' w-[calc(50%-10px)] sm:w-full' : ''}`}
                    style={{
                      background: 'linear-gradient(160deg, #1E0718 0%, #2E0F28 55%, #1A0616 100%)',
                      border: '1.5px solid rgba(201,24,127,0.38)',
                      boxShadow: '0 2px 16px rgba(201,24,127,0.10)',
                    }}>
                    {/* Top glow line */}
                    <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(201,24,127,0.7) 35%, rgba(255,180,220,0.9) 50%, rgba(201,24,127,0.7) 65%, transparent 100%)' }} />
                    {/* Hover glow overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
                      style={{ boxShadow: 'inset 0 0 32px rgba(201,24,127,0.14)', background: 'radial-gradient(ellipse at 50% 0%, rgba(201,24,127,0.10) 0%, transparent 65%)' }} />
                    {/* Image */}
                    <div className="relative h-44 overflow-hidden">
                      <div className="absolute bottom-0 inset-x-0 h-2/3 pointer-events-none z-10"
                        style={{ background: 'linear-gradient(to top, rgba(30,7,24,0.90) 0%, transparent 100%)' }} />
                      <img src={`/images/${img}`} alt={name}
                        className="w-full h-full object-contain object-bottom transition-transform duration-600 group-hover:scale-[1.05]"
                        style={{ mixBlendMode: 'lighten' }} />
                    </div>
                    {/* Text */}
                    <div className="px-4 pt-2 pb-4 text-center">
                      <span className="inline-block text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-2"
                        style={{ background: roleBg, border: `1px solid ${roleBorder}`, color: roleColor }}>
                        {role}
                      </span>
                      <p className="text-white font-semibold text-xs leading-snug">{name}</p>
                      <p className="text-white/45 text-[10px] mt-0.5 leading-tight">{title}</p>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>

        </div>
      </section>

      {/* ════════════ CÂU CHUYỆN ════════════ */}
      <section id="cau-chuyen" className="relative overflow-hidden py-20"
        style={{ background: 'linear-gradient(175deg, #FFF0E8 0%, #FFF5F0 50%, #FFFCF8 100%)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(201,24,127,0.07) 0%, transparent 50%)' }} />

        <div className="container-custom relative">
          <FadeUp>
            <p className="text-primary text-sm font-bold uppercase tracking-[0.2em] text-center mb-3">Từ học viên</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1A0F1E] text-center mb-14">Câu Chuyện Chuyển Hóa</h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-[#5C3545] text-base leading-relaxed mb-1.5 font-medium">Hành trình chuyển hóa không chờ đến ngày tốt nghiệp.</p>
              <p className="text-[#9B7080] text-sm mb-8 leading-relaxed">Từ ngày đầu tiên đến ngày cuối cùng của chương trình, mỗi bước tiến, mỗi hiểu biết mới đều trở thành một phần của câu chuyện bạn — và có khả năng thắp sáng lối đi cho người khác.</p>
              <a
                href="/nop-cau-chuyen"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, #C9187F 0%, #E04020 60%, #F5882A 100%)',
                  color: 'white',
                  boxShadow: '0 4px 20px rgba(201,24,127,0.30)',
                }}
              >
                <span>GỬI CÂU CHUYỆN CỦA BẠN</span>
                <ArrowRight size={15} />
              </a>
              <p className="text-[#C9B0BC] text-xs mt-3">Dành riêng cho học viên trong suốt hành trình chuyển hóa</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ════════════ ĐĂNG KÝ ════════════ */}
      <section id="dang-ky" className="relative overflow-hidden py-20 section-aura-glow">
        <div className="absolute top-0 left-1/3 w-80 h-80 opacity-20 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,220,150,0.5), transparent)' }} />
        <div className="absolute bottom-0 right-0 w-64 h-64 opacity-15 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(201,24,127,0.4), transparent)' }} />

        <div className="container-custom relative">

          {/* ── Header ── */}
          <FadeUp>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 mb-5">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-white text-xs font-semibold uppercase tracking-widest">Số lượng giới hạn · Tuyển chọn kỹ lưỡng</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight">
                Sẵn Sàng Viết Di Sản Của Bạn?
              </h2>
              <p className="text-white text-sm md:text-base max-w-2xl mx-auto leading-relaxed" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.25)' }}>
                Đây không phải chương trình "đóng tiền là học được". HAWEE tuyển chọn kỹ từng học viên
                để đảm bảo mỗi người trong lớp xứng đáng với thời gian và kết nối của nhau.
              </p>
              <p className="mt-3 text-white/80 text-sm italic" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.20)' }}>
                "Lãnh đạo không cần quyền lực — lãnh đạo bằng ảnh hưởng và di sản để lại."
              </p>
            </div>
          </FadeUp>

          {/* ── 4-step process ── */}
          <FadeUp delay={0.1}>
            <div className="relative max-w-2xl mx-auto mb-12">
              {/* Connecting line */}
              <div className="absolute top-5 left-[12%] right-[12%] h-px hidden md:block"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25) 20%, rgba(255,255,255,0.25) 80%, transparent)' }} />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { num: '01', label: 'Nộp hồ sơ', sub: 'Điền đầy đủ thông tin' },
                  { num: '02', label: 'HAWEE đánh giá', sub: '3–5 ngày làm việc' },
                  { num: '03', label: 'Xác nhận phù hợp', sub: 'Liên hệ trực tiếp' },
                  { num: '04', label: 'Nhận thư mời', sub: 'Chính thức tham gia' },
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center text-center relative">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2 text-xs font-bold relative z-10"
                      style={{ background: i === 0 ? 'rgba(242,194,0,0.25)' : 'rgba(255,255,255,0.12)', border: `1.5px solid ${i === 0 ? 'rgba(242,194,0,0.5)' : 'rgba(255,255,255,0.25)'}`, color: i === 0 ? '#F2C200' : 'rgba(255,255,255,0.7)' }}>
                      {step.num}
                    </div>
                    <p className="text-white text-xs font-semibold leading-tight">{step.label}</p>
                    <p className="text-white/80 text-xs mt-0.5">{step.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* ── Criteria + Form ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Left: criteria + benefits + học phí */}
            <FadeUp>
              {/* Criteria */}
              <p className="text-white text-xs uppercase tracking-[0.2em] font-bold mb-4" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.20)' }}>Bạn phù hợp nếu</p>
              <div className="space-y-3 mb-7">
                {[
                  { label: 'Nữ lãnh đạo cấp cao', sub: 'Nhà nước, doanh nghiệp hoặc tổ chức xã hội' },
                  { label: 'Khát vọng tạo tác động lớn hơn', sub: 'Muốn vượt ra ngoài ranh giới chức năng hiện tại' },
                  { label: 'Cam kết 12 tháng — hiện diện trọn vẹn', sub: '6 buổi, mỗi 2 tháng — đây là hành trình, không phải sự kiện' },
                  { label: 'Sẵn sàng học từ và cùng người khác', sub: 'Cộng đồng học tập chuyên sâu, số lượng giới hạn' },
                ].map(({ label, sub }, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(242,194,0,0.2)', border: '1px solid rgba(242,194,0,0.45)' }}>
                      <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                        <polyline points="2 6 5 9 10 3" stroke="#F2C200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold leading-snug">{label}</p>
                      <p className="text-white/85 text-xs mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-full h-px mb-6" style={{ background: 'rgba(255,255,255,0.12)' }} />

              {/* Benefits */}
              <p className="text-white text-xs uppercase tracking-[0.2em] font-bold mb-4" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.20)' }}>Khi được chọn, bạn nhận được</p>
              <div className="space-y-3 mb-7">
                {[
                  { icon: Compass, label: '6 Module / Nội Dung', sub: 'Mỗi module 1 ngày · Team building có thể 2 ngày - 1 đêm' },
                  { icon: Network, label: 'Mạng lưới Công–Tư liên ngành', sub: 'Kết nối độc quyền nhà nước & doanh nghiệp' },
                  { icon: TrendingUp, label: 'Quà Tặng Bộ Thẻ Lãnh Đạo', sub: 'Lãnh đạo tạo tác động' },
                  { icon: GraduationCap, label: 'Chứng nhận & Alumni Network', sub: 'Mạng lưới lãnh đạo trọn đời' },
                ].map(({ icon: Icon, label, sub }, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}>
                      <Icon size={14} color="rgba(255,255,255,0.8)" strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{label}</p>
                      <p className="text-white/85 text-xs">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Học phí breakdown */}
              <div className="rounded-xl p-4 mb-3" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-white text-xs uppercase tracking-[0.2em] font-bold">Học phí</p>
                  <span className="font-bold text-white text-base"
                    style={{ background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.38)', borderRadius: '8px', padding: '2px 10px', display: 'inline-block', lineHeight: '1.6' }}>
                    25.000.000 ₫
                  </span>
                </div>
                <p className="text-white/60 text-[11px] mb-2">Bao gồm toàn bộ:</p>
                <div className="grid grid-cols-2 gap-y-1.5 gap-x-2">
                  {['Nội dung 6 module', 'Ăn trưa & Teabreak', 'Tài liệu học tập', 'Chứng nhận tốt nghiệp'].map(item => (
                    <div key={item} className="flex items-center gap-1.5">
                      <svg width="8" height="8" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
                        <polyline points="2 6 5 9 10 3" stroke="#F2C200" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="text-white/80 text-xs">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="text-white/50 text-[11px] mt-3 leading-snug">
                  Học phí xác nhận sau khi nhận thư thông báo được chọn từ HAWEE.
                </p>
              </div>

              {/* Cam kết */}
              <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)' }}>
                <div className="flex items-start gap-2.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="16" r="0.5" fill="rgba(255,255,255,0.65)"/>
                  </svg>
                  <div>
                    <p className="text-white text-xs font-semibold mb-1">Cam kết tham gia trọn vẹn</p>
                    <p className="text-white/60 text-xs leading-relaxed">
                      Học phí <span className="text-white/85 font-semibold">không hoàn lại</span> nếu học viên không thể tham dự một phần nội dung. HAWEE yêu cầu cam kết hiện diện trọn vẹn trong suốt quá trình học.
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Right: form */}
            <FadeUp delay={0.15}>
              {regSuccess ? (
                <div className="bg-white rounded-2xl p-10 text-center shadow-2xl">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: 'linear-gradient(135deg, #C9187F, #E04020)' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <h3 className="text-[#1A0F1E] text-xl font-semibold mb-2">Hồ Sơ Đã Gửi!</h3>
                  <p className="text-[#5C3545] text-sm leading-relaxed">
                    HAWEE sẽ liên hệ trong 3–5 ngày làm việc để xác nhận mức độ phù hợp của bạn với chương trình. Cảm ơn bạn đã tin tưởng hành trình này.
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                  {/* Form header */}
                  <div className="px-7 py-5 border-b border-[#F5D5E5]"
                    style={{ background: 'linear-gradient(135deg, #FFF0F6 0%, #FFF8EE 100%)' }}>
                    <p className="text-[#1A0F1E] font-semibold text-base">Nộp hồ sơ ứng tuyển</p>
                    <p className="text-[#9B7080] text-xs mt-1 leading-relaxed">
                      HAWEE sẽ liên hệ để xác nhận mức độ phù hợp của bạn với chương trình trước khi xác nhận tham gia.
                    </p>
                  </div>

                  <div className="p-7">
                    <form onSubmit={handleRegSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          { name: 'name', label: 'Họ và tên *', type: 'text', required: true },
                          { name: 'email', label: 'Email *', type: 'email', required: true },
                          { name: 'phone', label: 'Số điện thoại *', type: 'tel', required: true },
                          { name: 'company', label: 'Đơn vị / Công ty *', type: 'text', required: true },
                          { name: 'title', label: 'Chức vụ hiện tại *', type: 'text', required: true },
                        ].map(({ name, label, type, required }) => (
                          <div key={name}>
                            <label className="block text-[#5C3545] text-xs mb-1.5 font-medium">{label}</label>
                            <input
                              type={type} name={name} value={regForm[name] || ''} onChange={handleRegChange} required={required}
                              className="w-full rounded-xl px-3.5 py-2.5 text-sm text-[#1A0F1E] focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all border border-[#F0D0E0] bg-[#FFFAFD]"
                            />
                          </div>
                        ))}
                        <div>
                          <label className="block text-[#5C3545] text-xs mb-1.5 font-medium">Chi hội</label>
                          <select
                            name="chi_hoi"
                            value={regForm.chi_hoi || ''}
                            onChange={handleRegChange}
                            className="w-full rounded-xl px-3.5 py-2.5 text-sm text-[#1A0F1E] focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all border border-[#F0D0E0] bg-[#FFFAFD]"
                          >
                            <option value="">— Chọn chi hội —</option>
                            <option value="Chi hội Yêu thương">Chi hội Yêu thương</option>
                            <option value="Chi hội Phát triển">Chi hội Phát triển</option>
                            <option value="Chi hội Tình thân">Chi hội Tình thân</option>
                            <option value="Chi hội Kết nối">Chi hội Kết nối</option>
                            <option value="Chi hội Tỏa sáng">Chi hội Tỏa sáng</option>
                            <option value="Chi hội Bình Dương">Chi hội Bình Dương</option>
                            <option value="Chi hội Vũng Tàu">Chi hội Vũng Tàu</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-[#5C3545] text-xs mb-1.5 font-medium">
                          Vì sao đây là thời điểm đúng cho bạn? *
                        </label>
                        <textarea
                          name="note" value={regForm.note} onChange={handleRegChange} rows={4} required
                          placeholder="Chia sẻ về hành trình lãnh đạo của bạn và điều bạn muốn tạo ra sau chương trình này..."
                          className="w-full rounded-xl px-3.5 py-2.5 text-sm text-[#1A0F1E] focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none transition-all border border-[#F0D0E0] bg-[#FFFAFD]"
                        />
                      </div>
                      {regError && <p className="text-sm px-3 py-2 rounded-xl text-red-600 bg-red-50">{regError}</p>}
                      <button
                        type="submit" disabled={regSubmitting}
                        className="arrow-light-trail w-full btn-gold py-3.5 text-sm font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        {regSubmitting ? 'Đang gửi hồ sơ...' : <><span>Nộp hồ sơ ứng tuyển</span><ArrowRight size={15} /></>}
                      </button>
                      <p className="text-[#9B7080] text-[11px] text-center leading-relaxed">
                        Việc nộp hồ sơ không đảm bảo tham gia. HAWEE sẽ đánh giá và liên hệ xác nhận.
                      </p>
                    </form>
                  </div>
                </div>
              )}
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ════════════ SPONSOR ════════════ */}
      <section className="bg-white py-10 border-t border-[#F5D5E5]">
        <div className="container-custom text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted/35 mb-7">Nhà tài trợ đồng hành</p>
          <img
            src="/images/pnj-logo.jpg"
            alt="PNJ Group"
            className="h-14 md:h-16 object-contain mx-auto hover:scale-105 transition-transform duration-300"
            style={{ mixBlendMode: 'multiply' }}
          />
        </div>
      </section>

    </div>
  )
}
