'use client';

import React, {memo, useMemo} from 'react';
import {m} from 'framer-motion';
import {
    IconBriefcase,
    IconMapPin,
} from '@tabler/icons-react';
import {Experience} from '@/types';
import {useExperiences} from '@/hooks/useExperiences';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';

const ExperienceSkeleton = ({index}: { index: number }) => {
    return (
        <div className="relative pl-6 sm:pl-8 md:pl-12 border-l border-border/20 space-y-4 animate-pulse">
            <div className="absolute -left-2.25 top-5.75 sm:top-7.75 md:top-11.75 w-4 h-4 rounded-full bg-secondary/30 border border-border/40" />
            <Card className="p-6 sm:p-8 md:p-12 rounded-4xl md:rounded-[3rem] border-border/20 bg-card/25 backdrop-blur-xl shadow-sm overflow-hidden flex flex-col justify-between min-h-64 gap-0">
                <div className="flex justify-between items-start z-10 w-full gap-4">
                    <div className="space-y-3 max-w-[70%]">
                        <div className="w-24 h-4 bg-secondary/20 rounded-xl" />
                        <div className="w-64 h-10 bg-secondary/20 rounded-2xl" />
                        <div className="w-36 h-4 bg-secondary/15 rounded-lg" />
                    </div>
                    <div className="flex flex-col items-end shrink-0 gap-1.5">
                        <div className="w-16 h-3 bg-secondary/10 rounded-full" />
                        <div className="w-20 h-5 bg-secondary/20 rounded-full" />
                    </div>
                </div>
                <div className="space-y-2 mt-6">
                    <div className="h-3 w-5/6 bg-secondary/15 rounded-full" />
                    <div className="h-3 w-4/6 bg-secondary/15 rounded-full" />
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-border/20 mt-6">
                    <div className="h-3 w-14 bg-secondary/10 rounded-full" />
                    <div className="h-3 w-16 bg-secondary/10 rounded-full" />
                    <div className="h-3 w-12 bg-secondary/10 rounded-full" />
                </div>
            </Card>
        </div>
    );
};

const ExperienceCard = memo(({experience, index}: { experience: Experience; index: number }) => {
    return (
        <m.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: index * 0.1}}
            className="relative pl-6 sm:pl-8 md:pl-12 border-l border-border/30 group"
        >
            {/* Timeline Node */}
            <div className="absolute -left-2.25 top-5.75 sm:top-7.75 md:top-11.75 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-all duration-500 shadow-[0_0_15px_rgba(var(--primary),0.6)]" />

            {/* UI Card Primitive Component */}
            <Card className="relative h-full w-full p-6 sm:p-8 md:p-12 rounded-4xl md:rounded-[3rem] bg-card/40 backdrop-blur-xl border-border/40 hover:border-primary/50 transition-all duration-700 shadow-sm overflow-hidden flex flex-col justify-between group/card gap-0">
                
                {/* Card Header: Company, Role & Period */}
                <CardHeader className="p-0 z-10 w-full mb-0">
                    <div className="flex justify-between items-start w-full gap-4">
                        <div className="flex flex-col space-y-2">
                            {/* Company Kicker Tag */}
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-primary">
                                    // {experience.company || 'CAREER_RECORD'}
                                </span>
                                {experience.location && (
                                    <Badge variant="outline" className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-50 px-2 py-0.5 border-border/40 gap-1 font-normal">
                                        <IconMapPin size={10} className="shrink-0" />
                                        <span>{experience.location}</span>
                                    </Badge>
                                )}
                            </div>

                            {/* Primary Role Heading */}
                            <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[0.9] md:leading-[0.85] text-foreground font-inter p-0">
                                {experience.role}
                            </CardTitle>
                        </div>

                        {/* Period Meta Badge */}
                        {experience.period && (
                            <div className="flex flex-col items-end shrink-0">
                                <span className="text-[10px] font-mono opacity-40 font-bold tracking-widest uppercase">
                                    PER_TIMELINE
                                </span>
                                <span className="text-sm font-mono font-bold tracking-tighter text-foreground">
                                    {experience.period}
                                </span>
                            </div>
                        )}
                    </div>
                </CardHeader>

                {/* Card Content: Description Body */}
                <CardContent className="p-0 z-10 w-full">
                    {experience.description && (
                        <div className="font-inter leading-relaxed opacity-70 text-sm md:text-base mt-6 md:mt-8 max-w-4xl space-y-3">
                            {experience.description.split(/\r?\n|\\n/).filter(line => line.trim().length > 0).map((bullet, i) => {
                                const cleanText = bullet.trim().replace(/^[•\-\*]\s*/, '');
                                return (
                                    <div key={i} className="flex items-start gap-2.5">
                                        <span className="text-primary font-bold text-xs mt-1 shrink-0">•</span>
                                        <span>{cleanText}</span>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {/* Tech Stack Badges using Badge Component */}
                    {experience.skills && experience.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2 md:gap-3 pt-6 mt-8 border-t border-current/10">
                            {experience.skills.map((skill) => (
                                <Badge key={skill} variant="secondary" className="px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] font-bold bg-secondary/30 text-foreground/80 border border-border/30">
                                    // {skill}
                                </Badge>
                            ))}
                        </div>
                    )}
                </CardContent>

                {/* Ghost Watermark Index Number */}
                <span className="absolute -bottom-6 right-6 font-mono italic font-bold opacity-[0.03] dark:opacity-[0.06] select-none pointer-events-none leading-none text-9xl md:text-[12rem] group-hover:opacity-[0.08] group-hover:-translate-y-2 transition-all duration-700">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>

                {/* Background Subtle Grid Texture */}
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                        backgroundSize: '32px 32px'
                    }}
                />
            </Card>
        </m.div>
    );
});

ExperienceCard.displayName = 'ExperienceCard';

export default function ExperienceSection() {
    const {experiences, isLoading} = useExperiences();

    const sortedExperiences = useMemo(() => {
        if (!experiences?.length) return [];
        return [...experiences].sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
    }, [experiences]);

    return (
        <section id="experience" className="py-16 md:py-48 bg-background relative overflow-hidden">
            {/* Ambient Background Grid */}
            <div className="absolute inset-0 z-0 opacity-[0.03] mask-[radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none">
                <div className="absolute inset-0 bg-[grid_32px_32px] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto w-full">

                    {/* Section Header Matching Portfolio System */}
                    <div className="flex flex-col mb-12 md:mb-28">
                        <div className="flex items-center gap-3 mb-6">
                            <m.div
                                initial={{width: 0}}
                                whileInView={{width: 48}}
                                className="h-1 bg-primary rounded-full"
                            />
                            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-primary">
                                CAREER_TIMELINE
                            </span>
                        </div>
                        <h2 className="text-5xl sm:text-7xl md:text-[10vw] font-bold tracking-tighter leading-[0.9] md:leading-[0.8] mb-2">
                            Work<br />
                            <span className="relative">
                                Experience
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

                    {/* Timeline List or Skeletons or Empty State */}
                    <div className="space-y-8 md:space-y-12">
                        {isLoading ? (
                            <>
                                <ExperienceSkeleton index={0} />
                                <ExperienceSkeleton index={1} />
                            </>
                        ) : sortedExperiences.length === 0 ? (
                            <m.div
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                className="min-h-87.5 flex items-center justify-center p-8 rounded-4xl md:rounded-[3rem] border border-border/30 bg-card/20 backdrop-blur-xl"
                            >
                                <div className="flex flex-col items-center text-center gap-6 max-w-md">
                                    <div className="p-5 rounded-2xl bg-secondary/10 border border-border/30 relative">
                                        <IconBriefcase className="w-10 h-10 text-primary opacity-60 animate-pulse" />
                                        <div className="absolute inset-0 bg-primary/5 rounded-2xl animate-ping opacity-30" />
                                    </div>

                                    <div className="space-y-2">
                                        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary">
                                            Notification
                                        </span>
                                        <h3 className="text-2xl font-bold tracking-tight font-calSans text-foreground uppercase">
                                            No Experience Found
                                        </h3>
                                        <p className="text-xs md:text-sm text-muted-foreground/80 leading-relaxed">
                                            No experience records found.
                                        </p>
                                    </div>
                                </div>
                            </m.div>
                        ) : (
                            sortedExperiences.map((exp, index) => (
                                <ExperienceCard key={exp.id} experience={exp} index={index} />
                            ))
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
