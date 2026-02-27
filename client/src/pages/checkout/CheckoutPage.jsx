import CheckoutHeader from "./CheckoutHeader";
import { useEffect, useState } from "react";
import axios from "axios";
// import dayjs from "dayjs";
import CheckoutFavIcon from "../../assets/images/cart-favicon.png";
import OrderSummary from "./OrderSummary";
import PaymentSummary from "./PaymentSummary";
import "./CheckoutPage.css";
const CheckoutPage = ({ cart, getCartData }) => {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    const fetchCheckoutData = async () => {
      let response = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveryTime",
      );
      setDeliveryOptions(response.data);

      response = await axios.get("/api/payment-summary");
      setPaymentSummary(response.data);
    };

    fetchCheckoutData();
  }, [cart]);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href={CheckoutFavIcon} />
      <title>Checkout</title>

      <CheckoutHeader cart={cart}/>
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} getCartData={getCartData} />
          <PaymentSummary paymentSummary={paymentSummary} getCartData={getCartData} />
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
