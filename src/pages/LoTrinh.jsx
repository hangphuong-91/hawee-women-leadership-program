import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import FadeUp from '../components/FadeUp'

const phases = [
  {
    id: 1,
    name: 'Nền Tảng Lãnh Đạo',
    range: 'Buổi 1–3',
    color: 'primary',
    bg: 'bg-primary',
    text: 'text-primary',
    light: 'bg-primary/8',
    border: 'border-primary/30',
    ringColor: 'ring-primary/40',
    sessions: [0, 1, 2],
  },
  {
    id: 2,
    name: 'Giao Tiếp & Văn Hóa',
    range: 'Buổi 4–5',
    color: 'orange',
    bg: 'bg-[#E04020]',
    text: 'text-[#E04020]',
    light: 'bg-[#E04020]/8',
    border: 'border-[#E04020]/30',
    ringColor: 'ring-[#E04020]/40',
    sessions: [3, 4],
  },
  {
    id: 3,
    name: 'Tạo Ảnh Hưởng',
    range: 'Buổi 6',
    color: 'gold',
    bg: 'bg-gold',
    text: 'text-gold',
    light: 'bg-gold/8',
    border: 'border-gold/30',
    ringColor: 'ring-gold/40',
    sessions: [5],
  },
]

const sessions = [
  {
    number: '01',
    phase: 0,
    title: 'Lãnh Đạo Bản Thân',
    subtitle: 'Self-Leadership',
    desc: 'Xây dựng nhận thức về phong cách lãnh đạo cá nhân, khám phá la bàn giá trị và nền tảng tâm lý vững chắc để đối mặt với áp lực quyết định.',
  },
  {
    number: '02',
    phase: 0,
    title: 'Lãnh Đạo Thấu Cảm',
    subtitle: 'Empathetic Leadership · Team Building',
    desc: 'Phát triển trí tuệ cảm xúc, khả năng kết nối và thấu hiểu con người — nền tảng để xây dựng đội ngũ gắn kết và hiệu suất cao.',
  },
  {
    number: '03',
    phase: 0,
    title: 'Dẫn Dắt Đội Ngũ Hiệu Quả',
    subtitle: 'High-Performance Team',
    desc: 'Kỹ năng phân công, trao quyền, giải quyết xung đột và tạo văn hóa trách nhiệm — từ người quản lý trở thành người dẫn dắt tạo kết quả.',
  },
  {
    number: '04',
    phase: 1,
    title: 'Giao Tiếp & Phong Thái Lãnh Đạo',
    subtitle: 'Executive Presence & Storytelling',
    desc: 'Làm chủ nghệ thuật giao tiếp có tác động — từ thuyết trình trước ban lãnh đạo, kể chuyện truyền cảm hứng đến xây dựng phong thái uy tín.',
  },
  {
    number: '05',
    phase: 1,
    title: 'Văn Hóa Tổ Chức & Đổi Mới Sáng Tạo',
    subtitle: 'Culture & Innovation',
    desc: 'Hiểu và định hình văn hóa tổ chức theo hướng đổi mới, xây dựng môi trường khuyến khích sáng kiến và áp dụng tư duy thiết kế vào quản trị.',
  },
  {
    number: '06',
    phase: 2,
    title: 'Kết Nối & Tạo Ảnh Hưởng',
    subtitle: 'Stakeholder Influence & Network',
    desc: 'Xây dựng bản đồ stakeholders, chiến lược gây ảnh hưởng liên ngành Công–Tư, và gia nhập mạng lưới cựu học viên lãnh đạo.',
  },
]

export default function LoTrinh() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-rose py-24 relative overflow-hidden">
        <div className="aura-blob bg-white w-80 h-80 top-0 left-0 opacity-5" />
        <div className="container-custom relative text-center">
          <FadeUp>
            <p className="label-tag-gold mb-4">12 tháng · 6 buổi · 3 giai đoạn</p>
            <h1 className="section-title text-white text-4xl md:text-5xl mb-6">
              Lộ Trình Học Tập
            </h1>
            <p className="text-white/75 max-w-xl mx-auto">
              Hành trình 12 tháng có cấu trúc — từ nền tảng nội lực đến kỹ năng tạo ảnh hưởng
              trong hệ thống Công–Tư tại TP.HCM mở rộng.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ===== ROADMAP ===== */}
      <section className="py-20 section-warm">
        <div className="container-custom">

          {/* Phase overview cards */}
          <FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 max-w-3xl mx-auto">
              {phases.map((p) => (
                <div key={p.id} className={`rounded-2xl p-5 ${p.light} border ${p.border} text-center`}>
                  <div className={`w-8 h-8 rounded-full ${p.bg} flex items-center justify-center mx-auto mb-3`}>
                    <span className="text-white font-bold text-sm">{p.id}</span>
                  </div>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${p.text}`}>Giai đoạn {p.id}</p>
                  <p className="font-semibold text-dark text-sm">{p.name}</p>
                  <p className="text-muted text-xs mt-1">{p.range}</p>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Roadmap visual — horizontal desktop */}
          <FadeUp delay={0.2}>
            <div className="relative mb-16 hidden md:block">
              {/* Track line */}
              <div className="absolute top-10 left-[4%] right-[4%] h-1.5 rounded-full"
                style={{ background: 'linear-gradient(to right, #C9187F, #E04020, #C9A84C)' }} />

              <div className="grid grid-cols-6 gap-2">
                {sessions.map((s, i) => {
                  const ph = phases[s.phase]
                  return (
                    <div key={i} className="flex flex-col items-center">
                      {/* Node */}
                      <div className={`w-20 h-20 rounded-full ${ph.bg} flex items-center justify-center shadow-xl z-10 relative ring-4 ${ph.ringColor} bg-opacity-100`}>
                        <span className="text-white font-bold text-xl">{s.number}</span>
                      </div>
                      {/* Phase label */}
                      <p className={`text-[10px] font-bold uppercase tracking-wider mt-3 mb-2 ${ph.text}`}>
                        {ph.range.includes(s.number.replace('0','')) || s.phase === phases.indexOf(ph) ? `Giai đoạn ${ph.id}` : ''}
                      </p>
                      {/* Session card */}
                      <div className={`${ph.light} rounded-xl p-3 text-center w-full border ${ph.border}`}>
                        <p className="text-xs font-semibold text-dark leading-tight">{s.title}</p>
                        <p className={`text-[10px] mt-1 ${ph.text} font-medium`}>{s.subtitle.split('·')[0]}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </FadeUp>

          {/* Session detail cards */}
          <div className="max-w-3xl mx-auto space-y-0">
            {phases.map((ph) => (
              <FadeUp key={ph.id} delay={ph.id * 0.1}>
                <div className="mb-8">
                  {/* Phase header */}
                  <div className={`flex items-center gap-3 mb-4 px-5 py-3 rounded-2xl ${ph.light} border ${ph.border}`}>
                    <div className={`w-8 h-8 rounded-full ${ph.bg} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-bold text-sm">{ph.id}</span>
                    </div>
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-widest ${ph.text}`}>Giai đoạn {ph.id} · {ph.range}</p>
                      <p className="font-semibold text-dark text-sm">{ph.name}</p>
                    </div>
                  </div>

                  {/* Sessions in this phase */}
                  <div className="pl-4 border-l-2 ml-4 space-y-3"
                    style={{ borderImage: `linear-gradient(to bottom, var(--tw-gradient-from), transparent) 1` }}>
                    {sessions.filter(s => s.phase === ph.id - 1).map((s, si) => (
                      <div key={si} className="bg-white rounded-2xl p-5 shadow-sm border border-muted/10 flex gap-4 items-start">
                        <div className={`w-10 h-10 rounded-full ${ph.bg} flex items-center justify-center flex-shrink-0 shadow`}>
                          <span className="text-white font-bold text-sm">{s.number}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-dark">{s.title}</h3>
                          <p className={`text-xs font-medium uppercase tracking-wide ${ph.text} mb-2`}>{s.subtitle}</p>
                          <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
                          <p className="text-xs text-muted/50 italic mt-3">
                            Giảng viên: <span className="text-muted">Sẽ được thông báo</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Graduation milestone */}
      <FadeUp>
        <div className="section-rose py-12 text-center relative overflow-hidden">
          <div className="aura-blob bg-white w-64 h-64 top-0 left-1/2 opacity-5" />
          <div className="container-custom relative">
            <div className="inline-flex items-center gap-3 bg-white/20 border border-white/30 rounded-full px-6 py-3 mb-4">
              <span className="text-2xl">🎓</span>
              <span className="text-white font-semibold">Lễ Tốt Nghiệp — Tháng 5/2027</span>
            </div>
            <p className="text-white/75 text-sm">Chứng nhận hoàn thành · Gia nhập mạng lưới Alumni lãnh đạo</p>
          </div>
        </div>
      </FadeUp>

      {/* 2 Personas */}
      <section className="section-govt py-20">
        <div className="container-custom">
          <FadeUp>
            <p className="label-tag-navy text-center mb-3">2 nhóm học viên</p>
            <h2 className="section-title text-navy text-center heading-accent mx-auto text-center mb-14">
              Chương Trình Dành Cho Ai?
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeUp delay={0.1}>
              <div className="bg-navy rounded-2xl p-8 text-white h-full">
                <div className="text-gold font-semibold text-xs uppercase tracking-widest mb-2">80% — Nhóm chính</div>
                <h3 className="text-2xl font-semibold mb-4">Nữ Lãnh Đạo Nhà Nước</h3>
                <ul className="space-y-3 text-white/80 text-sm">
                  <li>› Được Thành Ủy / Ban Tổ Chức lựa chọn</li>
                  <li>› Cấp trưởng / phó phòng ban cấp thành phố</li>
                  <li>› Địa bàn: TP.HCM mở rộng (HCM + BD + BRVT)</li>
                  <li>› Nhu cầu: nâng tầm tư duy lãnh đạo, kết nối liên ngành</li>
                </ul>
                <p className="mt-6 text-white/50 text-xs italic">
                  "Tôi giỏi chuyên môn nhưng thiếu kỹ năng dẫn dắt và tạo ảnh hưởng rộng"
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="gradient-border rounded-2xl p-8 h-full bg-white">
                <div className="text-primary font-semibold text-xs uppercase tracking-widest mb-2">20% — Suất HAWEE</div>
                <h3 className="text-2xl font-semibold text-dark mb-4">Nữ Doanh Nhân HAWEE</h3>
                <ul className="space-y-3 text-muted text-sm">
                  <li>› Được HAWEE đề xuất và lựa chọn</li>
                  <li>› Cấp CEO, Founder, Giám đốc điều hành</li>
                  <li>› Hội viên HAWEE (HCM + BD + Vũng Tàu)</li>
                  <li>› Nhu cầu: kết nối Công–Tư, mở rộng mạng lưới ảnh hưởng</li>
                </ul>
                <p className="mt-6 text-muted/60 text-xs italic">
                  "Tôi muốn hiểu hệ thống và xây dựng quan hệ với khu vực công"
                </p>
              </div>
            </FadeUp>
          </div>
          <FadeUp delay={0.4} className="text-center mt-12">
            <Link to="/dang-ky" className="btn-primary inline-flex items-center gap-2">
              Đăng ký 20 suất HAWEE <ArrowRight size={16} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
