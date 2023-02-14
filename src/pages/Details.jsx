import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UsageTable from "../components/UsageTable";

const Details = () => {
  let { tail } = useParams();
  const [character, setcharacter] = useState(null);

  const getCharacter = async () => {
    try {
      const { data } = await axios.get(
        `https://amiiboapi.com/api/amiibo/?tail=${tail}&showusage=`
      );
      if (data) {
        setcharacter({
          ...data.amiibo[0],
          usage: [
            ...data.amiibo[0].games3DS.map((detail) => {
              return {
                gameName: detail.gameName,
                usage: detail.amiiboUsage[0].Usage,
              };
            }),
            ...data.amiibo[0].gamesSwitch.map((detail) => {
              return {
                gameName: detail.gameName,
                usage: detail.amiiboUsage[0].Usage,
              };
            }),
            ...data.amiibo[0].gamesWiiU.map((detail) => {
              return {
                gameName: detail.gameName,
                usage: detail.amiiboUsage[0].Usage,
              };
            }),
          ],
        });
      }
    } catch (error) {}
  };
  useEffect(() => {
    getCharacter();
    // eslint-disable-next-line
  }, []);
  return (
    <div
      className="rounded-md mx-auto lg:w-[90%] text-center text-white my-10 p-5 relative"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
    >
      {character ? (
        <div className="grid grid-cols-1 lg:grid-cols-4">
          {/* Left */}
          <div className="lg:w-auto sm:w-[50%] mx-auto text-center">
            <h1 className="text-xl my-1">{character.name}</h1>

            <h2 className="text-md ">{character.amiiboSeries}</h2>
            <br />
            <img
              src={character.image}
              alt="Profile Character"
              className="mb-3 w-28 h-28 mx-auto text-center"
            />
            <button className="bg-blue-600 p-3 rounded-2xl text-center mx-auto">
              Product Page
            </button>
            {/* <div className="">
              <div className="flex justify-between px-10">
                <h3>Name : </h3>
                <h3>{character.name} </h3>
              </div>
              <div className="flex justify-between px-10">
                <h3>Character : </h3>
                <h3>{character.character} </h3>
              </div>
            </div>
            <br />
            <h3>Release Date:</h3>
            {Object.keys(character.release).map((key) => {
              return (
                <div key={key} className="flex justify-between px-10">
                  <h3>{key} : </h3>
                  <h3>{character.release[key]} </h3>
                </div>
              );
            })}
            <br />
            <div className="flex justify-between px-10">
              <h3>Identifier : </h3>
              <h3>{character.tail} </h3>
            </div> */}
          </div>
          {/* ==================================================== */}
          {/* Right */}
          <div className="col-span-3 ">
            <UsageTable usage={character.usage} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Details;