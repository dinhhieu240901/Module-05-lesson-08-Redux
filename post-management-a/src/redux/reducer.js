import {
  ADD_POST,
  ADD_POST_FAILURE,
  ADD_POST_SUCCESS,
  GET_POSTS,
  GET_POSTS_FAILURE,
  GET_POSTS_SUCCESS,
  UPDATE_POST,
  UPDATE_POST_FAILURE,
  UPDATE_POST_SUCCESS,
} from "./action";

const initialState = {
  posts: [],
  loading: false,
  hasErrors: false,
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      console.log("GET_POSTS", state);
      return { ...state, loading: true };
    case GET_POSTS_SUCCESS:
      return { posts: action.payload, loading: false, hasErrors: false };
    case GET_POSTS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    case ADD_POST:
      return { ...state, loading: true };
    case ADD_POST_SUCCESS:
      return {
        posts: [...state.posts, action.payload],
        loading: false,
        hasErrors: false,
      };
    case ADD_POST_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    case UPDATE_POST:
      return { ...state, loading: true };
    case UPDATE_POST_SUCCESS:
      return {
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
        loading: false,
        hasErrors: false,
      };
    case UPDATE_POST_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
};

export default rootReducer;
