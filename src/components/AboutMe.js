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
    "React.js",
    "Tailwind",
    "Agile methodology",
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
        <div class="col-lg-4 col-sm-10 d-flex row text-center">
          <p id="aboutMeBody">
            I'm a web developer, UI enthusiast, and problem-solver based in Atlanta. I
            have a passion for building interactive web applications with
            intuitive design and delivering quality products in a timely manner. I'm on a life-long journey of continuous learning
            in an attempt to master the craft that is web development.
          </p>
          <p id="aboutMeBody">
            In early 2022 I made a big life decision and decided to embark on a career change. I decided I wanted to learn how to code and pursue web development. I enrolled in Georgia Tech's web development bootcamp and gradutated with a certificate in September of 2022. I absolutely loved my time in the bootcamp. It pushed me to learn in a way I could have never done on my own and I will forever be grateful for the skills I learned during the bootcamp.
          </p>
          <p id="aboutMeBody">
            Even though I have gradutated and have a certificate I know this is just the beginning of my developer journey. There is still so much to learn, so much to build, and so much to break along the way. The fact that it's going to be a never ending pursuit of learning is appealing to me and I can't wait to hopefully pursue this journey with some of you!
          </p>
          <p id="aboutMeBody">
            What I'm currently working on and learning: <br></br>Data structures and algorithms <br></br> Tailwind CSS <br></br> Freelance work for a law firm
          </p>
        </div>
        <div class="col-lg-4 col-sm-10 d-flex row pt-5" id="skills">
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
