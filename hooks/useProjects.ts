import { useState, useEffect } from "react";
import {Project} from "@/types";
import {loadAllProjects} from "@/services/projects";

interface UseProjectsResult {
    projects: Project[] | null;
    isLoading: boolean;
    error: Error | null;
}

export function useProjects(): UseProjectsResult {
    const [projects, setProjects] = useState<Project[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const projects = await loadAllProjects();
                setProjects(projects);
            } catch (err) {
                console.error("Error fetching documents:", err);
                setError(err as Error);
                setProjects(null);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProjects().catch(err => console.error(err));
    }, []);

    return { projects, isLoading, error };
}