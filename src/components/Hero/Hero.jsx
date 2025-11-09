import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
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
            {/* Developer illustration with code elements */}
            <div className="developer-illustration">
              <div className="code-editor">
                <div className="editor-header">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="editor-content">
                  <div className="code-line">
                    <span className="keyword">const</span> <span className="variable">developer</span> = <span className="bracket">{'{'}</span>
                  </div>
                  <div className="code-line indent">
                    <span className="property">name:</span> <span className="string">'Mayur'</span>,
                  </div>
                  <div className="code-line indent">
                    <span className="property">role:</span> <span className="string">'Full-Stack'</span>,
                  </div>
                  <div className="code-line indent">
                    <span className="property">skills:</span> <span className="bracket">['React', 'Node']</span>,
                  </div>
                  <div className="code-line">
                    <span className="bracket">{'}'}</span>
                  </div>
                </div>
              </div>
              <div className="floating-icons">
                <div className="float-icon icon-1">{'<>'}</div>
                <div className="float-icon icon-2">{'{}'}</div>
                <div className="float-icon icon-3">{'</>'}</div>
                <div className="float-icon icon-4">{'()'}</div>
              </div>
            </div>
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
