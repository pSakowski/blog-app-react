//selectors
export const getAllPosts = ( state ) => state.posts;
export const getPostById = ({ posts }, postId) => posts.find(post => posts.id === postId);

// actions
// eslint-disable-next-line no-unused-vars
const createActionName = actionName => `app/posts/${actionName}`;
const REMOVE_POST = createActionName('REMOVE_POST')

// action creators
export const removePost = payload => ({ type: REMOVE_POST, payload})

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
      return statePart.filter(posts => posts.id !== action.payload);
    default:
      return statePart;
  };
};

export default postsReducer;