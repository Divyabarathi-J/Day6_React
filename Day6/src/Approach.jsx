
import React from 'react'

const Approach = () => {
  const principles = [
    {
      title: 'Problem Solving',
      desc: 'Breaking complex problems into smaller tasks and finding practical, efficient solutions.'
    },
    {
      title: 'Clean Code',
      desc: 'Writing readable, structured, and maintainable code that is easier to test and improve.'
    },
    {
      title: 'User-Centered Design',
      desc: 'Creating intuitive interfaces that prioritize usability, accessibility, and consistency.'
    },
    {
      title: 'Scalable Development',
      desc: 'Building organized applications with reliable APIs, efficient database operations, and secure authentication.'
    }
  ]

  return (
    <div className="page">
      <p className="tag">HOW I WORK</p>
      <h1>My Approach</h1>
      <p>
        I believe great software combines thoughtful design,
        efficient engineering, and a clear understanding of user needs.
      </p>

      <div className="grid">
        {principles.map((item, index) => (
          <div className="card" key={index}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Approach
