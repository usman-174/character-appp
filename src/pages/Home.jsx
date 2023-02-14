import React from "react";
import CardContainer from "../components/CardContainer";

const Home = () => {
  return (
    <>
      <div
        className="rounded-md mx-auto lg:w-3/4 text-center text-white"
        style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      >
        <CardContainer />
      </div>
    </>
  );
};

export default Home;
