import React, { useState } from "react";
import { Box } from "@mui/system";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  CardActions,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import ConfirmDialog from "../../../ConfirmButton";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../../actions/posts";
import EditIcon from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../../../StateProvider";

const BlogArticleSnippet = ({ post, setCurrentId, setOpenForm, openForm }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [{ authUser }] = useStateValue();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const openPost = (e) => navigate(`/trending/${post._id}`);

  return (
    <>
      <Box sx={{ display: "flex", height: "100%" }}>
        <Card
          sx={{
            display: "flex",
            height: "100%",
            bgcolor: "transparent",
            backgroundImage: "none",
            boxShadow: "none",
          }}
        >
          <Box sx={{ padding: "1rem" }}>
            <CardMedia
              component="img"
              image={post.selectedFile}
              sx={{ height: 200, width: 200 }}
            />
          </Box>

          <CardActionArea onClick={openPost}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent>
                <Typography
                  className="article-snippet-text"
                  component="div"
                  variant="h6"
                  fontWeight={400}
                  gutterBottom
                  maxWidth="100%"
                >
                  {post.title}
                </Typography>
                <Typography
                  component="div"
                  variant="body2"
                  fontWeight={100}
                  className="description-text"
                  maxWidth="100%"
                >
                  {post.summary}
                </Typography>
              </CardContent>
              <CardActions
                sx={{ justifyContent: "space-between", display: "flex" }}
              >
                <Button size="small" onClick={() => {}}>
                  {post.channel}
                </Button>
                {authUser ? (
                  <Button
                    id="open-menu-button"
                    aria-controls={open ? "options-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    size="small"
                    disableElevation
                    onClick={handleClick}
                  >
                    <MoreVertIcon />
                  </Button>
                ) : null}
                <Menu
                  id="options-menu"
                  MenuListProps={{ "aria-labelledby": "open-menu-button" }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem
                    onClick={() => {
                      setCurrentId(post._id);
                      handleClose();
                      setOpenForm(!openForm);
                    }}
                    disableRipple
                  >
                    <ListItemIcon>
                      <EditIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Edit</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={() => setConfirmOpen(true)} disableRipple>
                    <ListItemIcon>
                      <Delete fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Delete</ListItemText>
                  </MenuItem>
                  <ConfirmDialog
                    title="Delete Post?"
                    button1="Decline"
                    button2="Confirm"
                    open={confirmOpen}
                    setOpen={setConfirmOpen}
                    onConfirm={() => {
                      dispatch(deletePost(post._id));
                      handleClose();
                    }}
                  >
                    Are you sure you want to delete this post?
                  </ConfirmDialog>
                </Menu>
              </CardActions>
            </Box>
          </CardActionArea>
        </Card>
      </Box>
      <Divider sx={{ width: "90%", alignSelf: "center", display: "flex" }} />
    </>
  );
};

export default BlogArticleSnippet;
