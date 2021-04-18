import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions";

export default ({ item }) => {
  const [productQuantity, setProductQuantity] = useState(item.count || 0);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(item, productQuantity));
    setProductQuantity(0);
  };

  return (
    <div style={{ margin: "20px" }}>
      <div className="items">
        <h2>{item.name}</h2>
        <img src={item.url} alt="product_image" />
        <div className="add-to-cart">
          <h2>{item.price}</h2>
          <div className="price-container">
            <button
              className="items-add-button"
              onClick={() => setProductQuantity((prevVal) => prevVal - 1)}
              disabled={productQuantity === 0}
            >
              <h2>-</h2>
            </button>
            {productQuantity}
            <button
              className="items-add-button"
              onClick={() => setProductQuantity((prevVal) => prevVal + 1)}
            >
              <h2>+</h2>
            </button>
          </div>
          <button
            className="cart-button"
            disabled={productQuantity === 0}
            onClick={addToCartHandler}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
