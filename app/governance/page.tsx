import ImageHolder from "@/components/ImageHolder/ImageHolder";
import React from "react";
import data from "./data.json"

const page = () => {
  return (
    <div className="mt-24 lg:px-36 md:px-10">
      <h1 className="text-4xl font-bold text-center">GOVERNING BODY</h1>
      <div className="mt-24  px-10">
        <div className="flex justify-center flex-wrap gap-10">
        <ImageHolder
        key={data.principal.src}
        src={data.principal.src}
        alt={data.principal.alt}
        role={data.principal.role}
        />
        </div>
        <div className="flex justify-center flex-wrap gap-10 mt-20">
        {data.nodalOfficers.map((event) => (
            <ImageHolder
            key={event.src}
            src={event.src}
            alt={event.alt}
            role={event.role}
            />
            ))}
            </div>
            <div className="flex justify-center flex-wrap gap-10 mt-20">
        {data.teachers.map((event) => (
            <ImageHolder
            key={event.src}
            src={event.src}
            alt={event.alt}
            role={event.role}
            />
            ))}
            </div>
      </div>
    </div>
  );
};

export default page;
