import React from "react";
import { MdDateRange } from "react-icons/md";
import { MdFileDownload } from "react-icons/md";

type Props = {
  date: string;
  image: string;
  link: string;
};

const Newscard = (props: Props) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={props.image}
          alt={props.date}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body text-center">
        <div className="card-actions w-full pb-5 justify-center flex items-center font-bold">
        <MdDateRange />{props.date}
        </div>
        <div className="card-actions justify-end">
          <a href={props.link} target="_blank"><button className="btn btn-primary btn-sm "><MdFileDownload />Download</button></a>
        </div>
      </div>
    </div>
  );
};

export default Newscard;
