import { FaReact, FaNode, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaCode, FaLock, FaCogs, FaTools, FaMicrosoft, FaBolt, FaLightbulb } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiPostgresql, SiDocker, SiTypescript, SiRedux, SiNextdotjs, SiMui, SiPostman, SiJest, SiJsonwebtokens, SiGraphql, SiGithub, SiNpm, SiWebpack, SiBootstrap, SiOpenai, SiJquery, SiDotnet, SiMysql } from 'react-icons/si'
import { VscVscode, VscAzure } from 'react-icons/vsc'

/**
 * Icon mapping for skills
 * Maps icon names from JSON to actual React icon components
 */
export const ICON_MAP = {
    // Font Awesome icons
    FaReact,
    FaNode,
    FaDatabase,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaGitAlt,
    FaCode,
    FaLock,
    FaCogs,
    FaTools,
    FaMicrosoft,
    FaBolt,
    FaLightbulb,

    // Simple Icons
    SiMongodb,
    SiExpress,
    SiPostgresql,
    SiDocker,
    SiTypescript,
    SiRedux,
    SiNextdotjs,
    SiMui,
    SiPostman,
    SiJest,
    SiJsonwebtokens,
    SiGraphql,
    SiGithub,
    SiNpm,
    SiWebpack,
    SiBootstrap,
    SiOpenai,
    SiJquery,
    SiDotnet,
    SiMysql,

    // VS Code Icons
    VscVscode,
    VscAzure
}

/**
 * Get icon component from string name
 * @param {string} iconName - Name of the icon
 * @returns {React.Component} Icon component
 */
export const getIcon = (iconName) => {
    return ICON_MAP[iconName] || FaReact // Default fallback
}

export default ICON_MAP