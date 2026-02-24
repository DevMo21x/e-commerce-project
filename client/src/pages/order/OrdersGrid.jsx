import BuyAgainIcon from "../../assets/images/icons/buy-again.png";
import { Fragment } from "react";
import { Link } from "react-router";
import OrderHeader from "./OrderHeader";
import OrderDetailsGrid from "./OrderDetailsGrid";
const OrdersGrid = ({ orders }) => {
  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <>
            <div key={order.id} className="order-container">
              <OrderHeader order={order} />
              <OrderDetailsGrid order={order} />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default OrdersGrid;
