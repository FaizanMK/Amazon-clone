export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
        // action.item is the item that we have dispatched(in product.js)
      };
    case "REMOVE_FROM_BASKET":
      // logic for removing item from basket
      return {};

    default:
      return state;
  }
};

export default reducer;
