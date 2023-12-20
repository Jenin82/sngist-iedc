import React from "react";
import data from "./data.json"
import ImageHolder from "@/components/ImageHolder/ImageHolder";
import { MdOutlineDateRange } from "react-icons/md";

const page = () => {
    return (
        <div className="flex flex-wrap justify-center pt-20 px-6 gap-8">
            {data.execom.map((member) => (
                <ImageHolder
                    src={member.image}
                    alt={member.name}
                    role={member.designation}
                    key={member.name}
                />
            ))}
            <div className="collapse collapse-arrow bg-base-200 mb-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    <div className="flex items-center gap-2">
                        <MdOutlineDateRange /> 2022-23
                    </div>
                </div>
                <div className="collapse-content">{/* <p>hello</p> */}</div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 ">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    <div className="flex items-center gap-2">
                        <MdOutlineDateRange /> 2021-22
                    </div>
                </div>
                <div className="collapse-content">{/* <p>hello</p> */}</div>
            </div>
        </div>
    );
};

export default page;