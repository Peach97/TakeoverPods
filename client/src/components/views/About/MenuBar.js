import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Contact from "./Contact";
import About from "./About";
import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../Navbar";
import "./MenuBar.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function BasicTabs() {
  //tab value function
  const [value, setValue] = React.useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "fit-content",
        display: "flex",
        bgcolor: "background.default",
        justifyContent: "center",
      }}
    >
      <Grid container justifyContent="center" display="flex">
        <Grid
          item
          md={12}
          sm={12}
          xs={12}
          justifyContent="center"
          display="flex"
          sx={{
            bgcolor: "text.primary",
          }}
        >
          <Box
            sx={{
              width: "100%",
              position: "relative",
              paddingTop: "1rem",
              marginBottom: "1rem",
              zIndex: "1",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              textColor="background.default"
              indicatorColor="background.paper"
            >
              <Tab
                disableRipple
                color="background.default"
                sx={{ fontSize: "1rem" }}
                label="About"
                {...a11yProps(0)}
              />
              <Tab
                color="background.default"
                disableRipple
                sx={{ fontSize: "1rem" }}
                label="Contact"
                {...a11yProps(1)}
              />
            </Tabs>
          </Box>
        </Grid>
        <Grid item md={12}>
          <TabPanel value={value} index={0}>
            <About />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Contact />
          </TabPanel>
        </Grid>
      </Grid>
    </Box>
  );
}
