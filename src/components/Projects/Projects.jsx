import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      image: 'https://via.placeholder.com/400x250/2563eb/ffffff?text=E-Commerce+Platform',
      github: 'https://github.com/yourusername/project',
      live: 'https://project-demo.com',
      features: [
        'User authentication and authorization',
        'Product search and filtering',
        'Shopping cart and checkout',
        'Payment integration with Stripe',
        'Admin dashboard'
      ]
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      image: 'https://via.placeholder.com/400x250/3b82f6/ffffff?text=Task+Manager',
      github: 'https://github.com/yourusername/project',
      live: 'https://project-demo.com',
      features: [
        'Real-time collaboration',
        'Drag and drop task management',
        'Team workspaces',
        'File attachments',
        'Activity tracking'
      ]
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive analytics dashboard for managing multiple social media accounts with insights and scheduling capabilities.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js', 'OAuth'],
      image: 'https://via.placeholder.com/400x250/1e40af/ffffff?text=Social+Dashboard',
      github: 'https://github.com/yourusername/project',
      live: 'https://project-demo.com',
      features: [
        'Multi-platform integration',
        'Analytics and insights',
        'Post scheduling',
        'Engagement tracking',
        'Custom reports'
      ]
    },
    {
      title: 'Weather Forecast App',
      description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather information.',
      technologies: ['React', 'OpenWeather API', 'Mapbox', 'Tailwind CSS'],
      image: 'https://via.placeholder.com/400x250/60a5fa/ffffff?text=Weather+App',
      github: 'https://github.com/yourusername/project',
      live: 'https://project-demo.com',
      features: [
        'Current weather conditions',
        '7-day forecast',
        'Interactive weather maps',
        'Location search',
        'Favorite locations'
      ]
    },
    {
      title: 'Blog Platform',
      description: 'A modern blogging platform with markdown support, categories, tags, and a powerful content management system.',
      technologies: ['React', 'Express', 'MongoDB', 'JWT', 'Markdown'],
      image: 'https://via.placeholder.com/400x250/2563eb/ffffff?text=Blog+Platform',
      github: 'https://github.com/yourusername/project',
      live: 'https://project-demo.com',
      features: [
        'Markdown editor',
        'Categories and tags',
        'User comments',
        'Search functionality',
        'SEO optimization'
      ]
    },
    {
      title: 'Portfolio Builder',
      description: 'A tool to help developers create and customize their portfolio websites with various templates and themes.',
      technologies: ['React', 'Styled Components', 'Framer Motion', 'Firebase'],
      image: 'https://via.placeholder.com/400x250/3b82f6/ffffff?text=Portfolio+Builder',
      github: 'https://github.com/yourusername/project',
      live: 'https://project-demo.com',
      features: [
        'Multiple templates',
        'Drag and drop builder',
        'Custom theming',
        'Export to code',
        'Hosting integration'
      ]
    }
  ]

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub /> Code
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
