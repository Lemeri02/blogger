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

export const addPost = (post, history) => async dispatch => {
  await axios.post("/api/posts", post);
  dispatch({ type: actions.ADD_POST });
  history.push("/");
};

export const editPost = (id, post, history) => async dispatch => {
  await axios.put(`/api/posts/${id}`, post);
  dispatch({ type: actions.EDIT_POST });
  history.push(`/post/${id}`);
};

export const deletePost = (id, history) => async dispatch => {
  await axios.delete(`/api/posts/${id}`);
  dispatch({type: actions.DELETE_POST})
  history.replace("/")
}

export const addComment = (id, comment) => async dispatch => {
  const res = await axios.post(`/api/posts/comment/${id}`, comment)
  dispatch({ type: actions.ADD_COMMENT, post: res.data})
}
 
export const deleteComment = (id) => async dispatch => {
  const res = await axios.delete(`/api/posts/comment/${id}`)
  dispatch({ type: actions.DELETE_COMMENT, post: res.data})
}