import "../App.css";
import React from "react";
import TagCloud from "react3dtagcloud";

function AboutMe() {
  const tagName = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap++",
    "jQuery",
    "React",
    "Node.js",
    "MongoDB",
    "MySQL",
    "Handlebars.js",
    "Git",
  ];

  return (
    <div id="about" class="aboutImg container-fluid text-center pt-5 pb-5">
      <hr id="aboutBreak" />
      <h1 class="p-3" id="aboutMeTitle">
        About Me
      </h1>

      <div class="row justify-content-around pt-5">
        <div class="col-lg-4 col-sm-10 d-flex text-center">
          <p id="aboutMeBody">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
          </p>
        </div>
        <div class="col-lg-4 col-sm-10 d-flex row pt-5" id="skills">
          <div class="nav flex-row flex-wrap" id="skillsList">
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
