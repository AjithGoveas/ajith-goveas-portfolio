"use client";

import React from "react";
import { motion } from "framer-motion";
import SocialLinks from "@/components/SocialLinks";

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            // A more subdued, uniform background color for a minimalist aesthetic
            className="relative mt-20 border-t border-white/5 bg-background text-muted-foreground"
        >
            <div className="container mx-auto px-6 py-8 flex flex-col items-center sm:flex-row sm:justify-between sm:space-y-0 space-y-6">
                {/* Refined Social Links Section
                  Placed on the left for a balanced, functional layout on large screens
                */}
                <div className="flex justify-center sm:justify-start">
                    <SocialLinks />
                </div>

                {/* Copyright & Tech Stack Info
                  Placed on the right for a clean, asymmetrical balance
                  The border-t is removed for a cleaner look, relying on padding for visual separation
                */}
                <div className="flex flex-col items-center sm:items-end text-center sm:text-right space-y-2">
                    <p className="text-sm">
                        <span className="text-xl font-sofia text-foreground">myBio</span> &copy;{currentYear}
                    </p>
                    <p className="text-xs">
                        Built with <span className="text-primary font-mono">Next.js</span> &{" "}
                        <span className="text-primary font-mono">shadcn/ui</span>.
                    </p>
                </div>
            </div>
        </motion.footer>
    );
};