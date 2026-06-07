'use client';

import React, {memo, useState} from 'react';
import {AnimatePresence, m} from 'framer-motion';
import {
    IconArrowRight,
    IconArrowUpRight,
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandX,
    IconCircleCheck,
    IconMail
} from '@tabler/icons-react';
import {Links} from "@/types";
import {useSocialLinks} from "@/hooks/useSocialLinks";
import {cn} from "@/lib/utils";
import {LoadingSpinner} from "@/components/ui/loading-spinner";

const CONFIG: Record<string, { color: string; icon: any }> = {
    github: {color: '#5830fd', icon: IconBrandGithub},
    linkedin: {color: '#00A0DC', icon: IconBrandLinkedin},
    gmail: {color: '#EA4335', icon: IconMail},
    x: {color: '#FFFFFF', icon: IconBrandX},
    default: {color: '#888888', icon: IconArrowRight}
};

export default function SocialLinks({fullStyle = false}: { fullStyle?: boolean }) {
    const {socialLinks, isLoading} = useSocialLinks();

    if (isLoading) return <SocialLinksSkeleton fullStyle={fullStyle}/>;
    if (!socialLinks) return null;

    const isMultipleOfThree = socialLinks.length > 0 && socialLinks.length % 3 === 0;

    return fullStyle ? (
        <div className={cn(
            "w-full grid gap-4 md:gap-6 py-8",
            isMultipleOfThree
                ? "grid-cols-1 md:grid-cols-[3fr_2fr]"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-dense"
        )}>
            {socialLinks.map((social, index) => (
                <InteractionPlate
                    key={social.id}
                    info={social}
                    index={index}
                    isFeatured={isMultipleOfThree ? (index % 3 === 0) : (index === 0)}
                    isBentoThree={isMultipleOfThree}
                />
            ))}
        </div>
    ) : (
        <MinimalPill socials={socialLinks}/>
    );
}

function SocialLinksSkeleton({fullStyle, count = 3}: { fullStyle: boolean; count?: number }) {
    if (!fullStyle) {
        return (
            <div
                className="h-10 px-4 flex items-center justify-center bg-secondary/20 border border-border/40 rounded-full">
                <LoadingSpinner size="sm" text="Syncing..." className="p-0 flex-row gap-2"/>
            </div>
        );
    }

    const isMultipleOfThree = count > 0 && count % 3 === 0;

    return (
        <div className={cn(
            "w-full grid gap-4 md:gap-6 py-8",
            isMultipleOfThree
                ? "grid-cols-1 md:grid-cols-[3fr_2fr]"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-dense"
        )}>
            {/* Featured Node Skeleton */}
            <div
                className={cn(
                    "p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] bg-secondary/5 border border-border/40 flex flex-col justify-between relative overflow-hidden",
                    isMultipleOfThree
                        ? "md:row-span-2 md:col-span-1 min-h-55 md:min-h-116.5"
                        : "lg:col-span-2 min-h-40 md:min-h-55"
                )}
            >
                <div className="flex justify-between items-start">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 animate-pulse"/>
                    <div className="w-10 h-10 rounded-xl bg-secondary/5"/>
                </div>
                <div className="space-y-3">
                    <div className="h-2 w-24 bg-secondary/10 rounded-full"/>
                    <div className="h-8 w-1/3 bg-secondary/20 rounded-xl animate-pulse"/>
                </div>
                <m.div
                    animate={{x: ['-100%', '200%']}}
                    transition={{duration: 2.5, repeat: Infinity, ease: "linear"}}
                    className="absolute inset-0 bg-linear-to-r from-transparent via-primary/5 to-transparent -skew-x-12"
                />
            </div>
            {/* Standard Node Skeletons */}
            {[1, 2].map((i) => (
                <div key={i}
                     className="p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] bg-secondary/5 border border-border/40 min-h-40 md:min-h-55 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <div className="w-12 h-12 rounded-xl bg-secondary/10 animate-pulse"/>
                        <div className="w-8 h-8 rounded-lg bg-secondary/5"/>
                    </div>
                    <div className="space-y-3">
                        <div className="h-2 w-16 bg-secondary/10 rounded-full"/>
                        <div className="h-6 w-3/4 bg-secondary/10 rounded-lg animate-pulse"/>
                    </div>
                </div>
            ))}
        </div>
    );
}

type InteractionPlateProps = {
    info: Links;
    index: number;
    isFeatured?: boolean;
    isBentoThree?: boolean;
};

const InteractionPlate = memo(({info, index, isFeatured, isBentoThree}: InteractionPlateProps) => {
    const [copied, setCopied] = useState(false);

    const meta = CONFIG[info.label.toLowerCase()] || CONFIG.default;
    const IconComponent = meta.icon;
    const isEmail = /gmail|email/i.test(info.label);

    const handleAction = (e: React.MouseEvent) => {
        if (isEmail) {
            e.preventDefault();
            navigator.clipboard.writeText(info.username);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <m.a
            href={isEmail ? `mailto:${info.username}` : info.href}
            target={isEmail ? undefined : "_blank"}
            rel={isEmail ? undefined : "noopener noreferrer"}
            onClick={handleAction}
            title={`Connect via ${info.label}`}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            whileHover={{
                y: -6,
                borderColor: meta.color + "40",
                boxShadow: `0 20px 40px -15px ${meta.color}18`,
            }}
            viewport={{once: true}}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                borderColor: {duration: 0.3},
                boxShadow: {duration: 0.3}
            }}
            className={cn(
                "group relative flex flex-col justify-between p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] overflow-hidden",
                "bg-card border border-border/40 shadow-sm",
                isBentoThree
                    ? (isFeatured ? "md:row-span-2 md:col-span-1 min-h-55 md:min-h-116.5" : "col-span-1 min-h-40 md:min-h-55")
                    : (isFeatured ? "lg:col-span-2 min-h-40 md:min-h-55" : "col-span-1 min-h-40 md:min-h-55")
            )}
        >
            <div className="flex justify-between items-start">
                <div
                    className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-secondary/50 transition-all duration-300 group-hover:scale-110"
                    style={{
                        backgroundColor: meta.color + "12"
                    }}
                >
                    <IconComponent
                        size={20}
                        className="md:w-6 md:h-6 transition-colors duration-300"
                        style={{color: meta.color}}
                    />
                </div>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        {copied ? (
                            <m.div
                                key="check"
                                initial={{scale: 0, opacity: 0}}
                                animate={{scale: 1, opacity: 1}}
                                exit={{scale: 0, opacity: 0}}
                                transition={{duration: 0.2}}
                                className="flex items-center gap-1"
                            >
                                <IconCircleCheck className="w-5 h-5 md:w-6 md:h-6 text-green-500"/>
                                <span className="text-[10px] text-green-500 font-mono">Copied!</span>
                            </m.div>
                        ) : (
                            <div
                                className="p-2.5 rounded-xl bg-zinc-500/5 group-hover:bg-zinc-500/50 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-foreground">
                                <IconArrowUpRight className="w-5 h-5 md:w-6 md:h-6"/>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <span
                        className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground opacity-60">
                        {info.label}
                    </span>
                    {isFeatured && (
                        <span className="text-[8px] bg-primary/20 text-primary px-2 py-0.5 rounded-full font-mono">
                            PRIMARY_NODE
                        </span>
                    )}
                </div>
                <span
                    className={cn(
                        "font-bold tracking-tight truncate pr-4 text-foreground transition-colors",
                        isFeatured ? "text-2xl md:text-4xl" : "text-lg md:text-2xl"
                    )}
                >
                    {isEmail ? info.username : info.username || "Connect"}
                </span>
            </div>

            <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(var(--foreground)_1px,transparent_1px)] bg-size-[16px_16px] rounded-3xl md:rounded-[2.5rem]"/>
        </m.a>
    );
});

function MinimalPill({socials}: { socials: Links[] }) {
    const [index, setIndex] = useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => setIndex((p) => (p + 1) % socials.length), 3000);
        return () => clearInterval(interval);
    }, [socials.length]);

    const activeMeta = CONFIG[socials[index].label.toLowerCase()] || CONFIG.default;

    return (
        <div className="relative">
            <div
                className="flex sm:hidden w-12 h-12 items-center justify-center bg-background/60 border border-border/40 rounded-full backdrop-blur-xl overflow-hidden shadow-sm">
                <AnimatePresence mode="wait">
                    <m.a
                        key={socials[index].id}
                        href={socials[index].href}
                        target="_blank"
                        initial={{y: 15, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        exit={{y: -15, opacity: 0}}
                    >
                        {React.createElement(activeMeta.icon, {size: 20, style: {color: activeMeta.color}})}
                    </m.a>
                </AnimatePresence>
            </div>

            <nav
                className="hidden sm:flex items-center gap-1 p-1 bg-secondary/20 border border-border/40 rounded-full backdrop-blur-3xl shadow-sm">
                {socials.map((link) => {
                    const m = CONFIG[link.label.toLowerCase()] || CONFIG.default;
                    return (
                        <a key={link.id} href={link.href} target="_blank"
                           className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/10 transition-colors">
                            <m.icon size={18} style={{color: m.color}}/>
                        </a>
                    );
                })}
            </nav>
        </div>
    );
}