import EventCard from "@/components/EventCard/EventCard";
import React from "react";
import data from "./data.json";

const page = () => {
    return (
        <div className="p-20 bg-base-200">
            <h1 className="text-4xl font-bold text-center py-6 mb-4">Events</h1>
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
