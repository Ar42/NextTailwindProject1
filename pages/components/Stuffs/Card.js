import React from "react";
import SingleComponent from "./SingleComponent";
import staff1 from "./../../../images/stuff1.jpg";
import staff2 from "./../../../images/stuff2.jpg";
import staff3 from "./../../../images/stuff3.jpg";
import staff4 from "./../../../images/stuff4.jpg";
const pictureNames = [
  { source: staff1 },
  { source: staff2 },
  { source: staff3 },
  { source: staff4 },
];

const Card = () => {
  return (
    <>
      {pictureNames.map((x) => {
        return <SingleComponent staffSerial={x.source} />;
      })}
    </>
  );
};

export default Card;
