const skills = [
  { name: 'HTML', percent: 95 },
  { name: 'CSS', percent: 90 },
  { name: 'JavaScript', percent: 80 },
  { name: 'React', percent: 80 },
  { name: 'Photoshop', percent: 90 },
  { name: 'Adobe XD', percent: 80 },
  { name: 'Node.js', percent: 65 },
  { name: 'WordPress', percent: 50 },
]

const focusAreas = [
  'UI/UX Design',
  'Responsive Design',
  'Web Design',
  'Mobile App Design',
]

function SkillBar({ name, percent }) {
  return (
    <div className="d-flex align-items-center mb-3">
      {/* Label box */}
      <div style={{
        width: '110px',
        flexShrink: 0,
        background: '#2a2a2a',
        color: '#cccccc',
        padding: '4px 10px',
        fontSize: '0.78rem',
        letterSpacing: '0.5px',
        marginRight: '10px',
        textAlign: 'center',
      }}>
        {name}
      </div>
      {/* Progress bar */}
      <div style={{ flex: 1, height: '8px', background: '#555555', borderRadius: '2px' }}>
        <div style={{
          width: `${percent}%`,
          height: '100%',
          background: '#888888',
          borderRadius: '2px',
        }} />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ background: '#383838', padding: '70px 0' }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 style={{
            fontFamily: 'Georgia, serif',
            color: '#ffffff',
            fontSize: '2.2rem',
            fontWeight: 400,
            marginBottom: '16px',
          }}>
            Skills
          </h2>
          <p style={{ color: '#aaaaaa', maxWidth: '600px', margin: '0 auto', fontSize: '0.9rem', lineHeight: 1.8 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Two columns */}
        <div className="row g-5">
          {/* Left: MY FOCUS */}
          <div className="col-lg-4">
            <h5 style={{
              color: '#ffffff',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontSize: '0.85rem',
              marginBottom: '10px',
            }}>
              MY FOCUS
            </h5>
            <hr style={{ borderColor: '#666666', marginBottom: '20px' }} />
            <ul className="list-unstyled">
              {focusAreas.map(area => (
                <li key={area} style={{ color: '#aaaaaa', marginBottom: '12px', fontSize: '0.95rem' }}>
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Progress bars */}
          <div className="col-lg-8">
            {skills.map(skill => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
