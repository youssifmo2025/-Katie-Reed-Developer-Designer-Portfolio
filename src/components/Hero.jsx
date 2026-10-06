export default function Hero() {
  return (
    <section id="hero" style={{ background: '#1a1a1a', minHeight: '85vh' }}>
      <div className="container-fluid p-0">
        <div className="row g-0" style={{ minHeight: '85vh' }}>
          {/* Left: text content */}
          <div className="col-lg-6 d-flex align-items-center justify-content-center" style={{ padding: '60px 80px' }}>
            <div className="text-white">
              <h1 style={{
                fontFamily: 'Georgia, serif',
                fontSize: '3rem',
                fontWeight: 400,
                letterSpacing: '2px',
                marginBottom: '12px',
              }}>
                Katie Reed
              </h1>
              <p style={{ color: '#aaaaaa', fontSize: '1.1rem', letterSpacing: '1px', marginBottom: '32px' }}>
                Web Developer &amp; Designer
              </p>
              <a
                href="#contact"
                className="btn"
                style={{
                  border: '1px solid #ffffff',
                  color: '#ffffff',
                  background: 'transparent',
                  borderRadius: 0,
                  padding: '10px 28px',
                  letterSpacing: '2px',
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#1a1a1a'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#ffffff'; }}
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right: portrait image */}
          <div className="col-lg-6 p-0" style={{ position: 'relative', overflow: 'hidden', minHeight: '400px' }}>
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80&grayscale"
              alt="Katie Reed"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
                filter: 'grayscale(100%) brightness(0.85)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
