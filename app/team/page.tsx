import React from "react";
import data from "./data.json"
import ImageHolder from "@/components/ImageHolder/ImageHolder";

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
        </div>
    );
};

export default page;