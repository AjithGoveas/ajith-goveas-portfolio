'use client';

import {IconBrandGithub, IconBrandLinkedin, IconMail} from "@tabler/icons-react";
import {useSocialLinks} from "@/hooks/useSocialLinks"; // Custom hook
import Link from "next/link";

function getIcon(label: string) {
    switch (label.toLowerCase()) {
        case "github":
            return <IconBrandGithub className="w-5 h-5"/>;
        case "linkedin":
            return <IconBrandLinkedin className="w-5 h-5"/>;
        case "gmail":
            return <IconMail className="w-5 h-5"/>;
        default:
            return null;
    }
}

export default function SocialLinks() {
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
        <div className="flex gap-4">
            {socialLinks.map(({href, label, id}) => (
                <Link
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
                >
                    {getIcon(label)}
                </Link>
            ))}
        </div>
    );
}