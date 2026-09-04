import {Experience} from "@/types";
import {getDocs, query} from "firebase/firestore";
import {experiencesCollection} from "@/utils/firebase.browser";

export async function loadAllExperiences(): Promise<Experience[] | null> {
    try {
        const experiencesQuery = query(experiencesCollection);
        const snapshot = await getDocs(experiencesQuery);

        if (snapshot.empty) return [];

        return snapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                role: data.role || "Software Engineer",
                company: data.company || "",
                period: data.period || "",
                location: data.location || "",
                description: data.description || "",
                skills: Array.isArray(data.skills) ? data.skills : [],
                order: data.order ?? 99,
            } as Experience;
        });
    } catch (error) {
        console.error("CRITICAL_FETCH_ERROR:", error);
        return null;
    }
}
