import ADD_TO_CART from "../constants";

const initialState = {
  cartItems: [],
};

function reducerAddToCart(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    default:
      return state;
  }
}

export default reducerAddToCart;
