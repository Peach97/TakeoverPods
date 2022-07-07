import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Box,
} from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";
import { useState } from "react";
import { CustomButton } from "../Navbar/Navbar.js";

const defaultValues = {
  name: "",
  org: "",
  email: "",
  tel: "",
  role: "",
  info: "",
};
//custom form input field

const Form = () => {
  const [formValues, setFormValues] = useState(defaultValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };
  //TODO create validate function for email
  return (
    <Box
      sx={{
        justifyContent: "center",
        display: "flex",
        height: "fit-content",
        width: "100%",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="row"
          display="flex"
          spacing={1}
          md={10}
          sm={10}
          xs={10}
          mt="2.5rem"
          mx="auto"
        >
          <Grid item md={6} sm={6} xs={6} display="flex">
            <TextField
              required
              fullWidth
              id="name-input"
              name="first-name"
              label="First"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item md={6} sm={6} xs={6} display="flex">
            <TextField
              required
              fullWidth
              id="name-input"
              name="last-name"
              label="Last"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12} display="flex">
            <TextField
              fullWidth
              id="org-input"
              name="org"
              label="Organization"
              type="text"
              value={formValues.org}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item md={8} sm={8} xs={8} display="flex">
            <TextField
              required
              fullWidth
              id="email-input"
              name="email"
              label="E-Mail"
              type="email"
              value={formValues.email}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item md={4} sm={4} xs={4} display="flex">
            <TextField
              fullWidth
              id="tel-input"
              name="tel"
              label="Phone"
              type="tel"
              value={formValues.tel}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item md={3} sm={3} xs={3} display="flex" mr="auto">
            <FormControl fullWidth>
              <InputLabel>Role</InputLabel>
              <Select
                label="Role"
                name="role"
                value={formValues.roles}
                onChange={handleInputChange}
              >
                <MenuItem key="listener" value="listener">
                  Listener
                </MenuItem>
                <MenuItem key="guest" value="guest">
                  Guest
                </MenuItem>
                <MenuItem key="sponsor" value="sponsor">
                  Sponsor
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={12} sm={12} xs={12} display="flex">
            <TextField
              multiline
              rows={5}
              required
              fullWidth
              id="info-input"
              name="info"
              label="Message"
              type="text"
              value={formValues.info}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid
            item
            md={12}
            sm={12}
            xs={12}
            display="flex"
            justifyContent="center"
          >
            <CustomButton
              variant="contained"
              type="submit"
              size="large"
              sx={{
                padding: "0.5rem 3rem 0.5rem 3rem",
                fontSize: "1.5rem",
              }}
            >
              Submit
            </CustomButton>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};
export default Form;
