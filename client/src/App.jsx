import { HomePage } from "./pages/home/HomePage";
import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import OrdersPage from "./pages/order/OrdersPage";
import TrackingPage from "./pages/tracking/TrackingPage";
import NotFoundHeader from "./pages/404/404Page";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("/api/cart-items").then((response) => {
      setCart(response.data);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/tracking" element={<TrackingPage />} />
        <Route path="/*" element={<NotFoundHeader />} />
      </Routes>
    </>
  );
}

export default App;
