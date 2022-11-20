

//selectors
export const getAllPosts = ({ posts }) => posts;
export const getPostById = ({ posts }, postId) => posts.find(post => post.id === postId);

// actions
// eslint-disable-next-line no-unused-vars
const createActionName = actionName => `app/posts/${actionName}`;
const REMOVE_POST = createActionName('REMOVE_POST')
const ADD_LIST = createActionName('ADD_LIST');

// action creators
export const removePost = payload => ({ type: REMOVE_POST, payload})
export const addList = payload => ({ type: ADD_LIST, payload });

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
      return statePart.filter((post) => post.id !== action.payload);
    case ADD_LIST:
      return [...statePart, { ...action.payload }];
    default:
      return statePart;
  };
};

export default postsReducer;