import { Links } from "@/types";
import { getDocs, query, orderBy } from "firebase/firestore";
import { socialLinksCollection } from "@/utils/firebase.browser";

// This function fetches all social links and returns them as a sorted array.
// It is intended for use in a Next.js Server Component.
export async function loadAllSocialLinks(): Promise<Links[] | null> {
    try {
        const linksQuery = query(socialLinksCollection, orderBy("order", "asc"));
        const snapshot = await getDocs(linksQuery);

        if (snapshot.empty) {
            console.log("No documents found!");
            return null;
        }

        const links = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        })) as Links[];

        return links;
    } catch (error) {
        console.error("Failed to fetch social links:", error);
        return null;
    }
}