// File: src/app/page.tsx
import React from 'react';
import type {Metadata} from 'next';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';

// Define the improved metadata
export const metadata: Metadata = {
    title: 'Ajith Goveas | Full Stack Developer specializing in Web & Android',
    description: 'Ajith Goveas is a Full Stack Developer skilled in React, Next.js, and Android development. Explore my projects to see how I build exceptional digital experiences.',
    keywords: ['Ajith Goveas', 'developer', 'full stack', 'android', 'frontend', 'react', 'typescript', 'next.js', 'tailwind css', 'portfolio'],
    authors: [{name: 'Ajith Goveas'}],
};

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header/>
            {/* Add padding-top to the main content area.
        For a header with h-16 (64px), use pt-16.
        Adjust this value based on your actual header's height.
      */}
            <main className="pt-16">
                <HeroSection name={"Ajith Goveas"}/>
                <AboutSection/>
                <SkillsSection/>
                <ProjectsSection/>
                <ContactSection/>
            </main>
            <Footer/>
        </div>
    );
};

export default HomePage;