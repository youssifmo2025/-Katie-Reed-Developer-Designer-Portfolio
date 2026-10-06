export default function Footer() {
  return (
    <footer id="contact" style={{ background: '#111111' }}>
      {/* Main contact bar */}
      <div className="container py-5">
        <div className="row align-items-center g-4">

          {/* Left: GET IN TOUCH */}
          <div className="col-lg-5">
            <h5 style={{
              color: '#ffffff',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontSize: '0.9rem',
              marginBottom: '20px',
            }}>
              Get In Touch
            </h5>
            <p className="mb-2" style={{ color: '#aaaaaa', fontSize: '0.9rem' }}>
              <i className="fa-solid fa-envelope me-2" style={{ color: '#888888' }}></i>
              kr12@hotmail.com
            </p>
            <p className="mb-0" style={{ color: '#aaaaaa', fontSize: '0.9rem' }}>
              <i className="fa-solid fa-phone me-2" style={{ color: '#888888' }}></i>
              717-555-1234
            </p>
          </div>

          {/* Center: CONTACT ME button */}
          <div className="col-lg-3 text-center">
            <a
              href="mailto:kr12@hotmail.com"
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
              onMouseEnter={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#111111'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#ffffff'; }}
            >
              Contact Me
            </a>
          </div>

          {/* Right: Social icons + copyright */}
          <div className="col-lg-4 text-lg-end">
            {/* Social icons */}
            <div className="d-flex gap-3 justify-content-lg-end mb-3">
              {[
                { icon: 'fa-brands fa-linkedin-in', href: '#', label: 'LinkedIn' },
                { icon: 'fa-brands fa-facebook-f', href: '#', label: 'Facebook' },
                { icon: 'fa-brands fa-twitter', href: '#', label: 'Twitter' },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  title={label}
                  style={{
                    color: '#aaaaaa',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={e => e.currentTarget.style.color = '#aaaaaa'}
                >
                  <i className={icon}></i>
                </a>
              ))}
            </div>
            <p style={{ color: '#555555', fontSize: '0.8rem', marginBottom: 0 }}>
              Copyright &copy; 2019 KR
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
