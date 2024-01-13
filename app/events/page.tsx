import EventCard from "@/components/EventCard/EventCard";
import React from "react";
import { getData, iedcRoutes } from "@/services/Endpoints";

const page = async () => {

    const data:EventsData[] = await getData(iedcRoutes.events)
    
    function isDateInFuture(inputDate: string): boolean {
        const currentDate = new Date();
        const providedDate = new Date(inputDate);
    
        // Compare the provided date with the current date
        return providedDate < currentDate;
    }

    return (
        <div className="p-20 bg-base-200">
            <h1 className="text-4xl font-bold text-center py-6 mb-4">Events</h1>
            <div className="flex flex-wrap gap-10 justify-center">
                {data.map((event) => (
                    <EventCard
                        key={event.name}
                        name={event.name}
                        description={event.description}
                        image={event.image}
                        isOver={isDateInFuture(event.date)}
                        date={event.date}
                        isNew={event.isNew}
                        link={event.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default page;
