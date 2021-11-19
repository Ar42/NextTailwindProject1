import React from "react";
import Image from "next/image";

const SingleComponent = (props) => {
  return (
    <>
      <div className="w-2/3 sm:w-1/3">
        <Image src={props.staffSerial} alt="hall Room Picture" />
      </div>
    </>
  );
};

export default SingleComponent;
