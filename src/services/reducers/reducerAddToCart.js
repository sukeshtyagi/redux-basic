import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants";

const initialState = {
  cartItems: [],
};

function reducerAddToCart(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("ADD_TO_CART action", state.cartItems);
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    case REMOVE_FROM_CART:
      console.log("REMOVE_FROM_CART action", state.cartItems);
      const itemIdToRemove = action.payload.itemId;

      console.log(itemIdToRemove);

      let indexOfItemToRemove = -1;
      for (let i = 0; i < state.cartItems.length; i++) {
        console.log(action.payload.itemId);
        console.log(state.cartItems[i].itemId);
        if (itemIdToRemove === state.cartItems[i].itemId) {
          console.log("Item matched:", itemIdToRemove);
          indexOfItemToRemove = i;
          break;
        }
      }

      console.log("Index of item to remove:", indexOfItemToRemove);

      if (indexOfItemToRemove !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems.splice(indexOfItemToRemove, 1);

        return {
          ...state,
          cartItems: updatedCartItems,
        };
      }
    default:
      return state;
  }
}

export default reducerAddToCart;
