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
          title: `Blog Post #${state.length + 1}`,
        },
      ];
    case blogPostActions.DELETE:
      // Returns a new list containing only the elements that cause the condition to be true
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: blogPostActions.CREATE });
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: blogPostActions.DELETE, payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
