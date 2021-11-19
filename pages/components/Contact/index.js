import React from "react";
import Contact from "./Contact";
import GetinTouch from "./GetinTouch";

const ContactIndex = () => {
  return (
    <>
      <div className="bg-primary px-5 py-10">
        <div className="w-full sm:w-4/5 mx-auto flex justify-between flex-wrap gap-20 ">
          <div>
            <GetinTouch />
          </div>
          <div>
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactIndex;
