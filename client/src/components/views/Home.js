import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import Seasons from "./Seasons/Seasons";
import Special from "./Special/Special";
import DelayedRender from "../../DelayedRender";
import { useStateValue } from "../../StateProvider";
import Loading from "../HeroSection/Loading.js";

function Home({ setIsMenuOpen, spotify }) {
  return (
    <>
      <HeroSection setMenuStatus={setIsMenuOpen} spotify={spotify} />
      <Seasons setMenuStatus={setIsMenuOpen} />
      <Special />
    </>
  );
}
export default Home;
