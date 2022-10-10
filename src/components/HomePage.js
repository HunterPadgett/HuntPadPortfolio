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
            bounce: 0.4,
            duration: 1,
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
              3500,
              "learner 📖",
              3500,
              "collaborator 🤝",
              3500,
              "gamer 🕹️",
              3500,
              "sports fan 🏈",
              3500,
              "coffee addict ☕",
              3500,
              "lifter 🏋️‍♂️",
              3500,
            ]}
          />
        </p>
      </main>
    </div>
  );
}

export default Home;