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
              "web developer đģ",
              3500,
              "learner đ",
              3500,
              "collaborator đ¤",
              3500,
              "gamer đšī¸",
              3500,
              "sports fan đ",
              3500,
              "coffee addict â",
              3500,
              "lifter đī¸ââī¸",
              3500,
            ]}
          />
        </p>
      </main>
    </div>
  );
}

export default Home;