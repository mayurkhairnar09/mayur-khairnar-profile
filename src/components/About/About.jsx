import { memo } from 'react'
import './About.css'

// Personal information - optimized data structure
const PERSONAL_INFO = {
  name: 'Mayur Khairnar',
  email: 'mayurkhairnar09@gmail.com',
  location: 'Pune, Maharashtra, India',
  status: 'Available for opportunities'
}

const STATS = [
  { id: 'experience', value: '4+', label: 'Years Experience' },
  { id: 'performance', value: '25%', label: 'Performance Boost' },
  { id: 'deployment', value: '90%+', label: 'Deployment Success' },
  { id: 'certification', value: 'Azure', label: 'Certified' }
]

// Memoized components for better performance
const InfoItem = memo(({ label, value }) => (
  <div className="info-item">
    <span className="info-label">{label}:</span>
    <span className="info-value">{value}</span>
  </div>
))

InfoItem.displayName = 'InfoItem'

const StatCard = memo(({ stat }) => (
  <div className="stat-card">
    <h3>{stat.value}</h3>
    <p>{stat.label}</p>
  </div>
))

StatCard.displayName = 'StatCard'

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
              <InfoItem label="Name" value={PERSONAL_INFO.name} />
              <InfoItem label="Email" value={PERSONAL_INFO.email} />
              <InfoItem label="Location" value={PERSONAL_INFO.location} />
              <InfoItem label="Status" value={PERSONAL_INFO.status} />
            </div>
          </div>
          <div className="about-stats">
            {STATS.map((stat) => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
