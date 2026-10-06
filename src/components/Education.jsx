const educationData = [
  {
    year: '2020 – 2024',
    degree: "Bachelor's in Computer Science",
    institution: 'Cairo University',
    description: 'Graduated with honors. Specialized in software engineering and web technologies.',
  },
  {
    year: '2019 – 2020',
    degree: 'UI/UX Design Diploma',
    institution: 'ITI – Information Technology Institute',
    description: 'Intensive program covering user research, prototyping, Figma, and design systems.',
  },
  {
    year: '2018 – 2019',
    degree: 'Web Development Bootcamp',
    institution: 'Online Courses',
    description: 'Covered HTML, CSS, JavaScript, React, and Node.js fundamentals.',
  },
]

function EducationCard({ year, degree, institution, description }) {
  return (
    <div className="col-md-4">
      <div
        className="h-100 p-4"
        style={{
          background: '#f0f0f0',
          borderTop: '3px solid #555555',
          transition: 'background 0.3s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = '#e8e8e8'}
        onMouseLeave={e => e.currentTarget.style.background = '#f0f0f0'}
      >
        <span style={{ fontSize: '0.8rem', color: '#888888', letterSpacing: '1px' }}>{year}</span>
        <h5 style={{ fontFamily: 'Georgia, serif', color: '#222222', marginTop: '8px', marginBottom: '6px', fontSize: '1rem' }}>
          {degree}
        </h5>
        <p style={{ color: '#555555', fontSize: '0.85rem', fontWeight: 600, marginBottom: '10px' }}>{institution}</p>
        <p style={{ color: '#777777', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: 0 }}>{description}</p>
      </div>
    </div>
  )
}

export default function Education() {
  return (
    <section id="education" style={{ background: '#ffffff', padding: '70px 0' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: '2.2rem',
            fontWeight: 400,
            color: '#222222',
          }}>
            Education
          </h2>
          <hr style={{ width: '60px', margin: '16px auto', borderColor: '#555555', borderWidth: '2px', opacity: 1 }} />
        </div>
        <div className="row g-4">
          {educationData.map((item, i) => (
            <EducationCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
