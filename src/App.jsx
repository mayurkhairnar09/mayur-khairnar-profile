import { lazy, Suspense } from 'react'
import DynamicBackground from './components/DynamicBackground/DynamicBackground'
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

function App() {
  return (
    <div className="App">
      {/* Dynamic animated background */}
      <DynamicBackground />
      
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      <Suspense fallback={null}>
        <Hero />
      </Suspense>
      <Suspense fallback={null}>
        <About />
      </Suspense>
      <Suspense fallback={null}>
        <Skills />
      </Suspense>
      <Suspense fallback={null}>
        <Experience />
      </Suspense>
      <Suspense fallback={null}>
        <Education />
      </Suspense>
      <Suspense fallback={null}>
        <Projects />
      </Suspense>
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App