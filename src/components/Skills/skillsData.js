import { FaReact, FaNode, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaCloud } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiPostgresql, SiDocker, SiTypescript, SiRedux, SiNextdotjs, SiMui } from 'react-icons/si'

export const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    category: 'Frontend Technologies',
    skills: [
      { id: 'react', name: 'React.js', icon: FaReact, link: 'https://react.dev/learn' },
      { id: 'redux', name: 'Redux', icon: SiRedux, link: 'https://redux.js.org/introduction/getting-started' },
      { id: 'javascript', name: 'JavaScript (ES6+)', icon: FaJs, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide' },
      { id: 'typescript', name: 'TypeScript', icon: SiTypescript, link: 'https://www.typescriptlang.org/docs/' },
      { id: 'nextjs', name: 'Next.js', icon: SiNextdotjs, link: 'https://nextjs.org/docs' },
      { id: 'html5', name: 'HTML5', icon: FaHtml5, link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { id: 'css3', name: 'CSS3', icon: FaCss3Alt, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { id: 'materialui', name: 'Material UI', icon: SiMui, link: 'https://mui.com/material-ui/getting-started/' },
    ]
  },
  {
    id: 'backend',
    category: 'Backend & APIs',
    skills: [
      { id: 'nodejs', name: 'Node.js', icon: FaNode, link: 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs' },
      { id: 'expressjs', name: 'Express.js', icon: SiExpress, link: 'https://expressjs.com/en/starter/installing.html' },
      { id: 'restful', name: 'RESTful APIs', icon: FaDatabase, link: 'https://restfulapi.net/' },
      { id: 'microservices', name: 'Microservices', icon: FaNode, link: 'https://microservices.io/patterns/microservices.html' },
      { id: 'azurefunctions', name: 'Azure Functions', icon: FaCloud, link: 'https://learn.microsoft.com/en-us/azure/azure-functions/' },
    ]
  },
  {
    id: 'database',
    category: 'Database & Cloud',
    skills: [
      { id: 'mongodb', name: 'MongoDB', icon: SiMongodb, link: 'https://www.mongodb.com/docs/' },
      { id: 'sqlserver', name: 'SQL Server', icon: FaDatabase, link: 'https://learn.microsoft.com/en-us/sql/sql-server/' },
      { id: 'postgresql', name: 'PostgreSQL', icon: SiPostgresql, link: 'https://www.postgresql.org/docs/' },
      { id: 'azure', name: 'Azure Cloud', icon: FaCloud, link: 'https://learn.microsoft.com/en-us/azure/' },
    ]
  },
  {
    id: 'devops',
    category: 'DevOps & Tools',
    skills: [
      { id: 'azuredevops', name: 'Azure DevOps', icon: FaCloud, link: 'https://learn.microsoft.com/en-us/azure/devops/' },
      { id: 'git', name: 'Git/GitHub', icon: FaGitAlt, link: 'https://docs.github.com/en/get-started' },
      { id: 'docker', name: 'Docker', icon: SiDocker, link: 'https://docs.docker.com/get-started/' },
      { id: 'cicd', name: 'CI/CD Pipelines', icon: FaCloud, link: 'https://learn.microsoft.com/en-us/azure/devops/pipelines/' },
    ]
  }
]
