// Exact portfolio cards as shown in the PDF mockup
const projects = [
  { title: 'WEB DESIGN',                   bg: '#968f85' },
  { title: 'MOBILE DESIGN',                bg: '#3a3a3a' },
  { title: 'LOGO DESIGN',                  bg: '#968f85' },
  { title: 'WEB APPLICATION DEVELOPMENT',  bg: '#3a3a3a' },
  { title: 'MOBILE APPLICATION DEVELOPMENT', bg: '#968f85' },
  { title: 'PWA DEVELOPMENT',              bg: '#3a3a3a' },
]

function ProjectCard({ title, bg }) {
  return (
    <div className="col-md-4">
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{
          background: bg,
          height: '140px',
          cursor: 'pointer',
          transition: 'opacity 0.3s',
          padding: '20px',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
      >
        <p style={{
          color: '#ffffff',
          textAlign: 'center',
          letterSpacing: '2px',
          fontSize: '0.78rem',
          textTransform: 'uppercase',
          fontWeight: 500,
          marginBottom: '8px',
        }}>
          {title}
        </p>
        <div style={{ width: '40px', height: '1px', background: '#ffffff', opacity: 0.6 }} />
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ background: '#ffffff', padding: '70px 0' }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: '2.2rem',
            fontWeight: 400,
            color: '#222222',
          }}>
            Portfolio
          </h2>
          <hr style={{ width: '60px', margin: '16px auto', borderColor: '#555555', borderWidth: '2px', opacity: 1 }} />
        </div>

        {/* 3×2 Grid */}
        <div className="row g-3">
          {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
        </div>
      </div>
    </section>
  )
}
