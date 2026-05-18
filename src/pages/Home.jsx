import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, animate, useInView } from 'framer-motion'
import { ArrowRight, Award, Users, BookOpen, Star } from 'lucide-react'
import LotusHero from '../components/LotusHero'
import FadeUp from '../components/FadeUp'

function AnimatedNumber({ value, suffix = '', prefix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const motionValue = useMotionValue(0)
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!inView) return
    const controls = animate(motionValue, value, { duration: 2, ease: 'easeOut' })
    const unsubscribe = motionValue.on('change', v => setDisplay(Math.round(v).toLocaleString('vi-VN')))
    return () => { controls.stop(); unsubscribe() }
  }, [inView, value, motionValue])

  return <span ref={ref}>{prefix}{display}{suffix}</span>
}

const stats = [
  { value: 500, suffix: '+', label: 'Hội viên nữ lãnh đạo', icon: Users },
  { value: 200, suffix: '+', label: 'Chương trình tổ chức', icon: Star },
  { value: 14000, suffix: '+', label: 'Lượt tham dự', icon: Award },
  { value: 105, suffix: ' tỷ', label: 'VND huy động cộng đồng', icon: BookOpen },
]

const phases = [
  {
    phase: 'Giai đoạn 1',
    title: 'Nền Tảng Lãnh Đạo',
    sessions: 'Buổi 1–3',
    topics: ['Lãnh đạo bản thân', 'Lãnh đạo thấu cảm', 'Dẫn dắt đội ngũ'],
    color: 'from-primary/15 to-primary/5',
    border: 'border-primary/30',
    dot: 'bg-primary',
    tag: 'text-primary',
  },
  {
    phase: 'Giai đoạn 2',
    title: 'Giao Tiếp & Văn Hóa',
    sessions: 'Buổi 4–5',
    topics: ['Giao tiếp hiệu quả', 'Phong thái lãnh đạo', 'Đổi mới sáng tạo'],
    color: 'from-[#E84E2A]/10 to-[#E84E2A]/3',
    border: 'border-[#E84E2A]/25',
    dot: 'bg-[#E84E2A]',
    tag: 'text-[#E84E2A]',
  },
  {
    phase: 'Giai đoạn 3',
    title: 'Tạo Ảnh Hưởng',
    sessions: 'Buổi 6',
    topics: ['Stakeholder mapping', 'Kết nối liên ngành Công–Tư', 'Mạng lưới cựu học viên'],
    color: 'from-gold/15 to-gold/5',
    border: 'border-gold/30',
    dot: 'bg-gold',
    tag: 'text-gold',
  },
]

export default function Home() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="hero-leadership min-h-screen flex items-center px-4 pt-20 pb-12">
        <div className="container-custom w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center min-h-[80vh]">

            {/* Text — left 3 cols */}
            <div className="lg:col-span-3 text-left">
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <span className="inline-block bg-white/15 backdrop-blur-sm border border-white/25 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full">
                  Khởi động Tháng 5 / 2026
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight">
                  HAWEE Women<br />
                  <span className="gradient-text-gold">Leadership Program</span>
                </h1>
                <p className="mt-4 text-white/85 text-lg md:text-xl leading-relaxed max-w-xl">
                  Từ Quản Lý Đến Lãnh Đạo Tạo Tác Động
                </p>
                <p className="mt-2 text-white/50 text-sm tracking-widest uppercase">
                  Rise in Full · Giàu Toàn Diện
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="mt-8 flex flex-col sm:flex-row gap-3"
              >
                <Link to="/dang-ky" className="btn-gold px-7 py-3.5 text-sm inline-flex items-center gap-2">
                  Đăng ký 20 suất đặc biệt <ArrowRight size={15} />
                </Link>
                <Link to="/gioi-thieu" className="btn-outline-white px-7 py-3.5 text-sm">
                  Tìm hiểu chương trình
                </Link>
              </motion.div>

              {/* Mini stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="mt-10 grid grid-cols-4 gap-4 max-w-sm"
              >
                {[
                  { label: 'tháng', value: '12' },
                  { label: 'buổi học', value: '6' },
                  { label: 'tháng/buổi', value: '2' },
                  { label: 'suất HAWEE', value: '20' },
                ].map(({ label, value }, i) => (
                  <div key={i} className="text-center">
                    <p className="text-3xl font-semibold text-white">{value}</p>
                    <p className="text-white/55 text-xs mt-0.5">{label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Orbit rings — right 2 cols */}
            <div className="lg:col-span-2 flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
              >
                <LotusHero />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PHOTO STRIP — group leadership images ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 h-64 md:h-80 overflow-hidden">
        <div className="relative overflow-hidden">
          <img
            src="/images/hawee-event-stage.jpg"
            alt="HAWEE sự kiện"
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
          <p className="absolute bottom-4 left-4 text-white text-xs font-semibold uppercase tracking-widest">Sự kiện thường niên</p>
        </div>
        <div className="relative overflow-hidden">
          <img
            src="/images/hawee-group-workshop.jpg"
            alt="Workshop lãnh đạo"
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
          <p className="absolute bottom-4 left-4 text-white text-xs font-semibold uppercase tracking-widest">Đào tạo lãnh đạo</p>
        </div>
        <div className="relative overflow-hidden">
          <img
            src="/images/hawee-group-aodai.jpg"
            alt="Nữ lãnh đạo HAWEE"
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gold/50 via-transparent to-transparent" />
          <p className="absolute bottom-4 left-4 text-white text-xs font-semibold uppercase tracking-widest">Cộng đồng nữ lãnh đạo</p>
        </div>
      </div>

      {/* ===== PARTNER STRIP ===== */}
      <section className="section-govt py-8">
        <div className="container-custom">
          <p className="text-center text-muted text-xs uppercase tracking-widest font-semibold mb-6">
            Chương trình được đồng hành cùng
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            <img src="/images/logo-hawee.png" alt="HAWEE" className="h-10 md:h-12 object-contain hover:scale-105 transition-transform duration-300" />
            <img src="/images/logo-hcm.png" alt="UBND TP.HCM" className="h-10 md:h-12 object-contain hover:scale-105 transition-transform duration-300" />
            <img src="/images/logo-pnj.png" alt="PNJ Group" className="h-10 md:h-12 object-contain hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="section-warm py-20 relative overflow-hidden">
        <div className="aura-blob bg-primary w-96 h-96 -top-20 -left-20" style={{ opacity: 0.12 }} />
        <div className="aura-blob bg-gold w-64 h-64 bottom-0 right-0" style={{ animationDelay: '4s', opacity: 0.12 }} />
        <div className="container-custom relative">
          <FadeUp>
            <p className="label-tag text-center mb-3">Vị thế HAWEE</p>
            <h2 className="section-title text-center text-dark heading-accent mx-auto text-center mb-14">
              10 Năm Vì Nữ Lãnh Đạo
            </h2>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ value, suffix, label, icon: Icon }, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="gradient-border rounded-2xl p-6 text-center card-hover bg-white">
                  <Icon size={24} className="text-primary mx-auto mb-3" />
                  <p className="text-4xl font-semibold text-dark">
                    <AnimatedNumber value={value} suffix={suffix} />
                  </p>
                  <p className="text-muted text-sm mt-2">{label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROGRAM OVERVIEW ===== */}
      <section className="section-govt py-20">
        <div className="container-custom">
          <FadeUp>
            <p className="label-tag-navy text-center mb-3">12 Tháng · 6 Buổi · 3 Giai đoạn</p>
            <h2 className="section-title text-center text-navy heading-accent mx-auto text-center mb-14">
              Lộ Trình Học Tập
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {phases.map(({ phase, title, sessions, topics, color, border, dot, tag }, i) => (
              <FadeUp key={i} delay={i * 0.15}>
                <div className={`rounded-2xl p-6 bg-gradient-to-br ${color} border ${border} h-full`}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`w-2 h-2 rounded-full ${dot}`} />
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted">{sessions}</span>
                  </div>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${tag}`}>{phase}</p>
                  <h3 className="text-lg font-semibold text-dark mb-4">{title}</h3>
                  <ul className="space-y-2">
                    {topics.map((t, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted">
                        <span className="text-primary mt-0.5">›</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.5} className="text-center mt-10">
            <Link to="/lo-trinh" className="btn-navy inline-flex items-center gap-2">
              Xem lộ trình chi tiết <ArrowRight size={16} />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ===== IMPACT PHOTO SECTION ===== */}
      <section className="section-warm py-20">
        <div className="container-custom">
          <FadeUp>
            <p className="label-tag text-center mb-3">Cộng đồng HAWEE</p>
            <h2 className="section-title text-center text-dark heading-accent mx-auto text-center mb-14">
              Hơn 500 Nữ Lãnh Đạo<br/>
              <span className="gradient-text">Đang Tạo Dấu Ấn</span>
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeUp delay={0.1}>
              <div className="relative rounded-3xl overflow-hidden h-72 group">
                <img
                  src="/images/hawee-group-formal.jpg"
                  alt="Lãnh đạo nữ doanh nhân"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-semibold text-lg leading-snug">Đại hội thành lập Hội Nữ Doanh Nhân</p>
                  <p className="text-white/70 text-sm mt-1">Kết nối lãnh đạo nữ từ các tỉnh thành</p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden h-72 group">
                <img
                  src="/images/hawee-group-pink.jpg"
                  alt="HAWEE hành động cộng đồng"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-semibold text-lg leading-snug">HAWEE vì cộng đồng</p>
                  <p className="text-white/70 text-sm mt-1">Hơn 105 tỷ VND huy động cho các hoạt động xã hội</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="section-rose py-20 relative overflow-hidden">
        <div className="aura-blob bg-white w-80 h-80 -top-10 left-1/4 opacity-5" />
        <div className="container-custom relative text-center">
          <FadeUp>
            <span className="inline-block bg-white/20 text-white text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-white/30">
              Ưu tiên hội viên HAWEE
            </span>
            <h2 className="section-title text-white mb-4">
              20 Suất Đặc Biệt<br />
              <span className="text-white/90 font-semibold">Dành Cho Hội Viên HAWEE</span>
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">
              Học phí ưu đãi · Kết nối lãnh đạo TP.HCM · Miễn phí kho tài liệu · 12 tháng đồng hành
            </p>
            <Link to="/dang-ky" className="bg-white text-primary font-semibold px-10 py-4 rounded-full inline-flex items-center gap-2 text-base hover:bg-white/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              Đăng ký ngay — Còn 20 suất <ArrowRight size={16} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
