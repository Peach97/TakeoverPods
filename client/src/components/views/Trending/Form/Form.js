import React, { useState, useEffect } from "react";
import { Button, Drawer, Paper, TextField, Typography } from "@mui/material";
import FileBase from "react-file-base64";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../../../actions/posts";
import "./Form.css";
import AddIcon from "@mui/icons-material/Add";
import ConfirmDialog from "../../../ConfirmButton";
import { FormControl } from "@mui/material";
import { InputLabel, MenuItem, Select } from "@mui/material";
const CssTextField = styled(TextField)({
  margin: "1rem 0 1rem 0",
});
const AddButton = styled(Button)({
  backgroundImage: `linear-gradient(to right, #D31027 0%, #EA384D  51%, #D31027  100%)`,
  borderRadius: "50%",
  padding: "20px",
  position: "fixed",
  bottom: "10rem",
  left: "50%",
  transform: "translate(-50%)",
  color: "#fff",
  "&:hover": {
    filter: "brightness(110%)",
  },
});

//GET CURRENT ID OF POST WE ARE ON

const Form = ({ currentId, setCurrentId, openForm, setOpenForm }) => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [postData, setPostData] = useState({
    author: "",
    title: "",
    channel: "",
    summary: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId
      ? state.posts.posts.find((message) => message._id === currentId)
      : null
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);
  const clear = () => {
    setCurrentId(0);
    setPostData({
      author: "",
      title: "",
      channel: "",
      summary: "",
      selectedFile: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <>
      <Drawer
        open={openForm}
        onClose={() => {
          setOpenForm(false);
          clear();
        }}
      >
        <Box className="overlay" role="presentation">
          <Paper
            variant="outlined"
            id="window"
            sx={{ width: "50vw", borderRadius: "8px" }}
          >
            <form
              autoComplete="off"
              noValidate
              onSubmit={handleSubmit}
              style={{
                padding: "1rem",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "fit-content",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <Typography color="text.primary" variant="h4">
                  {currentId ? "Edit" : "Create a Blog Post"}{" "}
                </Typography>
              </Box>
              <CssTextField
                name="creator"
                variant="standard"
                label="Author"
                value={postData.author}
                fullWidth
                onChange={(e) =>
                  setPostData({ ...postData, author: e.target.value })
                }
              />
              <FormControl fullWidth>
                <InputLabel>Channel</InputLabel>
                <Select
                  label="Channel"
                  name="channel"
                  value={postData.channel}
                  onChange={(e) =>
                    setPostData({ ...postData, channel: e.target.value })
                  }
                >
                  <MenuItem key="SEC" value="SEC">
                    SEC
                  </MenuItem>
                  <MenuItem key="DRAFT" value="DRAFT">
                    DRAFT
                  </MenuItem>
                  <MenuItem key="BIG10" value="BIG10">
                    BIG10
                  </MenuItem>
                  <MenuItem key="CBB" value="CBB">
                    CBB
                  </MenuItem>
                  <MenuItem key="MLB" value="MLB">
                    MLB
                  </MenuItem>
                  <MenuItem key="BIG12" value="BIG12">
                    BIG12
                  </MenuItem>
                  <MenuItem key="NBA" value="NBA">
                    NBA
                  </MenuItem>
                  <MenuItem key="NFL" value="NFL">
                    NFL
                  </MenuItem>
                </Select>
              </FormControl>

              <CssTextField
                name="title"
                variant="standard"
                label="Title"
                value={postData.title}
                fullWidth
                onChange={(e) =>
                  setPostData({ ...postData, title: e.target.value })
                }
              />
              <CssTextField
                id="myform"
                name="summary"
                variant="outlined"
                label="Summary"
                value={postData.summary}
                multiline
                rows={5}
                fullWidth
                onChange={(e) =>
                  setPostData({ ...postData, summary: e.target.value })
                }
              />
              <div style={{ margin: "1rem", width: "100%" }}>
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setPostData({ ...postData, selectedFile: base64 })
                  }
                />
              </div>
              <div
                style={{
                  margin: "1rem 0 1rem 0",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  type="submit"
                  sx={{ marginBottom: "1rem" }}
                  fullWidth
                >
                  <Typography sx={{ textTransform: "none" }} variant="h5">
                    Submit
                  </Typography>
                </Button>
                <Button
                  variant="outlined"
                  size="medium"
                  color="error"
                  onClick={() => setConfirmOpen(true)}
                  fullWidth
                >
                  <DeleteIcon fontSize="medium" />
                </Button>
                <ConfirmDialog
                  title="Clear?"
                  button1="Decline"
                  button2="Confirm"
                  open={confirmOpen}
                  setOpen={setConfirmOpen}
                  onConfirm={() => {
                    clear();
                  }}
                />
              </div>
            </form>
          </Paper>
        </Box>
      </Drawer>
      <AddButton variant="contained" onClick={() => setOpenForm(!openForm)}>
        <AddIcon fontSize="medium" />
      </AddButton>
    </>
  );
};
export default Form;
