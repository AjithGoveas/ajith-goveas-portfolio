'use client';

import React, {memo, useMemo, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {ArrowUpRight, Code2, Cpu, Database, Github, Globe, Layers, Layout, Monitor, Smartphone} from 'lucide-react';
import {Project, ProjectType} from '@/types';
import {useProjects} from "@/hooks/useProjects";
import {filters} from "@/constants/projects";

const TYPE_CONFIG: Record<ProjectType, { icon: React.ReactNode; label: string }> = {
    [ProjectType.Android]: {icon: <Smartphone className="w-3.5 h-3.5"/>, label: "Android"},
    [ProjectType.Web]: {icon: <Globe className="w-3.5 h-3.5"/>, label: "Web"},
    [ProjectType.CrossPlatform]: {icon: <Smartphone className="w-3.5 h-3.5"/>, label: "Cross-Platform"},
    [ProjectType.Frontend]: {icon: <Layout className="w-3.5 h-3.5"/>, label: "Frontend"},
    [ProjectType.FullStack]: {icon: <Layers className="w-3.5 h-3.5"/>, label: "FullStack"},
    [ProjectType.Backend]: {icon: <Database className="w-3.5 h-3.5"/>, label: "Backend"},
    [ProjectType.Desktop]: {icon: <Monitor className="w-3.5 h-3.5"/>, label: "Desktop"},
    [ProjectType.DataScience]: {icon: <Code2 className="w-3.5 h-3.5"/>, label: "Data"},
    [ProjectType.MachineLearning]: {icon: <Cpu className="w-3.5 h-3.5"/>, label: "ML"},
    [ProjectType.AI]: {icon: <Cpu className="w-3.5 h-3.5"/>, label: "AI"},
};

const ProjectTile = memo(({project, index}: { project: Project; index: number }) => {
    const isHero = project.order === 1;
    const isWide = project.order === 4;
    const config = TYPE_CONFIG[project.type] || TYPE_CONFIG[ProjectType.Web];

    return (
        <motion.div
            layout
            initial={{opacity: 0, scale: 0.95}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0.95}}
            transition={{duration: 0.4, ease: [0.23, 1, 0.32, 1]}}
            className={`
                relative group flex
                ${isHero ? 'md:col-span-2 md:row-span-2 min-h-[450px] md:min-h-[600px]' : 'col-span-1 min-h-[350px]'}
                ${isWide ? 'md:col-span-2 min-h-[350px]' : ''}
            `}
        >
            <div className={`
                relative h-full w-full p-8 md:p-10 rounded-[2.5rem] flex flex-col justify-between
                border transition-all duration-700
                ${isHero
                ? 'bg-foreground text-background dark:bg-zinc-100 dark:text-zinc-900 border-transparent shadow-2xl'
                : 'bg-card/40 backdrop-blur-xl border-border/40 hover:border-primary/50 shadow-sm'}
            `}>
                <div className="flex justify-between items-start z-10">
                    <div
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full border border-current/10 bg-current/5`}>
                        {config.icon}
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                            {config.label}
                        </span>
                    </div>
                    <span className="text-[10px] font-mono opacity-40 font-bold tracking-tighter">
                        {project.year}
                    </span>
                </div>

                <div className="mt-10 z-10">
                    <h3 className={`font-bold tracking-tighter leading-[0.9] mb-6
                        ${isHero ? 'text-6xl md:text-8xl' : 'text-3xl md:text-4xl'}`}>
                        {project.title}
                    </h3>
                    <p className={`font-serif leading-relaxed opacity-70 max-w-[450px]
                        ${isHero ? 'text-lg md:text-xl' : 'text-sm'}`}>
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-x-4 gap-y-2 mt-8">
                        {project.tech.map((t) => (
                            <span key={t} className="text-[10px] font-mono uppercase tracking-widest opacity-40">
                                // {t}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-current/10 flex items-center justify-between z-10">
                    <div className="flex gap-6 items-center">
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank"
                               className="transition-transform hover:scale-110 opacity-70 hover:opacity-100">
                                <Github className="w-6 h-6"/>
                            </a>
                        )}
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" className="flex items-center gap-1 group/link">
                                <span className="text-[10px] font-bold uppercase tracking-tighter">View Project</span>
                                <ArrowUpRight
                                    className="w-4 h-4 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1"/>
                            </a>
                        )}
                    </div>
                    <span className="text-5xl font-bold opacity-5 italic pointer-events-none select-none">
                        0{project.order}
                    </span>
                </div>

                {isHero && (
                    <div
                        className="absolute top-0 right-0 w-64 h-64 bg-background/5 blur-[100px] -mr-32 -mt-32 pointer-events-none"/>
                )}
            </div>
        </motion.div>
    );
});

export default function ProjectsSection() {
    const {projects, isLoading} = useProjects();
    const [filter, setFilter] = useState('all');

    const displayData = useMemo(() => {
        if (!projects) return [];
        return (filter === 'all' ? projects : projects.filter(p => p.type?.toLowerCase() === filter.toLowerCase()))
            .sort((a, b) => a.order - b.order);
    }, [filter, projects]);

    if (isLoading) return <div
        className="py-40 text-center font-mono opacity-20 text-4xl tracking-tighter animate-pulse">SYSTEM_LOADING_PROJECTS...</div>;

    return (
        <section id="projects" className="py-32 md:py-48 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">

                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24 md:mb-36">
                    <div className="space-y-6">
                        <div className="h-1 w-16 bg-primary rounded-full"/>
                        <h2 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.8]">
                            Selected<br/>Work<span className="text-muted-foreground/20">.</span>
                        </h2>
                    </div>

                    <nav
                        className="flex flex-wrap gap-2 p-3.5 bg-secondary/40 backdrop-blur-md rounded-[2rem] border border-border/40 max-w-2xl">
                        {filters.map((f) => {
                            const isActive = filter === f.id;
                            return (
                                <button
                                    key={f.id}
                                    onClick={() => setFilter(f.id)}
                                    className={`relative px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 z-10
                                    ${isActive ? 'text-primary-foreground' : 'text-muted-foreground hover:text-primary'}`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeFilter"
                                            className="absolute inset-0 bg-primary rounded-full z-[-1]"
                                            transition={{type: 'spring', bounce: 0.15, duration: 0.6}}
                                        />
                                    )}
                                    {f.label}
                                </button>
                            );
                        })}
                    </nav>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
                >
                    <AnimatePresence mode="popLayout">
                        {displayData.map((project, index) => (
                            <ProjectTile key={project.id} project={project} index={index}/>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}