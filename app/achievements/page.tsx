import AchievementModule from "@/components/AchievementModule/AchievementModule";
import React from "react";
import data from "./data.json"

const page = () => {
  return (
    <div className=" mt-20 px-20">
      <div className="flex flex-wrap gap-10 justify-center">
      {data.events.map((event) => (
        <AchievementModule
        key={event.name}
        name={event.name}
        description={event.description}
        date={event.date}
        />
        ))}
        </div>
    </div>
  );
}; 

export default page;
