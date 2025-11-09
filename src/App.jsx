import { lazy, Suspense } from 'react'
import PropTypes from 'prop-types'
import './App.css'

// Lazy load all components for better performance
const Header = lazy(() => import('./components/Header/Header'))
const Hero = lazy(() => import('./components/Hero/Hero'))
const About = lazy(() => import('./components/About/About'))
const Skills = lazy(() => import('./components/Skills/Skills'))
const Experience = lazy(() => import('./components/Experience/Experience'))
const Projects = lazy(() => import('./components/Projects/Projects'))
const Education = lazy(() => import('./components/Education/Education'))
const Contact = lazy(() => import('./components/Contact/Contact'))
const Footer = lazy(() => import('./components/Footer/Footer'))

// Loading component with section name
const SectionLoader = ({ sectionName }) => (
  <div className="section-loader">
    <div className="loader-container">
      <div className="spinner"></div>
      <p className="loader-text">Loading {sectionName}...</p>
    </div>
  </div>
)

SectionLoader.propTypes = {
  sectionName: PropTypes.string.isRequired
}

function App() {
  return (
    <div className="App">
      <Suspense fallback={<SectionLoader sectionName="Navigation" />}>
        <Header />
      </Suspense>
      <Suspense fallback={<SectionLoader sectionName="Hero Section" />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<SectionLoader sectionName="About" />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionLoader sectionName="Skills" />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<SectionLoader sectionName="Experience" />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<SectionLoader sectionName="Education" />}>
        <Education />
      </Suspense>
      <Suspense fallback={<SectionLoader sectionName="Projects" />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionLoader sectionName="Contact" />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<SectionLoader sectionName="Footer" />}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
