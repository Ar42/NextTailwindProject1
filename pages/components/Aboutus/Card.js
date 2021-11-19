import React from "react";
import SingleComponentsofAboutus from "./SingleComponents";
const AboutusArrayDb = [
  {
    title: "Our Mission",
    content: "luctus massa ipsum at tempus eleifend congue lectus bibendum",
  },
  {
    title: "Our Goals",
    content: "luctus massa ipsum at tempus eleifend congue lectus bibendum",
  },
  {
    title: "Why Us?",
    content: "luctus massa ipsum at tempus eleifend congue lectus bibendum",
  },
];

const Card = () => {
  return (
    <>
      {AboutusArrayDb.map((x, i) => {
        return (
          <SingleComponentsofAboutus
            cardTitle={x.title}
            cardContent={x.content}
            serial_no={i + 1}
          />
        );
      })}
    </>
  );
};

export default Card;
