import React from "react";
import "./About.css";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import profile from "../../../images/donny_ig.jpeg";
import { Button } from "@mui/material";
import { List } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import gradient from "../../../images/mesh (27).png";

const GUESTS = [
  {
    avatar: <img alt="cannot be viewed at this time" src="/" />,
    profession: "Bank manager",
    bio: "Lorem ipsum odor amet, consectetuer adipiscing elit. ",
  },
  {
    avatar: <img alt="cannot be viewed at this time" src="/" />,
    profession: "Community worker",
    bio: "Lorem ipsum odor amet, consectetuer adipiscing elit. ",
  },
  {
    avatar: <img alt="cannot be viewed at this time" src="/" />,
    profession: "Hairdresser",
    bio: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
  },
  {
    avatar: <img alt="cannot be viewed at this time" src="/" />,
    profession: "Chef",
    bio: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
  },
  {
    avatar: <img alt="cannot be viewed at this time" src="/" />,
    profession: "Engineer",
    bio: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
  },
];

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        display: "flex",
        width: "100%",
        height: "fit-content",
        padding: "5rem 0 10rem 0",
        justifyContent: "center",
        objectFit: "contain",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <img
        style={{ height: "35rem" }}
        className="background-gradient"
        src={gradient}
        alt=""
      />
      <Grid
        container
        direction="row"
        justifyContent="center"
        display="flex"
        spacing={2}
        pt="5rem"
        md={10}
        sm={10}
        xs={10}
        mt="10rem"
      >
        <Grid
          item
          md={4}
          sm={12}
          xs={12}
          display="flex"
          direction="column"
          justifyContent="center"
        >
          <Card
            sx={{
              borderRadius: "8px",
              width: "100%",
              height: "20rem",
              justifyContent: "center",
              display: "flex",
              bgColor: "background.default",
              alignItems: "center",
              zIndex: "2",
            }}
          >
            <CardContent sx={{ width: "100%" }}>
              <Typography color="text.primary" variant="h5">
                Hosts
              </Typography>
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  height: "5rem",
                }}
              >
                <Avatar alt="Host" src="/" />
                <Typography pl={1} variant="h5" color="text.primary">
                  Lorem Ipsum
                </Typography>
              </div>

              <Typography gutterBottom variant="body1" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </Typography>
              <div>
                <Button
                  sx={{
                    textTransform: "none",
                    color: "text.secondary",
                  }}
                >
                  <EmailIcon sx={{ marginRight: "1rem" }} />{" "}
                  donnymac98@gmail.com
                </Button>
              </div>
              <div>
                <Button
                  sx={{
                    textTransform: "none",
                    color: "text.secondary",
                  }}
                >
                  <PhoneIphoneIcon sx={{ marginRight: "1rem" }} /> (888)888-8888
                </Button>
              </div>
              <div>
                <Button
                  sx={{
                    textTransform: "none",

                    color: "text.secondary",
                  }}
                >
                  <LocationOnIcon sx={{ marginRight: "1rem" }} />
                  Columbus, OH
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card
            sx={{
              borderRadius: "8px",
              width: "100%",
              height: "29rem",
              display: "flex",
              bgcolor: "background.default",
              marginTop: "1rem",
              alignItems: "center",
              zIndex: "2",
            }}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Past Guests
              </Typography>
              <Paper
                sx={{
                  maxHeight: "25rem",
                  width: "100%",
                  overflow: "auto",
                  borderRadius: "8px",
                  bgcolor: "Background.default",
                }}
              >
                {GUESTS.map((guest, index) => (
                  <List sx={{ width: "100%" }}>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt="guest" src={guest.avatar} />
                      </ListItemAvatar>
                      <ListItemText
                        color="text.primary"
                        primary={guest.profession}
                        secondary={
                          <React.Fragment>
                            <Typography
                              color="text.secondary"
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                            >
                              {guest.bio}
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider
                      color="palette.divider"
                      variant="inset"
                      component="li"
                    />
                  </List>
                ))}
              </Paper>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          md={8}
          sm={12}
          xs={12}
          display="flex"
          justifyContent="center"
        >
          <Card
            sx={{
              borderRadius: "8px",
              bgcolor: "background.default",
              height: "50rem",
              justifyContent: "center",
              display: "flex",
              textAlign: "center",
              zIndex: "2",
            }}
          >
            <CardContent>
              <Typography variant="h3" color="text.primary">
                About the Pod
              </Typography>
              <Typography variant="body1" lineHeight={2.5}>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Conubia
                nisl mus ridiculus nibh cursus malesuada lacus. Luctus porttitor
                tincidunt porta etiam elit vitae hendrerit commodo. Per id
                accumsan tellus aliquam, vehicula mi congue.
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                lineHeight={2.5}
              >
                <i>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Metus
                  elementum ad at pulvinar scelerisque finibus. Taciti potenti
                  nisi turpis aliquet sociosqu aliquet donec. Euismod
                  scelerisque in ultrices magna adipiscing suscipit inceptos
                  donec. Vulputate leo consequat potenti eu gravida vitae
                  praesent sem.
                </i>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
