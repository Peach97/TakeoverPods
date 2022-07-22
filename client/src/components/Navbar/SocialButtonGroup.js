import React from "react";
import { CustomTab } from "./Navbar";
import { CustomButton } from "./Navbar";
import { Link } from "react-router-dom";

const SocialButtonGroup = () => {
  return (
    <>
      <CustomTab component={Link} to="/platforms" label="Where to Listen" />

      <CustomButton
        href="https://www.youtube.com/channel/UCXd9541vxjUHIF8kV-FsCZQ/featured"
        target="_blank"
        variant="contained"
      >
        Subscribe
      </CustomButton>
    </>
  );
};

export default SocialButtonGroup;
