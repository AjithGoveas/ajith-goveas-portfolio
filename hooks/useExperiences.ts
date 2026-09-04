import {useEffect, useState} from "react";
import {Experience} from "@/types";
import {loadAllExperiences} from "@/services/experiences";

interface UseExperiencesResult {
    experiences: Experience[] | null;
    isLoading: boolean;
    error: Error | null;
}

export function useExperiences(): UseExperiencesResult {
    const [experiences, setExperiences] = useState<Experience[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const exps = await loadAllExperiences();
                setExperiences(exps);
            } catch (err) {
                console.error("Error fetching experiences:", err);
                setError(err as Error);
                setExperiences(null);
            } finally {
                setIsLoading(false);
            }
        };
        fetchExperiences().catch(err => console.error(err));
    }, []);

    return {experiences, isLoading, error};
}
