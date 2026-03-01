import {LucideIcon} from "lucide-react";

export interface Project {
    id: string;
    title: string;
    description: string;
    year: number;
    order: number;
    tech: string[];
    type: ProjectType;
    githubUrl?: string;
    liveUrl?: string;
}

export enum ProjectType {
    Android = 'Android',
    Web = 'Web',
    CrossPlatform = 'CrossPlatform',
    Frontend = 'Frontend',
    FullStack = 'FullStack',
    Backend = 'Backend',
    Desktop = 'Desktop',
    DataScience = 'DataScience',
    MachineLearning = 'MachineLearning',
    AI = 'AI',
}

export interface SkillCategory {
    title: string;
    icon: LucideIcon;
    skills: string[];
    description: string;
    accent: string;
    glow: string;
    span: string;
}

export interface NavItem {
    name: string;
    href: string;
}

export interface Links {
    id: string;
    label: string;
    href: string;
    username: string;
    order: number;
}

export interface ContactInfo {
    id: string;
    label: string;
    value: string;
    description: string;
    order: number;
}