
import React from 'react'

const Achievements = () => {
  const achievements = [
    {
      title: 'Department Topper',
      desc: 'Ranked 1st in the Computer Science Engineering department for four consecutive semesters (II–V).',
      icon: '🏆'
    },
    {
      title: 'Code Debugging Competition',
      desc: 'Secured second place, demonstrating analytical thinking and problem-solving skills.',
      icon: '💻'
    },
    {
      title: 'Poster Design Competition',
      desc: 'Qualified for the second round of an inter-college poster design competition.',
      icon: '🎨'
    },
    {
      title: 'Academic Excellence',
      desc: 'Maintained a CGPA of 9.67 out of 10.',
      icon: '🎓'
    }
  ]

  return (
    <div className="page">
      <p className="tag">MILESTONES</p>
      <h1>Achievements</h1>
      <p>Milestones that reflect my academic performance, creativity, and technical skills.</p>

      <div className="grid">
        {achievements.map((item, index) => (
          <div className="card" key={index}>
            <span className="icon">{item.icon}</span>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Achievements
