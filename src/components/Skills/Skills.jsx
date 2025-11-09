import { useMemo } from 'react'
import SectionTitle from '../common/SectionTitle'
import SkillCategory from './SkillCategory'
import LoadingState from '../common/LoadingState'
import ErrorState from '../common/ErrorState'
import { useSkillsData } from '../../hooks/usePublicData'
import './Skills.css'

const Skills = () => {
  const { data, loading, error, refetch } = useSkillsData()
  const categories = useMemo(() => data?.categories || [], [data])

  if (loading) {
    return (
      <section id="skills" className="section skills">
        <div className="container">
          <SectionTitle>Skills & Technologies</SectionTitle>
          <LoadingState message="Loading skills..." />
        </div>
      </section>
    )
  }

  if (error || categories.length === 0) {
    return (
      <section id="skills" className="section skills">
        <div className="container">
          <SectionTitle>Skills & Technologies</SectionTitle>
          <ErrorState 
            message="Unable to load skills data." 
            onRetry={refetch}
          />
        </div>
      </section>
    )
  }

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionTitle>Skills & Technologies</SectionTitle>
        <div className="skills-container">
          {categories.map((category) => (
            <SkillCategory key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
