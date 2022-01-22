import { combineReducers } from "redux";

export const items = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    default:
      return state;
  }
};

const itemReducer = combineReducers({ items: items });

export default itemReducer;
