import { useEffect, useRef } from 'react'

export default function AuraEmblem({ size = 380 }) {
  const s = size

  const rings = [
    { d: s * 0.94, dur: '28s', op: 0.12, w: '1px' },
    { d: s * 0.74, dur: '20s', op: 0.20, w: '1.5px', rev: true },
    { d: s * 0.55, dur: '14s', op: 0.30, w: '1.5px' },
    { d: s * 0.38, dur: '9s',  op: 0.45, w: '2px',  rev: true },
  ]

  const beams = [0, 30, 60, 90, 120, 150]

  return (
    <div className="relative select-none pointer-events-none" style={{ width: s, height: s }}>

      {/* Outer ambient glow */}
      <div className="absolute inset-0 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,180,140,0.25) 0%, rgba(201,24,127,0.12) 45%, transparent 70%)', filter: 'blur(24px)' }} />

      {/* Rings */}
      {rings.map((r, i) => (
        <div key={i} className="absolute left-1/2 top-1/2 rounded-full"
          style={{
            width: r.d, height: r.d,
            marginLeft: -r.d / 2, marginTop: -r.d / 2,
            border: `${r.w} solid rgba(201,24,127,${r.op})`,
            animation: `orbitSpin ${r.dur} linear infinite${r.rev ? ' reverse' : ''}`,
          }} />
      ))}

      {/* Energy beams */}
      {beams.map((angle, i) => (
        <div key={i} className="absolute left-1/2 top-1/2"
          style={{
            width: s * 0.88, height: 1,
            marginLeft: -(s * 0.88) / 2, marginTop: -0.5,
            transform: `rotate(${angle}deg)`,
            background: `linear-gradient(90deg, transparent 0%, rgba(${i % 2 === 0 ? '201,24,127' : '232,96,42'},${0.10 + (i % 3) * 0.06}) 50%, transparent 100%)`,
          }} />
      ))}

      {/* Rising particles */}
      {[20, 40, 60, 75, 85].map((leftPct, i) => (
        <div key={i} className="absolute bottom-1/4 rounded-full"
          style={{
            left: `${leftPct}%`,
            width: 3, height: 3,
            background: 'rgba(255,140,100,0.6)',
            animation: `riseUp ${2 + i * 0.4}s ease-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }} />
      ))}

      {/* Center soft glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: s * 0.22, height: s * 0.22,
          background: 'radial-gradient(circle, rgba(255,220,180,0.9) 0%, rgba(201,24,127,0.4) 60%, transparent 100%)',
          filter: 'blur(12px)',
        }} />

      {/* Center core */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center"
        style={{
          width: s * 0.16, height: s * 0.16,
          background: 'linear-gradient(135deg, #C9187F 0%, #E04020 50%, #F5882A 100%)',
          boxShadow: '0 0 32px rgba(201,24,127,0.55), 0 0 64px rgba(232,96,42,0.25)',
        }}>
        {/* Abstract upward leadership symbol */}
        <svg viewBox="0 0 32 32" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round"
          style={{ width: s * 0.07, height: s * 0.07 }}>
          <path d="M16 24 L16 10" strokeWidth="2.5" />
          <path d="M10 16 L16 10 L22 16" strokeWidth="2.5" />
          <path d="M9 24 C9 24 12.5 22 16 24 C19.5 22 23 24 23 24" strokeWidth="1.8" strokeOpacity="0.7" />
        </svg>
      </div>

    </div>
  )
}
