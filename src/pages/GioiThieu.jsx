import { Link } from 'react-router-dom'
import { ArrowRight, Target, Users, Globe, TrendingUp } from 'lucide-react'
import FadeUp from '../components/FadeUp'

const whyItems = [
  {
    icon: Globe,
    title: 'TP.HCM Mở Rộng',
    stat: '24% GDP Quốc Gia',
    desc: 'Từ 01/07/2025, TP.HCM sáp nhập Bình Dương và Bà Rịa–Vũng Tàu, tạo thành "Tam giác vàng" kinh tế với 14+ triệu dân. Nhu cầu lãnh đạo có tầm vóc và năng lực tạo ảnh hưởng chưa bao giờ lớn hơn.',
    color: 'text-govt-red',
    bg: 'bg-govt-red/5',
  },
  {
    icon: Target,
    title: 'Chính Sách Bình Đẳng Giới 2030',
    stat: '70% cơ quan có nữ lãnh đạo',
    desc: 'Chiến lược Bình đẳng Giới quốc gia 2021–2030 đặt mục tiêu: 70% cơ quan nhà nước có nữ lãnh đạo, 75% nữ ứng viên lãnh đạo được đào tạo bài bản. Cơ hội chưa từng có cho phụ nữ tài năng.',
    color: 'text-primary',
    bg: 'bg-primary/5',
  },
  {
    icon: Users,
    title: 'Đối Tác Công–Tư Tiên Phong',
    stat: 'HAWEE × UBND TP.HCM',
    desc: 'HAWEE — với 10 năm kinh nghiệm và 500+ hội viên nữ lãnh đạo — là đối tác uy tín nhất của UBND trong đào tạo lãnh đạo nữ. Chương trình này là kết quả của sự tin tưởng và hợp tác chiến lược.',
    color: 'text-navy',
    bg: 'bg-navy/5',
  },
]

const outputs = [
  {
    icon: TrendingUp,
    title: 'Nội Lực Vững Chắc',
    items: ['Tự nhận thức & la bàn lãnh đạo', 'Khả năng phục hồi (resilience)', 'Dẫn dắt bằng thấu cảm'],
  },
  {
    icon: Target,
    title: 'Hiện Diện Có Tác Động',
    items: ['Kỹ năng giao tiếp & storytelling', 'Văn hóa đổi mới sáng tạo', 'Mentoring & Coaching toolkit'],
  },
  {
    icon: Globe,
    title: 'Ảnh Hưởng Lan Tỏa',
    items: ['Stakeholder mapping', 'Kết nối liên ngành Công–Tư', 'Mạng lưới cựu học viên'],
  },
]

export default function GioiThieu() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-rose py-24 relative overflow-hidden">
        <div className="aura-blob bg-white w-96 h-96 top-0 right-0 opacity-5" />
        <div className="container-custom relative text-center">
          <FadeUp>
            <p className="label-tag-gold mb-4">HAWEE × UBND TP.HCM</p>
            <h1 className="section-title text-white text-4xl md:text-5xl mb-6">
              Giới Thiệu Chương Trình
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
              Chương trình đào tạo lãnh đạo nữ cấp cao đầu tiên tại TP.HCM —
              nơi phụ nữ tài năng được đồng hành để trở thành lãnh đạo kiến tạo ảnh hưởng chiến lược.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Đồng tổ chức */}
      <section className="section-govt py-16">
        <div className="container-custom">
          <FadeUp>
            <p className="label-tag-navy text-center mb-3">Đơn vị tổ chức</p>
            <h2 className="section-title text-navy text-center mb-12">Đồng Thực Hiện</h2>
          </FadeUp>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
            <FadeUp delay={0.1} className="text-center">
              <img src="/images/logo-hawee.png" alt="HAWEE" className="h-16 md:h-20 object-contain mx-auto mb-4" />
              <p className="font-semibold text-dark">Hội Doanh Nhân Nữ TP.HCM</p>
              <p className="text-muted text-sm">(HAWEE)</p>
            </FadeUp>
            <div className="w-px h-20 bg-muted/20 hidden md:block" />
            <FadeUp delay={0.2} className="text-center">
              <img src="/images/logo-hcm.png" alt="UBND TP.HCM" className="h-16 md:h-20 object-contain mx-auto mb-4" />
              <p className="font-semibold text-dark">UBND Thành Phố Hồ Chí Minh</p>
              <p className="text-muted text-sm">& Thành Ủy TP.HCM</p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 h-48 md:h-64 overflow-hidden">
        {[
          { src: '/images/hawee-group-workshop.jpg', label: 'Đào tạo lãnh đạo', pos: 'object-top' },
          { src: '/images/hawee-event-stage.jpg', label: 'Sự kiện thường niên', pos: 'object-top' },
          { src: '/images/hawee-group-aodai.jpg', label: 'Cộng đồng nữ lãnh đạo', pos: 'object-top' },
          { src: '/images/hawee-group-pink.jpg', label: 'Hoạt động xã hội', pos: 'object-center' },
        ].map(({ src, label, pos }, i) => (
          <div key={i} className="relative overflow-hidden group">
            <img src={src} alt={label} className={`w-full h-full object-cover ${pos} group-hover:scale-105 transition-transform duration-700`} />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
            <p className="absolute bottom-3 left-3 text-white text-xs font-semibold">{label}</p>
          </div>
        ))}
      </div>

      {/* Vì sao tổ chức */}
      <section className="section-warm py-20 relative overflow-hidden">
        <div className="aura-blob bg-gold w-80 h-80 top-0 left-0 opacity-10" />
        <div className="container-custom relative">
          <FadeUp>
            <p className="label-tag text-center mb-3">Tại sao ngay bây giờ?</p>
            <h2 className="section-title text-dark text-center heading-accent mx-auto text-center mb-14">
              3 Lý Do Không Thể Chờ Đợi
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyItems.map(({ icon: Icon, title, stat, desc, color, bg }, i) => (
              <FadeUp key={i} delay={i * 0.15}>
                <div className={`rounded-2xl p-7 ${bg} border border-current/10 h-full`}>
                  <div className={`${color} mb-4`}>
                    <Icon size={28} />
                  </div>
                  <p className={`font-semibold text-xs uppercase tracking-widest ${color} mb-2`}>{stat}</p>
                  <h3 className="text-lg font-semibold text-dark mb-3">{title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Promise */}
      <section className="section-rose py-20 relative overflow-hidden">
        <div className="aura-blob bg-white w-72 h-72 right-0 bottom-0 opacity-5" />
        <div className="container-custom relative text-center max-w-3xl mx-auto">
          <FadeUp>
            <p className="label-tag-gold mb-6">Cam kết chương trình</p>
            <blockquote className="text-white text-2xl md:text-3xl font-semibold leading-relaxed mb-8">
              "Từ người quản lý xuất sắc đến lãnh đạo kiến tạo{' '}
              <span className="gradient-text-gold">ảnh hưởng chiến lược sâu sắc</span>"
            </blockquote>
            <p className="text-white/60 text-sm tracking-widest uppercase">
              Rise in Full · Giàu Toàn Diện · Lãnh đạo không cần quyền lực — Lãnh đạo bằng ảnh hưởng
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Output mong đợi */}
      <section className="section-govt py-20">
        <div className="container-custom">
          <FadeUp>
            <p className="label-tag-navy text-center mb-3">Sau 12 tháng</p>
            <h2 className="section-title text-navy text-center heading-accent mx-auto text-center mb-14">
              Output Mong Đợi
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {outputs.map(({ icon: Icon, title, items }, i) => (
              <FadeUp key={i} delay={i * 0.15}>
                <div className="bg-white rounded-2xl p-7 shadow-sm border border-muted/10 h-full card-hover">
                  <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-navy" />
                  </div>
                  <h3 className="text-lg font-semibold text-dark mb-4">{title}</h3>
                  <ul className="space-y-2.5">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-muted">
                        <span className="text-gold font-bold mt-0.5">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.4} className="text-center mt-12">
            <Link to="/dang-ky" className="btn-primary inline-flex items-center gap-2">
              Trở thành học viên <ArrowRight size={16} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
