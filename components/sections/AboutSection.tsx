'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {
    ArrowUpRight,
    Binary,
    Code2,
    Cpu,
    Database,
    Globe,
    GraduationCap,
    Smartphone,
    Sparkles,
    Zap
} from 'lucide-react';

export default function AboutSection() {
    const focusAreas = [
        {
            icon: Smartphone,
            label: 'Mobile Ecosystem',
            desc: 'Native Android & Kotlin Multiplatform (KMM). Engineering unified logic across mobile platforms.',
            tag: 'Core'
        },
        {
            icon: Globe,
            label: 'Modern Web',
            desc: 'Crafting high-performance, accessible, and scalable full-stack web architectures.',
            tag: 'Core'
        }
    ];

    const satelliteInterests = [
        {
            icon: Database,
            label: 'Scalable Backend',
            desc: 'Architecting resilient APIs and data structures.'
        },
        {
            icon: Binary,
            label: 'AI & Machine Learning',
            desc: 'Integrating intelligent models into consumer applications.'
        },
        {
            icon: Zap,
            label: 'Performance Tech',
            desc: 'Low-latency optimization and fluid user experiences.'
        }
    ];

    return (
        <section id="about" className="py-24 md:py-44 bg-background relative overflow-hidden">
            <div
                className="absolute inset-0 z-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none">
                <div
                    className="absolute inset-0 bg-[grid_32px_32px] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)]"/>
            </div>

            <div className="container mx-auto px-6 relative z-10">

                <div className="flex flex-col mb-16 md:mb-24">
                    <div className="flex items-center gap-4 mb-4">
                        <motion.div
                            initial={{width: 0}}
                            whileInView={{width: 48}}
                            className="h-[1px] bg-primary"
                        />
                        <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-primary">
                            Introduction
                        </span>
                    </div>
                    <h2 className="text-7xl md:text-[10vw] font-bold tracking-tighter leading-[0.8] mb-2">
                        Behind The<br/>
                        <span className="relative">
                            Code
                            <span className="text-primary/20">.</span>
                            <motion.span
                                initial={{scaleX: 0}}
                                whileInView={{scaleX: 1}}
                                transition={{delay: 0.5, duration: 0.8}}
                                className="absolute bottom-4 left-0 w-full h-1 bg-primary/10 origin-left hidden md:block"
                            />
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className="lg:col-span-8 p-8 md:p-14 rounded-[3rem] bg-card/30 backdrop-blur-xl border border-border/50 flex flex-col justify-between relative overflow-hidden group hover:border-primary/30 transition-colors duration-500"
                    >
                        <div className="space-y-8 relative z-10">
                            <div className="flex items-center gap-3 text-primary/80">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <GraduationCap size={18}/>
                                </div>
                                <span className="text-[10px] font-mono font-bold tracking-widest uppercase italic">
                                    Education // SCEM
                                </span>
                            </div>

                            <h3 className="text-3xl md:text-5xl font-serif leading-[1.1] tracking-tight text-foreground/90">
                                Pursuing B.E. in <span className="text-primary italic">Computer Science</span>,
                                specializing in the art of scalable applications.
                            </h3>

                            <div
                                className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl font-medium">
                                <p>
                                    My academic path at Sahyadri College has sparked a deep-seated passion for
                                    application development. I don't just write code; I build meaningful
                                    bridges between <span className="text-foreground border-b border-primary/20">technical complexity</span> and
                                    <span
                                        className="text-foreground border-b border-primary/20"> user-centric value.</span>
                                </p>
                                <p>
                                    I am currently deep-diving into <span className="text-primary font-bold">Kotlin Multiplatform (KMM)</span>,
                                    while maintaining a high-active pulse on full-stack web architectures.
                                </p>
                            </div>
                        </div>
                        <div
                            className="absolute -bottom-6 -right-6 text-9xl font-bold opacity-[0.02] select-none group-hover:opacity-[0.08] group-hover:-translate-y-4 transition-all duration-700 font-mono">
                            CODE
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, scale: 0.95}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
                        className="lg:col-span-4 p-8 md:p-10 rounded-[3rem] bg-primary text-primary-foreground relative overflow-hidden flex flex-col justify-between min-h-[400px] shadow-2xl shadow-primary/20 group"
                    >
                        <div
                            className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors duration-700"/>

                        <Sparkles size={40}
                                  className="opacity-20 absolute top-10 right-10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500"/>

                        <div className="space-y-6 relative z-10">
                            <h4 className="text-2xl font-bold tracking-tighter uppercase">The Mission</h4>
                            <div className="space-y-4">
                                <p className="text-sm md:text-base opacity-95 leading-relaxed font-semibold">
                                    My objective is to transform complex technical requirements into elegant,
                                    high-performance digital products.
                                </p>
                                <p className="text-xs md:text-sm opacity-80 leading-relaxed font-medium italic">
                                    "I believe that code should be as maintainable as it is powerful. Every line I write
                                    is a commitment to architectural integrity and user delight."
                                </p>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-primary-foreground/20 flex flex-col gap-4 relative z-10">
                            <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest opacity-60 italic">
                Core_Drive // 2026
            </span>
                                <div className="p-2 bg-white/10 rounded-lg">
                                    <Code2 size={18} className="opacity-80"/>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {['Scalability', 'Performance', 'UX'].map((tag) => (
                                    <span key={tag}
                                          className="px-2 py-1 bg-white/10 rounded-md text-[9px] font-bold uppercase tracking-tighter">
                    {tag}
                </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        {focusAreas.map((area, index) => (
                            <motion.div
                                key={area.label}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{delay: index * 0.1}}
                                className="p-8 rounded-[2.5rem] bg-secondary/10 border border-border/40 hover:bg-secondary/20 hover:border-primary/30 transition-all duration-500 flex items-start gap-6 group relative overflow-hidden"
                            >
                                <div
                                    className="p-4 rounded-2xl bg-background shadow-lg text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 z-10">
                                    <area.icon size={28}/>
                                </div>
                                <div className="relative z-10">
                                    <span
                                        className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-primary/60 mb-2 block italic">
                                        {area.tag}
                                    </span>
                                    <h4 className="text-2xl font-bold mb-2 tracking-tight flex items-center gap-2">
                                        {area.label}
                                        <ArrowUpRight size={16}
                                                      className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all"/>
                                    </h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed italic">"{area.desc}"</p>
                                </div>
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
                            </motion.div>
                        ))}
                    </div>

                    <div className="lg:col-span-12 mt-8">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-2 bg-primary/5 rounded-lg border border-primary/10">
                                <Cpu size={18} className="text-primary animate-pulse"/>
                            </div>
                            <h4 className="text-sm font-bold uppercase tracking-[0.4em] opacity-40">
                                Horizon_Expansion
                            </h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {satelliteInterests.map((interest, index) => (
                                <motion.div
                                    key={interest.label}
                                    initial={{opacity: 0, x: -10}}
                                    whileInView={{opacity: 1, x: 0}}
                                    viewport={{once: true}}
                                    transition={{delay: index * 0.1}}
                                    className="p-6 rounded-[2rem] border border-dashed border-border/60 hover:border-primary/40 hover:bg-primary/[0.02] transition-all duration-300 flex flex-col gap-4 group"
                                >
                                    <div
                                        className="p-3 w-fit rounded-xl bg-secondary/20 text-primary/70 group-hover:text-primary group-hover:scale-110 transition-all">
                                        <interest.icon size={20}/>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-sm mb-1 uppercase tracking-tight group-hover:text-primary transition-colors">
                                            {interest.label}
                                        </h5>
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            {interest.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Enhanced Background Decorative Blurs */}
            <div
                className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[180px] pointer-events-none -z-10 animate-pulse"/>
            <div
                className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[150px] pointer-events-none -z-10"/>
        </section>
    );
};