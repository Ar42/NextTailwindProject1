import React from "react";
import SingleComponents from "./SingleComponents";
const cardData = [
  {
    title: "Graphic Design",
    content:
      "Tempore corrupti temporibus fuga earum asperiores fugit laudantium.",
    icons:
      "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
  },
  {
    title: "Web & Mobile Design",
    content:
      "Tempore corrupti temporibus fuga earum asperiores fugit laudantium.",
    icons:
      "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "Social Media Marketing",
    content:
      "Tempore corrupti temporibus fuga earum asperiores fugit laudantium.",
    icons: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
  },
  {
    title: "Document Legal Policy",
    content:
      "Tempore corrupti temporibus fuga earum asperiores fugit laudantium.",
    icons:
      "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2",
  },
];
const Card = (props) => {
  console.log("Props", props);
  return (
    <>
      {cardData.map((x) => {
        return (
          <SingleComponents
            cardIcon={x.icons}
            cardTitle={x.title}
            cardContent={x.content}
          />
        );
      })}
    </>
  );
};

export default Card;
