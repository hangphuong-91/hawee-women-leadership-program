import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

const IconZalo = () => (
  <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
    <rect width="32" height="32" rx="8" fill="#0068FF"/>
    <text x="7" y="22" fontFamily="Arial" fontWeight="bold" fontSize="16" fill="white">Z</text>
  </svg>
)

const IconFacebook = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

export default function FloatingCTA() {
  const buttons = [
    {
      id: 'zalo',
      Icon: IconZalo,
      href: 'https://zalo.me/1119532139947409891',
      bgColor: '#0068FF',
      logoUrl: '/images/logo-zalo.png'
    },
    {
      id: 'facebook',
      Icon: IconFacebook,
      href: 'https://www.facebook.com/share/176wH8Jkd8/?mibextid=wwXIfr',
      bgColor: '#1877F2'
    },
    { 
      id: 'phone', 
      Icon: Phone, 
      href: 'tel:0919479955',
      bgColor: '#C9187F'
    },
  ]

  return (
    <div className="fixed right-5 bottom-8 z-40 flex flex-col gap-3 sm:right-8 sm:gap-4">
      {buttons.map((btn, idx) => (
        <motion.a
          key={btn.id}
          href={btn.href}
          target={btn.id !== 'phone' ? '_blank' : undefined}
          rel={btn.id !== 'phone' ? 'noopener noreferrer' : undefined}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.92 }}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-all hover:shadow-xl"
          style={{ background: btn.bgColor }}
        >
          {btn.logoUrl ? (
            <img src={btn.logoUrl} alt={btn.id} className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
          ) : (
            btn.Icon && <btn.Icon size={22} className="sm:w-6 sm:h-6" />
          )}
        </motion.a>
      ))}
    </div>
  )
}
