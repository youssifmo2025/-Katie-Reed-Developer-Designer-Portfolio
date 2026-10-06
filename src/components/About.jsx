export default function About() {
  return (
    <section id="about" style={{ background: '#f8f9fa', padding: '80px 0' }}>
      <div className="container">
        <div className="row g-5 align-items-start">
          {/* Left: Title */}
          <div className="col-lg-4">
            <h2 style={{
              fontFamily: 'Georgia, serif',
              fontSize: '2.8rem',
              fontWeight: 400,
              color: '#222222',
              lineHeight: 1.2,
            }}>
              About me
            </h2>
          </div>

          {/* Right: bio + button */}
          <div className="col-lg-8">
            <p style={{ color: '#555555', lineHeight: 1.9, marginBottom: '16px', fontSize: '0.95rem' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p style={{ color: '#555555', lineHeight: 1.9, marginBottom: '32px', fontSize: '0.95rem' }}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a
              href="/resume.pdf"
              download
              className="btn"
              style={{
                background: '#333333',
                color: '#ffffff',
                border: 'none',
                borderRadius: 0,
                padding: '12px 30px',
                letterSpacing: '1px',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                transition: 'background 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#000000'}
              onMouseLeave={e => e.currentTarget.style.background = '#333333'}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
