import React from "react";

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
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={props.image} alt={props.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {props.name}
          {props.isNew && <div className="badge badge-secondary">NEW</div>}
        </h2>
        <p>{props.description}</p>
        <div className="card-actions justify-end">
          {props.isOver ? (
            <button className="btn btn-warning">Event Over</button>
          ) : (
            <a href={props.link}>
                <button className="btn btn-success">Register</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
