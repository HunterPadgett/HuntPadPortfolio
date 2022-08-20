import "../App.css";
import React from "react";
import Typical from "react-typical";
import { motion, Variants } from "framer-motion";

function Home() {
  return (
    <div id="home" class="homeImg ">
      <main class="homeTextContainer">
        <motion.h1
          class=""
          id="homeName"
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            bounce: 0.3,
            duration: 2.5,
          }}
        >
          Hi, I'm Hunter
        </motion.h1>
        <p class="text-center" id="homeBody">
          I'm a&nbsp;
          <Typical
            wrapper="t"
            loop={Infinity}
            steps={[
              "web developer 💻",
              3000,
              "learner 📖",
              3000,
              "gamer 🕹️",
              3000,
              "coffee addict ☕",
              3000,
              "lifter 🏋️‍♂️",
              3000,
            ]}
          />
        </p>
      </main>
    </div>
  );
}

export default Home;

// return (
//      <div class="homeImg">
//         <h1 id="homeName">Hunter Padgett <br />
//         Web Developer </h1>
//       </div>
//   );
