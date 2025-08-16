// File: src/types/index.ts
export interface Project {
    title: string;
    description: string;
    tech: string[];
    type: 'Android' | 'Web' | 'Cross-Platform' | 'Frontend';
    githubUrl?: string;
    liveUrl?: string;
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

export interface Links{
    id: string;
    label: string;
    href: string;
    order: number;
}