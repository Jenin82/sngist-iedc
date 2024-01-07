import Image from "next/image";
import React from "react";
import { MdDateRange } from "react-icons/md";

type Props = {
    name: string;
    description: string;
    date: string;
    image: string;
};

const AchievementModule = (props: Props) => {
    return (
        <div className="card w-80 bg-base-100 shadow-xl hover:scale-105 transform transition duration-450">
            <figure className="h-[380px] overflow-hidden">
                <Image
                    src={props.image}
                    alt={props.name}
					width={320}
					height={600}
					objectFit="cover"
                />
            </figure>
            <div className="card-body items-center text-center pt-4 pb-5">
                <h2 className="card-title">{props.name}</h2>
                <p>{props.description}</p>
                <div className="card-actions border-t-2 w-full pt-3  justify-center flex items-center">
                    <MdDateRange />
                    {props.date}
                </div>
            </div>
        </div>
    );
};

export default AchievementModule;
