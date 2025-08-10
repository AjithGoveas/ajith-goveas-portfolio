// File: src/components/sections/HeroSection.tsx
'use client';

import React, {useRef} from 'react';
import Image from 'next/image';
import {motion, useScroll, useTransform} from 'framer-motion';
import {ArrowUpRight, Code2, Cog, Download, Eye, Monitor, Smartphone, Sparkles} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import SocialLinks from "@/components/SocialLinks";
import SimpleTypingAnimation from "@/components/SimpleTypingAnimation";

// --- Simple Reusable Components ---

// const SimpleTypingAnimation: React.FC<{ text: string; delay?: number }> = ({text, delay = 0}) => {
//     const [displayText, setDisplayText] = useState('');
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [showCursor, setShowCursor] = useState(true);
//
//     useEffect(() => {
//         if (currentIndex < text.length) {
//             const timer = setTimeout(() => {
//                 setDisplayText(prev => prev + text[currentIndex]);
//                 setCurrentIndex(prev => prev + 1);
//             }, delay);
//             return () => clearTimeout(timer);
//         }
//     }, [currentIndex, text]);
//
//     useEffect(() => {
//         const cursorTimer = setInterval(() => {
//             setShowCursor(prev => !prev);
//         }, 530);
//         return () => clearInterval(cursorTimer);
//     }, []);
//
//     return (
//         <span className="font-mono">
//             {displayText}
//             {currentIndex < text.length && (
//                 <span
//                     className={`inline-block w-0.5 h-12 bg-primary ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-75`}/>
//             )}
//         </span>
//     );
// };

const TechBadge: React.FC<{ name: string; color: string }> = ({name, color}) => (
    <Badge
        variant={"outline"}
        className={`inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-background/50 border border-border ${color}`}
    >
        {name}
    </Badge>
);

// --- Main Hero Section Component ---

interface HeroProps {
    name: string;
}

const HeroSection: React.FC<HeroProps> = ({name}) => {
    const scrollTargetRef = useRef<HTMLDivElement>(null);
    const {scrollY} = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0.75]);

    const handleScrollToProjects = () => {
        scrollTargetRef.current?.scrollIntoView({behavior: 'smooth'});
    };

    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'resume.pdf';
        link.click();
    };

    return (
        <>
            <section
                id="hero"
                className="relative flex items-center justify-center min-h-screen bg-background"
            >
                {/* Subtle background pattern */}
                <div className="absolute inset-0 bg-grid-white/5 bg-grid-16"/>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"/>

                <motion.div
                    style={{y, opacity}}
                    className="container relative z-10 px-6 mx-auto"
                >
                    <div className="max-w-6xl mx-auto">
                        <div className="grid items-center gap-12 lg:grid-cols-2">
                            {/* LEFT CONTENT */}
                            <div className="space-y-8">
                                <motion.div
                                    initial={{opacity: 0, x: -50}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{duration: 0.8, delay: 0.2}}
                                >
                                    <Badge
                                        variant="secondary"
                                        className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 text-primary border border-primary/20 backdrop-blur-xl rounded-full px-4 py-2 w-fit"
                                    >
                                        <Sparkles className="w-4 h-4 mr-2 fill-yellow-300"/>
                                        Available for opportunities
                                        <ArrowUpRight className="w-3 h-3 ml-2"/>
                                    </Badge>
                                </motion.div>

                                <motion.div
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.6, delay: 0.1}}
                                >
                                    <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                                        Hi, I'm <br/>
                                        <span className="text-primary">
                                            <SimpleTypingAnimation text={name} startDelay={100}/>
                                        </span>
                                    </h1>
                                </motion.div>

                                <motion.div
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.6, delay: 0.2}}
                                    className="space-y-4"
                                >
                                    <h2 className="text-xl md:text-2xl text-muted-foreground">
                                        Android Developer & Frontend Engineer
                                    </h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                                        I build native mobile applications and modern web experiences.
                                        Passionate about clean code, user experience, and solving real-world problems
                                        through technology.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.6, delay: 0.3}}
                                    className="flex flex-wrap gap-2"
                                >
                                    <TechBadge name="Android" color="text-green-400"/>
                                    <TechBadge name="Kotlin" color="text-purple-400"/>
                                    <TechBadge name="React" color="text-cyan-400"/>
                                    <TechBadge name="TypeScript" color="text-blue-400"/>
                                    <TechBadge name="JavaScript" color="text-yellow-400"/>
                                </motion.div>

                                <motion.div
                                    className="flex flex-col sm:flex-row gap-4"
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.6, delay: 0.4}}
                                >
                                    <Button
                                        size="lg"
                                        onClick={handleScrollToProjects}
                                        className="bg-primary hover:bg-primary/90"
                                    >
                                        <Eye className="w-4 h-4 mr-2"/>
                                        View My Work
                                    </Button>

                                    <Button
                                        variant="outline"
                                        size="lg"
                                        onClick={handleDownloadResume}
                                        className="border-primary/20 hover:border-primary/40"
                                    >
                                        <Download className="w-4 h-4 mr-2"/>
                                        Download Resume
                                    </Button>
                                </motion.div>

                                <motion.div
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.6, delay: 0.5}}
                                >
                                    <SocialLinks/>
                                </motion.div>
                            </div>

                            {/* RIGHT IMAGE - Responsive */}
                            <motion.div
                                className="flex items-center justify-center lg:justify-end"
                                initial={{opacity: 0, scale: 0.9}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{duration: 0.6, delay: 0.3}}
                            >
                                <div
                                    className="relative group cursor-pointer w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
                                    {/* Rotating border */}
                                    <motion.div
                                        className="absolute inset-0 rounded-full border border-primary/30"
                                        animate={{rotate: 360}}
                                        transition={{duration: 20, repeat: Infinity, ease: 'linear'}}
                                    />
                                    {/* Outer ring */}
                                    <motion.div
                                        className="absolute inset-0 rounded-full border border-white/10 scale-110"
                                        animate={{rotate: -360}}
                                        transition={{duration: 25, repeat: Infinity, ease: 'linear'}}
                                    />
                                    {/* Glow */}
                                    <div className="absolute inset-0 rounded-full bg-primary/5 blur-2xl scale-105"/>

                                    {/* Image */}
                                    <motion.div
                                        whileHover={{scale: 1.05}}
                                        transition={{type: 'spring', stiffness: 300, damping: 10}}
                                        className="w-full h-full"
                                    >
                                        <Image
                                            src="/api/placeholder/400/400"
                                            alt={`${name} - Android & Frontend Developer`}
                                            width={400}
                                            height={400}
                                            className="relative object-cover rounded-full border-2 border-white/20 group-hover:border-primary/50 transition-colors duration-300 w-full h-full"
                                            priority
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>

                        {/* --- Scroll Indicator (JetBrains Minimalist Premium) --- */}
                        <motion.div
                            className="absolute bottom-8 left-1/2 -translate-x-1/2"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.6, delay: 1}}
                        >
                            <button
                                onClick={handleScrollToProjects}
                                className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 focus:outline-none"
                            >
                                {/* Label */}
                                <span
                                    className="text-[11px] uppercase tracking-[0.15em] opacity-80 group-hover:opacity-100 transition-opacity duration-300">
      Scroll
    </span>

                                {/* Sleek track with gradient fade */}
                                <div className="relative w-[2px] h-8 overflow-hidden">
                                    {/* Faint track */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-b from-transparent via-current/30 to-transparent"/>

                                    {/* Moving dot */}
                                    <motion.div
                                        className="absolute left-1/2 -translate-x-1/2 w-[6px] h-[6px] bg-current rounded-full shadow-[0_0_4px_currentColor]"
                                        animate={{y: [0, 28, 0]}}
                                        transition={{duration: 1.5, repeat: Infinity, ease: "easeInOut"}}
                                    />
                                </div>
                            </button>
                        </motion.div>
                    </div>
                </motion.div>

                <div ref={scrollTargetRef} id="achievements"/>
            </section>

            {/* Modern Stats Section */}
            <section id="achievements" className="py-20">
                <div className="container px-6 mx-auto">
                    <div className="max-w-6xl mx-auto">
                        {/* Stats Grid */}
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                {
                                    icon: <Code2 className="w-6 h-6 text-primary"/>,
                                    count: "3+",
                                    label: "Years of Development",
                                },
                                {
                                    icon: <Smartphone className="w-6 h-6 text-primary"/>,
                                    count: "50+",
                                    label: "Projects Delivered",
                                },
                                {
                                    icon: <Monitor className="w-6 h-6 text-primary"/>,
                                    count: "25+",
                                    label: "Happy Clients",
                                },
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{opacity: 0, y: 20}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true}}
                                    transition={{duration: 0.5, delay: i * 0.1}}
                                >
                                    <Card
                                        className="bg-background/70 border border-white/10 hover:border-primary/20 backdrop-blur-xl transition-colors duration-300 shadow-sm rounded-xl">
                                        <CardHeader
                                            className="flex flex-col items-center justify-center space-y-2 pb-2">
                                            <div
                                                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                                {stat.icon}
                                            </div>
                                            <div className="text-3xl font-bold text-primary">{stat.count}</div>
                                        </CardHeader>
                                        <CardContent className="text-center pt-0">
                                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom tagline */}
                        <motion.div
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.6, delay: 0.3}}
                            className="text-center mt-16"
                        >
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.02] border border-border/50 rounded-full">
                                <Cog className="w-4 h-4 text-muted-foreground"/>
                                <span className="text-sm text-muted-foreground/70 italic">Focused on building quality software and meaningful digital experiences</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default HeroSection;