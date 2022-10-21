import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  FETCH_POST,
} from "../constants/actionTypes";
import * as api from "../api/index.js";

// Action Creators

export const getPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchPost(id);
    dispatch({ type: FETCH_POST, payload: { post: data } });
  } catch (error) {
    console.log(error);
  }
};
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post, navigate) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });

    navigate(`/posts/${data._id}`);
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
