import { useMemo } from 'react'
import SectionWrapper from '../common/SectionWrapper'
import SkillCategory from './SkillCategory'
import { useSkillsData } from '../../hooks/usePublicData'
import './Skills.css'

const Skills = () => {
  const { data, loading, error, refetch } = useSkillsData()
  const categories = useMemo(() => data?.categories || [], [data])

  return (
    <SectionWrapper
      id="skills"
      className="skills"
      title="Skills & Technologies"
      loading={loading}
      error={error || categories.length === 0}
      onRetry={refetch}
      loadingMessage="Loading skills..."
      errorMessage="Unable to load skills data."
    >
      <div className="skills-container">
        {categories.map((category, index) => (
          <SkillCategory key={category.id} category={category} index={index} />
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Skills