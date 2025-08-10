// File: src/components/sections/ProjectsSection.tsx
'use client';

import React, {JSX, useState} from 'react';
import {motion} from 'framer-motion';
import {Code2, ExternalLink, Github, Globe, Monitor, Smartphone} from 'lucide-react';
import {Card, CardContent} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {projects} from '@/constants/data';
import {Project} from '@/types';

type ProjectType = "android" | "web" | "fullstack" | string;

const ICON_STYLES: Record<string, { bg: string; icon: JSX.Element }> = {
    android: {
        bg: "bg-green-100 dark:bg-green-950/30",
        icon: <Smartphone className="w-5 h-5 text-green-400" />,
    },
    web: {
        bg: "bg-cyan-100 dark:bg-cyan-950/30",
        icon: <Globe className="w-5 h-5 text-cyan-400" />,
    },
    fullstack: {
        bg: "bg-blue-100 dark:bg-blue-950/30",
        icon: <Code2 className="w-5 h-5 text-blue-400" />,
    },
    default: {
        bg: "bg-primary/20 dark:bg-primary/30",
        icon: <Monitor className="w-5 h-5 text-primary" />,
    },
};

const getProjectIcon = (type: ProjectType) => {
    const { bg, icon } = ICON_STYLES[type.toLowerCase()] || ICON_STYLES.default;

    return (
        <div
            className={`p-3 rounded-xl flex items-center justify-center shadow-sm ${bg}`}
        >
            {icon}
        </div>
    );
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({project, index}) => {
    const [isHovered, setIsHovered] = useState(false);

    const getTypeColor = (type: string) => {
        switch (type.toLowerCase()) {
            case 'android':
                return 'text-green-400 bg-green-400/10 border-green-400/20';
            case 'web':
                return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20';
            case 'fullstack':
                return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
            default:
                return 'text-primary bg-primary/10 border-primary/20';
        }
    };

    return (
        <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: index * 0.1}}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <Card
                className="h-full bg-card/50 hover:bg-card/10 transition-all ease-linear duration-300 group">
                <CardContent className="p-6 space-y-6">
                    {/* Project Header */}
                    <div className="space-y-3">
                        <div className="flex items-start justify-between space-x-1">
                            <div className="flex items-center gap-4">
                                {getProjectIcon(project.type)}
                                <h3 className="text-lg font-semibold text-primary group-hover:text-secondary-foreground transition-colors duration-300">
                                    {project.title}
                                </h3>
                            </div>
                            <span
                                className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${getTypeColor(project.type)}`}>
                                {project.type}
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-2">
                        <p className="text-xs font-medium text-muted-foreground/80">Built with</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="inline-flex items-center px-2 py-1 text-xs font-mono border border-border rounded text-muted-foreground hover:text-white hover:border-white/20 transition-all duration-200"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-3 pt-2">
                        <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 border-border/70 text-secondary-foreground transition-all ease-in duration-600"
                            asChild
                        >
                            <a href={project.githubUrl || '#'} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2"/>
                                {isHovered ? 'View Code' : 'Code'}
                            </a>
                        </Button>
                        <Button
                            size="sm"
                            className="flex-1 bg-primary hover:bg-primary/90 text-white transition-all ease-in duration-600"
                            asChild
                        >
                            <a href={project.liveUrl || '#'} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2"/>
                                {isHovered ? 'Live Demo' : 'Demo'}
                            </a>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

const FilterButton: React.FC<{
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
    icon: React.ReactNode;
}> = ({active, onClick, children, icon}) => (
    <Button
        variant={active ? 'default' : 'outline'}
        size="sm"
        onClick={onClick}
        className={`px-3 sm:px-4 py-2 mx-1 text-sm transition-colors ${
            active
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : 'text-secondary-foreground hover:text-foreground border-primary/20 hover:border-primary/40'
        }`}
    >
        {icon}
        {children}
    </Button>
);

const ProjectsSection: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = [
        {id: 'all', label: 'All Projects', icon: <Code2 className="w-4 h-4"/>},
        {id: 'android', label: 'Android', icon: <Smartphone className="w-4 h-4"/>},
        {id: 'web', label: 'Web', icon: <Globe className="w-4 h-4"/>},
        {id: 'frontend', label: 'Frontend', icon: <Monitor className="w-4 h-4"/>},
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.type.toLowerCase() === activeFilter);

    return (
        <section id="projects" className="py-20 border-t border-border">
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
                        <h2 className="text-3xl font-bold text-primary mb-4">Featured Projects</h2>
                        <p className="text-muted-foreground max-w-2xl mb-8">
                            A showcase of mobile apps and web applications I've built using modern technologies
                        </p>

                        {/* Project Filters */}
                        <div className="flex flex-wrap gap-2">
                            {filters.map((filter) => (
                                <FilterButton
                                    key={filter.id}
                                    active={activeFilter === filter.id}
                                    onClick={() => setActiveFilter(filter.id)}
                                    icon={filter.icon}
                                >
                                    {filter.label}
                                </FilterButton>
                            ))}
                        </div>
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        layout
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={`${project.title}-${index}`} project={project} index={index}/>
                        ))}
                    </motion.div>

                    {/* Empty State */}
                    {filteredProjects.length === 0 && (
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            className="text-center py-16"
                        >
                            <Code2 className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4"/>
                            <p className="text-muted-foreground">No projects found for this category yet.</p>
                        </motion.div>
                    )}

                    {/* Bottom CTA */}
                    <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: 0.3}}
                        className="text-center mt-16"
                    >
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.02] border border-border/50 rounded-full">
                            <Github className="w-4 h-4 text-muted-foreground"/>
                            <span
                                className="text-sm text-muted-foreground/70 italic">More projects available on GitHub</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;