import types from "./types";
import store from "./store";

export const getProducts = () => ({
  type: types.GET_PRODUCTS,
});

export const addToCart = (product, count) => {
  const state = store.getState();

  const products = state.data.products;

  const updatedProducts = products.map((item) => {
    if (item.id === product.id) {
      debugger;
      return {
        ...item,
        count: item.count ? item.count + count : count,
      };
    }

    return item;
  });

  return {
    type: types.ADD_TO_CART,
    payload: [...updatedProducts],
  };
};
