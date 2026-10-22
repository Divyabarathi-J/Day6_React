
import React from 'react'

const Contact = () => {
  return (
    <div className="page">
      <p className="tag">LET'S CONNECT</p>
      <h1>Contact Me</h1>
      <p>I'm open to software development opportunities and interesting collaborations.</p>

      <div className="grid">
        <div className="card">
          <h2>Email</h2>
          <p>
            <a href="mailto:divyabarathi0311@gmail.com">
              divyabarathi0311@gmail.com
            </a>
          </p>
        </div>

        <div className="card">
          <h2>Phone</h2>
          <p>
            <a href="tel:+919962129508">+91 99621 29508</a>
          </p>
        </div>

        <div className="card">
          <h2>LinkedIn</h2>
          <p>
            <a
              href="https://www.linkedin.com/in/divyabarathi-j-1b76132a4"
              target="_blank"
              rel="noreferrer"
            >
              View My Profile
            </a>
          </p>
        </div>
      </div>

      <form className="contact-form" action="mailto:divyabarathi0311@gmail.com" method="post" encType="text/plain">
        <h2>Send a Message</h2>

        <label>Name</label>
        <input name="Name" placeholder="Your name" required />

        <label>Email</label>
        <input type="email" name="Email" placeholder="Your email" required />

        <label>Message</label>
        <textarea name="Message" placeholder="Write your message" rows="5" required />

        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}

export default Contact
