'use client';

import React, {memo, useMemo, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {
    IconArrowUpRight,
    IconBrandAndroid,
    IconBrandGithub,
    IconCode,
    IconCpu,
    IconDatabase,
    IconDeviceDesktop,
    IconDeviceMobile,
    IconWorld,
    IconStackFront,
    IconLayoutDashboard
} from '@tabler/icons-react';
import {Project, ProjectType} from '@/types';
import {useProjects} from "@/hooks/useProjects";
import {filters} from "@/constants/projects";

const TYPE_CONFIG: Record<ProjectType, { icon: React.ReactNode; label: string }> = {
    [ProjectType.Android]: {icon: <IconBrandAndroid size={18} stroke={1.5}/>, label: "Android"},
    [ProjectType.Web]: {icon: <IconWorld size={18} stroke={1.5}/>, label: "Web"},
    [ProjectType.CrossPlatform]: {icon: <IconDeviceMobile size={18} stroke={1.5}/>, label: "KMM/CMP"},
    [ProjectType.Frontend]: {icon: <IconLayoutDashboard size={18} stroke={1.5}/>, label: "Frontend"},
    [ProjectType.FullStack]: {icon: <IconStackFront size={18} stroke={1.5}/>, label: "FullStack"},
    [ProjectType.Backend]: {icon: <IconDatabase size={18} stroke={1.5}/>, label: "Backend"},
    [ProjectType.Desktop]: {icon: <IconDeviceDesktop size={18} stroke={1.5}/>, label: "Desktop"},
    [ProjectType.DataScience]: {icon: <IconCode size={18} stroke={1.5}/>, label: "Data"},
    [ProjectType.MachineLearning]: {icon: <IconCpu size={18} stroke={1.5}/>, label: "ML"},
    [ProjectType.AI]: {icon: <IconCpu size={18} stroke={1.5}/>, label: "AI"},
};

const ProjectTile = memo(({project, index}: { project: Project; index: number }) => {

    const isHero = index === 0;
    const isWide = index === 3;

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
                ${isHero ? 'lg:col-span-2 lg:row-span-2 min-h-[500px] lg:min-h-[700px]' : 'col-span-1 min-h-[400px]'}
                ${isWide ? 'lg:col-span-2 min-h-[400px]' : ''}
            `}
        >
            <div className={`
                relative h-full w-full p-8 md:p-12 rounded-[3rem] flex flex-col justify-between
                border transition-all duration-700 overflow-hidden
                ${isHero
                ? 'bg-zinc-950 text-white dark:bg-zinc-50 dark:text-zinc-950 border-transparent shadow-2xl'
                : 'bg-card/40 backdrop-blur-xl border-border/40 hover:border-primary/50 shadow-sm'}
            `}>

                <div className="flex justify-between items-start z-10">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-current/10 bg-current/5">
                        {config.icon}
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                            {config.label}
                        </span>
                    </div>

                    <div className="flex flex-col items-end">
                        <span className="text-[10px] font-mono opacity-40 font-bold tracking-widest uppercase">
                            Rel_Year
                        </span>
                        <span className="text-sm font-mono font-bold tracking-tighter">
                            {project.year}
                        </span>
                    </div>
                </div>

                <div className={`${isHero ? 'mt-20' : 'mt-10'} z-10`}>
                    <h3 className={`font-bold tracking-tighter leading-[0.85] mb-6
                        ${isHero ? 'text-6xl md:text-[6.5rem] font-calSans' : 'text-3xl md:text-5xl font-inter'}`}>
                        {project.title}
                    </h3>
                    <p className={`font-inter leading-relaxed opacity-60 max-w-[450px]
                        ${isHero ? 'text-lg md:text-xl' : 'text-sm'}`}>
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-x-6 gap-y-3 mt-10">
                        {project.tech.map((t) => (
                            <span key={t} className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40">
                                // {t}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-current/10 flex items-center justify-between z-10">
                    <div className="flex gap-8 items-center">
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank"
                               className="transition-all hover:scale-110 opacity-60 hover:opacity-100 hover:text-primary">
                                <IconBrandGithub size={28} stroke={1.5}/>
                            </a>
                        )}
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" className="flex items-center gap-2 group/link">
                                <span className="text-[10px] font-bold uppercase tracking-widest">Live_Deploy</span>
                                <IconArrowUpRight
                                    size={20}
                                    className="transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 text-primary"/>
                            </a>
                        )}
                    </div>

                    {/* Ghost Number remains tied to Index for visual progression */}
                    <span className={`absolute -bottom-6 right-6 font-mono italic font-bold opacity-[0.04] dark:opacity-[0.07] select-none pointer-events-none leading-none group-hover:opacity-[0.08] group-hover:-translate-y-4 transition-all duration-700
                        ${isHero ? 'text-[15rem]' : 'text-9xl'}`}>
                        {index + 1}
                    </span>
                </div>

                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                     style={{
                         backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                         backgroundSize: '32px 32px'
                     }}/>
            </div>
        </motion.div>
    );
});

export default function ProjectsSection() {
    const {projects, isLoading} = useProjects();
    const [filter, setFilter] = useState('all');

    const displayData = useMemo(() => {
        if (!projects?.length) return [];

        // 1. Perform filtering and sorting in a single pass to reduce iterations
        return projects
            .filter((project) => {
                if (filter === 'all') return true;
                return project.type?.toLowerCase() === filter.toLowerCase();
            })
            .sort((a, b) => {
                // Defensive sort: handles missing 'order' by pushing them to the end
                const orderA = a.order ?? Number.MAX_SAFE_INTEGER;
                const orderB = b.order ?? Number.MAX_SAFE_INTEGER;
                return orderA - orderB;
            });
    }, [filter, projects]);

    if (isLoading) return (
        <div className="py-60 text-center font-mono opacity-20 text-4xl tracking-tighter animate-pulse uppercase">
            System_Sync_Projects...
        </div>
    );

    return (
        <section id="projects" className="py-32 md:py-48 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">

                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24 md:mb-36">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-6">
                            <motion.div
                                initial={{width: 0}}
                                whileInView={{width: 48}}
                                className="h-1 bg-primary rounded-full"
                            />
                            <span
                                className="text-[10px] font-mono uppercase tracking-[0.4em] text-primary">PORTFOLIO_INDEX</span>
                        </div>
                        <h2 className="text-7xl md:text-[10vw] font-bold tracking-tighter leading-[0.8] mb-2">
                            Selected<br/>
                            <span className="relative">
                            Works
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

                    <nav
                        className="flex flex-wrap gap-1 p-2 bg-secondary/20 backdrop-blur-xl rounded-[2.5rem] border border-border/40">
                        {filters.map((f) => {
                            const isActive = filter === f.id;
                            return (
                                <button
                                    key={f.id}
                                    onClick={() => setFilter(f.id)}
                                    className={`relative px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 z-10
                                    ${isActive ? 'text-primary-foreground' : 'text-muted-foreground hover:text-primary'}`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeFilter"
                                            className="absolute inset-0 bg-primary rounded-full z-[-1]"
                                            transition={{type: 'spring', bounce: 0.1, duration: 0.6}}
                                        />
                                    )}
                                    {f.label}
                                </button>
                            );
                        })}
                    </nav>
                </div>

                {/* Bento Grid: 3 Columns on Large Screens */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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