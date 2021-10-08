import {
  ARTIST_ARTWORKS_FAIL,
  ARTIST_ARTWORKS_REQUEST,
  ARTIST_ARTWORKS_SUCCESS,
} from '../constants/artistConstants';

export const artistArtworksReducer = (state = { artworks: [] }, action) => {
  switch (action.type) {
    case ARTIST_ARTWORKS_REQUEST:
      return { loading: true };
    case ARTIST_ARTWORKS_SUCCESS:
      return { loading: false, success: true, artworks: action.payload };
    case ARTIST_ARTWORKS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// export const artistDetailsReducer = (state = { theArtist: {} }, action) => {
//   switch (action.type) {
//     case ARTIST_DETAILS_REQUEST:
//       return { ...state, loading: true };
//     case ARTIST_DETAILS_SUCCESS:
//       return { loading: false, success: true, theArtist: action.payload };
//     case ARTIST_DETAILS_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// export const artistsReducer = (state = { artists: [] }, action) => {
//   switch (action.type) {
//     case ARTIST_LIST_REQUEST:
//       return { loading: true };
//     case ARTIST_LIST_SUCCESS:
//       return { loading: false, success: true, artists: action.payload };
//     case ARTIST_LIST_FAIL:
//       return { loading: false, error: action.payload };
//     case ARTIST_LIST_RESET:
//       return { artists: [] };
//     default:
//       return state;
//   }
// };
