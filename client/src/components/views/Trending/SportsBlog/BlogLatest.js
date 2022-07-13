import { Box } from "@mui/system";
import React, { useState } from "react";
import Delete from "@mui/icons-material/Delete";
import moment from "moment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../../actions/posts";
import EditIcon from "@mui/icons-material/Edit";
import ConfirmDialog from "../../../ConfirmButton";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const BlogLatest = ({ post, setCurrentId, setOpenForm, openForm }, props) => {
  const dispatch = useDispatch();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <Card
        sx={{
          bgcolor: "transparent",
          backgroundImage: "none",
          boxShadow: "none",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box display="flex" padding="1rem">
          <CardMedia
            component="img"
            sx={{ height: 300, width: "100%" }}
            image={post.selectedFile}
          />
        </Box>
        <CardContent>
          <Typography
            className="article-snippet-text"
            variant="h4"
            color="text.primary"
          >
            {post.title}
          </Typography>
          <Button>{post.channel}</Button>
          <Typography
            variant="body1"
            color="text.secondary"
            fontWeight={200}
            gutterBottom
          >
            {moment(post.createdAt).fromNow()}
          </Typography>
          <Typography
            className="article-snippet-text"
            variant="body1"
            color="text.primary"
            fontWeight={500}
          >
            {post.summary}
          </Typography>
          <Typography mt={5} variant="body2" fontWeight={200}>
            {post.author}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between", display: "flex" }}>
          <Box>
            <Button size="small" onClick={() => {}}>
              View Full Article
            </Button>
          </Box>
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
      </Card>
    </Box>
  );
};

export default BlogLatest;
