import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Check, X as XIcon, Users, BookOpen, Network, GraduationCap } from 'lucide-react'
import FadeUp from '../components/FadeUp'

const criteria = [
  { text: 'Là hội viên HAWEE hoặc được HAWEE đề xuất', required: true },
  { text: 'Đang giữ vị trí CEO / Founder / Giám đốc điều hành', required: true },
  { text: 'Hoặc được Thành Ủy / UBND lựa chọn tham gia', required: false },
  { text: 'Cam kết tham dự ít nhất 5/6 buổi học trong 12 tháng', required: true },
  { text: 'Sẵn sàng chia sẻ câu chuyện tác động sau chương trình', required: false },
]

const benefits = [
  { icon: Users, title: 'Kết nối Công–Tư độc quyền', desc: 'Học cùng nữ lãnh đạo nhà nước cấp cao — mạng lưới hiếm có tại TP.HCM' },
  { icon: GraduationCap, title: '6 buổi học chuyên sâu', desc: '12 tháng · 2 tháng/buổi — đủ thời gian thực hành giữa các buổi' },
  { icon: BookOpen, title: 'Kho tài liệu miễn phí', desc: 'Truy cập không giới hạn kho tài liệu độc quyền suốt 12 tháng' },
  { icon: Network, title: 'Alumni Network trọn đời', desc: 'Gia nhập mạng lưới cựu học viên — tiếp tục kết nối và tạo ảnh hưởng' },
]

function SuccessState() {
  return (
    <div className="min-h-screen section-warm flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: 'linear-gradient(135deg, #C9187F, #E04020)' }}>
          <CheckCircle size={40} className="text-white" />
        </div>
        <h2 className="text-3xl font-semibold text-dark mb-4">Đã Nhận Hồ Sơ!</h2>
        <p className="text-muted mb-2 leading-relaxed">
          Cảm ơn bạn đã đăng ký. Ban tổ chức sẽ liên hệ xác nhận trong vòng <strong>3–5 ngày làm việc</strong>.
        </p>
        <p className="text-muted text-sm mb-8">Câu hỏi: <a href="mailto:hawee.hochiminh@gmail.com" className="text-primary font-semibold">hawee.hochiminh@gmail.com</a></p>
        <Link to="/" className="btn-primary inline-flex items-center gap-2">Về trang chủ <ArrowRight size={16} /></Link>
      </div>
    </div>
  )
}

export default function DangKy() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', title: '', hawee_member: '', note: '' })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    if (!FORMSPREE_ID) {
      setError('Hệ thống đăng ký chưa được cấu hình. Vui lòng liên hệ: hawee.hochiminh@gmail.com')
      setSubmitting(false)
      return
    }
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ _subject: `Đăng ký HAWEE Leadership Program — ${form.name}`, ...form }),
      })
      if (res.ok) setSuccess(true)
      else setError('Có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ hawee.hochiminh@gmail.com')
    } catch {
      setError('Mất kết nối. Vui lòng kiểm tra internet và thử lại.')
    }
    setSubmitting(false)
  }

  if (success) return <SuccessState />

  // Temporarily locked registration
  const isLocked = true

  if (isLocked) {
    return (
      <div className="min-h-screen section-warm flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: 'linear-gradient(135deg, #1A2F5A, #C9187F)' }}>
            <Users size={40} className="text-white" />
          </div>
          <h2 className="text-3xl font-semibold text-dark mb-4">Đơn Đăng Ký Đã Đóng</h2>
          <p className="text-muted mb-6 leading-relaxed">
            Chương trình HAWEE Women Leadership 2026 hiện đã kết thúc đợt tuyển chọn. Cảm ơn sự quan tâm của bạn!
          </p>
          <p className="text-muted font-semibold text-lg mb-2">Liên hệ trực tiếp:</p>
          <a href="tel:0919479955" className="inline-block text-primary font-bold text-xl mb-6 hover:opacity-75 transition">
            📞 091 947 99 55
          </a>
          <div className="flex gap-3 justify-center">
            <a href="mailto:hawee.hochiminh@gmail.com" className="btn-primary inline-flex items-center gap-2">
              ✉️ Email
            </a>
            <a href="https://zalo.me/0919479955" target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex items-center gap-2">
              💬 Zalo
            </a>
          </div>
          <p className="text-muted text-sm mt-8">
            <Link to="/" className="text-primary font-semibold hover:underline">← Về trang chủ</Link>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16">

      {/* ── Hero exclusive ─────────────────────────────── */}
      <section className="section-rose py-20 relative overflow-hidden">
        <div className="aura-blob bg-white w-96 h-96 -top-20 -right-20 opacity-5" />
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <FadeUp>
              {/* Live badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-white text-xs font-semibold uppercase tracking-widest">Đang mở đăng ký · Hạn 30/04/2026</span>
              </div>

              {/* Big 20 seats counter */}
              <div className="mb-8">
                <p className="text-white/70 text-sm uppercase tracking-widest mb-2">Tổng số suất</p>
                <div className="flex items-end justify-center gap-3">
                  <span className="text-8xl md:text-9xl font-semibold text-white leading-none" style={{ textShadow: '0 0 60px rgba(255,255,255,0.2)' }}>20</span>
                  <span className="text-xl text-white/70 mb-4">suất</span>
                </div>
                <p className="text-white/60 text-sm mt-2">Dành riêng cho hội viên HAWEE và ứng viên được chọn lọc</p>
              </div>

              <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight">
                HAWEE Women Leadership Program 2026
              </h1>
              <p className="text-white/80 text-lg max-w-xl mx-auto">
                20 triệu VND / năm · 6 buổi chuyên sâu · Kết nối Công–Tư độc quyền
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Điều kiện tham gia ─────────────────────────── */}
      <section className="section-warm py-16">
        <div className="container-custom max-w-3xl">
          <FadeUp>
            <p className="label-tag text-center mb-3">Trước khi đăng ký</p>
            <h2 className="section-title text-center text-dark heading-accent mx-auto mb-10">
              Bạn Có Phù Hợp?
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-muted/10">
              <p className="text-muted text-sm mb-6">Chương trình được thiết kế cho nhóm nhỏ chọn lọc. Ứng viên cần đáp ứng <strong>ít nhất 2 tiêu chí bắt buộc</strong>:</p>
              <ul className="space-y-3">
                {criteria.map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${c.required ? 'bg-primary/10' : 'bg-muted/10'}`}>
                      {c.required
                        ? <Check size={13} className="text-primary font-bold" />
                        : <Check size={13} className="text-muted" />
                      }
                    </div>
                    <div>
                      <span className="text-sm text-dark">{c.text}</span>
                      {c.required && <span className="ml-2 text-[10px] font-bold text-primary uppercase tracking-wider">Bắt buộc</span>}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-muted/10 flex items-start gap-3 bg-primary/5 rounded-2xl p-4">
                <XIcon size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-dark">Nếu bạn chưa là hội viên HAWEE — <a href="mailto:hawee.hochiminh@gmail.com" className="text-primary font-semibold hover:underline">liên hệ hawee.hochiminh@gmail.com</a> để được hướng dẫn gia nhập trước khi đăng ký chương trình.</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Quyền lợi ─────────────────────────────────── */}
      <section className="section-govt py-16">
        <div className="container-custom">
          <FadeUp>
            <p className="label-tag-navy text-center mb-3">Học phí 20 triệu VND / năm bao gồm</p>
            <h2 className="section-title text-center text-navy heading-accent mx-auto mb-12">
              Quyền Lợi Học Viên
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto mb-12">
            {benefits.map(({ icon: Icon, title, desc }, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-muted/10 card-hover">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, rgba(201,24,127,0.12), rgba(201,168,76,0.08))' }}>
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-1 text-sm">{title}</h3>
                    <p className="text-muted text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Pricing card */}
          <FadeUp delay={0.4}>
            <div className="max-w-sm mx-auto rounded-3xl p-8 text-center text-white"
              style={{ background: 'linear-gradient(135deg, #C9187F, #E04020)' }}>
              <p className="text-white/70 text-xs uppercase tracking-widest mb-3">Học phí</p>
              <p className="text-6xl font-semibold mb-1">20<span className="text-2xl text-white/70 ml-1">triệu</span></p>
              <p className="text-white/60 text-sm mb-4">VND / năm / học viên</p>
              <div className="border-t border-white/20 pt-4 text-white/70 text-xs space-y-1">
                <p>✓ 6 buổi học · Kho tài liệu</p>
                <p>✓ Mạng lưới Alumni · Chứng chỉ</p>
                <p>✓ Kết nối Công–Tư độc quyền</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Form đăng ký ──────────────────────────────── */}
      <section className="section-warm py-20">
        <div className="container-custom max-w-2xl">
          <FadeUp>
            <p className="label-tag text-center mb-3">Điền hồ sơ</p>
            <h2 className="section-title text-center text-dark heading-accent mx-auto mb-3">
              Đăng Ký Tham Gia
            </h2>
            <p className="text-muted text-center text-sm mb-10">Ban tổ chức sẽ xét duyệt và liên hệ xác nhận trong 3–5 ngày làm việc.</p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-sm border border-muted/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { name: 'name', label: 'Họ và tên *', type: 'text', required: true, span: false },
                  { name: 'email', label: 'Email *', type: 'email', required: true, span: false },
                  { name: 'phone', label: 'Số điện thoại *', type: 'tel', required: true, span: false },
                  { name: 'company', label: 'Đơn vị / Công ty *', type: 'text', required: true, span: false },
                  { name: 'title', label: 'Chức vụ *', type: 'text', required: true, span: false },
                  { name: 'hawee_member', label: 'Mã hội viên HAWEE (nếu có)', type: 'text', required: false, span: false },
                ].map(({ name, label, type, required, span }) => (
                  <div key={name} className={span ? 'md:col-span-2' : ''}>
                    <label className="block text-sm font-semibold text-dark mb-1.5">{label}</label>
                    <input
                      type={type} name={name} value={form[name]} onChange={handleChange} required={required}
                      className="w-full border border-muted/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-white"
                      placeholder={`Nhập ${label.replace(' *','').replace(' (nếu có)','').toLowerCase()}`}
                    />
                  </div>
                ))}

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-dark mb-1.5">Lý do bạn muốn tham gia chương trình</label>
                  <textarea
                    name="note" value={form.note} onChange={handleChange} rows={3}
                    className="w-full border border-muted/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none bg-white"
                    placeholder="Ví dụ: Tôi là CEO công ty ABC, hội viên HAWEE chi hội Quận 1. Tôi muốn..."
                  />
                </div>
              </div>

              {error && <p className="text-[#BE1E2D] text-sm mt-4 p-3 bg-[#BE1E2D]/5 rounded-xl">{error}</p>}

              <button
                type="submit" disabled={submitting}
                className="w-full mt-6 py-4 rounded-full font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: 'linear-gradient(135deg, #C9187F, #E04020)' }}
              >
                {submitting ? 'Đang gửi...' : <><span>Nộp hồ sơ đăng ký</span> <ArrowRight size={16} /></>}
              </button>
              <p className="text-xs text-muted text-center mt-4">
                Còn 20 suất · Deadline: 30/04/2026 · <a href="mailto:hawee.hochiminh@gmail.com" className="text-primary hover:underline">hawee.hochiminh@gmail.com</a>
              </p>
            </form>
          </FadeUp>
        </div>
      </section>

    </div>
  )
}
