export default function LotusHero() {
  return (
    <div className="relative flex items-center justify-center" style={{ width: 280, height: 280 }}>
      {/* Outer orbit ring — slow spin */}
      <div className="orbit-ring" style={{ width: 260, height: 260, borderWidth: 1 }} />

      {/* Middle ring — reverse, dashed */}
      <div className="orbit-ring-2" style={{ width: 190, height: 190, borderWidth: 1 }} />

      {/* Inner ring — slightly faster */}
      <div
        className="orbit-ring"
        style={{
          width: 120,
          height: 120,
          borderWidth: 1,
          borderColor: 'rgba(201,24,127,0.3)',
          animationDuration: '15s',
        }}
      />

      {/* Center logo symbol */}
      <div
        className="lotus-center"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: 52,
          height: 52,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
        }}
      >
        <img
          src="/images/logo-hawee.png"
          alt="HAWEE"
          style={{ width: 36, height: 36, objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
        />
      </div>
    </div>
  )
}
