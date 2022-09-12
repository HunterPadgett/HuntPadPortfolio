import "../App.css";
import React from "react";
import womanImg from "../img/womansRights.jpg";
import cthulhu from "../img/HomeScreen.png";
import redsand from "../img/unknown.png";

function Work() {
  return (
    <div id="work" class="aboutImg container-fluid text-center pt-5 pb-5">
      <hr id="aboutBreak" />
      <h1 class="p-3" id="aboutMeTitle">
        Some Things I've Built
      </h1>

      <section class="py-5">
        <div class="container">
          <article class="workContainer m-3 p-3">
            <a
              class="workImgLink"
              href="https://lit-crag-19257.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img class="workImg" src={cthulhu} alt="video game project" />
            </a>
            <div class="workWords">
              <h1 class="workTitle p-1 mt-1">
                <a
                  href="https://lit-crag-19257.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cthulhu Invades!
                </a>
              </h1>

              <div class="workDesc">
                A modern spin on the 8-bit turn-based retro video games of the
                80s. Choose your figher and face off against Lord Cthulhu in
                this light-hearted save the world style game.
              </div>
            </div>
          </article>
          <article class="workContainer m-3 p-3">
            <a
              class="workImgLink"
              href="https://hunterpadgett.github.io/project-one/#gsc.tab=0"
              target="_blank"
              rel="noreferrer"
            >
              <img class="workImg" src={womanImg} alt="womans rights march" />
            </a>
            <div class="workWords">
              <h1 class="workTitle p-1 mt-1">
                <a
                  href="https://hunterpadgett.github.io/project-one/#gsc.tab=0"
                  target="_blank"
                  rel="noreferrer"
                >
                  Reproductive Rights Center
                </a>
              </h1>

              <div class="workDesc">
                A hub where you can keep up to date with the most recent news
                and leglislature concerning women's reproductive rights rights
                both nationally and at a state level.
              </div>
            </div>
          </article>
          <article class="workContainer m-3 p-3">
            <a class="workImgLink" href="https://suffer-game-gtbootcamp.herokuapp.com/" target="_blank" rel="noreferrer">
              <img class="workImg" src={redsand} alt="exmaple project" />
            </a>
            <div class="workWords">
              <h1 class="workTitle p-1 mt-1">
                <a href="https://suffer-game-gtbootcamp.herokuapp.com/" target="_blank" rel="noreferrer">
                  Suffer
                </a>
              </h1>

              <div class="workDesc">
                A full-stack react app that is designed to look like a classic arcade game. Login, play the game, and try to make it to the top of highscore list!
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Work;
