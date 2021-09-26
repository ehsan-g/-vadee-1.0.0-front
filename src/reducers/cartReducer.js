/* eslint-disable no-case-declarations */
import {
  CART_CREATE_SUCCESS,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_REMOVE_ITEMS,
  CHANGE_CART_STEP,
  CART_SAVE_PAYMENT_METHOD,
  CART_CREATE_REQUEST,
} from '../constants/cartConstants';

export default (
  state = { cartItems: [], shippingAddress: {}, step: '1' },
  action
) => {
  switch (action.type) {
    case CART_CREATE_REQUEST:
      return { loadingCart: true, cartItems: [], shippingAddress: {} };
    case CART_CREATE_SUCCESS:
      const item = action.payload;
      const existItem = state.cartItems.find(
        (x) => x.artworkId === item.artworkId
      );
      if (existItem) {
        return {
          ...state,
          loadingCart: false,
          cartItems: state.cartItems.map((x) =>
            x.artworkId === existItem.artworkId ? item : x
          ),
        };
      }

      return {
        ...state,
        loadingCart: false,
        cartItems: [...state.cartItems, item],
      };

    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };

    case CART_REMOVE_ITEMS:
      return { cartItems: [], shippingAddress: state.shippingAddress };

    case CHANGE_CART_STEP:
      return {
        shippingAddress: state.shippingAddress,
        cartItems: state.cartItems,
        step: action.payload,
      };

    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };

    default:
      return state;
  }
};
