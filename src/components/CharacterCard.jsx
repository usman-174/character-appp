import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  const { name, amiiboSeries, image, series,keytail } = character;

  return (
    <div className="rounded-md bg-black flex-col border-white border-spacing-1 p-1 lg:w-3/5 mx-auto text-center">
      <h1 className="text-xl my-1">{name}</h1>

      <h2 className="text-md ">{amiiboSeries}</h2>
      <br />
      <img
        src={image}
        alt="Profile Character"
        
        className="mb-3 w-24 h-24 mx-auto text-center"
      />
      <div>
        <div className="flex justify-around items-center text-left">
          <h3>Franchise : </h3>
          <h3>{series} </h3>
        </div>
        <div className="flex justify-around items-center text-left">
          <h3>AmiiboSeries : </h3>
          <h3>{amiiboSeries} </h3>
        </div>
      </div>
      <h1 className="my-5 font-bold text-xl cursor-pointer font-mono">
        <Link to={`/details/${keytail}`}>More Details</Link></h1>
    </div>
  );
};

export default CharacterCard;
