import React from "react";
import Card from "./Card";
import Heading from "./Heading";

const StuffIndex = () => {
  return (
    <>
      <div className="w-full bg-black pt-16 pb-14 px-16">
        <div className="  flex justify-between container mx-auto gap-20 flex-col-reverse lg:flex-row  items-center ">
          <div className="lg:w-2/5 w-full ">
            <Heading />
          </div>
          <div className=" container mx-auto  lg:w-2/5 w-full flex justify-around flex-wrap   xs: gap-5 ">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default StuffIndex;
