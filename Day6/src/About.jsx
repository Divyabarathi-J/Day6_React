
import React from 'react'

const About = () => {
  const details = [
    { title: 'Education', desc: 'B.E. Computer Science and Engineering at S.A. Engineering College (2023–2027).' },
    { title: 'Academic Excellence', desc: 'Maintaining a CGPA of 9.67/10.' },
    { title: 'Development', desc: 'Hands-on experience in full-stack development, backend development, software testing, and AI chatbot integration.' },
    { title: 'Design', desc: 'Interested in UI/UX design, wireframing, prototyping, and creating user-friendly interfaces.' }
  ]

  return (
    <div className="page">
      <p className="tag">GET TO KNOW ME</p>
      <h1>About Me</h1>

      <p>
        I am a final-year Computer Science Engineering student passionate
        about building scalable applications and solving real-world problems.
        I have experience with Java, Spring Boot, React.js, Node.js,
        MongoDB, PostgreSQL, and REST APIs.
      </p>

      <p>
        I enjoy combining technical problem-solving with thoughtful design
        to create reliable and user-friendly digital experiences.
      </p>

      <div className="grid">
        {details.map((item, index) => (
          <div className="card" key={index}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About

