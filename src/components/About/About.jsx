import './About.css'

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Full-Stack Software Engineer with expertise in building modern, 
              scalable web applications. With a strong foundation in both frontend and 
              backend technologies, I love turning complex problems into simple, beautiful, 
              and intuitive solutions.
            </p>
            <p>
              Based in Pune, Maharashtra, India, my journey in software development started 
              with a curiosity about how things work, and it has evolved into a career where 
              I get to create amazing digital experiences every day.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or sharing my knowledge with the developer community.
            </p>
            <div className="about-info">
              <div className="info-item">
                <span className="info-label">Name:</span>
                <span className="info-value">Mayur Khairnar</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">mayur.khairnar@example.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">Pune, Maharashtra, India</span>
              </div>
              <div className="info-item">
                <span className="info-label">Status:</span>
                <span className="info-value">Available for opportunities</span>
              </div>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-card">
              <h3>20+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3>15+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-card">
              <h3>100%</h3>
              <p>Commitment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
