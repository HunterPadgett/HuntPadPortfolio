import "../App.css";
import React from "react";

function Footer() {
  return (
    <div id="contact" class="aboutImg container-fluid text-center pt-5 pb-5">
      <hr id="aboutBreak" />
      <h1 class="p-3" id="aboutMeTitle">
        Get In Touch!
      </h1>

      <div class="row justify-content-around pt-5 pb-5">
        <div class="col-lg-4 col-sm-12 d-flex text-center">
          <footer class=" text-center w-100" id="footer">
            <div class="container p-3 pb-0" id="linkedIn">
              <section class="mb-2">
                <a
                  class="btn btn-outline-light btn-floating m-1"
                  href="https://www.linkedin.com/in/victoria-dunlap/"
                  target="_blank"
                  rel="noreferrer"
                  role="button"
                >
                  Victoria
                  <i class="fab fa-linkedin-in"></i>
                </a>

                <a
                  class="btn btn-outline-light btn-floating m-1"
                  href="https://www.linkedin.com/in/farrah-syed-a85577141/"
                  target="_blank"
                  rel="noreferrer"
                  role="button"
                >
                  Farrah
                  <i class="fab fa-linkedin-in"></i>
                </a>

                <a
                  class="btn btn-outline-light btn-floating m-1"
                  href="https://www.linkedin.com/in/chalachew-abawa-ab74971ba/"
                  target="_blank"
                  rel="noreferrer"
                  role="button"
                >
                  Chalachew
                  <i class="fab fa-linkedin-in"></i>
                </a>

                <a
                  class="btn btn-outline-light btn-floating m-1"
                  href="https://www.linkedin.com/in/ericwittenstein/"
                  target="_blank"
                  rel="noreferrer"
                  role="button"
                >
                  Eric
                  <i class="fab fa-linkedin-in"></i>
                </a>

                <a
                  class="btn btn-outline-light btn-floating m-1"
                  href="https://www.linkedin.com/in/hunterpadgett1/"
                  target="_blank"
                  rel="noreferrer"
                  role="button"
                >
                  Hunter
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </section>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Footer;
