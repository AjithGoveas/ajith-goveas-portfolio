import {ContactInfo} from "@/types";
import {getDocs, orderBy, query} from "firebase/firestore";
import {contactCollection} from "@/utils/firebase.browser";

export async function loadAllContactInfo(): Promise<ContactInfo[] | null> {
    try {
        const linksQuery = query(contactCollection, orderBy("order", "asc"));
        const snapshot = await getDocs(linksQuery);

        if (snapshot.empty) {
            console.log("No documents found!");
            return null;
        }

        const contact = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return contact as ContactInfo[];
    } catch (error) {
        console.error("Failed to fetch social links:", error);
        return null;
    }
}