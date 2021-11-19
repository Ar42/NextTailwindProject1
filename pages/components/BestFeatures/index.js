import React from "react";
import Card from "./Card";
import Heading from "./Heading";

const BestFeaturesIndex = () => {
  return (
    <>
      <div className="bg-black">
        {/* 1. Heading Part */}
        <Heading />
        {/* 2. Content Part */}
        {/* <div className=" w-4/5 mx-auto flex flex-wrap  mt-16 text-white py-16 sm:w-full "> */}
        {/* <div className=" w-2/5 mx-auto flex flex-wrap justify-between  mt-16 text-white py-16 sm:w-full "> */}
        <div className="w-4/5 mx-auto text-white flex flex-wrap gap-40 pb-16 ">
          <Card />
        </div>
      </div>
    </>
  );
};

export default BestFeaturesIndex;
