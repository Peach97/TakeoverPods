import React, {useEffect} from 'react';
// import {Paper, Typography, CircularProgress, Divider} from '@material-ui/core';
import { Paper, Typography, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import { getPost } from '../../../../actions/posts';
import Loading from '../../../HeroSection/Loading';
import './PostDetails.css';

const PostDetails = () => {
    const {post, posts} = useSelector((state) => state.posts);
    console.log(post);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
      dispatch(getPost(id));
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
    }, [id, dispatch])

    if(!post) return <Loading/>;
  


  return (
    <Box sx={{height: "fit-content",width: "100%"}}>
        <Paper sx={{justifyContent: "center", pt: "10rem", display: "flex", alignItems: "center", flexDirection: "column", textAlign: "left"}} elevation={6}>
          <div style={{width: "fit-content", justifyContent: "start"}}>
          <Typography sx={{margin: "0 5rem 0 5rem"}} color="text.secondary" variant="body1"><b>{post.channel}</b> • {moment(post.createdAt).fromNow()}</Typography>
            <Typography variant="h4" fontWeight={600} component="h2" sx={{maxWidth: "750px", p: "1rem 0 1rem 0", margin: "0 5rem 0 5rem"}}>{post.title}</Typography>
          </div>
            <Box sx={{ justifyContent: "center", display: "grid", width: "100%", height: "fit-content", paddingBottom: "5rem"}}> 
            <img className="blog-img" style={{ maxHeight: "100%", margin: "auto", borderRadius: "8px"}} src={post.selectedFile} alt={post.title}/>
            </Box>
            <Typography className="post-summary" gutterBottom sx={{lineHeight: "3", maxWidth: "1050px", initialLetter: 3, margin: "0 1rem 0 1rem", fontSize: "1.25rem"}} variant="body1">{post.summary}</Typography>
            <Divider sx={{width: "90%"}}/>
            <Typography variant="h6"  color="text.secondary">By: {post.author}</Typography>
            <Typography variant="body1"><strong>Comment Section - coming soon!</strong></Typography>

        </Paper>
        </Box>
  )
}
export default PostDetails;
