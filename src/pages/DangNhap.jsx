import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import FadeUp from '../components/FadeUp'

export default function DangNhap() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { signIn, user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) navigate('/kho-tai-lieu')
  }, [user, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const { error: authError } = await signIn(email, password)
    if (authError) {
      setError('Email hoặc mật khẩu không đúng. Vui lòng thử lại.')
    } else {
      navigate('/kho-tai-lieu')
    }
    setLoading(false)
  }

  return (
    <div className="pt-16 min-h-screen section-warm flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        <FadeUp>
          <div className="text-center mb-10">
            <img src="/images/logo-hawee.png" alt="HAWEE" className="h-12 object-contain mx-auto mb-5" />
            <h1 className="text-2xl font-semibold text-dark mb-2">Đăng Nhập Kho Tài Liệu</h1>
            <p className="text-muted text-sm">Dành riêng cho học viên HAWEE Leadership Program</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-muted/10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-dark mb-1.5">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="w-full border border-muted/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark mb-1.5">Mật khẩu</label>
                <div className="relative">
                  <input
                    type={showPw ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    className="w-full border border-muted/30 rounded-xl px-4 py-3 pr-12 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw(!showPw)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-dark"
                    aria-label="Toggle password"
                  >
                    {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {error && (
                <p className="text-govt-red text-sm p-3 bg-govt-red/5 rounded-xl">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-navy w-full py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
              </button>
            </form>

            <div className="mt-6 pt-5 border-t border-muted/10 text-center">
              <p className="text-xs text-muted leading-relaxed">
                Tài khoản được cấp bởi ban tổ chức sau khi đăng ký thành công.
                Cần hỗ trợ?{' '}
                <a href="mailto:hawee.hochiminh@gmail.com" className="text-primary font-semibold hover:underline">
                  hawee.hochiminh@gmail.com
                </a>
              </p>
            </div>
          </div>

          <p className="text-center text-muted text-sm mt-6">
            Chưa đăng ký?{' '}
            <a href="/dang-ky" className="text-primary font-semibold hover:underline">Đăng ký ngay</a>
          </p>
        </FadeUp>
      </div>
    </div>
  )
}
