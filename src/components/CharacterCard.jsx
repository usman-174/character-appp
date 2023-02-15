import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  const { name, amiiboSeries, image, series, keytail } = character;

  return (
    <div
      className="rounded-md bg-black border-white border-spacing-1 p-1 
       w-11/12 md:w-3/4 mx-auto text-center flex flex-col justify-evenly"
    >
      <h1 className="text-md md:text-xl font-bold my-1">{name}</h1>

      <h2 className="text-xs italic">{amiiboSeries}</h2>

      <img
        src={image}
        alt="Profile Character"
        className="mb-3 w-20 md:w-24 h-auto mx-auto mt-2 text-center"
      />
      <div className="text-xs md:text-sm md:w-3/4 mx-auto">
        <div className="flex sm:flex-row flex-col justify-around items-center text-left">
          <h3 className="sm:font-normal font-bold ">
            Franchise <span className="sm:inline-flex hidden">:</span>{" "}
          </h3>
          <h3>{series} </h3>
        </div>
        <div className="flex  sm:flex-row flex-col sm:mt-0 mt-2 justify-around items-center text-left">
          <h3 className="sm:font-normal font-bold">
            AmiiboSeries <span className="sm:inline-flex hidden">:</span>{" "}
          </h3>
          <h3>{amiiboSeries} </h3>
        </div>
      </div>
      <h1 className="mt-3 font-bold text-sm md:text-md font-mono">
        <Link
          to={`/details/${keytail}`}
          className=" cursor-pointer  hover:text-blue-500"
        >
          More Details
        </Link>
      </h1>
    </div>
  );
};

export default CharacterCard;
