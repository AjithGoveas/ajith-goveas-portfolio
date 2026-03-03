"use client";

import React from "react";
import { motion } from "framer-motion";
import SocialLinks from "@/components/SocialLinks";

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 border-t border-border/30 bg-background"
        >
            <div className="container mx-auto px-6 py-10 flex flex-col items-center sm:flex-row sm:justify-between space-y-8 sm:space-y-0">

                <div className="flex items-center">
                    <SocialLinks />
                </div>

                <div className="flex flex-col items-center sm:items-end gap-2">
                    <div className="flex items-center gap-3">
                        <span className="text-xl font-sofia tracking-tighter text-foreground">
                            myBio
                        </span>
                        <span className="text-[10px] font-mono text-muted-foreground/80 tabular-nums uppercase tracking-widest">
                            ©{currentYear}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-muted-foreground/40">
                            Built_With:
                        </span>
                        <p className="text-[9px] font-mono uppercase tracking-[0.1em] text-muted-foreground/60">
                            Next.js <span className="text-muted-foreground/20 px-1">/</span> Shadcn
                        </p>
                    </div>
                </div>
            </div>

            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-border/20 to-transparent" />
        </motion.footer>
    );
};