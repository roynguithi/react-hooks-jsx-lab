import React from "react";
import { username, city } from "../data/data.js"; // Adjust the import path as needed

function Home() {
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}
export default Home;
export{username,city};