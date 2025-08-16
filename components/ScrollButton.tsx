"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react"

type Position = "left" | "right"

const iconVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
}

const ScrollButton: React.FC = () => {
    const [isAtTop, setIsAtTop] = useState(true)
    const [position] = useState<Position>("right")

    useEffect(() => {
        const handleScroll = () => setIsAtTop(window.scrollY < 50)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleClick = () => {
        if (!isAtTop) {
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
    }

    return (
        <motion.div
            className={`fixed bottom-12 md:bottom-10 z-50 ${position === "right" ? "right-6 md:right-8" : "left-6 md:left-8"}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
        >
            <button
                onClick={handleClick}
                aria-label={isAtTop ? "Scroll indicator" : "Scroll to top"}
                className="group rounded-sm md:rounded-lg border hover:border-primary backdrop-blur-md shadow-md px-3 py-2 md:px-4 md:py-3 flex flex-col items-center justify-center gap-1.5 transition-colors duration-300 focus:outline-none"
            >
                <div className="flex flex-col items-center justify-center group-hover:text-primary text-muted-foreground transition-colors duration-300">
                    <motion.span
                        className="text-[8px] md:text-xs uppercase tracking-widest"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Scroll
                    </motion.span>

                    <AnimatePresence mode="wait">
                        {isAtTop ? (
                            <motion.div
                                key="chevron-down"
                                variants={iconVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                            >
                                <motion.div
                                    animate={{ y: [0, 5, 0] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <IconChevronDown size={16} className="md:size-4" />
                                </motion.div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="chevron-up"
                                variants={iconVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                            >
                                <IconChevronUp size={16} className="md:size-4" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </button>
        </motion.div>
    )
}

export default ScrollButton;