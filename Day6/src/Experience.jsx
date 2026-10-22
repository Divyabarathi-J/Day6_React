
import React from 'react'

const Experience = () => {
  const experiences = [
    {
      role: 'Web Developer & Tester Intern',
      company: 'Bonbloc Technologies Pvt. Ltd.',
      date: 'June 2026',
      desc: [
        'Developed an Employee Management System using React.js, Node.js, and PostgreSQL.',
        'Created JUnit test cases using Spring Boot.',
        'Performed functional and manual UI testing.'
      ],
      tech: 'Java, Spring Boot, JUnit, Keycloak'
    },
    {
      role: 'Backend Developer Intern',
      company: 'Amihive Software Solutions',
      date: 'May 2026',
      desc: [
        'Developed and integrated AI-powered chatbots into enterprise applications.',
        'Integrated OpenAI and Groq APIs.',
        'Collaborated with the team on chatbot deployment.'
      ],
      tech: 'Node.js, OpenAI API, Groq API, REST APIs'
    },
    {
      role: 'UI/UX Designer Intern',
      company: 'GenEx Corporation',
      date: 'March 2025',
      desc: [
        'Designed the eDiary application from wireframes to high-fidelity prototypes.',
        'Used Figma to create intuitive, user-friendly interfaces.',
        'Collaborated with developers to maintain design consistency.'
      ],
      tech: 'Figma, UI/UX Design, Wireframing, Prototyping'
    }
  ]

  return (
    <div className="page">
      <p className="tag">MY PROFESSIONAL JOURNEY</p>
      <h1>Experience</h1>
      <p>My practical experience across development, testing, and design.</p>

      <div className="grid">
        {experiences.map((item, index) => (
          <div className="card" key={index}>
            <h2>{item.role}</h2>
            <h3>{item.company}</h3>
            <p>{item.date}</p>

            <ul>
              {item.desc.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>

            <p><strong>Technologies:</strong> {item.tech}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
