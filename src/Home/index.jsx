import React from "react";
import "./style.css";
import InputHome from "./Input";
import Cards from "./Cards";

function Home() {
  return (
    <div className="home">
      <InputHome />
      {/**cards */}
      <Cards />
    </div>
  );
}
export default Home;
