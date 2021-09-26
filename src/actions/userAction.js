import artworksBase from '../apis/artworksBase';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGOUT,
  USER_DETAILS_RESET,
  USER_LIST_RESET,
} from '../constants/userConstants';

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };
    // eslint-disable-next-line no-undef
    const formData = new FormData();
    formData.set('email', username);
    formData.set('password', password);
    const { data } = await artworksBase.post('/users/login/', formData, {
      config,
    });
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    // eslint-disable-next-line no-undef
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (e) {
    // check for generic and custom message to return using ternary statement
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        e.response && e.response.data.detail
          ? e.response.data.detail
          : e.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('cartItems');
  localStorage.removeItem('shippingAddress');
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_DETAILS_RESET });
  dispatch({ type: USER_LIST_RESET });
};

export const register =
  (firstName, lastName, email, password) => async (dispatch) => {
    console.log(firstName, lastName, email, password);
    try {
      // eslint-disable-next-line no-undef
      const formData = new FormData();
      formData.set('firstName', firstName);
      formData.set('lastName', lastName);
      formData.set('email', email);
      formData.set('password', password);

      dispatch({ type: USER_REGISTER_REQUEST });
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
      const { data } = await artworksBase.post('/users/register/', formData, {
        config,
      });
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });
      // eslint-disable-next-line no-undef
      localStorage.setItem('userInfo', JSON.stringify(data));

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });
      // eslint-disable-next-line no-undef
      localStorage.removeItem('localVerifyInfo');
    } catch (e) {
      // check for generic and custom message to return using ternary statement
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          e.response && e.response.data.detail
            ? e.response.data.detail
            : e.message,
      });
    }
  };
