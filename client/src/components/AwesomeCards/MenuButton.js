import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import apple from "../../images/apple-logo.png";
import spotify from "../../images/spotify-logo.png";
import youtube from "../../images/youtube-logo.png";
import { styled } from "@mui/system";
//styled dropdown button
export const StyledButton = styled(Button)({
  "&:hover": { backgroundColor: "transparent" },
  "&:after": { backgroundColor: "transparent" },
});

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <StyledButton
        disableRipple
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <ArrowDropDownCircleIcon
          sx={{
            color: "text.secondary",
            backgroundColor: "transparent",
          }}
        />
      </StyledButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          justifyContent: "center",
          display: "flex",
          alignContent: "center",
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MenuItem onClick={handleClose} sx={{ p: 1 }}>
          <img src={spotify} height={20} width={20} alt="cannot be viewed" />
        </MenuItem>

        <MenuItem onClick={handleClose} sx={{ p: 1 }}>
          <img src={youtube} height={15} width={20} alt="cannot be viewed" />
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ p: 1 }}>
          <img src={apple} height={20} width={20} alt="cannot be viewed" />
        </MenuItem>
      </Menu>
    </div>
  );
}
