import React, { useState } from 'react'
import { X } from 'lucide-react'

const sessionData = {
  1: {
    title: 'Lãnh Đạo Bản Thân',
    subtitle: 'Xác định la bàn lãnh đạo, nền tảng hiểu bản thân, phát huy năng lượng và nội lực người lãnh đạo. Mọi ảnh hưởng bên ngoài đều bắt đầu từ sức mạnh khai phóng bên trong.',
    objectives: [
      'Thiết lập nền tảng tinh thần và tiêu chuẩn cho toàn bộ hành trình 12 tháng',
      'Giúp học viên nhìn lại bản thân ở góc độ người lãnh đạo',
      'Nhận diện những hành động vô thức trong cách lãnh đạo của bản thân',
      'Tạo sự kết nối cảm xúc sâu sắc để học viên cam kết với hành trình',
      'Khoảnh khắc xác lập lại định hướng lãnh đạo từ nội tâm',
    ],
    timeline: {
      morning: [
        { time: '08:30', activity: 'Đón khách & Kết nối' },
        { time: '08:45', activity: 'Hoạt động phá băng' },
        { time: '09:00', activity: 'Chia sẻ truyền cảm hứng' },
        { time: '09:10', activity: 'Thông điệp lãnh đạo – TP.HCM' },
        { time: '09:30', activity: 'Lộ trình chương trình' },
        { time: '09:50', activity: 'Nghỉ giải lao' },
        { time: '10:00', activity: 'Tìm lại chính mình' },
        { time: '11:45', activity: 'Thư gửi Bản thân và chia sẻ' },
        { time: '12:00', activity: 'Ăn trưa' },
      ],
      afternoon: [
        { time: '13:15', activity: 'Hoạt động phá băng' },
        { time: '13:30', activity: 'Tái tạo năng lượng' },
        { time: '13:45', activity: 'Hội thảo: Từ Ứng phó sang Chuyển hóa' },
        { time: '15:30', activity: 'Nghỉ giải lao' },
        { time: '15:45', activity: 'Khoảnh khắc tạo nên tôi' },
        { time: '16:30', activity: 'Suy ngẫm sâu sắc – Tôi với vai trò Lãnh đạo' },
        { time: '16:50', activity: 'Bế mạc & Cam kết' },
      ],
    },
  },
}

export default function SessionDetailModal({ sessionNum, isOpen, onClose }) {
  const data = sessionData[sessionNum] || {}

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#6A2F62] to-[#CB5184] text-white p-8 flex items-start justify-between z-10">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-3">{data.title}</h2>
            <p className="text-white/95 text-base leading-relaxed italic">{data.subtitle}</p>
          </div>
          <button onClick={onClose} className="flex-shrink-0 p-1 hover:bg-white/20 rounded-lg transition">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Objectives */}
          <section>
            <h3 className="text-2xl font-bold text-[#1A0F1E] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-[#CB5184] text-white flex items-center justify-center text-base font-bold">✓</span>
              Mục Tiêu Buổi Học
            </h3>
            <div className="space-y-3 pl-12">
              {data.objectives?.map((obj, i) => (
                <p key={i} className="text-[#5C3545] text-base leading-relaxed flex items-start gap-3">
                  <span className="text-[#CB5184] font-bold text-xl mt-0.5">•</span>
                  <span>{obj}</span>
                </p>
              ))}
            </div>
          </section>

          {/* Morning Timeline */}
          <section>
            <h3 className="text-xl font-bold text-[#1A0F1E] mb-5">Chương Trình Buổi Sáng (08:30 – 12:00)</h3>
            <div className="space-y-0 border-l-2 border-[#CB5184] pl-0">
              {data.timeline?.morning?.map((item, i) => (
                <div key={i} className="relative pl-6 py-4 border-b border-gray-200 last:border-b-0">
                  <div className="absolute -left-4 top-6 w-6 h-6 rounded-full bg-[#CB5184] border-4 border-white" />
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-bold text-[#1A0F1E] text-base">{item.activity}</p>
                    <span className="text-[#CB5184] font-bold text-base whitespace-nowrap flex-shrink-0">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Afternoon Timeline */}
          <section>
            <h3 className="text-xl font-bold text-[#1A0F1E] mb-5">Chương Trình Buổi Chiều (13:15 – 16:50)</h3>
            <div className="space-y-0 border-l-2 border-[#E04020] pl-0">
              {data.timeline?.afternoon?.map((item, i) => (
                <div key={i} className="relative pl-6 py-4 border-b border-gray-200 last:border-b-0">
                  <div className="absolute -left-4 top-6 w-6 h-6 rounded-full bg-[#E04020] border-4 border-white" />
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-bold text-[#1A0F1E] text-base">{item.activity}</p>
                    <span className="text-[#E04020] font-bold text-base whitespace-nowrap flex-shrink-0">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer CTA */}
          <div className="bg-[#FFF5F9] border-l-4 border-[#CB5184] p-6 rounded-lg mt-8">
            <p className="text-[#5C3545] text-base font-medium leading-relaxed">
              📌 Buổi học được thiết kế để tạo <span className="text-[#CB5184] font-bold">khoảnh khắc chuyển hóa</span> — từ nhận thức đến hành động, từ cá nhân đến tác động.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
