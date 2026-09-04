'use client';

import React, {memo, useMemo, useState} from 'react';
import {AnimatePresence, m} from 'framer-motion';
import {
    IconArrowUpRight,
    IconBrandAndroid,
    IconBrandGithub,
    IconChevronDown,
    IconCode,
    IconCpu,
    IconDatabase,
    IconDeviceDesktop,
    IconDeviceMobile,
    IconLayoutDashboard,
    IconStackFront,
    IconWorld
} from '@tabler/icons-react';
import {Project, ProjectType} from '@/types';
import {useProjects} from "@/hooks/useProjects";
import {filters} from "@/constants/projects";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {cn} from "@/lib/utils";

const TYPE_CONFIG: Record<ProjectType, { icon: React.ReactNode; label: string }> = {
	[ProjectType.Android]: { icon: <IconBrandAndroid size={18} stroke={1.5} />, label: 'Android' },
	[ProjectType.Web]: { icon: <IconWorld size={18} stroke={1.5} />, label: 'Web' },
	[ProjectType.CrossPlatform]: { icon: <IconDeviceMobile size={18} stroke={1.5} />, label: 'Cross Platform' },
	[ProjectType.Frontend]: { icon: <IconLayoutDashboard size={18} stroke={1.5} />, label: 'Frontend' },
	[ProjectType.FullStack]: { icon: <IconStackFront size={18} stroke={1.5} />, label: 'FullStack' },
	[ProjectType.Backend]: { icon: <IconDatabase size={18} stroke={1.5} />, label: 'Backend' },
	[ProjectType.Desktop]: { icon: <IconDeviceDesktop size={18} stroke={1.5} />, label: 'Desktop' },
	[ProjectType.DataScience]: { icon: <IconCode size={18} stroke={1.5} />, label: 'Data' },
	[ProjectType.MachineLearning]: { icon: <IconCpu size={18} stroke={1.5} />, label: 'ML' },
	[ProjectType.AI]: { icon: <IconCpu size={18} stroke={1.5} />, label: 'AI' },
};

const ProjectTileSkeleton = ({isHero = false, isWide = false, index}: {
    isHero?: boolean;
    isWide?: boolean;
    index: number
}) => {
    return (
        <div
            className={`
                relative flex animate-pulse
                ${isHero ? 'lg:col-span-2 lg:row-span-2 min-h-125 lg:min-h-175' : 'col-span-1 min-h-100'}
                ${isWide ? 'lg:col-span-2 min-h-100' : ''}
            `}
        >
            <div className={`
                relative h-full w-full p-6 sm:p-8 md:p-12 rounded-4xl md:rounded-[3rem] flex flex-col justify-between
                border border-border/20 bg-card/25 backdrop-blur-xl shadow-sm overflow-hidden
            `}>
                <div className="flex justify-between items-start z-10 w-full gap-4">
                    <div className="flex flex-wrap gap-2 max-w-[75%]">
                        <div className="w-20 h-6 bg-secondary/20 rounded-xl"/>
                        <div className="w-16 h-6 bg-secondary/15 rounded-xl"/>
                    </div>
                    <div className="flex flex-col items-end shrink-0 gap-1.5">
                        <div className="w-10 h-2 bg-secondary/10 rounded-full"/>
                        <div className="w-8 h-4 bg-secondary/20 rounded-full"/>
                    </div>
                </div>

                <div className={`${isHero ? 'mt-12 md:mt-20' : 'mt-8 md:mt-10'} z-10 space-y-4`}>
                    <div className={cn("bg-secondary/20 rounded-2xl", isHero ? "h-14 sm:h-20 w-3/4" : "h-10 w-2/3")}/>
                    {isHero && <div className="bg-secondary/20 rounded-2xl h-14 sm:h-20 w-1/2"/>}
                    <div className="space-y-2">
                        <div className="h-3 w-5/6 bg-secondary/15 rounded-full"/>
                        <div className="h-3 w-4/6 bg-secondary/15 rounded-full"/>
                    </div>
                    <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6">
                        <div className="h-2 w-12 bg-secondary/10 rounded-full"/>
                        <div className="h-2 w-16 bg-secondary/10 rounded-full"/>
                        <div className="h-2 w-10 bg-secondary/10 rounded-full"/>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border/20 flex items-center justify-between z-10">
                    <div className="flex gap-8 items-center">
                        <div className="w-7 h-7 rounded-full bg-secondary/20"/>
                        <div className="w-24 h-4 bg-secondary/20 rounded-full"/>
                    </div>
                    <span className={cn(
                        "absolute -bottom-6 right-6 font-mono italic font-bold opacity-[0.02] select-none pointer-events-none leading-none text-foreground",
                        isHero ? 'text-[15rem]' : 'text-9xl'
                    )}>
                        {index + 1}
                    </span>
                </div>
            </div>
        </div>
    );
};

const ProjectTile = memo(({project, index}: { project: Project; index: number }) => {

    const isHero = index === 0;
    const isWide = index === 3;

    return (
        <m.div
            layout
            initial={{opacity: 0, scale: 0.95}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0.95}}
            transition={{duration: 0.4, ease: [0.23, 1, 0.32, 1]}}
            className={`
                relative group flex
                ${isHero ? 'lg:col-span-2 lg:row-span-2 min-h-125 lg:min-h-175' : 'col-span-1 min-h-100'}
                ${isWide ? 'lg:col-span-2 min-h-100' : ''}
            `}
        >
            <Card className={`
                relative h-full w-full p-6 sm:p-8 md:p-12 rounded-4xl md:rounded-[3rem] flex flex-col justify-between gap-0
                border transition-all duration-700 overflow-hidden
                ${isHero
                ? 'bg-zinc-950 text-white dark:bg-zinc-50 dark:text-zinc-950 border-transparent shadow-2xl'
                : 'bg-card/40 backdrop-blur-xl border-border/40 hover:border-primary/50 shadow-sm'}
            `}>

                <CardHeader className="p-0 flex flex-row justify-between items-start z-10 w-full gap-4 space-y-0">
                    <div className="flex flex-wrap gap-2 max-w-[75%]">
                        {project.types.map((type) => {
                            const config = TYPE_CONFIG[type] || TYPE_CONFIG[ProjectType.Web];
                            return (
                                <Badge key={type} variant="outline"
                                     className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-current/20 bg-current/5 font-bold uppercase tracking-[0.2em] text-[9px] md:text-[10px] text-current">
                                    {config.icon}
                                    <span>
                                        {config.label}
                                    </span>
                                </Badge>
                            );
                        })}
                    </div>

                    <div className="flex flex-col items-end shrink-0">
                        <span className="text-[10px] font-mono opacity-40 font-bold tracking-widest uppercase">
                            Rel_Year
                        </span>
                        <span className="text-sm font-mono font-bold tracking-tighter text-current">
                            {project.year}
                        </span>
                    </div>
                </CardHeader>

                <CardContent className={`p-0 ${isHero ? 'mt-12 md:mt-20' : 'mt-8 md:mt-10'} z-10`}>
                    <CardTitle className={`font-bold tracking-tighter leading-[0.9] md:leading-[0.85] mb-4 md:mb-6 p-0 text-current
                        ${isHero ? 'text-4xl sm:text-6xl md:text-[6.5rem] font-calSans' : 'text-2xl sm:text-3xl md:text-5xl font-inter'}`}>
                        {project.title}
                    </CardTitle>
                    <p className={`font-inter leading-relaxed opacity-70 max-w-112.5 text-current
                        ${isHero ? 'text-base md:text-xl' : 'text-sm'}`}>
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-x-6 gap-y-3 mt-10">
                        {project.tech.map((t) => (
                            <span key={t} className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-60 text-current font-bold">
                                // {t}
                            </span>
                        ))}
                    </div>
                </CardContent>

                <CardFooter className="p-0 mt-12 pt-8 border-t border-current/15 flex items-center justify-between z-10">
                    <div className="flex gap-8 items-center">
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                               aria-label={`View ${project.title} code repository on GitHub`}
                               className="transition-all hover:scale-110 opacity-60 hover:opacity-100 text-current rounded-full focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                                <IconBrandGithub size={28} stroke={1.5}/>
                            </a>
                        )}
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                               aria-label={`View live deployment of ${project.title}`}
                               className="flex items-center gap-2 group/link opacity-60 hover:opacity-100 text-current transition-all rounded-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                                <span className="text-[10px] font-bold uppercase tracking-widest">Live_Deploy</span>
                                <IconArrowUpRight
                                    size={20}
                                    className="transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 text-current"/>
                            </a>
                        )}
                    </div>

                    {/* Ghost Number remains tied to Index for visual progression */}
                    <span className={`absolute -bottom-6 right-6 font-mono italic font-bold opacity-[0.04] dark:opacity-[0.07] select-none pointer-events-none leading-none group-hover:opacity-[0.08] group-hover:-translate-y-4 transition-all duration-700 text-current
                        ${isHero ? 'text-[15rem]' : 'text-9xl'}`}>
                        {index + 1}
                    </span>
                </CardFooter>

                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                     style={{
                         backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                         backgroundSize: '32px 32px'
                     }}/>
            </Card>
        </m.div>
    );
});

export default function ProjectsSection() {
    const {projects, isLoading} = useProjects();
    const [filter, setFilter] = useState('all');

    const activeFilterItem = useMemo(() => {
        return filters.find(f => f.id === filter) || filters[0];
    }, [filter]);

    const displayData = useMemo(() => {
        if (!projects?.length) return [];

        // 1. Perform filtering and sorting in a single pass to reduce iterations
        return projects
            .filter((project) => {
                if (filter === 'all') return true;
                return project.types.some(t => t.toLowerCase() === filter.toLowerCase());
            })
            .sort((a, b) => {
                // 1. Primary: Year (decreasing / descending)
                if (b.year !== a.year) {
                    return b.year - a.year;
                }
                // 2. Secondary: Order (ascending)
                const orderA = a.order ?? Number.MAX_SAFE_INTEGER;
                const orderB = b.order ?? Number.MAX_SAFE_INTEGER;
                return orderA - orderB;
            });
    }, [filter, projects]);

    // Empty/loading logic handled inline inside the grid below

    return (
        <section id="projects" className="py-16 md:py-48 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto w-full">

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 md:mb-36 w-full">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-3 mb-6">
                                <m.div
                                    initial={{width: 0}}
                                    whileInView={{width: 48}}
                                    className="h-1 bg-primary rounded-full"
                                />
                                <span
                                    className="text-[10px] font-mono uppercase tracking-[0.4em] text-primary">PORTFOLIO_INDEX</span>
                            </div>
                            <h2 className="text-5xl sm:text-7xl md:text-[10vw] font-bold tracking-tighter leading-[0.9] md:leading-[0.8] mb-2">
                                Selected<br/>
                                <span className="relative">
                                Works
                                <span className="text-primary/20">.</span>
                                <m.span
                                    initial={{scaleX: 0}}
                                    whileInView={{scaleX: 1}}
                                    transition={{delay: 0.5, duration: 0.8}}
                                    className="absolute bottom-4 left-0 w-full h-1 bg-primary/10 origin-left hidden md:block"
                                />
                            </span>
                            </h2>
                        </div>

                        {/* Mobile Dropdown Filter Selector */}
                        <div className="block md:hidden w-full relative z-30">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline"
                                            className="w-full h-12 justify-between px-5 bg-card/45 backdrop-blur-xl border-border/40 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em]">
                                        <span className="flex items-center gap-2">
                                            {activeFilterItem.label}
                                        </span>
                                        <IconChevronDown className="w-4 h-4 opacity-50"/>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end"
                                                     className="w-[calc(100vw-3rem)] max-w-sm bg-background/95 backdrop-blur-2xl border border-border/40 rounded-2xl p-1.5 shadow-xl z-50">
                                    {filters.map((f) => (
                                        <DropdownMenuItem
                                            key={f.id}
                                            onClick={() => setFilter(f.id)}
                                            className={`flex items-center gap-2 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl cursor-pointer transition-colors
                                            ${filter === f.id ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-secondary/40'}`}
                                        >
                                            {f.label}
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        {/* Desktop Horizontal Filter Bar */}
                        <nav
                            className="hidden md:flex flex-wrap gap-1 p-2 bg-secondary/20 backdrop-blur-xl rounded-[2.5rem] border border-border/40">
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
                                            <m.div
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
                    <m.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {isLoading ? (
                            <>
                                <ProjectTileSkeleton isHero={true} index={0}/>
                                <ProjectTileSkeleton isHero={false} index={1}/>
                                <ProjectTileSkeleton isHero={false} index={2}/>
                                <ProjectTileSkeleton isHero={false} isWide={true} index={3}/>
                                <ProjectTileSkeleton isHero={false} index={4}/>
                                <ProjectTileSkeleton isHero={false} index={5}/>
                            </>
                        ) : displayData.length === 0 ? (
                            <m.div
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, y: 20}}
                                className="col-span-1 md:col-span-2 lg:col-span-3 min-h-87.5 flex items-center justify-center p-8 rounded-4xl md:rounded-[3rem] border border-border/30 bg-card/20 backdrop-blur-xl"
                            >
                                <div className="flex flex-col items-center text-center gap-6 max-w-md">
                                    <div className="p-5 rounded-2xl bg-secondary/10 border border-border/30 relative">
                                        <IconCpu className="w-10 h-10 text-primary opacity-60 animate-pulse"/>
                                        <div
                                            className="absolute inset-0 bg-primary/5 rounded-2xl animate-ping opacity-30"/>
                                    </div>

                                    <div className="space-y-2">
                                        <span
                                            className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary">Notification</span>
                                        <h3 className="text-2xl font-bold tracking-tight font-calSans text-foreground uppercase">
                                            No Projects Found
                                        </h3>
                                        <p className="text-xs md:text-sm text-muted-foreground/80 leading-relaxed">
                                            No projects found under the <span
                                            className="text-primary font-bold font-mono">"{activeFilterItem.label}"</span> category.
                                            Try selecting a different filter.
                                        </p>
                                    </div>
                                </div>
                            </m.div>
                        ) : (
                            <AnimatePresence mode="popLayout">
                                {displayData.map((project, index) => (
                                    <ProjectTile key={project.id} project={project} index={index}/>
                                ))}
                            </AnimatePresence>
                        )}
                    </m.div>
                </div>
            </div>
        </section>
    );
}
