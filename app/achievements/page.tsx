"use client"

import AchievementModule from "@/components/AchievementModule/AchievementModule";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getAchievementsData } from "./services/achievementsApi";

const Page = () => {
        const [data, setData] = useState<AchievementsData[]>([]);
        const handleFetchDetails = async () => {
            try {
                const response = await getAchievementsData();
                if (response) {
                    setData(response);
                }
            } catch (error) {
                toast.error("Something went wrong, failed to load data");
            }
        };
    
        useEffect(() => {
            handleFetchDetails();
        }, []);
    

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

export default Page;