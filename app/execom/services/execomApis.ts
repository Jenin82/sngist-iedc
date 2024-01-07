import { iedcRoutes } from "@/services/Endpoints";
import { privateGateway } from "@/services/privateGateway";

export const getExecomData = async () => {
    try {
        const response = await privateGateway.get(
            iedcRoutes.execom
        );
		const data: Execom[] = response.data
		return data
    } catch (error) {
        throw error;
    }
};