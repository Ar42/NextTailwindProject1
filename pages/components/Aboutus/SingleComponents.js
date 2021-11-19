import React from "react";

const SingleComponentsofAboutus = (props) => {
  return (
    <>
      <div className="mb-6">
        <h4 className="text-lg leading-6 font-medium mb-1  ">
          <span className="border border-blue-500 border-full px-2 py-1 rounded-full text-blue-500 mr-2">
            {props.serial_no}
          </span>
          {props.cardTitle}
        </h4>
        <p className="text-aboutusParagraph text-base leading-6 font-light ml-10 ">
          {props.cardContent}
        </p>
      </div>
    </>
  );
};

export default SingleComponentsofAboutus;
