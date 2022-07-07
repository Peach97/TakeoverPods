import React, { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const ScrollButton = styled(Button)({
  position: "fixed",
  minWidth: "10px",
  right: "2rem",
  bottom: "10rem",
  height: "2rem",
  fontSize: "10px",
  zIndex: "999",
  cursor: "pointer",
  borderRadius: "50%",

  "&:hover": {
    backgroundColor: "tranparent",
    color: "text.primary",
    border: "1px solid",
    borderColor: "text.primary",
  },
});

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <ScrollButton
      sx={{
        display: visible ? "flex" : "none",
        color: "background.default",
        bgcolor: "text.primary",
      }}
    >
      <ExpandLessIcon
        fontSize="small"
        onClick={ScrollToTop}
        sx={{ display: visible ? "inline" : "none" }}
      />
    </ScrollButton>
  );
};

export default ScrollToTopButton;
