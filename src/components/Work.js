import "../App.css";
import React from "react";
import womanImg from "../img/womansRights.jpg";
import cthulhu from "../img/HomeScreen.png";
import redsand from "../img/redsand.jpg";

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
            <a class="workImgLink" href="#" target="_blank" rel="noreferrer">
              <img class="workImg" src={cthulhu} alt="video game project" />
            </a>
            <div class="workWords">
              <h1 class="workTitle ">
                <a href="#">Cthulhu Invades!</a>
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
              <h1 class="workTitle">
                <a href="https://hunterpadgett.github.io/project-one/#gsc.tab=0">
                  Reproductive Rights Center
                </a>
              </h1>

              <div class="workDesc">
                A hub where you can keep up to date with the most recent news and leglislature
                concerning women's reproductive rights rights both nationally and at a state level.
              </div>
            </div>
          </article>
          <article class="workContainer m-3 p-3">
            <a class="workImgLink" href="#" target="_blank" rel="noreferrer">
              <img class="workImg" src={redsand} alt="exmaple project" />
            </a>
            <div class="workWords">
              <h1 class="workTitle">
                <a href="#">Title</a>
              </h1>

              <div class="workDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, fugiat asperiores inventore beatae accusamus odit
                minima enim, commodi quia, doloribus eius! Ducimus nemo
                accusantium maiores velit corrupti tempora reiciendis molestiae
                repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt
                neque nulla unde ipsum dolores nobis enim quidem excepturi,
                illum quos!
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Work;
