'use client';

import React, {useMemo, useRef} from 'react';
import Image from 'next/image';
import {motion, useScroll, useSpring, useTransform} from 'framer-motion';
import {ArrowUpRight, Code2, Download, Globe, Smartphone, Zap} from 'lucide-react';
import {Button} from '@/components/ui/button';
import SocialLinks from "@/components/SocialLinks";
import {useProjects} from "@/hooks/useProjects";
import {useIsMobile} from "@/hooks/use-mobile";

interface HeroProps {
    name: string;
}

export default function HeroSection({name}: HeroProps) {
    const targetRef = useRef<HTMLDivElement>(null);
    const isMobile = useIsMobile();
    const {projects} = useProjects();

    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    const smoothYProgress = useSpring(scrollYProgress, {stiffness: 100, damping: 30});

    const textY = useTransform(smoothYProgress, [0, 0.5], [0, isMobile ? 0 : 80]);
    const imageY = useTransform(smoothYProgress, [0, 0.5], [0, isMobile ? 0 : -60]);
    const opacityFade = useTransform(smoothYProgress, [0, 0.3], [1, isMobile ? 1 : 0]);
    const footerOpacity = useTransform(smoothYProgress, [0, 0.7, 0.9], [1, 1, isMobile ? 1 : 0]);
    const footerY = useTransform(smoothYProgress, [0, 1], [0, isMobile ? 0 : -30]);

    const currentYear = new Date().getFullYear();
    const projectCount = useMemo(() => (projects?.length || 0), [projects]);
    const experienceYears = useMemo(() => currentYear - 2023, []);

    const [firstName, ...lastNameParts] = name.split(' ');
    const lastName = lastNameParts.join(' ');

    const HERO_FOOTER = [
        {label: "ENGINEERING", value: "Kotlin & React", icon: <Code2 size={12} aria-hidden="true"/>},
        {
            label: "PORTFOLIO",
            value: `${Math.max(0, projectCount - 1)} Selected`,
            icon: <Smartphone size={12} aria-hidden="true"/>
        },
        {label: "EXPERIENCE", value: `${experienceYears} Years+`, icon: <Zap size={12} aria-hidden="true"/>},
        {label: "LOCATION", value: "India / Remote", icon: <Globe size={12} aria-hidden="true"/>},
    ];

    return (
        <section
            ref={targetRef}
            id="hero"
            className="relative min-h-[100dvh] flex flex-col bg-background pt-[clamp(1.5rem,5vh,3rem)] pb-[clamp(1.5rem,3vh,2.5rem)] overflow-hidden"
        >
            <div className="absolute inset-0 z-0 select-none pointer-events-none" aria-hidden="true">
                <div
                    className="absolute inset-0 bg-[grid_30px_30px] md:bg-[grid_60px_60px] bg-[linear-gradient(to_right,#808080_0.05,transparent_0.5px),linear-gradient(to_bottom,#808080_0.05,transparent_0.5px)] opacity-[0.12]"/>
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col flex-grow">
                <div className="max-w-7xl mx-auto w-full flex flex-col flex-grow">

                    <header className="flex flex-row justify-between items-center mb-[clamp(2rem,8vh,6rem)] w-full">
                        <motion.div
                            initial={{opacity: 0, y: -10}}
                            animate={{opacity: 1, y: 0}}
                            className="flex items-center gap-2"
                        >
                            <div
                                className="group flex items-center bg-secondary/20 hover:bg-secondary/40 border border-border/40 backdrop-blur-md rounded-full px-3 py-1 transition-all duration-300">
                                <span
                                    className="text-[9px] font-bold font-mono tracking-tighter text-muted-foreground/50 mr-2">Yr</span>
                                <span
                                    className="text-[10px] font-mono tracking-[0.15em] text-foreground/80">{currentYear}</span>
                            </div>

                            <div className="w-[1px] h-4 bg-primary/40 mx-1"/>

                            {/* Status Tag */}
                            <div
                                className="flex items-center bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-md rounded-full px-3 py-1 shadow-[0_0_15px_-5px_rgba(16,185,129,0.2)]">
                                <div className="relative flex mr-2">
                                    <span
                                        className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-40"></span>
                                    <span
                                        className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                                </div>
                                <span
                                    className="text-[9px] font-mono font-bold tracking-[0.2em] text-emerald-500/90 uppercase">
                ENGINEERING
            </span>
                            </div>
                        </motion.div>

                        <nav className="flex items-center">
                            <SocialLinks/>
                        </nav>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center flex-grow">
                        <motion.div
                            style={isMobile ? {} : {y: textY, opacity: opacityFade}}
                            className="lg:col-span-7 z-20 order-2 lg:order-1"
                        >
                            <h1 className="text-[14vw] sm:text-[12vw] lg:text-[9.5vw] font-bold tracking-[-0.04em] leading-[0.85] mb-6 md:mb-10 text-foreground">
                                {firstName}<br/>
                                <span className="text-primary italic font-serif font-light">{lastName}</span>
                                <span className="text-primary/20">.</span>
                            </h1>
                            <div className="space-y-6 md:space-y-8 max-w-xl">
                                <h2 className="text-xl md:text-3xl lg:text-4xl font-medium tracking-tight leading-tight text-foreground/90">
                                    Engineering{" "}
                                    <span className="relative inline-block">
                                        <span className="text-primary font-semibold">Native Android</span>
                                        {/* Double Underline for "Native Android" */}
                                        <svg className="absolute -bottom-2.5 left-0 w-full h-3 text-purple-500/70"
                                             viewBox="0 0 100 15" preserveAspectRatio="none">
                                            {/* Top thicker freestyle line */}
                                            <motion.path
                                                initial={{pathLength: 0}}
                                                whileInView={{pathLength: 1}}
                                                transition={{duration: 1.2, delay: 0.5}}
                                                d="M0,5 C20,2 80,8 100,5"
                                                fill="transparent"
                                                stroke="currentColor"
                                                strokeWidth="2.5" // Increased thickness
                                                strokeLinecap="round"
                                            />
                                            {/* Bottom thinner freestyle line */}
                                            <motion.path
                                                initial={{pathLength: 0}}
                                                whileInView={{pathLength: 1}}
                                                transition={{duration: 1, delay: 0.7}}
                                                d="M5,10 C30,13 70,7 95,10"
                                                fill="transparent"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </span>{" "}& <br className="hidden sm:block"/>{" "}
                                    <span className="relative inline-block">High-Performance{" "}
                                        <span className="relative">
                                            Web logic
                                            <svg className="absolute -bottom-2.5 left-0 w-full h-3 text-purple-500/70"
                                                 viewBox="0 0 100 15" preserveAspectRatio="none">
                                                <motion.path
                                                    initial={{pathLength: 0}}
                                                    whileInView={{pathLength: 1}}
                                                    transition={{duration: 1.2, delay: 0.8}}
                                                    d="M0,5 Q30,10 60,5 T100,5"
                                                    fill="transparent"
                                                    stroke="currentColor"
                                                    strokeWidth="2.5"
                                                    strokeLinecap="round"
                                                />
                                                <motion.path
                                                    initial={{pathLength: 0}}
                                                    whileInView={{pathLength: 1}}
                                                    transition={{duration: 1, delay: 1}}
                                                    d="M5,10 C25,12 75,8 95,10"
                                                    fill="transparent"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </span>
                                    </span>.
                                </h2>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button size="lg"
                                            onClick={() => {
                                                document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'});
                                            }}
                                            className="w-full sm:w-auto h-14 px-10 rounded-full bg-foreground text-background hover:bg-foreground/90 font-bold group shadow-lg transition-transform active:scale-95">
                                        View Projects
                                        <ArrowUpRight
                                            className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"/>
                                    </Button>
                                    <Button variant="outline" size="lg"
                                            asChild
                                            className="w-full sm:w-auto h-14 px-10 rounded-full border-border/80 font-mono text-[10px] uppercase tracking-widest hover:bg-secondary/20 transition-colors">
                                        <a
                                            href="/resume.pdf"
                                            download="Ajith_Goveas_Resume.pdf"
                                        >
                                            Download CV <Download className="ml-2 w-4 h-4"/>
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>

                        <div className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center lg:justify-end">
                            <motion.div
                                style={isMobile ? {} : {y: imageY}}
                                className="relative aspect-[4/5] w-full max-w-[280px] sm:max-w-[320px] md:max-w-[420px] group"
                            >
                                <div
                                    className="absolute inset-0 rounded-[2.5rem] md:rounded-[4rem] border border-primary/10 bg-primary/[0.02] -rotate-6 scale-[1.02] transition-transform duration-1000 group-hover:-rotate-2 group-hover:scale-105"/>

                                <motion.div
                                    initial={{rotate: 3}}
                                    whileHover={{rotate: 0, scale: 1.02}}
                                    transition={{type: "spring", stiffness: 200, damping: 25}}
                                    className="relative h-full w-full rounded-[2.3rem] md:rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl z-10 bg-zinc-900"
                                >
                                    <Image
                                        src="/ajith.webp"
                                        alt={name}
                                        fill
                                        sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 420px"
                                        className={`object-cover transition-all duration-1000 group-hover:scale-110 
                    ${isMobile ? "grayscale-0" : "grayscale group-hover:grayscale-0 contrast-[1.1]"}`}
                                        priority
                                    />

                                    {/* 3. Tech Overlays inside the frame */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700"/>

                                    <div
                                        className={`absolute bottom-4 left-4 right-4 flex flex-col gap-2 transition-all duration-700 ${isMobile ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"}`}>
                                        <div
                                            className="flex items-center gap-2 p-3 backdrop-blur-xl bg-black/40 border border-white/10 rounded-xl text-[10px] font-mono text-white uppercase font-bold tracking-widest">
                                            <Smartphone size={12} className="text-primary"/> Mobile Architecture
                                        </div>
                                        <div
                                            className="flex items-center gap-2 p-3 backdrop-blur-xl bg-black/40 border border-white/10 rounded-xl text-[10px] font-mono text-white uppercase font-bold tracking-widest">
                                            <Globe size={12} className="text-primary"/> Web Ecosystems
                                        </div>
                                    </div>
                                </motion.div>

                                {/* 4. Decorative Corner "Brackets" */}
                                <div
                                    className="absolute -top-4 -right-4 w-16 h-16 border-t border-r border-primary/20 rounded-tr-[2rem] -z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-700"/>
                                <div
                                    className="absolute -bottom-4 -left-4 w-16 h-16 border-b border-l border-primary/20 rounded-bl-[2rem] -z-10 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-700"/>
                            </motion.div>
                        </div>
                    </div>

                    <motion.footer
                        style={isMobile ? {} : {opacity: footerOpacity, y: footerY}}
                        className="w-full mt-[clamp(2.5rem,10vh,6rem)]"
                    >
                        <dl className="border-t border-border/20 pt-8 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
                            {HERO_FOOTER.map((stat) => (
                                <div key={stat.label}
                                     className="flex flex-col items-center md:items-start text-center md:text-left">
                                    <dt className="flex items-center gap-2 mb-2 text-muted-foreground/40 uppercase tracking-[0.3em] font-bold text-[8px] md:text-[9px] font-mono">
                                        {stat.icon}
                                        {stat.label}
                                    </dt>
                                    <dd className="text-lg md:text-2xl font-bold tracking-tighter text-foreground/80 leading-none">
                                        {stat.value}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </motion.footer>
                </div>
            </div>
        </section>
    );
}