import "../App.css";
import React from "react";

function AboutMe() {
  return (
    <div id="about" class="aboutImg container-fluid text-center pt-5 ">
      <hr id="aboutBreak" />
      <h1 class="p-3" id="aboutMeTitle">
        About Me
      </h1>

      <div class="row justify-content-around pt-5 pb-5">
        <div class="col-lg-4 col-sm-12 d-flex text-center">
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
        <div class="col-lg-4 col-sm-12 d-flex row align-content-center" id="skills">
          <h1 class="p-2 " id="skillsTitle">
            Skills
          </h1>
          <div
            class="nav flex-row flex-wrap justify-content-center"
            id="skillsList"
          >
            <button class="languages p-2 m-2">HTML</button>
            <button class="languages p-2 m-2">CSS</button>
            <button class="languages p-2 m-2">JavaScript</button>
            <button class="languages p-2 m-2">Bootstrap</button>
            <button class="languages p-2 m-2">jQuery</button>
            <button class="languages p-2 m-2">Node.js</button>
            <button class="languages p-2 m-2">MongoDB</button>
            <button class="languages p-2 m-2">GraphQL</button>
            <button class="languages p-2 m-2">MySQL</button>
            <button class="languages p-2 m-2">Handlebars.js</button>
            <button class="languages p-2 m-2">React</button>
            <button class="languages p-2 m-2">Git</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
