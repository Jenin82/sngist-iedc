import AchievementModule from "@/components/AchievementModule/AchievementModule";
import React from "react";
import data from "./data.json";

const page = () => {
    return (
        <div className="p-20 bg-base-200">
			<h1 className="text-4xl font-bold text-center p-5">Achievements</h1>
            <div className="flex flex-wrap gap-10 justify-center mt-5">
                {data.events.map((event) => (
                    <AchievementModule
                        key={event.name}
                        name={event.name}
                        description={event.description}
                        date={event.date}
                        image={event.image}
                        alt={event.alt}
                    />
                ))}
            </div>
        </div>
    );
};

export default page;
