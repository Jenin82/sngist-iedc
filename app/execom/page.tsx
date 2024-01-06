"use client";

import React, { useEffect, useState } from "react";
import ImageHolder from "@/components/ImageHolder/ImageHolder";
import { MdOutlineDateRange } from "react-icons/md";
import { getExecomData } from "./services/execomApis";
import toast from "react-hot-toast";

const page = () => {
    const [data, setData] = useState<Execom[]>([]);
    const handleFetchDetails = async () => {
		try {
			const response = await getExecomData();
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
	
	const years = data.map((execom) => parseInt(execom.year, 10));
	const highestYear = Math.max(...years);
    const lowestYear = Math.min(...years);
	const yearsFromHighestToLowest = Array.from(
        { length: (highestYear - 1) - lowestYear + 1 },
        (_, index) => (highestYear - 1) - index
    );

    return (
        <div className="mt-20 md:px-[2rem] lg:px-48 pb-20">
            <p className="font-bold text-4xl flex justify-center pt-5 pb-4 mb-20 ">
                EXECOM
            </p>
            <div className="flex flex-wrap justify-center px-6 md:gap-6 lg:gap-8">
                {data
                    .filter((member) => member.year === highestYear.toString())
                    .map((member) => (
                        <ImageHolder
                            src={member.image}
                            alt={member.name}
                            role={member.designation}
                            key={member.designation}
                            linkedin={member.linkedin}
                        />
                    ))}
                <div>
                    {yearsFromHighestToLowest.map((year) => (
                        <div className="collapse collapse-arrow bg-base-200 mb-4" key={year}>
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                <div className="flex items-center gap-2">
                                    <MdOutlineDateRange /> {year -1 }-{year}
                                </div>
                            </div>
                            <div className="collapse-content ">
                                <div className="flex flex-wrap justify-center pt-16 px-6 md:gap-6 lg:gap-8">
                                    {data
                                        .filter(
                                            (member) =>
                                                member.year ===
                                                String(year)
                                        )
                                        .map((member) => (
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
                    ))}
                    
                </div>
            </div>
        </div>
    );
};

export default page;
