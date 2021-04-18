import { combineReducers, createStore } from "redux";

import reducer from "./reducer";

export const initialState = {
  products: [],
  cart: [],
};

const reducers = combineReducers({
  data: reducer,
});

export default createStore(reducers);
