export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: '#1a1a1a' }}>
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#hero" style={{ fontFamily: 'Georgia, serif', letterSpacing: '2px' }}>
          KR
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            {['About', 'Skills', 'Portfolio', 'Contact'].map(link => (
              <li key={link} className="nav-item">
                <a className="nav-link px-3 text-white-50" href={`#${link.toLowerCase()}`}
                  style={{ fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
