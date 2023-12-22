import EventCard from "@/components/EventCard/EventCard";
import Newscard from "@/components/Newscard/Newscard";
import React from "react";
import data from "./data.json";

const page = () => {
    return (
        <div className="px-6 pt-20">
            <div>
                <h1 className="text-4xl font-bold text-center">Newsletter</h1>
            </div>
            <div className="flex flex-wrap gap-10 justify-center">
        {data.news.map((News) => (
          <Newscard
            key={News.date}
            image={News.image}
            link={News.link} 
            date={News.date}          />
        ))}
      </div>
        </div>
    );
};

export default page;
