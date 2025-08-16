// File: src/types/index.ts
import React from "react";

export interface Project {
    id: string;
    title: string;
    description: string;
    year: number;
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
    Miscellaneous = 'Miscellaneous',
}

export interface SkillCategory {
    title: string;
    icon: React.ReactNode;
    skills: string[];
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