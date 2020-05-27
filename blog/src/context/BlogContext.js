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
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      console.log('Just returning the regular state');
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: blogPostActions.CREATE });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);
