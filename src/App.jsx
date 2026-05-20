import { Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import KhoTaiLieu from './pages/KhoTaiLieu'
import DangKy from './pages/DangKy'
import DangNhap from './pages/DangNhap'
import NopCauChuyen from './pages/NopCauChuyen'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dang-ky" element={<DangKy />} />
          <Route path="/nop-cau-chuyen" element={<NopCauChuyen />} />
          <Route path="/kho-tai-lieu" element={<KhoTaiLieu />} />
          <Route path="/dang-nhap" element={<DangNhap />} />
          {/* Legacy redirects — old pages now live on landing */}
          <Route path="/gioi-thieu" element={<Landing />} />
          <Route path="/lo-trinh" element={<Landing />} />
          <Route path="/cau-chuyen" element={<Landing />} />
        </Routes>
      </main>
      <Footer />
      <Analytics />
    </div>
  )
}
