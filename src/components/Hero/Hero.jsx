import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Mayur Khairnar</h1>
          <h2 className="hero-title">Full-Stack Software Engineer</h2>
          <p className="hero-description">
            Based in Pune, Maharashtra, India. Full-stack Software Engineer with 4+ years of experience 
            building scalable, high-performance web applications using React.js, Node.js, and Microsoft Azure. 
            Improved frontend performance by 25% and reduced backend latency by 20%. Microsoft Azure Certified.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Projects
            </a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/mayurkhairnar09" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/mayur-khairnar-2a281a180" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:mayurkhairnar09@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-wrapper">
            <div className="hero-image-bg"></div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <a href="#about" className="scroll-down">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
    </section>
  )
}

export default Hero
