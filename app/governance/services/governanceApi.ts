import { iedcRoutes } from "@/services/Endpoints";
import { privateGateway } from "@/services/privateGateway";

export const getGovernanceData = async () => {
    try {
        const response = await privateGateway.get(iedcRoutes.governance);
        const data: Execom[] = response.data;
        return data;
    } catch (error) {
        throw error;
    }
};