import axios from 'axios'
import * as actions from './index'

export const getPosts = () => async dispatch => {
  const res = await axios.get("/api/posts");
  dispatch({ type: actions.GET_POSTS, posts: res.data })
}


export const getPost = (id) => async dispatch => {
  const res = await axios.get(`/api/posts/${id}`);
  dispatch({ type: actions.GET_POST, post: res.data })
}


export const deletePost = (id, history) => async dispatch => {
  await axios.delete(`/api/posts/${id}`);
  dispatch({type: actions.DELETE_POST})
  history.replace("/")
}
