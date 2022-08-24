import "../App.css";
import React from "react";
import TopBtn from "./TopBtn";

function Footer() {
  return (
    <div id="contact" class="aboutImg container-fluid text-center pt-5">
      <hr id="aboutBreak" />
      <h1 class="p-3" id="aboutMeTitle">
        Get in Touch!
      </h1>

      <div class="row justify-content-around pt-5 pb-3">
        <div class="col-lg-4 col-sm-12 d-flex text-center">
          <footer class=" text-center w-100" id="footer">
            <div class="container pb-0" id="linkedIn">
              <section class="d-flex justify-content-center mb-2">
                <a
                  href="https://www.linkedin.com/in/hunterpadgett1/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-linkedin p-3 mb-1" id="footerIcons">
                    <p class="footerIconsText">linkedin</p>
                  </i>
                </a>

                <a
                  href="https://github.com/HunterPadgett"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-github p-3" id="footerIcons">
                    <p class="footerIconsText">github</p>
                  </i>
                </a>

                <a
                  href="mailto:gizmokabanjo@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-regular fa-envelope p-3" id="footerIcons">
                    <p class="footerIconsText">email me</p>
                  </i>
                </a>
              </section>
            </div>
            <TopBtn />
          </footer>
        </div>

        <p class="foot d-flex justify-content-start ml-2 p-2">
          Designed by Hunter Padgett 2022
        </p>
      </div>
    </div>
  );
}

export default Footer;
