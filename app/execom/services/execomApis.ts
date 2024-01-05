import { iedcRoutes } from "@/services/Endpoints";
import { privateGateway } from "@/services/privateGateway";

export const getExecomData = async () => {
    try {
        const response = await privateGateway.get(
            iedcRoutes.openSheet
        );
		const data: Execom[] = response.data
		return data
    } catch (error) {
        console.error("API error:", error);
    }
};