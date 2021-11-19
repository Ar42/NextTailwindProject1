import React from "react";

const GetinTouch = () => {
  return (
    <>
      <div>
        <h4 className="contactTopHeadings">Get In Touch.</h4>
        <div>
          <input type="text" placeholder="Name" className="form-control " />
        </div>
        <div>
          <input type="email" placeholder="Email" className="form-control " />
        </div>
        <div>
          <textarea placeholder="Message" className="form-control "></textarea>
        </div>
        <button className="text-lg  leading-7  bg-white px-2 py-1">
          Send Message
        </button>
      </div>
    </>
  );
};

export default GetinTouch;
