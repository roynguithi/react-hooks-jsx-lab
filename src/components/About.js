import React from "react";
import { image } from "../data/data.js"; // Adjust the import path as needed

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>This is a paragraph about me. I am passionate about web development and enjoy learning new technologies.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
