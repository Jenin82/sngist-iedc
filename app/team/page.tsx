
import React from "react";
import { MdOutlineDateRange } from "react-icons/md";

const page = () => {
    return (
      <div className="pt-20 px-5 md:px-10 ">
        <div className="collapse collapse-arrow bg-base-200 mb-2">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          <div className="flex items-center gap-2">     
            <MdOutlineDateRange /> 2022-23
            </div>
          </div>
          <div className="collapse-content">
            {/* <p>hello</p> */}
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 ">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          <div className="flex items-center gap-2">     
            <MdOutlineDateRange /> 2021-22
            </div>
          </div>
          <div className="collapse-content">
            {/* <p>hello</p> */}
          </div>
        </div>
        
      </div>
    );
};

export default page;
