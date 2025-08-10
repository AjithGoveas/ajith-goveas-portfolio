// File: src/components/sections/AboutSection.tsx
'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {Code2, Coffee, Smartphone, Terminal} from 'lucide-react';
import {Card, CardContent, CardHeader} from '@/components/ui/card';
import SocialLinks from "@/components/SocialLinks";

const AboutSection: React.FC = () => {
    const skills = [
        {icon: Smartphone, label: 'Android Development', desc: 'Native apps with Kotlin'},
        {icon: Code2, label: 'Frontend Development', desc: 'Modern web experiences'},
        {icon: Terminal, label: 'Backend Integration', desc: 'APIs and databases'},
        {icon: Coffee, label: 'Problem Solving', desc: 'Clean, efficient solutions'}
    ];

    return (
        <section id="about" className="py-20 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Left Content */}
                        <motion.div
                            initial={{opacity: 0, x: -20}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.6}}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl font-bold mb-6 text-primary">About Me</h2>
                                <div className="space-y-4 text-muted-foreground">
                                    <p className="text-lg leading-relaxed">
                                        I'm a passionate developer specializing in Android and Frontend web development.
                                        With expertise in modern technologies and frameworks, I create seamless user
                                        experiences across platforms.
                                    </p>
                                    <p className="text-lg leading-relaxed">
                                        My journey in development has led me to work with cutting-edge technologies,
                                        always staying updated with the latest trends and best practices in the
                                        industry.
                                    </p>
                                </div>
                            </div>

                            {/* Tech Philosophy */}
                            <Card className="bg-card/10">
                                <CardHeader className="text-xl font-semibold text-primary">My Approach</CardHeader>
                                <CardContent className="text-muted-foreground leading-relaxed">
                                    I believe in writing clean, maintainable code that solves real problems.
                                    Every project is an opportunity to learn something new and push the boundaries
                                    of what's possible with technology.
                                </CardContent>
                            </Card>

                            {/* Social Links */}
                            <div>
                                <p className="text-sm text-muted-foreground mb-4">Let's connect</p>
                                <SocialLinks/>
                            </div>
                        </motion.div>

                        {/* Right Content - Skills Grid */}
                        <motion.div
                            initial={{opacity: 0, x: 20}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.6, delay: 0.2}}
                            className="space-y-6"
                        >
                            <div>
                                <h3 className="text-xl font-semibold text-primary mb-6">What I Do</h3>
                                <div className="grid gap-4">
                                    {skills.map((skill, index) => (
                                        <motion.div
                                            key={skill.label}
                                            initial={{opacity: 0, y: 20}}
                                            whileInView={{opacity: 1, y: 0}}
                                            viewport={{once: true}}
                                            transition={{duration: 0.5, delay: 0.3 + index * 0.1}}
                                        >
                                            <Card
                                                className="bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300">
                                                <CardContent className="p-6">
                                                    <div className="flex items-start gap-4">
                                                        <div className="p-2 bg-primary/10 rounded-lg">
                                                            <skill.icon className="w-5 h-5 text-primary"/>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-primary mb-1">{skill.label}</h4>
                                                            <p className="text-sm text-muted-foreground">{skill.desc}</p>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Current Focus */}
                            <Card className="p-6 bg-primary/5 border border-primary/20 rounded-xl">
                                <CardHeader className="flex items-center gap-3">
                                    <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                                    <h4 className="font-semibold text-primary">Currently Learning</h4>
                                </CardHeader>
                                <CardContent className="text-muted-foreground">
                                    Exploring advanced Android architecture patterns and modern React frameworks
                                    to build even better user experiences.
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;