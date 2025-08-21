import {useEffect, useState} from "react";
import {ContactInfo} from "@/types";
import {loadAllContactInfo} from "@/services/contact-info";

interface UseContactInfoResult {
    contactInfo: ContactInfo[] | null;
    isLoading: boolean;
    error: Error | null;
}

export function useContactInfo(): UseContactInfoResult {
    const [contactInfo, setContactInfo] = useState<ContactInfo[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchLinks = async () => {
            try {
                const links = await loadAllContactInfo();
                setContactInfo(links);
            } catch (err) {
                console.error("Error fetching documents:", err);
                setError(err as Error);
                setContactInfo(null);
            } finally {
                setIsLoading(false);
            }
        };
        fetchLinks().catch(err => console.error(err));
    }, []);

    return {contactInfo, isLoading, error};
}