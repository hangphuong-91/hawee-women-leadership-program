import { useState, useEffect } from 'react'
import { Calendar, Tag, ArrowRight, Quote } from 'lucide-react'
import FadeUp from '../components/FadeUp'
import { getStories } from '../services/notion'

const TAGS = ['Tất cả', 'Nhà nước', 'Doanh nhân', 'Alumni']

const FALLBACK_STORIES = [
  {
    id: '1',
    title: 'Từ Trưởng Phòng Đến Lãnh Đạo Chiến Lược — Hành Trình 12 Tháng',
    excerpt: 'Trước khi tham gia chương trình, tôi chỉ biết quản lý theo quy trình. Sau 6 buổi học, tôi hiểu mình cần dẫn dắt bằng ảnh hưởng, không phải bằng quyền lực.',
    author: 'Nguyễn T.H. — Trưởng phòng Sở KHCN TP.HCM',
    date: '01/05/2026',
    tag: 'Nhà nước',
    img: '/images/hawee-group-formal.jpg',
  },
  {
    id: '2',
    title: 'Kết Nối Công–Tư: Cơ Hội Tôi Chưa Bao Giờ Nghĩ Đến',
    excerpt: 'Là CEO, tôi quen làm việc trong khu vực tư. Chương trình mở ra cho tôi mạng lưới với các lãnh đạo nhà nước — những cuộc trò chuyện thay đổi cách tôi nhìn thị trường.',
    author: 'Trần P.N. — CEO, Công ty XYZ',
    date: '15/04/2026',
    tag: 'Doanh nhân',
    img: '/images/hawee-group-workshop.jpg',
  },
  {
    id: '3',
    title: 'Buổi 4 Thay Đổi Cách Tôi Thuyết Trình Trước Hội Đồng',
    excerpt: 'Tôi từng sợ thuyết trình trước cấp trên. Sau buổi học về Executive Presence, tôi có công cụ, tôi có cấu trúc, và tôi có sự tự tin để nói điều mình tin.',
    author: 'Lê M.T. — Phó Trưởng ban, Ban QLDA',
    date: '01/03/2026',
    tag: 'Alumni',
    img: '/images/hawee-group-aodai.jpg',
  },
]

function StoryCard({ story }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-muted/10 card-hover h-full flex flex-col group">
      <div className="relative overflow-hidden h-52">
        {story.img ? (
          <img
            src={story.img}
            alt={story.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, rgba(201,24,127,0.12), rgba(201,168,76,0.08))' }}
          >
            <Quote size={40} className="text-primary/20" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-3 text-xs font-semibold uppercase tracking-widest bg-primary text-white px-2.5 py-1 rounded-full flex items-center gap-1">
          <Tag size={10} /> {story.tag}
        </span>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        {story.date && (
          <span className="text-xs text-muted flex items-center gap-1 mb-3">
            <Calendar size={10} /> {story.date}
          </span>
        )}
        <h3 className="text-base font-semibold text-dark mb-3 leading-snug flex-1">{story.title}</h3>
        <p className="text-muted text-sm leading-relaxed">{story.excerpt}</p>
        {story.author && (
          <p className="text-xs text-muted/60 mt-4 pt-4 border-t border-muted/10 italic">— {story.author}</p>
        )}
      </div>
    </div>
  )
}

const highlights = [
  { quote: 'Tôi học được cách lãnh đạo bằng ảnh hưởng, không chỉ bằng chức danh.', name: 'Nguyễn H.A.', role: 'Giám đốc Sở, TP.HCM' },
  { quote: 'Mạng lưới kết nối từ chương trình đã mở ra hợp tác Công–Tư mà tôi không ngờ.', name: 'Trần P.L.', role: 'CEO, Doanh nghiệp hội viên HAWEE' },
  { quote: 'Sau 12 tháng, tôi không chỉ giỏi hơn — tôi tự tin hơn vào vai trò của mình.', name: 'Lê M.T.', role: 'Trưởng Ban, UBND Quận' },
]

export default function CauChuyen() {
  const [stories, setStories] = useState(FALLBACK_STORIES)
  const [activeTag, setActiveTag] = useState('Tất cả')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getStories().then(data => {
      if (data.length > 0) setStories(data)
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [])

  const filtered = activeTag === 'Tất cả'
    ? stories
    : stories.filter(s => s.tag === activeTag)

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-rose py-24 relative overflow-hidden">
        <div className="aura-blob bg-white w-80 h-80 top-0 right-0 opacity-5" />
        <div className="container-custom relative text-center">
          <FadeUp>
            <p className="label-tag-gold mb-4">Từ học viên</p>
            <h1 className="section-title text-white text-4xl md:text-5xl mb-6">
              Câu Chuyện Tác Động
            </h1>
            <p className="text-white/80 max-w-xl mx-auto">
              Những thay đổi thực sự diễn ra trong phòng họp, trong quyết định,
              và trong cách họ nhìn nhận vai trò của mình.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Highlight quotes */}
      <section className="section-govt py-14">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <FadeUp key={i} delay={i * 0.12}>
                <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-muted/10">
                  <Quote size={28} className="text-primary/20 mb-3" />
                  <p className="text-dark font-medium text-sm leading-relaxed mb-4 italic">"{h.quote}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-muted/10">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #C9187F, #E04020)' }}
                    >
                      {h.name[0]}
                    </div>
                    <div>
                      <p className="text-dark font-semibold text-xs">{h.name}</p>
                      <p className="text-muted text-xs">{h.role}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + Stories */}
      <section className="section-warm py-16">
        <div className="container-custom">
          <FadeUp>
            <p className="label-tag text-center mb-3">Học viên chia sẻ</p>
            <h2 className="section-title text-center text-dark heading-accent mx-auto mb-10">
              Câu Chuyện Nổi Bật
            </h2>
          </FadeUp>

          {/* Tag filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {TAGS.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeTag === tag
                    ? 'text-white shadow-md'
                    : 'bg-white text-muted hover:text-dark border border-muted/20'
                }`}
                style={activeTag === tag ? { background: 'linear-gradient(135deg, #C9187F, #E04020)' } : {}}
              >
                {tag}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="text-center py-20 text-muted">Đang tải câu chuyện...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((story, i) => (
                <FadeUp key={story.id} delay={i * 0.1}>
                  <StoryCard story={story} />
                </FadeUp>
              ))}
              {filtered.length === 0 && (
                <div className="col-span-3 text-center py-20 text-muted">
                  Chưa có câu chuyện trong nhóm này.
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Photo + CTA */}
      <div className="relative overflow-hidden">
        <img
          src="/images/hawee-event-stage.jpg"
          alt="HAWEE sự kiện"
          className="w-full h-64 md:h-80 object-cover object-top"
        />
        <div className="absolute inset-0 flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, rgba(201,24,127,0.88), rgba(190,30,45,0.88))' }}>
          <FadeUp className="text-center px-4">
            <h2 className="section-title text-white mb-4">Câu Chuyện Tiếp Theo Là Của Bạn</h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Tham gia chương trình và trở thành một phần của cộng đồng lãnh đạo nữ TP.HCM.
            </p>
            <a
              href="/dang-ky"
              className="bg-white text-primary font-semibold px-8 py-3 rounded-full inline-flex items-center gap-2 hover:bg-white/90 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Đăng ký tham gia <ArrowRight size={16} />
            </a>
          </FadeUp>
        </div>
      </div>
    </div>
  )
}
