'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

interface EmailCardProps {
    email: string
    gradientColors: { from: string; via: string; to: string }
}

export default function EmailCard({ email, gradientColors }: EmailCardProps) {
    return (
        <motion.a
            href={`mailto:${email}`}
            className="block"
            whileHover={{ y: -5 }}
        >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group">
                <div className="flex items-center gap-4 mb-3">
                    <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{
                            background: `linear-gradient(135deg, ${gradientColors.from}, ${gradientColors.via}, ${gradientColors.to})`,
                        }}
                    >
                        <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-gray-400">Email</p>
                        <p className="font-semibold text-lg text-white group-hover:text-secondary transition-colors">
                            {email}
                        </p>
                    </div>
                </div>
            </div>
        </motion.a>
    )
}
