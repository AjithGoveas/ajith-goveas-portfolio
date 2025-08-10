// File: src/constants/data.ts
import {NavItem, Project} from '@/types';

export const navItems: NavItem[] = [
    {name: 'About', href: '#about'},
    {name: 'Skills', href: '#skills'},
    {name: 'Projects', href: '#projects'},
    {name: 'Contact', href: '#contact'},
];

export const projects: Project[] = [
    {
        title: "E-Commerce Android App",
        description: "A full-featured Android e-commerce application built with Kotlin and Jetpack Compose, featuring real-time updates and seamless payment integration.",
        tech: ["Kotlin", "Jetpack Compose", "Room", "Retrofit"],
        type: "Android"
    },
    {
        title: "Task Management Dashboard",
        description: "Modern web dashboard for project management with real-time collaboration, built using React and TypeScript with a clean, intuitive interface.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
        type: "Web"
    },
    {
        title: "Weather Forecast App",
        description: "Cross-platform weather application providing accurate forecasts with beautiful UI and smooth animations across Android and web platforms.",
        tech: ["React Native", "OpenWeather API", "Redux"],
        type: "Frontend"
    }
];