'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SectionHeading from '@/components/shared/layout/SectionHeading'
import { Button } from '@/components/shared/ui/button'
import { SKILLS } from '@/config/skills'

export default function SkillsShowcase() {
    const [showAll, setShowAll] = useState(false)

    const displayCount = 16
    const displayedSkills = showAll ? SKILLS : SKILLS.slice(0, displayCount)
    const hasMore = SKILLS.length > displayCount

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
                            Show More Skills ({SKILLS.length - displayCount}{' '}
                            more)
                            <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                        </Button>
                    </motion.div>
                )}
            </div>
        </section>
    )
}
