import ImageHolder from "@/components/ImageHolder/ImageHolder";
import React from "react";
import data from "./data.json";

const page = () => {
    return (
        <div className="p-16 lg:px-36 md:px-10 md:bg-base-200">
            <h1 className="text-4xl font-bold text-center pt-8">
                GOVERNING BODY
            </h1>
            <div className="mt-24 px-10 items-center flex flex-col">
                <div className="md:card md:bg-base-100 items-center md:shadow-lg md:w-[20rem] md:mb-20 pb-3">
                    <ImageHolder
                        key={data.principal.src}
                        src={data.principal.src}
                        alt={data.principal.alt}
                        role={data.principal.role}
                    />
                </div>
                <div className="flex justify-center flex-wrap md:flex-row md:mb-20 gap-10 mt-20 md:shadow-lg md:w-[40rem] md:card md:bg-base-100">
                    {data.nodalOfficers.map((event) => (
                        <ImageHolder
                            key={event.src}
                            src={event.src}
                            alt={event.alt}
                            role={event.role}
                        />
                    ))}
                </div>
                <div className="flex justify-center flex-wrap gap-10 mt-20 md:shadow-lg md:w-[70rem] md:card md:bg-base-100 md:flex-row">
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
