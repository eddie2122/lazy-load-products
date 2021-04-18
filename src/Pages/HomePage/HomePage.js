import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions";
import "./HomePage.css";

const Product = React.lazy(() => import("./Product"));

export default function HomePage() {
  const products = useSelector(({ data }) => data.products);
  let cart = products.filter((item) => {
    console.log(item);
    return item.count > 0;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // width: "70%",
      }}
    >
      <h1>Products Page</h1>
      <div style={{ flexDirection: "column" }}>
        {products.map((item) => (
          <Product item={item} />
        ))}
      </div>
      <h1>Current Cart: </h1>
      <div style={{ flexDirection: "column" }}>
        {cart.map((item) => (
          <Product item={item} />
        ))}
      </div>
    </div>
  );
}
