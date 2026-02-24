import CheckoutHeader from "./CheckoutHeader";
import { useEffect, useState } from "react";
import axios from "axios";
// import dayjs from "dayjs";
import CheckoutFavIcon from "../../assets/images/cart-favicon.png";
import OrderSummary from "./OrderSummary";
import PaymentSummary from "./PaymentSummary";
import "./CheckoutPage.css";
const CheckoutPage = ({ cart }) => {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    axios
      .get("/api/delivery-options?expand=estimatedDeliveryTime")
      .then((response) => {
        setDeliveryOptions(response.data);
      });

    axios.get("/api/payment-summary").then((response) => {
      setPaymentSummary(response.data);
    });
  }, []);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href={CheckoutFavIcon} />
      <title>Checkout</title>

      <CheckoutHeader />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} />
          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
