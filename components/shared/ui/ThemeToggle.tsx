'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ThemeToggleProps {
    inline?: boolean
}

export default function ThemeToggle({ inline = false }: ThemeToggleProps) {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const isDark = theme === 'dark'

    if (inline) {
        // Inline version for navbar
        return (
            <motion.button
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-slate-700 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
            >
                <AnimatePresence mode="wait">
                    {isDark ? (
                        <motion.div
                            key="sun"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Sun className="w-5 h-5 text-yellow-500" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="moon"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Moon className="w-5 h-5 text-slate-700" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        )
    }

    // Original floating version (not used but kept for reference)
    return (
        <motion.button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-white/30 dark:bg-slate-800/30 backdrop-blur-md border border-white/50 dark:border-slate-600/50 shadow-lg hover:shadow-2xl transition-shadow flex items-center justify-center group"
            whileHover={{ scale: 1.1, rotate: 20 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
        >
            <AnimatePresence mode="wait">
                {isDark ? (
                    <motion.div
                        key="sun"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Sun className="w-6 h-6 text-yellow-500" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="moon"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Moon className="w-6 h-6 text-slate-700" />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button>
    )
}
