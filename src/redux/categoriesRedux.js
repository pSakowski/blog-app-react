//selectors
export const getAllCategories = ({ categories }) => categories;

// actions
// eslint-disable-next-line no-unused-vars
const createActionName = actionName => `app/categories/${actionName}`;

// action creators

const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {

    default:
      return statePart;
  };
};

export default categoriesReducer;