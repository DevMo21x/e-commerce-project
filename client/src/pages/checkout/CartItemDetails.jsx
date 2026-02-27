import axios from "axios";
import formatMoney from "../../utils/money";
import { useState } from "react";

const CartItemDetails = ({ cartItem, getCartData }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await getCartData();
  };

  const updateQuantity = () => {
    if (isUpdating) {
      const sendPutReq = async () => {
        await axios.put(`/api/cart-items/${cartItem.productId}`, {
          quantity,
        });
        await getCartData();
        setIsUpdating(false);
      };
      sendPutReq();
    } else {
      setIsUpdating(true);
    }
  };

  const updateQuantityValue = (e) => {
    const numQuantity = Number(e.target.value);
    setQuantity(numQuantity);
  };

  const updateQuantityWithKey = (e) => {
    if (e.key === "Enter") {
      const sendPutReq = async () => {
        await axios.put(`/api/cart-items/${cartItem.productId}`, {
          quantity,
        });
        await getCartData();
        setIsUpdating(false);
      };
      sendPutReq();
    } else if (e.key === "Escape") {
      setQuantity(cartItem.quantity);
      setIsUpdating(false);
    }
  };
  return (
    <>
      <img className="product-image" src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:{" "}
            {isUpdating ? (
              <input
                type="text"
                className=""
                style={{ width: 50 }}
                value={quantity}
                onChange={updateQuantityValue}
                onKeyDown={updateQuantityWithKey}
              />
            ) : (
              <span className="quantity-label">{cartItem.quantity}</span>
            )}
          </span>
          <span
            className="update-quantity-link link-primary"
            onClick={updateQuantity}
          >
            Update
          </span>{" "}
          <span
            className="delete-quantity-link link-primary"
            onClick={deleteCartItem}
          >
            Delete
          </span>
        </div>
      </div>
    </>
  );
};

export default CartItemDetails;
