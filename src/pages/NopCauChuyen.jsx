import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Lock, ArrowRight, BookOpen } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../services/supabase'
import FadeUp from '../components/FadeUp'

const SESSION_OPTIONS = [
  { value: '', label: 'Chọn buổi học liên quan...' },
  { value: '1', label: 'Buổi 1 — Lãnh đạo bản thân' },
  { value: '2', label: 'Buổi 2 — Lãnh đạo thấu cảm' },
  { value: '3', label: 'Buổi 3 — Dẫn dắt đội ngũ' },
  { value: '4', label: 'Buổi 4 — Giao tiếp & Phong thái' },
  { value: '5', label: 'Buổi 5 — Văn hóa & Đổi mới' },
  { value: '6', label: 'Buổi 6 — Kết nối & Ảnh hưởng' },
  { value: '0', label: 'Hành trình cả chương trình' },
]

function LockedState() {
  return (
    <div className="min-h-screen section-warm flex items-center justify-center px-4 pt-16">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Lock size={32} className="text-primary" />
        </div>
        <h2 className="text-2xl font-semibold text-dark mb-3">Dành Riêng Cho Học Viên</h2>
        <p className="text-muted mb-6 leading-relaxed">
          Trang nộp câu chuyện chỉ dành cho học viên đang theo học HAWEE Leadership Program.
          Vui lòng đăng nhập để tiếp tục.
        </p>
        <Link to="/dang-nhap" className="btn-primary inline-flex items-center gap-2">
          Đăng nhập <ArrowRight size={16} />
        </Link>
        <p className="text-muted text-sm mt-4">
          Chưa đăng ký? <Link to="/dang-ky" className="text-primary font-semibold hover:underline">Đăng ký tham gia</Link>
        </p>
      </div>
    </div>
  )
}

function NotEnrolledState({ email }) {
  return (
    <div className="min-h-screen section-warm flex items-center justify-center px-4 pt-16">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
          <BookOpen size={32} className="text-gold" />
        </div>
        <h2 className="text-2xl font-semibold text-dark mb-3">Chưa Có Quyền Truy Cập</h2>
        <p className="text-muted mb-2 leading-relaxed">
          Tài khoản <strong>{email}</strong> chưa được xác nhận là học viên.
        </p>
        <p className="text-muted text-sm mb-6">
          Nếu bạn đã đăng ký chương trình, vui lòng liên hệ ban tổ chức để được cấp quyền.
        </p>
        <a href="mailto:hawee.hochiminh@gmail.com" className="btn-primary inline-flex items-center gap-2">
          Liên hệ ban tổ chức <ArrowRight size={16} />
        </a>
      </div>
    </div>
  )
}

function SuccessState() {
  return (
    <div className="min-h-screen section-warm flex items-center justify-center px-4 pt-16">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: 'linear-gradient(135deg, #C9187F, #E04020)' }}>
          <CheckCircle size={36} className="text-white" />
        </div>
        <h2 className="text-3xl font-semibold text-dark mb-4">Đã Nhận Câu Chuyện!</h2>
        <p className="text-muted mb-2 leading-relaxed">
          Cảm ơn bạn đã chia sẻ. Ban truyền thông HAWEE sẽ xét duyệt và liên hệ trước khi đăng tải.
        </p>
        <p className="text-muted text-sm mb-8">Thời gian xét duyệt: 5–7 ngày làm việc.</p>
        <Link to="/" className="btn-primary inline-flex items-center gap-2">Về trang chủ <ArrowRight size={16} /></Link>
      </div>
    </div>
  )
}

export default function NopCauChuyen() {
  const { user, loading } = useAuth()
  const [enrolled, setEnrolled] = useState(null)
  const [checkingEnroll, setCheckingEnroll] = useState(true)
  const [form, setForm] = useState({ title: '', excerpt: '', story: '', session: '', tag: '', consent: false })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID

  useEffect(() => {
    if (!user) { setCheckingEnroll(false); return }
    if (!supabase) { setCheckingEnroll(false); return }
    supabase.from('enrolled_students').select('id, full_name').eq('email', user.email).single()
      .then(({ data }) => { setEnrolled(data); setCheckingEnroll(false) })
      .catch(() => setCheckingEnroll(false))
  }, [user])

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.consent) { setError('Vui lòng đồng ý với điều khoản sử dụng câu chuyện.'); return }
    setSubmitting(true)
    setError('')

    if (!FORMSPREE_ID) {
      setError('Hệ thống chưa được cấu hình. Vui lòng liên hệ: hawee.hochiminh@gmail.com')
      setSubmitting(false)
      return
    }

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Câu chuyện tác động — ${form.title} (${user.email})`,
          author_email: user.email,
          author_name: enrolled?.full_name || user.email,
          ...form,
        }),
      })
      if (res.ok) setSuccess(true)
      else setError('Có lỗi xảy ra. Vui lòng thử lại.')
    } catch {
      setError('Mất kết nối. Vui lòng kiểm tra internet và thử lại.')
    }
    setSubmitting(false)
  }

  if (loading || checkingEnroll) {
    return (
      <div className="min-h-screen section-warm flex items-center justify-center pt-16">
        <p className="text-muted">Đang xác thực...</p>
      </div>
    )
  }
  if (!user) return <LockedState />
  if (!enrolled) return <NotEnrolledState email={user.email} />
  if (success) return <SuccessState />

  return (
    <div className="pt-16">

      {/* Hero */}
      <section className="section-rose py-20 relative overflow-hidden">
        <div className="aura-blob bg-white w-80 h-80 top-0 right-0 opacity-5" />
        <div className="container-custom relative text-center max-w-2xl mx-auto">
          <FadeUp>
            <p className="label-tag-gold mb-4">Dành cho học viên</p>
            <h1 className="section-title text-white text-4xl md:text-5xl mb-4">
              Nộp Câu Chuyện Tác Động
            </h1>
            <p className="text-white/80 leading-relaxed">
              Câu chuyện của bạn là minh chứng sống động nhất cho giá trị chương trình.
              Chia sẻ để truyền cảm hứng cho thế hệ lãnh đạo tiếp theo.
            </p>
            {enrolled?.full_name && (
              <p className="text-white/55 text-sm mt-3">Xin chào, {enrolled.full_name} 👋</p>
            )}
          </FadeUp>
        </div>
      </section>

      {/* Form */}
      <section className="section-warm py-20">
        <div className="container-custom max-w-2xl">
          <FadeUp>
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-muted/10">

              {/* Writing tips */}
              <div className="bg-primary/5 border border-primary/15 rounded-2xl p-5 mb-8">
                <p className="text-primary font-semibold text-sm mb-2">💡 Gợi ý viết câu chuyện hay</p>
                <ul className="text-muted text-xs space-y-1.5">
                  <li>› <strong>Trước:</strong> Bạn đang đối mặt với thách thức gì?</li>
                  <li>› <strong>Trong chương trình:</strong> Điều gì thay đổi — khoảnh khắc "aha" của bạn?</li>
                  <li>› <strong>Sau:</strong> Bạn đã áp dụng và thấy kết quả thực tế nào?</li>
                </ul>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-dark mb-1.5">Tiêu đề câu chuyện *</label>
                  <input
                    type="text" name="title" value={form.title} onChange={handleChange} required
                    className="w-full border border-muted/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                    placeholder="Ví dụ: Từ người quản lý đến người dẫn dắt — hành trình 12 tháng của tôi"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1.5">Buổi học liên quan</label>
                    <select name="session" value={form.session} onChange={handleChange}
                      className="w-full border border-muted/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-white">
                      {SESSION_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1.5">Nhóm *</label>
                    <select name="tag" value={form.tag} onChange={handleChange} required
                      className="w-full border border-muted/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-white">
                      <option value="">Chọn nhóm...</option>
                      <option value="Nhà nước">Nhà nước</option>
                      <option value="Doanh nhân">Doanh nhân</option>
                      <option value="Alumni">Alumni</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark mb-1.5">Đoạn trích ngắn * <span className="text-muted font-normal">(2–3 câu, dùng trên trang web)</span></label>
                  <textarea
                    name="excerpt" value={form.excerpt} onChange={handleChange} required rows={3}
                    className="w-full border border-muted/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                    placeholder="Tóm tắt ngắn gọn thay đổi lớn nhất bạn đã trải qua..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark mb-1.5">Câu chuyện đầy đủ * <span className="text-muted font-normal">(200–500 chữ)</span></label>
                  <textarea
                    name="story" value={form.story} onChange={handleChange} required rows={8}
                    className="w-full border border-muted/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                    placeholder="Chia sẻ câu chuyện của bạn — bối cảnh, thách thức, khoảnh khắc thay đổi và kết quả thực tế..."
                  />
                </div>

                {/* Consent */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded accent-primary" />
                  <span className="text-xs text-muted leading-relaxed">
                    Tôi đồng ý để HAWEE sử dụng câu chuyện này (đã ẩn danh hoặc theo tên) trên website và tài liệu truyền thông của chương trình. Ban tổ chức sẽ liên hệ xác nhận trước khi đăng tải.
                  </span>
                </label>

                {error && <p className="text-[#BE1E2D] text-sm p-3 bg-[#BE1E2D]/5 rounded-xl">{error}</p>}

                <button
                  type="submit" disabled={submitting}
                  className="w-full py-4 rounded-full font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60 hover:-translate-y-0.5 hover:shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #C9187F, #E04020)' }}
                >
                  {submitting ? 'Đang gửi...' : <><span>Nộp câu chuyện</span> <ArrowRight size={16} /></>}
                </button>
              </form>
            </div>
          </FadeUp>
        </div>
      </section>

    </div>
  )
}
