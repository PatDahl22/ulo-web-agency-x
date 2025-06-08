import { db } from "./firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";

export async function logAnalyticsEvent(page: string) {
  try {
    await addDoc(collection(db, "analytics"), {
      page,
      timestamp: Timestamp.now(),
    });
  } catch (error) {
    console.error("Analytics error:", error);
  }
}
