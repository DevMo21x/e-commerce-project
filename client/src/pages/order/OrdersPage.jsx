import { Link } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import BuyAgainIcon from "../../assets/images/icons/buy-again.png";
import OrdersFavIcon from "../../assets/images/orders-favicon.png";
import "./OrdersPage.css";
// import dayjs from "dayjs";
// import formatMoney from "../../utils/money";
import OrdersGrid from "./OrdersGrid";

const OrdersPage = ({ cart }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrdersData = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };

    getOrdersData();
  }, []);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href={OrdersFavIcon} />
      <title>Orders</title>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>
        <OrdersGrid orders={orders} />
      </div>
    </>
  );
};

export default OrdersPage;
