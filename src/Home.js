import React from "react";
import Navbar from "./Navbar";
import Routine from "./Routine";

function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center">
        <Routine />
      </div>
    </>
  );
}

export default Home;
