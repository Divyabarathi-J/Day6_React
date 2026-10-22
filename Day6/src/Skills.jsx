
import React from 'react'

const Skills = () => {
  const skills = [
    {
      title: 'Programming Languages',
      items: ['Java', 'JavaScript', 'C', 'SQL']
    },
    {
      title: 'Frontend Development',
      items: ['HTML5', 'CSS3', 'React.js', 'Bootstrap', 'Tailwind CSS', 'Vite']
    },
    {
      title: 'Backend Development',
      items: ['Node.js', 'Express.js', 'Spring Boot', 'REST APIs']
    },
    {
      title: 'Databases',
      items: ['MongoDB', 'PostgreSQL', 'MySQL']
    },
    {
      title: 'Authentication & Security',
      items: ['JWT', 'Keycloak']
    },
    {
      title: 'Developer Tools',
      items: ['GitHub', 'Postman', 'Maven', 'Figma', 'VS Code']
    },
    {
      title: 'Core Computer Science',
      items: ['Data Structures & Algorithms', 'OOP', 'DBMS']
    }
  ]

  return (
    <div className="page">
      <p className="tag">MY EXPERTISE</p>
      <h1>Technical Skills</h1>
      <p>Technologies and tools I use to build and test applications.</p>

      <div className="grid">
        {skills.map((skill, index) => (
          <div className="card" key={index}>
            <h2>{skill.title}</h2>
            <div className="tags">
              {skill.items.map(item => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
