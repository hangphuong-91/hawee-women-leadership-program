/**
 * HeroBackground — stacks KV layer PNGs as full-bleed absolute images.
 *
 * All 7 PNGs share the same source dimensions as the original KV.
 * Using identical `object-fit: cover + object-position: 62% center` across
 * all layers keeps them in perfect compositional sync at every viewport size:
 *   - Desktop: shows ~full KV with minimal crop
 *   - Mobile portrait: crops left city, keeps symbol + aura rings centered
 */

// Shared style applied to every image layer
const layerStyle = {
  objectFit: 'cover',
  // 62% keeps the central symbol (at ~63% x of source) visible on mobile portrait
  objectPosition: '62% center',
}

export default function HeroBackground() {
  return (
    <>
      {/* ── 0. Background gradient (CSS — lighter than PNG, scales infinitely) ── */}
      <div
        className="absolute inset-0"
        style={{
          background: [
            // Central warm glow (mimics the horizon light band in 01_background_gradient.png)
            'radial-gradient(ellipse at 50% 90%, rgba(255,218,80,0.40) 0%, transparent 24%)',
            // Slight magenta depth on left
            'radial-gradient(ellipse at 25% 60%, rgba(140,0,50,0.30) 0%, transparent 40%)',
            // Main coral → magenta → crimson sweep
            'radial-gradient(ellipse at 70% 44%, #FF7848 0%, #E84038 15%, #C9187F 45%, #8C0038 72%, #480015 100%)',
          ].join(', '),
        }}
      />

      {/* ── 1. Base ripple + light trail arrows (bottom glow, full-bleed) ── */}
      <img
        src="/images/kv-layers/07_base_ripple_arrows.png"
        alt=""
        draggable="false"
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        style={layerStyle}
      />

      {/* ── 2. Left city skyline (HCMC) ── */}
      <img
        src="/images/kv-layers/02_left_city_skyline.png"
        alt=""
        draggable="false"
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        style={layerStyle}
      />

      {/* ── 3. Bridge (Phú Mỹ) ── */}
      <img
        src="/images/kv-layers/03_bridge.png"
        alt=""
        draggable="false"
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        style={layerStyle}
      />

      {/* ── 4. Right city skyline ── */}
      <img
        src="/images/kv-layers/04_right_city_skyline.png"
        alt=""
        draggable="false"
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        style={layerStyle}
      />

      {/* ── 5. Aura rings + directional arrows ── */}
      <img
        src="/images/kv-layers/06_aura_rings_arrows.png"
        alt=""
        draggable="false"
        fetchpriority="high"
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        style={layerStyle}
      />

      {/* ── 6. Central flame symbol
              mix-blend-mode: multiply removes the white background:
              white × any-color = that color → white becomes transparent.
              The warm flame/gold colors blend beautifully with the gradient. ── */}
      <img
        src="/images/kv-layers/05_central_symbol.png"
        alt=""
        draggable="false"
        fetchpriority="high"
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        style={{ ...layerStyle, mixBlendMode: 'multiply' }}
      />

      {/* ── 7. Bottom vignette — anchors the hero to the content below ── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '28%',
          background: 'linear-gradient(to top, rgba(60,0,18,0.55) 0%, transparent 100%)',
        }}
      />
    </>
  )
}
