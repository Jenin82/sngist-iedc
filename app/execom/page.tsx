"use client";

import React, { useEffect } from "react";
import data from "./data.json";
import ImageHolder from "@/components/ImageHolder/ImageHolder";
import { MdOutlineDateRange } from "react-icons/md";
import { getExecomData } from "./services/execomApis";
import toast from "react-hot-toast";

const page = () => {
	const year = "2024";
    const [data1, setData1] = React.useState<Execom[]>([]);
    const handleFetchDetails = async () => {
        try {
            const response = await getExecomData();
            if (response) {
                setData1(response);
				console.log(response);
            }
        } catch (error) {
            toast.error("Something went wrong, failed to load data");
        }
    };

    useEffect(() => {
        handleFetchDetails();
    }, []);

    return (
        <div className="mt-20 md:px-[2rem] lg:px-48 pb-20">
            <p className="font-bold text-4xl flex justify-center pt-5 pb-4 mb-20 ">
                EXECOM
            </p>
            <div className="flex flex-wrap justify-center px-6 md:gap-6 lg:gap-8">
                {data1.filter((member) => member.year === year).map((member) => (
                    <ImageHolder
                        src={member.image}
                        alt={member.name}
                        role={member.designation}
                        key={member.designation}
                        linkedin={member.linkedin}
                    />
                ))}
                <div>
                    <div className="collapse collapse-arrow bg-base-200 mb-4">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            <div className="flex items-center gap-2">
                                <MdOutlineDateRange /> 2022-23
                            </div>
                        </div>
                        <div className="collapse-content ">
                            <div className="flex flex-wrap justify-center pt-16 px-6 md:gap-6 lg:gap-8">
                                {data.secondexecom.map((member) => (
                                    <ImageHolder
                                        src={member.image}
                                        alt={member.name}
                                        role={member.designation}
                                        key={member.name}
                                        linkedin={member.linkedin}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200 ">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            <div className="flex items-center gap-2">
                                <MdOutlineDateRange /> 2021-22
                            </div>
                        </div>
                        <div className="collapse-content">
                            <div className="flex flex-wrap justify-center pt-16 px-6 md:gap-6 lg:gap-8">
                                {data.firstexecom.map((member) => (
                                    <ImageHolder
                                        src={member.image}
                                        alt={member.name}
                                        role={member.designation}
                                        key={member.name}
                                        linkedin={member.linkedin}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
