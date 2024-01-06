"use client";

import ImageHolder from "@/components/ImageHolder/ImageHolder";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getGovernanceData } from "./services/governanceApi";

const Page = () => {
    const [data, setData] = useState<GovernanceData[]>([]);
    const handleFetchDetails = async () => {
        try {
            const response = await getGovernanceData();
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

    return (
        <div className="p-16 lg:px-36 md:px-10">
            <h1 className="text-4xl font-bold text-center pt-8">
                GOVERNING BODY
            </h1>
            <div className="mt-24 px-10 items-center flex flex-col">
                <div className="md:mb-12">
                    {data
                        .filter((data) => data.designation === "PRINCIPAL")
                        .map((data) => (
                            <ImageHolder
                                key={data.image}
                                src={data.image}
                                alt={data.name}
                                role={data.designation}
                            />
                        ))}
                </div>
                <div className="flex justify-center flex-wrap md:flex-row md:mb-20 gap-10 mt-20">
                    {data
                        .filter((data) => data.designation === "NODAL OFFICER")
                        .map((data) => (
                            <ImageHolder
                                key={data.image}
                                src={data.image}
                                alt={data.name}
                                role={data.designation}
                            />
                        ))}
                </div>
                <div className="flex justify-center flex-wrap gap-10 mt-20 md:flex-row">
                    {data
                        .filter(
                            (data) => data.designation === "FACULTY COORDINATOR"
                        )
                        .map((data) => (
                            <ImageHolder
                                key={data.image}
                                src={data.image}
                                alt={data.name}
                                role={data.designation}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
