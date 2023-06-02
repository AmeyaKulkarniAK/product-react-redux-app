// src/App.js
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "./redux/actions";
import { fetchProducts } from "./api/products";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      dispatch(setProducts(products));
    };

    getProducts();
  }, [dispatch]);

  return (
    <div>
      <h1>Product Management</h1>
      <AddProductForm />
      <ProductList />
    </div>
  );
};

export default App;
