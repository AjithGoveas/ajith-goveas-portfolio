import { useState, useEffect } from "react";
import { Links } from "@/types";
import { loadAllSocialLinks } from "@/services/social-links";

interface UseSocialLinksResult {
    socialLinks: Links[] | null;
    isLoading: boolean;
    error: Error | null;
}

export function useSocialLinks(): UseSocialLinksResult {
    const [socialLinks, setSocialLinks] = useState<Links[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchLinks = async () => {
            try {
                const links = await loadAllSocialLinks();
                setSocialLinks(links);
            } catch (err) {
                console.error("Error fetching documents:", err);
                setError(err as Error);
                setSocialLinks(null);
            } finally {
                setIsLoading(false);
            }
        };
        fetchLinks().catch(err => console.error(err));
    }, []);

    return { socialLinks, isLoading, error };
}