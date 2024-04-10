import ADD_TO_CART from "../constants";

const initialState = {
  cartItems: [],
};

function reducerAddToCart(state = initialState, action) {
  console.log("state is", state);
  switch (action.type) {
    case ADD_TO_CART:
      console.log("action", action);
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    default:
      return state;
  }
}

export default reducerAddToCart;
