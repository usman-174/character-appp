import React from "react";
import CardContainer from "../components/CardContainer";

const Home = () => {
  return (
    <>
      <div
        className="rounded-md mx-auto lg:w-[70%] text-center text-white pb-1"
        style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      >
       
        <CardContainer />
      </div>
      <br />
    </>
  );
};

export default Home;
