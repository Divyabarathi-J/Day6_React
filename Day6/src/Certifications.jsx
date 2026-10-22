
import React from 'react'

const Certifications = () => {
  const certifications = [
    {
      name: 'Java Programming',
      provider: 'NPTEL',
      detail: 'Core Java and Object-Oriented Programming',
      score: 'Score: 70%'
    },
    {
      name: 'Full Stack Development',
      provider: 'VEI Technology',
      detail: 'Full-stack application development'
    },
    {
      name: 'UI/UX Design with Figma',
      provider: 'NSIC Industry',
      detail: 'Wireframing, prototyping, and interface design'
    },
    {
      name: 'MATLAB Professional Certifications',
      provider: 'MATLAB',
      detail: 'Completed 15 certification courses'
    },
    {
      name: 'Mendix',
      provider: 'VEI Technology',
      detail: 'Low-code application development'
    },
    {
      name: 'AWS Academy Cloud Foundations',
      provider: 'AWS Academy',
      detail: 'Cloud computing fundamentals'
    }
  ]

  return (
    <div className="page">
      <p className="tag">LEARNING & DEVELOPMENT</p>
      <h1>Certifications</h1>
      <p>Courses and certifications that have strengthened my technical knowledge.</p>

      <div className="grid">
        {certifications.map((item, index) => (
          <div className="card" key={index}>
            <h2>{item.name}</h2>
            <h3>{item.provider}</h3>
            <p>{item.detail}</p>
            {item.score && <p>{item.score}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certifications
