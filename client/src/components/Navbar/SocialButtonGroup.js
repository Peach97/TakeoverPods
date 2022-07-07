import React from "react";
import { CustomTab } from "./Navbar";
import { CustomButton } from "./Navbar";
import { Link } from "react-router-dom";

const SocialButtonGroup = () => {
  return (
    <>
      <CustomTab component={Link} to="/platforms" label="Where to Listen" />

      <CustomButton variant="contained">Subscribe</CustomButton>
    </>
  );
};

export default SocialButtonGroup;
