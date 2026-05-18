import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Lock, FileText, Video, Link as LinkIcon, Download, BookOpen } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../services/supabase'
import FadeUp from '../components/FadeUp'

const TYPE_ICONS = {
  pdf: FileText,
  video: Video,
  link: LinkIcon,
  slide: FileText,
}

const SESSION_LABELS = {
  0: 'Tất cả học viên',
  1: 'Buổi 1 — Lãnh đạo bản thân',
  2: 'Buổi 2 — Lãnh đạo thấu cảm',
  3: 'Buổi 3 — Dẫn dắt đội ngũ',
  4: 'Buổi 4 — Giao tiếp hiệu quả',
  5: 'Buổi 5 — Văn hóa & Đổi mới',
  6: 'Buổi 6 — Tạo ảnh hưởng',
}

function LockedState() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-6">
          <Lock size={36} className="text-navy" />
        </div>
        <h2 className="text-2xl font-semibold text-dark mb-3">Kho Tài Liệu</h2>
        <p className="text-muted mb-6 leading-relaxed">
          Tài liệu học tập chỉ dành cho học viên đã đăng ký chương trình. Vui lòng đăng nhập để truy cập.
        </p>
        <button onClick={() => navigate('/dang-nhap')} className="btn-navy">
          Đăng nhập để xem tài liệu
        </button>
        <p className="text-muted text-sm mt-4">
          Chưa đăng ký?{' '}
          <a href="/dang-ky" className="text-primary font-semibold hover:underline">Đăng ký ngay</a>
        </p>
      </div>
    </div>
  )
}

function NotEnrolledState() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
          <BookOpen size={36} className="text-gold" />
        </div>
        <h2 className="text-2xl font-semibold text-dark mb-3">Chưa Có Quyền Truy Cập</h2>
        <p className="text-muted mb-6 leading-relaxed">
          Tài khoản của bạn chưa được xác nhận là học viên. Nếu bạn đã đăng ký, vui lòng liên hệ ban tổ chức để được cấp quyền.
        </p>
        <a href="mailto:hawee.hochiminh@gmail.com" className="btn-primary">
          Liên hệ ban tổ chức
        </a>
      </div>
    </div>
  )
}

function ResourceCard({ resource }) {
  const Icon = TYPE_ICONS[resource.resource_type] || FileText
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-muted/10 card-hover flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-navy/10 flex items-center justify-center flex-shrink-0">
        <Icon size={18} className="text-navy" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-dark text-sm mb-1 truncate">{resource.title}</p>
        {resource.description && (
          <p className="text-muted text-xs leading-relaxed mb-3">{resource.description}</p>
        )}
        <a
          href={resource.file_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-primary text-xs font-semibold hover:underline"
        >
          <Download size={12} /> Xem / Tải về
        </a>
      </div>
    </div>
  )
}

export default function KhoTaiLieu() {
  const { user, loading } = useAuth()
  const [enrolled, setEnrolled] = useState(null)
  const [resources, setResources] = useState([])
  const [checkingEnrollment, setCheckingEnrollment] = useState(true)

  useEffect(() => {
    if (!user) {
      setCheckingEnrollment(false)
      return
    }

    const checkAndLoad = async () => {
      if (!supabase) { setCheckingEnrollment(false); return }
      const { data: enrollment } = await supabase
        .from('enrolled_students')
        .select('id, session_number')
        .eq('email', user.email)
        .single()

      setEnrolled(enrollment)

      if (enrollment) {
        const { data: res } = await supabase
          .from('resources')
          .select('*')
          .order('session_number', { ascending: true })
          .order('display_order', { ascending: true })

        setResources(res || [])
      }

      setCheckingEnrollment(false)
    }

    checkAndLoad()
  }, [user])

  if (loading || checkingEnrollment) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center text-muted">Đang kiểm tra quyền truy cập...</div>
      </div>
    )
  }

  if (!user) return <LockedState />
  if (!enrolled) return <NotEnrolledState />

  // Group resources by session
  const grouped = {}
  resources.forEach(r => {
    const key = r.session_number
    if (!grouped[key]) grouped[key] = []
    grouped[key].push(r)
  })

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero */}
      <section className="section-rose py-20 relative overflow-hidden">
        <div className="aura-blob bg-white w-72 h-72 top-0 right-0 opacity-5" />
        <div className="container-custom relative">
          <FadeUp>
            <p className="label-tag-gold mb-3">Dành riêng cho học viên</p>
            <h1 className="section-title text-white text-4xl mb-3">Kho Tài Liệu</h1>
            <p className="text-white/75">Chào mừng, {user.email}</p>
          </FadeUp>
        </div>
      </section>

      {/* Resources */}
      <section className="section-warm py-16">
        <div className="container-custom">
          {Object.keys(grouped).length === 0 ? (
            <div className="text-center py-20 text-muted">
              Tài liệu đang được cập nhật. Vui lòng quay lại sau buổi học đầu tiên.
            </div>
          ) : (
            <div className="space-y-12">
              {Object.entries(grouped).sort(([a], [b]) => Number(a) - Number(b)).map(([session, items]) => (
                <FadeUp key={session}>
                  <div>
                    <h2 className="font-semibold text-navy text-lg mb-5 pb-3 border-b border-muted/10">
                      {SESSION_LABELS[Number(session)] || `Buổi ${session}`}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {items.map(r => <ResourceCard key={r.id} resource={r} />)}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
