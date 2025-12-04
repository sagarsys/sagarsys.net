'use client'

import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/animations'
import SectionHeading from './SectionHeading'
import { useColorGradient } from '@/hooks/useColorGradient'
import {
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiNodedotjs,
    SiExpress,
    SiGraphql,
    SiPostgresql,
    SiMongodb,
    SiDocker,
    SiGit,
    SiFigma,
} from 'react-icons/si'
import { SiAwsamplify } from 'react-icons/si'

// Tech stack with brand colors and proper icons
const skills = [
    {
        name: 'Next.js',
        icon: SiNextdotjs,
        color: '#000000',
        darkColor: '#FFFFFF',
    },
    { name: 'React', icon: SiReact, color: '#61DAFB', darkColor: '#61DAFB' },
    {
        name: 'TypeScript',
        icon: SiTypescript,
        color: '#3178C6',
        darkColor: '#3178C6',
    },
    {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
        color: '#06B6D4',
        darkColor: '#06B6D4',
    },
    {
        name: 'JavaScript',
        icon: SiJavascript,
        color: '#F7DF1E',
        darkColor: '#F7DF1E',
    },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26', darkColor: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6', darkColor: '#1572B6' },
    {
        name: 'Node.js',
        icon: SiNodedotjs,
        color: '#339933',
        darkColor: '#339933',
    },
    {
        name: 'Express',
        icon: SiExpress,
        color: '#000000',
        darkColor: '#FFFFFF',
    },
    {
        name: 'GraphQL',
        icon: SiGraphql,
        color: '#E10098',
        darkColor: '#E10098',
    },
    {
        name: 'PostgreSQL',
        icon: SiPostgresql,
        color: '#4169E1',
        darkColor: '#4169E1',
    },
    {
        name: 'MongoDB',
        icon: SiMongodb,
        color: '#47A248',
        darkColor: '#47A248',
    },
    { name: 'AWS', icon: SiAwsamplify, color: '#FF9900', darkColor: '#FF9900' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED', darkColor: '#2496ED' },
    { name: 'Git', icon: SiGit, color: '#F05032', darkColor: '#F05032' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E', darkColor: '#F24E1E' },
]

export default function SkillsShowcase() {
    const { colors } = useColorGradient()

    return (
        <section id="skills" className="py-20 md:py-32 px-6 relative">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <SectionHeading
                    title="Skills & Technologies"
                    subtitle="The magical tools I use to bring ideas to life"
                />

                {/* Skills Grid */}
                <motion.div
                    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {skills.map((skill, index) => {
                        const Icon = skill.icon

                        return (
                            <motion.div
                                key={skill.name}
                                className="group relative"
                                variants={staggerItem}
                            >
                                <motion.div
                                    className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl md:rounded-2xl p-3 md:p-8 flex flex-col items-center justify-center aspect-square hover:shadow-lg hover:shadow-purple-500/10 transition-all cursor-pointer overflow-hidden"
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
                                        className="text-3xl md:text-5xl mb-1 md:mb-3 relative z-10"
                                        whileHover={{
                                            rotate: [0, -5, 5, 0],
                                            scale: 1.1,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Icon
                                            style={{
                                                color: skill.color,
                                            }}
                                            className="dark:opacity-90"
                                        />
                                    </motion.div>

                                    {/* Name */}
                                    <span className="text-xs md:text-base font-medium text-gray-300 relative z-10 text-center">
                                        {skill.name}
                                    </span>

                                    {/* Hover shimmer */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent opacity-0 group-hover:opacity-100"
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
                </motion.div>
            </div>
        </section>
    )
}
