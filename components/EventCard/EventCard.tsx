import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";
import Button from "../Button/Button";
import Link from "next/link";

type Props = {
    name: string;
    description: string;
    image: string;
    isOver: boolean;
    isNew: boolean;
    link: string;
};

const EventCard = (props: Props) => {
    return (
        <div className="card w-96 shadow-xl bg-base-100">
            <figure className="max-h-[200px] overflow-hidden w-auto">
                <Image
                    src={props.image}
                    alt={props.name}
                    height={200}
					width={384}
					objectFit="cover"
                />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">
                    {props.name}
                    {props.isNew && (
                        <div className="badge badge-secondary">NEW</div>
                    )}
                </h2>
                <p>{props.description}</p>
                <div className="card-actions justify-end">
                    {props.isOver ? (
                        <div className="btn btn-error">
                            <Button
                                content={"Event Over"}
                                toast="Registration Closed"
                            />
                        </div>
                    ) : (
                        <Link href={props.link} className="btn btn-success">
                            <Button content={"Register"} />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventCard;
