const SingleComponents = (props) => {
  console.log(props);
  return (
    <>
      {/* <div className="  gap-10 border border-solid border-gray-100 border-opacity-20 py-12 px-8  m-3 rounded-md sm:w-full p-0 flex text-center md:text-left items-center flex-col md:flex-row  mb-7 md:mx-auto md:w-2/5 sm: mx-2 "> */}
      <div className="border border-solid border-gray-100 border-opacity-20 flex justify-between flex-wrap w-full sm:w-2/5 pb-6 px-3">
        <div className="p-8 bg-gray-700 bg-opacity-40 rounded-full mx-auto sm:ml-0">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d={props.cardIcon}
            ></path>
          </svg>
        </div>
        <div>
          <h4 className="text-lg font-medium leading-8 mb-2 text-center sm:text-left sm:p-2 ">
            {props.cardTitle}
          </h4>
          <p className="text-base font-light leading-8 text-center sm:text-left sm:p-2">
            {props.cardContent}
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleComponents;
// Graphic Design Tempore corrupti temporibus fuga earum asperiores
//             fugit laudantium.
