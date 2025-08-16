import {Links} from "@/types";
import {getDocs, orderBy, query} from "firebase/firestore";
import {socialLinksCollection} from "@/utils/firebase.browser";

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
        }));

        return links as Links[];
    } catch (error) {
        console.error("Failed to fetch social links:", error);
        return null;
    }
}