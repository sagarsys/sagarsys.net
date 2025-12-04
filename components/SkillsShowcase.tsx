'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { staggerContainer, staggerItem } from '@/lib/animations'
import SectionHeading from './SectionHeading'
import { useColorGradient } from '@/hooks/useColorGradient'
import { Button } from './ui/button'
import {
    SiJavascript,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiReact,
    SiNextdotjs,
    SiAngular,
    SiVuedotjs,
    SiSvelte,
    SiNodedotjs,
    SiExpress,
    SiNestjs,
    SiFastify,
    SiOpenapiinitiative,
    SiJest,
    SiVitest,
    SiJasmine,
    SiCypress,
    SiMongodb,
    SiAmazondynamodb,
    SiMysql,
    SiPostgresql,
    SiSequelize,
    SiAmazon,
    SiGooglecloud,
    SiDocker,
    SiKubernetes,
    SiHelm,
    SiGithubactions,
    SiGitlab,
    SiGit,
    SiWebpack,
    SiVite,
    SiNpm,
    SiYarn,
    SiPnpm,
    SiWebstorm,
    SiIntellijidea,
    SiPrisma,
} from 'react-icons/si'

// Comprehensive tech stack from CV
const skills = [
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Express', icon: SiExpress, color: '#ffffff' },
    { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
    { name: 'Jest', icon: SiJest, color: '#C21325' },
    { name: 'Vitest', icon: SiVitest, color: '#6E9F18' },
    { name: 'Cypress', icon: SiCypress, color: '#ffffff' },
    { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
    { name: 'Webpack', icon: SiWebpack, color: '#8DD6F9' },
    { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    // Core Stack

    // Frameworks
    { name: 'Angular', icon: SiAngular, color: '#DD0031' },
    { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
    { name: 'Svelte', icon: SiSvelte, color: '#FF3E00' },

    // Backend
    { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
    { name: 'Fastify', icon: SiFastify, color: '#fffff0' },
    { name: 'OpenAPI', icon: SiOpenapiinitiative, color: '#6BA539' },

    // Testing
    { name: 'Jasmine', icon: SiJasmine, color: '#8A4182' },

    // Databases
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'DynamoDB', icon: SiAmazondynamodb, color: '#4053D6' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'Sequelize', icon: SiSequelize, color: '#52B0E7' },

    // Cloud & DevOps
    { name: 'GCP', icon: SiGooglecloud, color: '#4285F4' },
    { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
    { name: 'Helm', icon: SiHelm, color: '#0F1689' },
    { name: 'GitLab CI', icon: SiGitlab, color: '#FC6D26' },

    // Tooling
    { name: 'Vite', icon: SiVite, color: '#646CFF' },
    { name: 'npm', icon: SiNpm, color: '#CB3837' },
    { name: 'Yarn', icon: SiYarn, color: '#2C8EBB' },
    { name: 'pnpm', icon: SiPnpm, color: '#F69220' },
    { name: 'WebStorm', icon: SiWebstorm, color: '#6e6' },
    { name: 'IntelliJ', icon: SiIntellijidea, color: '#fff' },
]

export default function SkillsShowcase() {
    const { colors } = useColorGradient()
    const [showAll, setShowAll] = useState(false)

    // Show first 18 skills initially (enough for 2-3 rows depending on screen)
    const displayCount = 16
    const displayedSkills = showAll ? skills : skills.slice(0, displayCount)
    const hasMore = skills.length > displayCount

    return (
        <section id="skills" className="py-20 md:py-32 px-6 relative">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <SectionHeading
                    title="Skills & Technologies"
                    subtitle="The magical tools I use to bring ideas to life"
                />

                {/* Skills Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4">
                    {displayedSkills.map((skill, index) => {
                        const Icon = skill.icon

                        return (
                            <motion.div
                                key={skill.name}
                                className="group relative"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: index * 0.02,
                                    duration: 0.3,
                                }}
                            >
                                <motion.div
                                    className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl md:rounded-2xl p-2 md:p-4 flex flex-col items-center justify-center aspect-square hover:shadow-lg hover:shadow-purple-500/10 transition-all cursor-pointer overflow-hidden"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {/* Glow effect on hover with skill's brand color */}
                                    <motion.div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{
                                            background: `radial-gradient(circle at center, ${skill.color}20, transparent 70%)`,
                                        }}
                                    />

                                    {/* Icon with brand color */}
                                    <motion.div
                                        className="text-3xl md:text-4xl mb-1 md:mb-2 relative z-10"
                                        whileHover={{
                                            rotate: [0, -5, 5, 0],
                                            scale: 1.1,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Icon
                                            style={{ color: skill.color }}
                                            className="opacity-90"
                                        />
                                    </motion.div>

                                    {/* Name */}
                                    <span className="text-sm pt-1 font-medium text-gray-300 relative z-10 text-center leading-tight">
                                        {skill.name}
                                    </span>

                                    {/* Hover shimmer */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                                        animate={{ x: ['-100%', '100%'] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            repeatDelay: 1,
                                        }}
                                    />
                                </motion.div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Show More Button */}
                {hasMore && !showAll && (
                    <motion.div
                        className="flex justify-center mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Button
                            onClick={() => setShowAll(true)}
                            variant="outline"
                            size="lg"
                            className="group"
                        >
                            Show More Skills ({skills.length - displayCount}{' '}
                            more)
                            <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                        </Button>
                    </motion.div>
                )}
            </div>
        </section>
    )
}
