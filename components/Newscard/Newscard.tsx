import Image from "next/image";
import React from "react";
import { MdDateRange, MdOutlineViewInAr } from "react-icons/md";

type Props = {
    date: string;
    image: string;
    link: string;
};

const Newscard = (props: Props) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-5">
            <figure className="overflow-hidden">
                <Image
                    src={props.image}
                    alt={props.date}
					width={400}
					height={300}
					objectFit="cover"
                    className="hover:scale-105 h-[220px] transition duration-450"
                />
            </figure>
            <div className="card-body text-center p-4">
                <div className="card-actions text-lg w-full justify-center flex items-center">
                    <MdDateRange />
                    {props.date}
                </div>
                <div className="card-actions justify-center">
                    <a href={props.link} target="_blank">
                        <button className="bg-primary flex items-center justify-center gap-2 py-2 px-4 hover:bg-secondary rounded-md text-primary-content">
                            <MdOutlineViewInAr />
                            View
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Newscard;
