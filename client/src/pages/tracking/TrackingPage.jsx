import { Link, useParams } from "react-router";
import Header from "../../components/Header";
import TrackingFavIcon from "../../assets/images/icons/tracking-favicon.png";
import "./TrackingPage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
const TrackingPage = ({ cart }) => {
  const [order, setOrder] = useState(null);
  const { orderId, productId } = useParams();

  useEffect(() => {
    const getOrderData = async () => {
      const response = await axios.get(
        `/api/orders/${orderId}?expand=products`,
      );
      setOrder(response.data);
    };

    getOrderData();
  }, [orderId]);

  if (!order) {
    return null;
  } else {
    const orderProduct = order.products.find((orderProduct) => {
      return orderProduct.productId === productId;
    });

    let totalDeliveryTimeMs =
      orderProduct.estimatedDeliveryTimeMs - order.orderTimeMs;
    const timePassedMs = dayjs().valueOf() - order.orderTimeMs;
    let deliveryPercent = (timePassedMs / totalDeliveryTimeMs) * 100;
    if (deliveryPercent > 100) {
      deliveryPercent = 100;
    }

    let isPreparing;
    let isShipped;
    let isDelivered;
    if (deliveryPercent === 100) {
      isDelivered = deliveryPercent;
    } else if (deliveryPercent >= 33) {
      isShipped = deliveryPercent;
    } else {
      isPreparing = deliveryPercent;
    }

    return (
      <>
        <link rel="icon" type="image/svg+xml" href={TrackingFavIcon} />
        <title>Tracking</title>
        <Header cart={cart} />
        <div className="tracking-page">
          <div className="order-tracking">
            <Link className="back-to-orders-link link-primary" to="/orders">
              View all orders
            </Link>

            <div className="delivery-date">
              {deliveryPercent >= 100 ? "Delivered on" : "Arriving on"}{" "}
              {dayjs(orderProduct.estimatedDeliveryTimeMs).format(
                "dddd MMMM D",
              )}
            </div>

            <div className="product-info">{orderProduct.product.name}</div>

            <div className="product-info">
              Quantity: {orderProduct.quantity}
            </div>

            <img className="product-image" src={orderProduct.product.image} />

            <div className="progress-labels-container">
              <div
                className={`progress-label ${isPreparing && "current-status"}`}
              >
                Preparing
              </div>
              <div
                className={`progress-label ${isShipped && "current-status"}`}
              >
                Shipped
              </div>
              <div
                className={`progress-label ${isDelivered && "current-status"}`}
              >
                Delivered
              </div>
            </div>

            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${deliveryPercent}%` }}
              ></div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default TrackingPage;
