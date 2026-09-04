'use client';

import React, {useMemo} from 'react';
import {m} from 'framer-motion';
import {IconBolt, IconBox, IconDeviceMobile, IconStackFront, IconTerminal2, IconWorld} from "@tabler/icons-react";
import {SkillCategory} from "@/types";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: "Mobile Ecosystem",
        icon: IconDeviceMobile,
        skills: ["Kotlin", "Android SDK", "Jetpack Compose", "KMM", "Java", "Room", "Retrofit"],
        description: "Native Android performance and modern Cross-Platform architectures.",
        accent: "text-blue-500",
        glow: "hover:after:bg-blue-500/10",
        span: "lg:col-span-7"
    },
    {
        title: "Full-Stack Web",
        icon: IconWorld,
        skills: ["React", "Next.js", "TypeScript", "Tailwind", "JavaScript", "Full-stack"],
        description: "Scalable web applications with a focus on UI/UX and speed.",
        accent: "text-emerald-500",
        glow: "hover:after:bg-emerald-500/10",
        span: "lg:col-span-5"
    },
    {
        title: "Tools & Cloud",
        icon: IconBox,
        skills: ["Git", "Firebase", "REST APIs", "Vite", "Postman", "CI/CD"],
        description: "Development workflows and cloud-based data management.",
        accent: "text-purple-500",
        glow: "hover:after:bg-purple-500/10",
        span: "lg:col-span-5"
    },
    {
        title: "Architecture & Strategy",
        icon: IconStackFront,
        skills: ["Scaling", "Problem Solving", "UI Design", "Prototyping"],
        description: "Building meaningful projects that bring high value to users.",
        accent: "text-orange-500",
        glow: "hover:after:bg-orange-500/10",
        span: "lg:col-span-7"
    }
];

export default function SkillsSection() {

    const BackgroundGrid = useMemo(() => (
        <div className="absolute inset-0 z-0 select-none pointer-events-none" aria-hidden="true">
            <div
                className="absolute inset-0 bg-[grid_32px_32px] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] opacity-[0.04] mask-[radial-gradient(ellipse_at_center,black,transparent)]"/>
            <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background"/>
        </div>
    ), []);

    return (
        <section
            id="skills"
            className="py-16 md:py-44 bg-background relative overflow-hidden"
            aria-labelledby="skills-heading"
        >
            {BackgroundGrid}

            <div className="container mx-auto px-5 md:px-6 relative z-10">
                <header className="max-w-7xl mx-auto flex flex-col mb-16 md:mb-28">
                    <div className="flex items-center gap-3 mb-4">
                        <m.div
                            initial={{width: 0}}
                            whileInView={{width: 48}}
                            className="h-1 w-16 bg-primary rounded-full"
                        />
                        <span
                            className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary/80">TECHNICAL_CAPABILITIES</span>
                    </div>
                    <h2
                        id="skills-heading"
                        className="text-5xl sm:text-7xl md:text-[10vw] font-bold tracking-tighter leading-[0.9] md:leading-[0.8] mb-2">
                        Technical<br/>
                        <span className="relative">
                            Arsenal
                            <span className="text-primary/20">.</span>
                            <m.span
                                initial={{scaleX: 0}}
                                whileInView={{scaleX: 1}}
                                transition={{delay: 0.5, duration: 0.8}}
                                className="absolute bottom-4 left-0 w-full h-1 bg-primary/10 origin-left hidden md:block"
                            />
                        </span>
                    </h2>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-8 max-w-7xl mx-auto">
                    {SKILL_CATEGORIES.map((category: SkillCategory, idx) => {
                        const Icon = category.icon;
                        return (
                            <m.div
                                key={category.title}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true, margin: "-50px"}}
                                transition={{delay: idx * 0.05, ease: "easeOut"}}
                                className={`${category.span} group flex`}
                            >
                                <Card className={`
                                    relative w-full
                                    p-6 md:p-12 rounded-4xl md:rounded-[3.5rem] 
                                    bg-card/40 backdrop-blur-md border-border/50 gap-0 flex flex-col justify-between
                                    transition-all duration-500
                                    after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500
                                    ${category.glow} hover:after:opacity-100 hover:border-primary/20
                                `}>
                                    <CardHeader className="p-0 flex flex-row justify-between items-start mb-8 md:mb-16 space-y-0 z-10">
                                        <div className={`
                                            p-3 md:p-4 bg-background border border-border/40 rounded-xl md:rounded-2xl shadow-xl 
                                            group-hover:bg-primary group-hover:text-primary-foreground 
                                            transition-all duration-500 ${category.accent}
                                        `}>
                                            <Icon size={20} className="md:w-6 md:h-6" stroke={1.5} aria-hidden="true"/>
                                        </div>
                                        <span
                                            className="text-[10px] font-mono opacity-20 group-hover:opacity-100 transition-opacity uppercase font-bold">
                                            Mod_0{idx + 1}
                                        </span>
                                    </CardHeader>

                                    <CardContent className="p-0 z-10 flex flex-col h-full justify-between">
                                        <div>
                                            <CardTitle className="text-xl md:text-3xl font-bold tracking-tighter mb-3 p-0">
                                                {category.title}
                                            </CardTitle>
                                            <p className="text-muted-foreground mb-8 max-w-sm text-xs md:text-base leading-relaxed">
                                                {category.description}
                                            </p>
                                        </div>

                                        <ul className="flex flex-wrap gap-2 mt-auto"
                                            aria-label={`Skills in ${category.title}`}>
                                            {category.skills.map(skill => (
                                                <li key={skill}>
                                                    <Badge variant="outline" className="px-2.5 md:px-4 py-1 md:py-2 bg-background/60 border border-border/60 rounded-lg md:rounded-xl text-[9px] md:text-xs font-bold tracking-tight uppercase">
                                                        {skill}
                                                    </Badge>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </m.div>
                        );
                    })}
                </div>

                <footer
                    className="max-w-7xl mx-auto mt-10 md:mt-16 flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-8 py-5 rounded-3xl md:rounded-4xl bg-secondary/5 border border-border/40 font-mono">
                    <div className="flex items-center gap-4">
                        <IconTerminal2 size={16} stroke={1.5} className="text-primary" aria-hidden="true"/>
                        <p className="text-[11px] tracking-tighter text-muted-foreground">
                            <span className="text-primary font-bold animate-pulse">●</span> root@user:~/skills$ <kbd
                            className="text-foreground italic bg-transparent p-0 border-none uppercase">./fetch_stacks
                            --all</kbd>
                        </p>
                    </div>
                    <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest">
                        <div className="flex items-center gap-2 text-primary">
                            <IconBolt size={14} stroke={1.5} className="fill-primary"/>
                            <span>SEO_OPTIMIZED</span>
                        </div>
                        <span className="opacity-30 hidden md:inline">Latency: 2ms</span>
                    </div>
                </footer>
            </div>
        </section>
    );
}