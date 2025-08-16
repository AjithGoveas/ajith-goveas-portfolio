'use client';

import {Links} from "@/types";
import {IconBrandGithub, IconBrandLinkedin, IconMail} from "@tabler/icons-react";
import {useSocialLinks} from "@/hooks/useSocialLinks";
import {motion} from "framer-motion";
import {toTitleCase} from "@/utils/formatters";

function getIcon(label: string) {
    switch (label.toLowerCase()) {
        case "github":
            return IconBrandGithub;
        case "linkedin":
            return IconBrandLinkedin;
        case "gmail":
            return IconMail;
        default:
            return null;
    }
}

// Defines the props for the social link renderer
interface SocialLinkRendererProps {
    socials: Links[];
    isFullStyle: boolean;
}

// A dedicated subcomponent for rendering the list of links
function SocialLinkRenderer({socials, isFullStyle}: SocialLinkRendererProps) {
    // Perform data enrichment only if the full style is needed
    const displayedSocials = socials.map(link => ({
        ...link,
        icon: getIcon(link.label),
    }))

    if (isFullStyle) {
        return (
            <div className="flex gap-4">
                {displayedSocials.map((social) => {
                    const IconComponent = social.icon;
                    if (!IconComponent) return null;

                    return (
                        <motion.a
                            key={social.id}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                            className="flex items-center gap-3 px-4 py-3 border border-border/70 rounded-lg hover:border-primary/40 transition-all duration-300 group"
                        >
                            <IconComponent
                                className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                            />
                            <div>
                                <div className="text-sm font-medium text-primary">{toTitleCase(social.label)}</div>
                                <div className="text-xs text-muted-foreground">{social.username || ""}</div>
                            </div>
                        </motion.a>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="flex gap-4">
            {displayedSocials.map((social) => {
                const IconComponent = social.icon;
                if (!IconComponent) return null;

                return (
                    <a
                        key={social.id}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
                    >
                        <IconComponent className="w-5 h-5"/>
                    </a>
                );
            })}
        </div>
    );
}

// Main component, now even cleaner
interface SocialLinksProps {
    fullStyle?: boolean;
}

export default function SocialLinks({fullStyle = false}: SocialLinksProps) {
    const {socialLinks, isLoading, error} = useSocialLinks();

    if (isLoading) {
        return <div>Loading social links...</div>;
    }

    if (error) {
        return <div>Error loading social links.</div>;
    }

    if (!socialLinks || socialLinks.length === 0) {
        return <div>No social links available.</div>;
    }

    return (
        <div className="py-8">
            <SocialLinkRenderer socials={socialLinks} isFullStyle={fullStyle}/>
        </div>
    );
}