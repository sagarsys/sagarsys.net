'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, Github, Linkedin } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { Button } from './ui/button'
import { useColorGradient } from '@/hooks/useColorGradient'

interface ContactProps {
    email?: string
    github?: string
    linkedin?: string
}

export default function Contact({
    email = 'sagar.sawuck@gmail.com',
    github = 'https://github.com/sagarsys',
    linkedin = 'https://linkedin.com/in/sagarsys/',
}: ContactProps) {
    const { colors } = useColorGradient()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Construct mailto link with form data
        const subject = encodeURIComponent(
            `Portfolio Contact from ${formData.name}`
        )
        const body = encodeURIComponent(
            `From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
    }

    return (
        <section id="contact" className="py-20 md:py-32 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    title="Get In Touch"
                    subtitle="Let's build something amazing together"
                />

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Left Column: Contact Info */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Email Card */}
                        <motion.a
                            href={`mailto:${email}`}
                            className="block"
                            whileHover={{ y: -5 }}
                        >
                            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group">
                                <div className="flex items-center gap-4 mb-3">
                                    <div
                                        className="w-12 h-12 rounded-full flex items-center justify-center"
                                        style={{
                                            background: `linear-gradient(135deg, ${colors.from}, ${colors.via}, ${colors.to})`,
                                        }}
                                    >
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-400">
                                            Email
                                        </p>
                                        <p className="font-semibold text-lg text-white group-hover:text-secondary transition-colors">
                                            {email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.a>

                        {/* Social Links */}
                        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-md">
                            <p className="text-sm text-gray-400 mb-4">
                                Connect with me
                            </p>
                            <div className="flex gap-3">
                                <motion.a
                                    href={github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-slate-700 text-gray-300 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    aria-label="GitHub"
                                >
                                    <Github className="w-5 h-5" />
                                </motion.a>

                                <motion.a
                                    href={linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-slate-700 text-gray-300 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-all"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
                                    className="w-full px-4 py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                    className="w-full px-4 py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={6}
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            message: e.target.value,
                                        })
                                    }
                                    className="w-full px-4 py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button
                                    type="submit"
                                    className="w-full bg-secondary hover:bg-secondary/90 text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all group"
                                    style={{
                                        background: `linear-gradient(135deg, ${colors.from}, ${colors.via}, ${colors.to})`,
                                    }}
                                >
                                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                                    Send Message
                                </Button>
                            </motion.div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
