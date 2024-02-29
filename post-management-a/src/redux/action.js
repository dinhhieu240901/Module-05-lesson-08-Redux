import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";
export const ADD_POST = "ADD_POST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";
export const UPDATE_POST = "UPDATE_POST";
export const UPDATE_POST_SUCCESS = "UPDATE_POST_SUCCESS";
export const UPDATE_POST_FAILURE = "UPDATE_POST_FAILURE";
export const getPosts = () => ({
  type: GET_POSTS,
});

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});

export const updatePost = (id, updatedPost) => ({
  type: UPDATE_POST,
  payload: { id, updatedPost },
});
export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(getPosts());
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch({ type: GET_POSTS_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: GET_POSTS_FAILURE, payload: error });
      });
  };
};
export const createPost = (post) => {
  return (dispatch) => {
    dispatch(addPost(post));
    return axios
      .post("https://jsonplaceholder.typicode.com/posts", post)
      .then((response) => {
        dispatch({ type: ADD_POST_SUCCESS, payload: response.data });
        return response.status;
      })
      .catch((error) => {
        dispatch({ type: ADD_POST_FAILURE, payload: error });
        return error.response ? error.response.status : "Network Error";
      });
  };
};

export const editPost = (id, updatedPost) => {
  return async (dispatch) => {
    dispatch(updatePost(id, updatedPost));

    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        updatedPost
      );
      dispatch({ type: UPDATE_POST_SUCCESS, payload: response.data });
      return response.status;
    } catch (error) {
      dispatch({ type: UPDATE_POST_FAILURE, payload: error });
      return error.response ? error.response.data : "Network Error";
    }
  };
};
