// File: src/components/sections/ProjectsSection.tsx
'use client';

import React, {JSX, memo, useMemo, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {Code2, ExternalLink} from 'lucide-react';
import {Card, CardContent} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Project, ProjectType} from '@/types';
import {IconBrandGithub} from "@tabler/icons-react";
import {useProjects} from "@/hooks/useProjects";
import {COLOR_MAP, filters, ICON_MAP} from "@/constants/projects";

const getProjectIcon = (type: ProjectType) => {
    const {bg} = COLOR_MAP[type] || "";
    const icon = ICON_MAP[type] || "";
    return (
        <div className={`p-3 rounded-xl flex items-center justify-center shadow-sm ${bg}`}>
            {icon}
        </div>
    );
};

// --- Child Components ---

interface FilterButtonProps {
    active: boolean;
    onClick: () => void;
    label: string;
    icon: JSX.Element;
}

const FilterButton: React.FC<FilterButtonProps> = memo(({active, onClick, label, icon}) => (
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
        {label}
    </Button>
));

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = memo(({project, index}) => {
    const [isHovered, setIsHovered] = useState(false);

    const typeColors = useMemo(() => COLOR_MAP[project.type] || COLOR_MAP.FullStack, [project.type]);

    const buttonTextVariants = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {duration: 0.3}
        },
        hidden: {
            opacity: 0,
            x: -10,
            transition: {duration: 0.3}
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
            <Card className="h-full bg-card/50 hover:bg-card/10 transition-all ease-linear duration-300 group">
                <CardContent className="p-6 h-full flex flex-col justify-between">
                    <div>
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
                                    className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${typeColors.text} ${typeColors.border}`}>
                                    {project.type}
                                </span>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        {/* Tech Stack */}
                        <div className="space-y-2 mt-4">
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
                    </div>

                    {/* Project Links & Year */}
                    <div>
                        <div className="flex gap-3 pt-6 mt-auto">
                            {project.githubUrl && (
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="flex-1 border-border/70 text-secondary-foreground transition-all ease-in duration-600 overflow-hidden"
                                    asChild
                                >
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                        <IconBrandGithub size={16} className="w-4 h-4 mr-2"/>
                                        <AnimatePresence mode="wait">
                                            <motion.span
                                                key={isHovered ? 'hovered-github' : 'initial-github'}
                                                variants={buttonTextVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                            >
                                                {isHovered ? 'View Code' : 'Code'}
                                            </motion.span>
                                        </AnimatePresence>
                                    </a>
                                </Button>
                            )}
                            {project.liveUrl && (
                                <Button
                                    size="sm"
                                    className="flex-1 bg-primary hover:bg-primary/90 text-white transition-all ease-in duration-600 overflow-hidden"
                                    asChild
                                >
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="w-4 h-4 mr-2"/>
                                        <AnimatePresence mode="wait">
                                            <motion.span
                                                key={isHovered ? 'hovered-live' : 'initial-live'}
                                                variants={buttonTextVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                            >
                                                {isHovered ? 'Live Demo' : 'Demo'}
                                            </motion.span>
                                        </AnimatePresence>
                                    </a>
                                </Button>
                            )}
                        </div>
                        <div className="text-right text-xs text-muted-foreground/50 mt-2">
                            Developed in {project.year}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
});

// --- Main Section Component ---

const ProjectsSection: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string>('all');
    const {projects, isLoading, error} = useProjects();

    const filteredProjects = useMemo(() => {
        // 1. First, handle the initial null/undefined state of the projects array.
        if (!projects) {
            return [];
        }

        // 2. Filter the projects, but add a robust check for 'project.type'.
        return activeFilter === 'all'
            ? projects
            : projects.filter(project => {
                // Check if the project.type property is a valid string.
                // This handles cases where the database data is malformed or null.
                const projectTypeString = project.type?.toString();
                return projectTypeString
                    ? projectTypeString.toLowerCase() === activeFilter
                    : false;
            });
    }, [activeFilter, projects]);

    if (isLoading) {
        return <div>Loading projects...</div>;
    }

    if (error) {
        return <div>Error loading projects.</div>;
    }

    if (!projects || projects.length === 0) {
        return <div>No projects found.</div>;
    }

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
                            A showcase of mobile apps and web applications I've built using modern technologies.
                        </p>

                        {/* Project Filters */}
                        <div className="flex flex-wrap gap-2">
                            {filters.map((filter) => (
                                <FilterButton
                                    key={filter.id}
                                    active={activeFilter === filter.id}
                                    onClick={() => setActiveFilter(filter.id)}
                                    label={filter.label}
                                    icon={filter.icon}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        layout
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        <AnimatePresence>
                            {filteredProjects.length > 0 ? (
                                filteredProjects.map((project, index) => (
                                    <ProjectCard key={project.id} project={project} index={index}/>
                                ))
                            ) : (
                                <motion.div
                                    key="empty-state"
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    className="col-span-full text-center py-16"
                                >
                                    <Code2 className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4"/>
                                    <p className="text-muted-foreground">No projects found for this category yet.</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

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
                            <IconBrandGithub size={16} className="text-muted-foreground"/>
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