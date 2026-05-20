import { useState, useRef, useEffect } from 'react'
import { Send, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { faqData, searchFAQ } from '../data/faqData'

/* Custom Chatbot Icon */
function ChatbotIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Chat bubble */}
      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l6.18-.97C10.04 21.59 11 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" fill="white" fillOpacity="0.9" />
      {/* Lotus center */}
      <circle cx="12" cy="12" r="2.5" fill="#CB5184" />
      {/* Petal-like dots */}
      <circle cx="12" cy="8" r="1.2" fill="#CB5184" />
      <circle cx="16" cy="12" r="1.2" fill="#CB5184" />
      <circle cx="12" cy="16" r="1.2" fill="#CB5184" />
      <circle cx="8" cy="12" r="1.2" fill="#CB5184" />
    </svg>
  )
}

export default function FAQChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [messages, setMessages] = useState([])
  const [filteredFAQs, setFilteredFAQs] = useState(faqData)
  const [showTooltip, setShowTooltip] = useState(false)
  const messagesEndRef = useRef(null)

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Initialize with greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          type: 'bot',
          text: 'Xin chào, em là trợ lý ảo HAWEE. Em có thể giúp gì cho Anh/Chị?',
          timestamp: new Date(),
        },
        {
          type: 'bot',
          text: 'Anh/Chị có thể hỏi em về: giá học phí, thời gian, địa điểm, nội dung chương trình, giảng viên, v.v.',
          timestamp: new Date(),
        },
      ])
    }
  }, [isOpen])

  const handleSearch = (input) => {
    setSearchInput(input)

    if (!input.trim()) {
      setFilteredFAQs(faqData)
      return
    }

    const results = searchFAQ(input)
    setFilteredFAQs(results)

    // Add user message
    setMessages(prev => [...prev, {
      type: 'user',
      text: input,
      timestamp: new Date(),
    }])

    // Simulate bot thinking
    setTimeout(() => {
      if (results.length === 0) {
        setMessages(prev => [...prev, {
          type: 'bot',
          text: `Em chưa tìm thấy câu trả lời cho "${input}". Thử từ khóa khác như: giá, thời gian, địa điểm, kết quả, giảng viên, hoặc đối tượng tham gia.`,
          timestamp: new Date(),
        }])
      } else {
        setMessages(prev => [...prev, {
          type: 'bot',
          text: results.length === 1
            ? `Tìm thấy 1 câu hỏi liên quan:`
            : `Tìm thấy ${results.length} câu hỏi liên quan:`,
          faqs: results,
          timestamp: new Date(),
        }])
      }
    }, 500)

    setSearchInput('')
  }

  const handleSelectFAQ = (faq) => {
    setMessages(prev => [...prev, {
      type: 'bot',
      text: faq.question,
      isFAQQuestion: true,
      timestamp: new Date(),
    }, {
      type: 'bot',
      text: faq.answer,
      timestamp: new Date(),
    }])
  }

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40 md:bottom-8 md:right-8 flex flex-col items-end gap-3">
          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: showTooltip ? 1 : 0, y: showTooltip ? 0 : 10 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-4 max-w-xs text-sm text-[#1A0F1E] leading-relaxed border border-[#F5D5E5]"
            style={{ pointerEvents: showTooltip ? 'auto' : 'none' }}
          >
            <p className="font-semibold mb-1">Xin chào 👋</p>
            <p>Em là trợ lý ảo HAWEE. Em có thể giúp gì cho Anh/Chị?</p>
          </motion.div>

          {/* Button */}
          <motion.button
            onClick={() => setIsOpen(true)}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer group relative"
            style={{
              background: 'linear-gradient(135deg, #CB5184, #DC76B0)',
              boxShadow: '0 0 0 3px rgba(203,81,132,0.15), 0 8px 32px rgba(153,27,85,0.40)',
            }}
          >
            {/* Animated pulse ring */}
            <div className="absolute inset-0 rounded-full"
              style={{
                border: '2px solid rgba(255,255,255,0.4)',
                animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
              }} />

            {/* Icon */}
            <ChatbotIcon />

            {/* Hover glow */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg"
              style={{ background: '#CB5184' }} />
          </motion.button>
        </div>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-24px)] rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col md:bottom-8 md:right-8"
          style={{ height: '600px', background: '#FCEDF4' }}
        >

          {/* Header */}
          <div className="p-4 flex items-center justify-between"
            style={{ background: 'linear-gradient(135deg, #CB5184, #DC76B0)' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.2)' }}>
                <ChatbotIcon />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Trợ Lý Ảo HAWEE</p>
                <p className="text-white/70 text-xs">Sẵn sàng giúp đỡ</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-xs px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.type === 'user'
                    ? 'bg-[#CB5184] text-white rounded-br-none'
                    : 'bg-white text-[#1A0F1E] rounded-bl-none border border-[#F5D5E5]'
                }`}>
                  <p>{msg.text}</p>

                  {/* FAQ Results as Buttons */}
                  {msg.faqs && (
                    <div className="mt-3 space-y-2">
                      {msg.faqs.map(faq => (
                        <motion.button
                          key={faq.id}
                          onClick={() => handleSelectFAQ(faq)}
                          whileHover={{ x: 4 }}
                          className="block w-full text-left text-xs p-2.5 rounded-lg bg-[#F5D5E5] hover:bg-[#E8C6DB] transition-colors text-[#1A0F1E] font-medium"
                        >
                          {faq.question}
                        </motion.button>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Search Input */}
          <div className="p-3 border-t border-[#F5D5E5] flex gap-2 bg-white/50">
            <input
              type="text"
              placeholder="Hỏi em gì đi..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchInput)}
              className="flex-1 px-4 py-2 rounded-full text-sm border border-[#E8C6DB] outline-none focus:border-[#CB5184] focus:ring-2 focus:ring-[#CB5184]/20 transition-all"
            />
            <motion.button
              onClick={() => handleSearch(searchInput)}
              disabled={!searchInput.trim()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md"
              style={{ background: 'linear-gradient(135deg, #CB5184, #DC76B0)' }}
            >
              <Send size={16} color="white" strokeWidth={2} />
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Inline styles for ping animation */}
      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}
