import {Project} from "@/types";
import {getDocs, orderBy, query} from "firebase/firestore";
import {projectsCollection} from "@/utils/firebase.browser";

export async function loadAllProjects(): Promise<Project[] | null> {
    try {
        const projectsQuery = query(projectsCollection, orderBy("year", "asc"));
        const snapshot = await getDocs(projectsQuery);

        if (snapshot.empty) {
            console.log("No documents found!");
            return null;
        }

        const projects = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return projects as Project[];
    } catch (error) {
        console.error("Failed to fetch projects:", error);
        return null;
    }
}