import { useState, useRef, useEffect } from 'react'
import { Search, Send, X } from 'lucide-react'
import { faqData, searchFAQ } from '../data/faqData'

export default function FAQChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [messages, setMessages] = useState([])
  const [filteredFAQs, setFilteredFAQs] = useState(faqData)
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
          text: 'Xin chào! 👋 Bạn muốn biết gì về Chương Trình Đào Tạo Lãnh Đạo Nữ HAWEE?',
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
          text: `Mình chưa tìm thấy câu trả lời cho "${input}". Thử từ khóa khác như: giá, thời gian, địa điểm, kết quả, giảng viên, hoặc đối tượng tham gia.`,
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
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-40 hover:-translate-y-1 md:bottom-8 md:right-8"
          style={{
            background: 'linear-gradient(135deg, #CB5184, #DC76B0)',
            boxShadow: '0 0 0 2px white, 0 8px 32px rgba(153,27,85,0.60)',
          }}
        >
          <Search size={20} color="white" strokeWidth={2} />
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-24px)] rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col md:bottom-8 md:right-8"
          style={{ height: '600px', background: '#FCEDF4' }}>

          {/* Header */}
          <div className="p-4 flex items-center justify-between"
            style={{ background: 'linear-gradient(135deg, #CB5184, #DC76B0)' }}>
            <div className="flex items-center gap-2">
              <Search size={18} color="white" />
              <span className="text-white font-semibold text-sm">FAQ Chương Trình</span>
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
              <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-4 py-2 rounded-2xl text-sm leading-relaxed ${
                  msg.type === 'user'
                    ? 'bg-[#CB5184] text-white rounded-br-none'
                    : 'bg-white text-[#1A0F1E] rounded-bl-none border border-[#F5D5E5]'
                }`}>
                  <p>{msg.text}</p>

                  {/* FAQ Results as Buttons */}
                  {msg.faqs && (
                    <div className="mt-3 space-y-2">
                      {msg.faqs.map(faq => (
                        <button
                          key={faq.id}
                          onClick={() => handleSelectFAQ(faq)}
                          className="block w-full text-left text-xs p-2 rounded bg-[#F5D5E5] hover:bg-[#E8C6DB] transition-colors text-[#1A0F1E]"
                        >
                          {faq.question}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Search Input */}
          <div className="p-3 border-t border-[#F5D5E5] flex gap-2">
            <input
              type="text"
              placeholder="Hỏi về giá, thời gian, nội dung..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchInput)}
              className="flex-1 px-4 py-2 rounded-full text-sm border border-[#E8C6DB] outline-none focus:border-[#CB5184] focus:ring-1 focus:ring-[#CB5184]"
            />
            <button
              onClick={() => handleSearch(searchInput)}
              disabled={!searchInput.trim()}
              className="p-2 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md"
              style={{ background: 'linear-gradient(135deg, #CB5184, #DC76B0)' }}
            >
              <Send size={16} color="white" strokeWidth={2} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
