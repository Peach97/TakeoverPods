import React, { useEffect } from "react";
import HeroSection from "../HeroSection/HeroSection";
import Seasons from "./Seasons/Seasons";
import Special from "./Special/Special";
import DelayedRender from "../../DelayedRender";
import { useStateValue } from "../../StateProvider";
import Loading from "../HeroSection/Loading.js";
import axios from "axios";

function Home({ setIsMenuOpen, spotify, playSong }) {
  return (
    <>
      <HeroSection
        setMenuStatus={setIsMenuOpen}
        spotify={spotify}
        playSong={playSong}
      />
      <Seasons setIsMenuOpen={setIsMenuOpen} playSong={playSong} />
      <Special />
    </>
  );
}
export default Home;
