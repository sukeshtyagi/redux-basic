import { REMOVE_FROM_CART } from "../constants";

function removeFromCart(data) {
  return {
    type: REMOVE_FROM_CART,
    payload: data,
  };
}

export default removeFromCart;
