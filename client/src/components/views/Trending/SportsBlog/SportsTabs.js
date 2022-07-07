import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import Blog from "./Blog";
import { useState } from "react";

const labels = ["BIG10", "NBA", "MLB", "DRAFT", "NFL", "SEC", "BIG12"];

export const SportsTab = styled(Tab)({});
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
        <Box>
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

export default function SportsTabs({
  openForm,
  setOpenForm,
  setCurrentId,
  posts,
}) {
  console.log(posts);
  const [value, setValue] = React.useState(0);
  const [whichChannel, setWhichChannel] = useState("BIG10");
  const postsByChannel = posts.filter(
    ({ channel }) => channel === whichChannel
  );
  console.log(postsByChannel);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "90%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons={false}
        >
          {labels.map((label, index) => (
            <Tab
              label={label}
              {...a11yProps({ index })}
              onClick={() => setWhichChannel(label)}
            />
          ))}
        </Tabs>
      </Box>
      <Box sx={{ width: "100%", paddingTop: "2.5rem" }}>
        <TabPanel value={value} index={0}>
          <Blog
            posts={postsByChannel}
            openForm={openForm}
            setOpenForm={setOpenForm}
            setCurrentId={setCurrentId}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Blog
            posts={postsByChannel}
            openForm={openForm}
            setOpenForm={setOpenForm}
            setCurrentId={setCurrentId}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Blog
            posts={postsByChannel}
            openForm={openForm}
            setOpenForm={setOpenForm}
            setCurrentId={setCurrentId}
          />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Blog
            posts={postsByChannel}
            openForm={openForm}
            setOpenForm={setOpenForm}
            setCurrentId={setCurrentId}
          />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Blog
            posts={postsByChannel}
            openForm={openForm}
            setOpenForm={setOpenForm}
            setCurrentId={setCurrentId}
          />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Blog
            posts={postsByChannel}
            openForm={openForm}
            setOpenForm={setOpenForm}
            setCurrentId={setCurrentId}
          />
        </TabPanel>
        <TabPanel value={value} index={6}>
          <Blog
            posts={postsByChannel}
            openForm={openForm}
            setOpenForm={setOpenForm}
            setCurrentId={setCurrentId}
          />
        </TabPanel>
      </Box>
    </Box>
  );
}
