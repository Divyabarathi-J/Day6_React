
import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Healthcare Management System',
      tech: 'React.js, Node.js, Express.js, MongoDB, JWT, Socket.IO',
      desc: 'A healthcare platform for managing patient records, appointments, and hospital operations, with secure authentication and rehabilitation monitoring.'
    },
    {
      title: 'Fundraising Platform',
      tech: 'React.js, Node.js, Express.js, MongoDB, JWT',
      desc: 'A full-stack application featuring campaign management, donation tracking, secure authentication, and REST APIs.'
    },
    {
      title: 'Real-Time Chat Application',
      tech: 'Node.js, Express.js, MongoDB, Socket.IO',
      desc: 'A real-time messaging application with private and group chats, user authentication, and efficient message management.'
    },
    {
      title: 'E-Commerce Website',
      tech: 'React.js, JavaScript, HTML, CSS',
      desc: 'A web application focused on product presentation and a user-friendly shopping experience.'
    },
    {
      title: 'Food Delivery App',
      tech: 'React.js, JavaScript, CSS',
      desc: 'A food delivery interface designed to make browsing food options and navigating the ordering experience simple.'
    },
    {
      title: 'E-Diary Application',
      tech: 'Figma, UI/UX Design, Prototyping',
      desc: 'An e-diary application designed from initial wireframes to high-fidelity prototypes during my UI/UX internship.'
    }
  ]

  return (
    <div className="page">
      <p className="tag">MY WORK</p>
      <h1>Featured Projects</h1>
      <p>Applications and solutions I have worked on.</p>

      <div className="grid">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.desc}</p>
            <h3>Technologies</h3>
            <p>{project.tech}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
