import { fetchGateway, iedcRoutes } from "@/services/Endpoints";
import toast from "react-hot-toast";

// Function to fetch data from the server
export async function getData() {
    const res = await fetch(fetchGateway(iedcRoutes.achievements), {
        next: { revalidate: 3600 * 12 },
    });
    if (!res.ok) {
		toast.error("Failed to fetch data");
        throw new Error("Failed to fetch data");
    }
    return res.json();
}