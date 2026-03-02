// File: src/app/page.tsx
import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
    // Branding: Mobile-First Architectural Logic
    title: "Ajith Goveas // Android, Kotlin Multiplatform & Web Engineer",

    description:
        "Ajith Goveas is a Mobile-First Engineer specializing in Native Android (Kotlin), KMM, and Compose Multiplatform (CMP), alongside high-performance Web development using Next.js and Tailwind CSS.",

    keywords: [
        "Ajith Goveas",
        "Native Android Developer",
        "Kotlin Multiplatform Expert",
        "KMM Engineer",
        "Compose Multiplatform",
        "CMP Developer",
        "Jetpack Compose",
        "Next.js & Tailwind CSS",
        "Cross-platform Architecture",
        "Mobile-Web Hybrid Solutions",
        "Kotlin Specialist India"
    ],

    openGraph: {
        title: "Ajith Goveas // KMM & Android Architect",
        description: "Engineering shared-logic mobile ecosystems and precision web interfaces.",
        url: "https://ajith-goveas-portfolio.vercel.app",
        siteName: "Ajith Goveas Portfolio",
        images: [
            {
                url: "/og-main.png", // Ensure this image highlights Android/Kotlin vibes
                width: 1200,
                height: 630,
                alt: "Ajith Goveas // Kotlin Multiplatform & Web Interface",
            },
        ],
        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Ajith Goveas // Android & KMM Developer",
        description: "Specializing in Native Android, KMM, CMP, and Next.js.",
        images: ["/og-main.png"],
    },
};

export default function Home() {
    return (
        <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary overflow-x-hidden">

            <div className="fixed inset-0 z-0 pointer-events-none">
                <div
                    className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"
                />
            </div>

            <Header />

            <main className="relative z-10 w-full flex flex-col pt-20 md:pt-0">
                <HeroSection name="Ajith Goveas" />

                <div className="flex flex-col w-full">
                    <AboutSection />
                    <SkillsSection />
                    <ProjectsSection />
                    <ContactSection />
                </div>
            </main>

            <Footer />

            {/* 5. Editorial Metadata (Desktop Only) */}
            <aside className="fixed bottom-12 left-6 z-50 hidden xl:block pointer-events-none opacity-20">
                <div className="flex items-center gap-3 origin-left -rotate-90">
                    <div className="h-px w-8 bg-foreground" />
                    <span className="text-[8px] font-mono uppercase tracking-[0.5em] whitespace-nowrap">
                        System_Protocol_v4.0
                    </span>
                </div>
            </aside>
        </div>
    );
}