import artworksBase from '../apis/artworksBase';
import {
  CART_CREATE_REQUEST,
  CART_CREATE_SUCCESS,
  CART_CREATE_FAIL,
  CART_REMOVE_ITEMS,
  CART_SAVE_SHIPPING_ADDRESS,
} from '../constants/cartConstants';

export const addToCart = (workId) => async (dispatch, getState) => {
  try {
    const { data } = await artworksBase.get(`/artworks/${workId}/`);
    dispatch({ type: CART_CREATE_REQUEST });
    dispatch({
      type: CART_CREATE_SUCCESS,
      payload: {
        productId: data.the_product.id,
        quantityToBuy: 1,
        owner: data.the_product.user.firstName,
        title: data.the_product.title,
        description: data.the_product.description,
        cover: data.the_product.cover,
        price: data.the_product.price,
        category: data.the_product.category.name,
        subCategory: data.the_product.sub_category.name,
        identifierType: data.the_product.identifier,
        identifierNumber: data.the_product.identifier_num,
        gradingCompany: data.the_product.grading_company,
        grade: data.the_product.grade,
      },
    });
    // save the item in browser local storage. It needs to be parsed back to an object to be used
    // eslint-disable-next-line no-undef
    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().theCart.cartItems)
    );
  } catch (e) {
    // check for generic and custom message to return using ternary statement
    dispatch({
      type: CART_CREATE_FAIL,
      payload:
        e.response && e.response.data.detail
          ? e.response.data.detail
          : e.message,
    });
  }
};

export const cleanLocalCart = () => async (dispatch) => {
  // eslint-disable-next-line no-undef
  localStorage.removeItem('cartItems');
  // eslint-disable-next-line no-undef
  localStorage.removeItem('shippingAddress');
  dispatch({
    type: CART_REMOVE_ITEMS,
  });
};

export const saveShippingAddress = (data) => async (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });
  // eslint-disable-next-line no-undef
  localStorage.setItem('shippingAddress', JSON.stringify(data));
};
