import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { memo, useCallback } from 'react'
import './Projects.css'

// Optimized data structure
const PROJECTS_DATA = [
  {
    id: 'spaces-flex',
    title: 'Interior Design Software - Spaces Flex / IS7',
    description: 'Delivered tailored interior design web solutions for 40+ clients at Cyncly, with dynamic UI features and interactive 2D/3D room layout tools for real-time visualization. Professional-grade planning application for kitchen and interior design.',
    technologies: ['React.js', 'Redux', 'JavaScript', 'Material UI', 'Node.js', 'RESTful APIs', 'Azure AD', 'OAuth 2.0'],
    image: 'https://via.placeholder.com/400x250/2563eb/ffffff?text=Spaces+Flex+IS7',
    github: null, // Private repository
    live: 'https://planner.cyncly-idealspaces.com/us/design/new?partnership=isdemositena',
    demoLink: 'https://www.cyncly.com/en/product-overviews/spaces-flex',
    clients: ['40+ Enterprise Clients', 'Global Design Professionals'],
    features: [
      'Scalable UI features for 40+ clients',
      'Interactive 2D/3D room layout tools',
      'RESTful API integration with Node.js backend',
      'Real-time previews for lead conversions',
      'Performance optimization with lazy loading',
      'Secure authentication with Azure AD, KeyCloak, OAuth 2.0, Azure B2C'
    ]
  },
  {
    id: 'ideal-spaces',
    title: 'Ideal Spaces 6 (IS6) - Enterprise Web Application',
    description: 'Developed responsive web application for desktop, tablet, and mobile at Twenty Twenty Interior Design Software. Used by major enterprise clients worldwide including IKEA, LMFR, ROCA, NOBIA, HOMEBASE, REFORM, EGGO, WELDOM, DISCAC, and KABOODLE. Improved mobile usability and engagement by 20%.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap', 'Responsive Design'],
    image: 'https://via.placeholder.com/400x250/3b82f6/ffffff?text=Ideal+Spaces+6',
    github: null, // Private repository
    live: 'https://idealspaces-demometric-prod.2020-platform.com/index.html',
    demoLink: 'https://www.2020spaces.com/',
    clients: ['IKEA', 'LMFR', 'ROCA', 'NOBIA', 'HOMEBASE', 'REFORM', 'EGGO', 'WELDOM', 'DISCAC', 'KABOODLE'],
    features: [
      'Responsive design for desktop, tablet, and mobile',
      'Reusable components increasing mobile engagement by 20%',
      'Cross-browser compatibility and UI consistency',
      'Reduced page load times',
      'Collaborated with QA for bug fixes',
      'Enterprise-grade solution for major global brands'
    ]
  }
]

// Memoized project card component
const ProjectCard = memo(({ project }) => {
  // Lazy load images
  const handleImageLoad = useCallback((e) => {
    e.target.classList.add('loaded')
  }, [])

  return (
    <div className="project-card">
      <div className="project-image">
        <img 
          src={project.image} 
          alt={project.title}
          loading="lazy"
          onLoad={handleImageLoad}
        />
        <div className="project-overlay">
          <div className="project-links">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
                aria-label={`View ${project.title} code on GitHub`}
              >
                <FaGithub /> Code
              </a>
            )}
            {project.live && (
              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
                aria-label={`View ${project.title} live demo`}
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        {project.clients && project.clients.length > 0 && (
          <div className="project-clients">
            <strong>Enterprise Clients:</strong>
            <div className="client-tags">
              {project.clients.map((client) => (
                <span key={client} className="client-tag">{client}</span>
              ))}
            </div>
          </div>
        )}
        <div className="project-tech">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  )
})

ProjectCard.displayName = 'ProjectCard'

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
