import React from "react";
import "./Contact.css";
import Form from "../../Form/Form";
import { Box, Card, Divider, Grid, Typography } from "@mui/material";
import gradient from "../../../images/mesh (27).png";

const Contact = () => {
  return (
    <Box
      sx={{
        height: "fit-content",
        padding: "0 0 10rem 0",
        width: "100%",
        bgcolor: "background.default",
        display: "flex",
        alignItems: "center",
        objectFit: "cover",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <img
        style={{ height: "15rem" }}
        className="background-gradient"
        src={gradient}
        alt=""
      />
      <Grid
        container
        mt="20rem"
        md={12}
        sm={12}
        xs={12}
        justifyContent="center"
        display="flex"
        padding={2.5}
      >
        <Box
          sx={{
            width: "90%",
            height: "fit-content",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            gutterBottom
            component="div"
            variant="h4"
            color="text.primary"
          >
            Get In Touch
          </Typography>
          <Typography
            component="div"
            variant="subtitle1"
            color="text.secondary"
          >
            Give us a little more information using the form below, and someone
            will get back to you as soon as possible.
          </Typography>
          <Divider
            flexItem
            sx={{
              color: "text.primary",
              padding: "5rem 0 0 0",
            }}
          >
            Contact Form
          </Divider>
        </Box>
        <Grid item md={12} padding={10}>
          <Card
            sx={{
              bgcolor: "background.default",
              padding: "2rem 0.5rem 2rem 0.5rem ",

              borderRadius: "8px",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <Form />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
