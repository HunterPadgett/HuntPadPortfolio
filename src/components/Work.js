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
            <div class="postcard__text">
              <h1 class="postcard__title ">
                <a href="#">Cthulhu Invades!</a>
              </h1>

              <div class="postcard__preview-txt">
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
          <article class="workContainer m-3 p-3">
            <a
              class="workImgLink"
              href="https://hunterpadgett.github.io/project-one/#gsc.tab=0"
              target="_blank"
              rel="noreferrer"
            >
              <img class="workImg" src={womanImg} alt="womans rights march" />
            </a>
            <div class="postcard__text">
              <h1 class="postcard__title">
                <a href="https://hunterpadgett.github.io/project-one/#gsc.tab=0">
                  Women's Rights Health Center
                </a>
              </h1>

              <div class="postcard__preview-txt">
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
          <article class="workContainer m-3 p-3">
            <a class="workImgLink" href="#" target="_blank" rel="noreferrer">
              <img class="workImg" src={redsand} alt="exmaple project" />
            </a>
            <div class="postcard__text">
              <h1 class="postcard__title">
                <a href="#">Title</a>
              </h1>

              <div class="postcard__preview-txt">
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
