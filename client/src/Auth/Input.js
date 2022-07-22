import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";

const Input = ({
  name,
  handleChange,
  label,
  autoFocus,
  type,
  handleShowPassword,
}) => {
  return (
    <Grid item>
      <TextField
        sx={{ margin: "1rem 0 1rem 0" }}
        name={name}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        InputProps={
          name === "password" && {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword}>
                  {type === "password" ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }
        }
      ></TextField>
    </Grid>
  );
};
export default Input;
