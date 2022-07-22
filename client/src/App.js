import React, { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/views/Home";
import Footer from "./components/Footer/Footer";
import EpisodeArchive from "./components/views/EpisodeArchive/EpisodeArchive";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import Platforms from "./components/views/Platforms/Platforms";
import Contact from "./components/views/About/Contact";
import About from "./components/views/About/About";
import Trending from "./components/views/Trending/Trending";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./actions/posts.js";
import PersistentPlayBar from "./components/AudioPlayer/PersistentPlayBar";
import PostDetails from "./components/views/Trending/PostDetails/PostDetails";
import Auth from "./Auth/Auth";
import Loading from "./components/HeroSection/Loading";

//http://localhost:3000/#access_token=BQAmma3zKI3yjbxeJXIYAaW3bhUIlUfEx843q833zUyFdKC4_MA01SDO6dkpjER_jNzcYNix0JdgyZDHYS3jyFDqEhFkrtkD1EDDeRTsztBf8FDizxn5MzyN9EraE4FfCJiO5U_5fUfBgQk8BwSA9uC_OQ9RrE_7ywurLTLT4cgaCAVapyqFnPds&token_type=Bearer&expires_in=3600
var expression = true;
export const App = ({ setToggleDark, spotify, playSong }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(expression);
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
      <Router>
        <Navbar setToggleDark={setToggleDark} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                setIsMenuOpen={setIsMenuOpen}
                isMenuOpen={isMenuOpen}
                spotify={spotify}
                playSong={playSong}
              />
            }
          />
          <Route path="/auth" element={<Auth />} />
          <Route path="/archive" element={<EpisodeArchive />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/trending"
            element={
              <Trending currentId={currentId} setCurrentId={setCurrentId} />
            }
          />
          <Route path="/trending/:id" element={<PostDetails />} />
        </Routes>
        <ScrollToTopButton />
        <PersistentPlayBar
          spotify={spotify}
          setMenuStatus={setIsMenuOpen}
          isOpen={isMenuOpen}
          playSong={playSong}
        />
        <Footer />
      </Router>
    </>
  );
};
