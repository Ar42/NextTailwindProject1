import React from "react";
import Card from "./Card";
import Image from "next/image";
import hallRomPic from "../Aboutus/../../../images/hallroom.jpg";
import Heading from "./Heading";

const AboutusIndex = () => {
  return (
    <>
      <div className="bg-primary pb-16 ">
        {/* <div className="pt-16 w-4/5 mx-auto flex-wrap flex items-center justify-between text-white "> */}
        <div className="pt-16 w-4/5 mx-auto flex flex-col lg:flex-row justify-between items-center text-white gap-20 ">
          {/* <div>
            <Image
              src={hallRomPic}
              alt="hall Room Picture"
              height={800}
              width={600}
            />
          </div> */}
          <div className="w-full md:w-4/5">
            <Image src={hallRomPic} alt="Hallroom" />
          </div>
          <div className="w-full md:w-4/5">
            <Heading />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutusIndex;
