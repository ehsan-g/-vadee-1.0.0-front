import artworksBase from '../apis/artworksBase';
import {
  ARTWORK_LIST_REQUEST,
  ARTWORK_LIST_SUCCESS,
  ARTWORK_LIST_FAIL,
  ARTWORK_DETAILS_REQUEST,
  ARTWORK_DETAILS_SUCCESS,
  ARTWORK_DETAILS_FAIL,
  ARTWORK_CREATE_REQUEST,
  ARTWORK_CREATE_SUCCESS,
  ARTWORK_CREATE_FAIL,
} from '../constants/artworkConstants';

export const fetchAllArtWorks =
  (keyword = '') =>
  async (dispatch) => {
    try {
      const response = await artworksBase.get(`/artworks/${keyword}`);
      dispatch({ type: ARTWORK_LIST_REQUEST });
      dispatch({
        type: ARTWORK_LIST_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      // check for generic and custom message to return using ternary statement
      dispatch({
        type: ARTWORK_LIST_FAIL,
        payload:
          e.response && e.response.data.detail
            ? e.response.data.detail
            : e.message,
      });
    }
  };

export const fetchProductById = (itemId) => async (dispatch) => {
  try {
    const response = await artworksBase.get(`/artworks/${itemId}`);
    await dispatch({ type: ARTWORK_DETAILS_REQUEST });
    dispatch({
      type: ARTWORK_DETAILS_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    // check for generic and custom message to return using ternary statement
    dispatch({
      type: ARTWORK_DETAILS_FAIL,
      payload:
        e.response && e.response.data.detail
          ? e.response.data.detail
          : e.message,
    });
  }
};
