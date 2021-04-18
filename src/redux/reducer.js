import { initialState } from "./store";
import types from "./types";

import products from "./mockProducts";

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return { ...state, products };

    case types.ADD_TO_CART:
      return {
        ...state,
        products: action.payload,
        cart: action.updatedCartItems,
      };

    default:
      return state;
  }
};
