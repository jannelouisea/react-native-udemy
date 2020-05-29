import createDataContext from './createDataContext';

const blogPostActions = {
  CREATE: 'create',
  REMOVE: 'remove',
  UPDATE: 'update',
  DELETE: 'delete',
};

const blogReducer = (state, action) => {
  switch (action.type) {
    case blogPostActions.CREATE:
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case blogPostActions.DELETE:
      // Returns a new list containing only the elements that cause the condition to be true
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case blogPostActions.UPDATE:
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, redirect) => {
    dispatch({ type: blogPostActions.CREATE, payload: { title, content } });
    if (redirect) {
      redirect();
    } // Just making sure that this function exists before calling it
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: blogPostActions.DELETE, payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, redirect) => {
    dispatch({
      type: blogPostActions.UPDATE,
      payload: { id, title, content },
    });
    if (redirect) {
      redirect();
    } // Just making sure that this function exists before calling it
  };
};

const defaultBlogPosts = [
  { id: 1, title: 'My first blog', content: 'I ate a sandwich today.' },
];

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  defaultBlogPosts
);
