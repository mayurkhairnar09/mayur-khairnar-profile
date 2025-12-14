import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { memo, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import SectionWrapper from '../common/SectionWrapper'
import { useProjectsData } from '../../hooks/usePublicData'
import './Projects.css'

// Memoized project card component
const ProjectCard = memo(({ project }) => {
    const handleImageError = useCallback((e) => {
        e.target.src = '/placeholder-project.png'
    }, [])

    return (
        <div className="project-card">
            <div className="project-image">
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    onError={handleImageError}
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
                {project.clients?.length > 0 && (
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
ProjectCard.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
        github: PropTypes.string,
        live: PropTypes.string,
        clients: PropTypes.arrayOf(PropTypes.string)
    }).isRequired
}

const Projects = () => {
    const { data, loading, error, refetch } = useProjectsData()
    const projects = useMemo(() => data?.projects || [], [data])

    return (
        <SectionWrapper
            id="projects"
            className="projects"
            title="Projects"
            loading={loading}
            error={error || projects.length === 0}
            onRetry={refetch}
            loadingMessage="Loading projects..."
            errorMessage="Unable to load projects data."
        >
            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </SectionWrapper>
    )
}

export default Projects