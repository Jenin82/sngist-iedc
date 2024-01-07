import { iedcRoutes } from "@/services/Endpoints";
import { privateGateway } from "@/services/privateGateway";

export const getAchievementsData = async () => {
    try {
        const response = await privateGateway.get(iedcRoutes.achievements);
        const data: AchievementsData[] = response.data;
        return data;
    } catch (error) {
        throw error;
    }
};