// src/redux/reducers.js
import { ActionTypes } from "./actions";

const initialState = [];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    case ActionTypes.ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    case ActionTypes.UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        )
      };
    case ActionTypes.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export default productReducer;
