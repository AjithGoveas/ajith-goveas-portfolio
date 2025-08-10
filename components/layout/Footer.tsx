"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mt-20 border-t border-white/10 bg-gradient-to-b from-background via-muted to-accent backdrop-blur-sm"
        >
            <div className="container mx-auto px-6 py-10 flex flex-col items-center space-y-6">
                {/* Social Links */}

                <SocialLinks/>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent mb-6" />

                {/* Copyright */}
                <p className="text-sm text-muted-foreground text-center">
                    &copy;{currentYear} <span className="text-foreground font-medium">Developer Portfolio</span>.{" "}
                    Built with <span className="text-primary">Next.js</span> &{" "}
                    <span className="text-primary">shadcn/ui</span>.
                </p>
            </div>
        </motion.footer>
    );
};

export default Footer;
