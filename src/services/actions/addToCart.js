import { ADD_TO_CART } from "../constants";

function addToCart(data) {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
}

export default addToCart;
