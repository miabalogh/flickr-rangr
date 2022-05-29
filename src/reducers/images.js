import { Images } from '../constants/actionTypes'
const {
  GET_IMAGES,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAILURE,
  SET_SELECTED_IMAGE,
} = Images

const initialState = {
  fetching: true,
  error: null,
  data: null,
  selectedImage: null,
}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case GET_IMAGES: {
      return {
        ...state,
        fetching: true,
      }
    }
    case GET_IMAGES_SUCCESS: {
      return {
        ...state,
        data: payload,
        fetching: false,
        error: null,
      }
    }
    case GET_IMAGES_FAILURE: {
      return {
        ...state,
        fetching: false,
        error: payload,
      }
    }
    case SET_SELECTED_IMAGE: {
      return {
        ...state,
        selectedImage: payload,
      }
    }
    default:
      return state
  }
}
