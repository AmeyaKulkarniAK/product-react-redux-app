// src/redux/actions.js
export const ActionTypes = {
  SET_PRODUCTS: "SET_PRODUCTS",
  ADD_PRODUCT: "ADD_PRODUCT",
  UPDATE_PRODUCT: "UPDATE_PRODUCT",
  DELETE_PRODUCT: "DELETE_PRODUCT"
};

export const setProducts = (products) => ({
  type: ActionTypes.SET_PRODUCTS,
  payload: products
});

export const addProduct = (product) => ({
  type: ActionTypes.ADD_PRODUCT,
  payload: product
});

export const updateProduct = (product) => ({
  type: ActionTypes.UPDATE_PRODUCT,
  payload: product
});

export const deleteProduct = (productId) => ({
  type: ActionTypes.DELETE_PRODUCT,
  payload: productId
});
