import './About.css'

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Full-Stack Software Engineer with 4+ years of experience building scalable, 
              high-performance, and user-centric web applications using React.js, Node.js, and 
              Microsoft Azure. I thrive in fast-paced, collaborative environments where I can solve 
              complex problems and write clean, scalable code.
            </p>
            <p>
              Currently working at Cyncly in Pune, Maharashtra, India, I've delivered impactful results: 
              improved frontend performance by 25% through optimized React.js components and lazy loading, 
              reduced backend latency by 20% with clean Node.js APIs and microservices, achieved 90%+ 
              deployment success with CI/CD pipelines, and cut post-release defects by 25% through rigorous testing.
            </p>
            <p>
              I'm passionate about building meaningful products and growing into a technical leadership role. 
              Microsoft Azure Certified (AZ-900), I've also secured 3rd place at multiple Hackathon competitions, 
              demonstrating my ability to innovate under pressure and deliver results.
            </p>
            <div className="about-info">
              <div className="info-item">
                <span className="info-label">Name:</span>
                <span className="info-value">Mayur Khairnar</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">mayurkhairnar09@gmail.com</span>
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
              <h3>4+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-card">
              <h3>25%</h3>
              <p>Performance Boost</p>
            </div>
            <div className="stat-card">
              <h3>90%+</h3>
              <p>Deployment Success</p>
            </div>
            <div className="stat-card">
              <h3>Azure</h3>
              <p>Certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
