import AchievementModule from "@/components/AchievementModule/AchievementModule";
import { getData, iedcRoutes } from "@/services/Endpoints";

export default async function Page() {
    const data:AchievementsData[] = await getData(iedcRoutes.achievements);
    return (
        <div className="p-20 bg-base-200">
            <h1 className="text-4xl font-bold text-center p-5">Achievements</h1>
            <div className="flex flex-wrap gap-10 justify-center mt-5">
                {data.map((data) => (
                    <AchievementModule
                        key={data.title}
                        name={data.title}
                        description={data.description}
                        date={data.date}
                        image={data.image}
                    />
                ))}
            </div>
        </div>
    );
};