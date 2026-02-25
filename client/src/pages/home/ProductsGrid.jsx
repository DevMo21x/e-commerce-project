// import formatMoney from "../../utils/money";
import CheckmarkIcon from "../../assets/images/icons/checkmark.png";
// import axios from "axios";

import Product from "./Product";
const ProductsGrid = ({ products, getCartData }) => {
  return (
    <>
      <div className="products-grid">
        {products.map((product) => {
          return <Product key={product.id} getCartData={getCartData} product={product} />;
        })}
      </div>
    </>
  );
};

export default ProductsGrid;
