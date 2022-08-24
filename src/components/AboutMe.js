import "../App.css";
import React from "react";
import TagCloud from "react3dtagcloud";

function AboutMe() {
  const tagName = [
    "HTML",
    "npm",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "jQuery",
    "React",
    "Express.js",
    "Node.js",
    "MongoDB",
    "MySQL",
    "Handlebars.js",
    "Git",
  ];

  return (
    <div id="about" class="aboutImg container-fluid text-center pt-5 pb-">
      <hr id="aboutBreak" />
      <h1 class="p-3" id="aboutMeTitle">
        About Me
      </h1>

      <div class="row justify-content-around pt-5 pb-" id="spacePls">
        <div class="col-lg-4 col-sm-10 d-flex text-center">
          <p id="aboutMeBody">
            Web developer, UI enthusiast, and problem-solver based in Atlanta. I
            have a passion for building interactive web applications with
            intuitive design. I'm on a life-long journey of continuous learning
            in an attempt to master the craft that is web development.
          </p>
        </div>
        <div class="col-lg-4 col-sm-10 d-flex row pt-1 " id="skills">
          <div style={{ width: "100%" }} class="nav" id="skillsList">
            <TagCloud
              id="sphere"
              tagName={tagName}
              speed={1}
              radius={200}
            ></TagCloud>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
