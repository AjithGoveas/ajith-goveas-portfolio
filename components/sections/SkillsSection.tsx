// File: src/components/sections/SkillsSection.tsx
'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {Card, CardContent} from '@/components/ui/card';
import {SkillCategory} from '@/types';
import {Code, Globe, Smartphone} from "lucide-react";

export const skillCategories: SkillCategory[] = [
    {
        title: "Frontend Development",
        icon: <Globe className="w-5 h-5"/>,
        skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "JavaScript"]
    },
    {
        title: "Android Development",
        icon: <Smartphone className="w-5 h-5"/>,
        skills: ["Kotlin", "Java", "Android SDK", "Jetpack Compose", "Room Database", "Retrofit"]
    },
    {
        title: "Tools & Technologies",
        icon: <Code className="w-5 h-5"/>,
        skills: ["Git", "Vite", "Firebase", "REST APIs"]
    }
];

const SkillsSection: React.FC = () => {
    return (
        <section id="skills" className="py-20 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-primary mb-4">Skills & Technologies</h2>
                        <p className="text-muted-foreground max-w-2xl">
                            A comprehensive toolkit for building modern applications across platforms
                        </p>
                    </motion.div>

                    {/* Skills Grid */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {skillCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={categoryIndex}
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.5, delay: categoryIndex * 0.1}}
                            >
                                <Card className="h-full bg-card/50 border border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300">
                                    <CardContent className="p-6">
                                        {/* Category Header */}
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                                {category.icon}
                                            </div>
                                            <h3 className="text-lg font-semibold text-primary">{category.title}</h3>
                                        </div>

                                        {/* Skills List */}
                                        <div className="space-y-2">
                                            {category.skills.map((skill, skillIndex) => (
                                                <motion.div
                                                    key={skill}
                                                    initial={{opacity: 0, x: -10}}
                                                    whileInView={{opacity: 1, x: 0}}
                                                    viewport={{once: true}}
                                                    transition={{
                                                        duration: 0.3,
                                                        delay: categoryIndex * 0.1 + skillIndex * 0.05
                                                    }}
                                                    className="flex items-center justify-between py-2 px-3 rounded-lg border border-border/50 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-200"
                                                >
                                                    <span className="text-sm font-medium text-secondary-foreground">
                                                        {skill}
                                                    </span>
                                                    {/* Subtle indicator */}
                                                    <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Note */}
                    <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: 0.5}}
                        className="text-center mt-16"
                    >
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.02] border border-border/50 rounded-full">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-sm text-muted-foreground/70 italic">Always learning and exploring new technologies</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;