import React, { useEffect } from "react";
import HeroSection from "../HeroSection/HeroSection";
import Seasons from "./Seasons/Seasons";
import Special from "./Special/Special";
import DelayedRender from "../../DelayedRender";
import { useStateValue } from "../../StateProvider";
import Loading from "../HeroSection/Loading.js";
import axios from "axios";

function Home({ setIsMenuOpen, spotify, track }) {
  const [{ devices, token }, dispatch] = useStateValue();
  useEffect(() => {
    if (!localStorage.getItem("userToken")) {
      const setPlayer = async () => {
        const accessToken = localStorage.getItem("userToken");
        const playbackHeaders = { Authorization: `Bearer ${accessToken}` };
        try {
          const { data } = await axios.get(
            "https://api.spotify.com/v1/me/player/currently-playing?market=FI&additional_types=episode",
            { headers: playbackHeaders }
          );
          dispatch({
            type: "SET_ITEM",
            item: data.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: data.is_playing,
          });
        } catch (error) {
          console.log(error);
        }
        setPlayer();
      };
    } else {
      console.log("No premium token provided");
    }
  }, [spotify, dispatch]);
  const playSong = (id) => {
    spotify.play({
      uris: [`spotify:episode:${id}`],
      // device_ids: [devices.map((item) => item.id).join(", ")],
    });
  };

  return (
    <>
      <HeroSection
        setMenuStatus={setIsMenuOpen}
        spotify={spotify}
        playSong={playSong}
        track={track}
      />
      <Seasons setMenuStatus={setIsMenuOpen} playSong={playSong} />
      <Special />
    </>
  );
}
export default Home;
