// src/components/UpdateProductForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../redux/actions";

const UpdateProductForm = ({ product }) => {
  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = {
      ...product,
      title,
      description,
      price
    };

    dispatch(updateProduct(updatedProduct));
  };

  return (
    <div>
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateProductForm;
