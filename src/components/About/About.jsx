import './About.css'

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Full-Stack Software Engineer with 3+ years of experience specializing in 
              React.js, JavaScript, Redux, Node.js, and Web APIs. I excel at building modern, 
              scalable web applications with a focus on performance optimization and exceptional 
              user experiences.
            </p>
            <p>
              Currently working at Cyncly in Pune, Maharashtra, India, I've delivered scalable 
              UI features for 40+ clients and reduced backend response times by 20% through 
              optimized RESTful APIs. My expertise extends to Microsoft Azure cloud services, 
              CI/CD pipelines, and Agile development methodologies.
            </p>
            <p>
              I'm passionate about leveraging cutting-edge technologies to solve complex problems, 
              and I'm Microsoft Azure Certified (AZ-900). I've also achieved recognition with 3rd 
              place finishes at Hackathon competitions, demonstrating my ability to innovate under 
              pressure.
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
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-card">
              <h3>40+</h3>
              <p>Clients Served</p>
            </div>
            <div className="stat-card">
              <h3>2</h3>
              <p>Hackathon Awards</p>
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
