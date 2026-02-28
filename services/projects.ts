import { Project } from "@/types";
import { getDocs, orderBy, query, limit } from "firebase/firestore";
import { projectsCollection } from "@/utils/firebase.browser";

export async function loadAllProjects(): Promise<Project[] | null> {
    try {
        const projectsQuery = query(
            projectsCollection,
            orderBy("order", "asc"),
            orderBy("year", "desc")
        );

        const snapshot = await getDocs(projectsQuery);

        if (snapshot.empty) return [];

        return snapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                title: data.title || "Untitled Project",
                description: data.description || "",
                tech: data.tech || [],
                githubUrl: data.githubUrl || "",
                liveUrl: data.liveUrl || "",
                type: data.type || "FullStack",
                year: data.year || new Date().getFullYear(),
                order: data.order ?? 99,
                // Ensure image is handled if you add it to Firebase later
                image: data.image || null
            } as Project;
        });
    } catch (error) {
        console.error("CRITICAL_FETCH_ERROR:", error);
        return null;
    }
}