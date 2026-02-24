import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
// import CheckmarkIcon from "../../assets/images/icons/checkmark.png";
import HomeFavIcon from "../../assets/images/home-favicon.png";
import ProductsGrid from "./ProductsGrid";
import "../../index.css";
import "./HomePage.css";

export const HomePage = ({ cart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);
  return (
    <>
      <link rel="icon" type="image/svg+xml" href={HomeFavIcon} />
      <title>Ecommerce Project</title>

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
};
