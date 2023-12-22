import EventCard from "@/components/EventCard/EventCard";
import React from "react";
import data from "./data.json";

const page = () => {
  return (
    <div className="mt-20 px-20">
      <div className="flex flex-wrap gap-10 justify-center">
        {data.events.map((event) => (
          <EventCard
            key={event.name}
            name={event.name}
            description={event.description}
            image={event.image}
            isOver={event.isOver}
            isNew={event.isNew}
            link={event.link}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
