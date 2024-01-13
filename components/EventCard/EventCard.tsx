import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import Link from "next/link";
import { MdDateRange } from "react-icons/md";



const EventCard = (props: EventsData) => {
    return (
        <div className="card w-80 bg-base-100 shadow-xl hover:scale-105 transform transition duration-450">
        <figure className="h-[320px] overflow-hidden">
            <Image
                src={props.image}
                alt={props.name}
                width={320}
                height={600}
                objectFit="cover"
                className="h-[320px] object-cover"
            />
        </figure>
        <div className="card-body items-center text-center pt-4 pb-5">
            <h2 className="card-title">{props.name}
            </h2>
            <p>{props.description}</p>
            <div className="card-actions border-t-2 w-full pt-3 gap-2 justify-center flex items-center">
                <MdDateRange />
                {props.date}
                {props.isNew === "1" && (<div className="badge badge-secondary">NEW</div>)}
            </div>
            <div className="card-actions justify-end">
                    {props.isOver ? (
                        <div className="btn btn-error">
                            <Button
                                content={"Event Over"}
                                toast="Registration Closed"
                                />
                        </div>
                    ) : (
                        <Link href={props.link} className="btn btn-success" target="_blank" referrerPolicy="no-referrer">
                            <Button content={"Register"} />
                        </Link>
                    )}
                </div>
        </div>
    </div>
);
};
export default EventCard;
