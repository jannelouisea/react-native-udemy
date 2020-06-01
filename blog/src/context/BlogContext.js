import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogPostActions = {
  UPDATE: 'update',
  DELETE: 'delete',
  RECEIVE: 'receive',
};

const blogReducer = (state, action) => {
  switch (action.type) {
    case blogPostActions.RECEIVE:
      return action.payload;
    case blogPostActions.DELETE:
      // Returns a new list containing only the elements that cause the condition to be true
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case blogPostActions.UPDATE:
      return state.map((blogPost) => {
        ``;
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get('/blogPosts');
    // response.data === []
    dispatch({ type: blogPostActions.RECEIVE, payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, redirect) => {
    await jsonServer.post('/blogposts', { title, content });

    if (redirect) {
      redirect();
    } // Just making sure that this function exists before calling it
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogPosts/${id}`);
    dispatch({ type: blogPostActions.DELETE, payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, redirect) => {
    await jsonServer.put(`/blogPosts/${id}`, { title, content });

    dispatch({
      type: blogPostActions.UPDATE,
      payload: { id, title, content },
    });

    if (redirect) {
      redirect();
    } // Just making sure that this function exists before calling it
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  {
    getBlogPosts,
    addBlogPost,
    deleteBlogPost,
    editBlogPost,
  },
  []
);
