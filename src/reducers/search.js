import { Search } from '../constants/actionTypes';

const {
    SET_TAGS,
    SET_TAG_MODE,
} = Search;

const initialState = {
  tags: '',
  tagMode: 'all',
}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case SET_TAGS: {
      return {
        ...state,
        tags: payload,
      }
    }
    case SET_TAG_MODE: {
      return {
        ...state,
        tagMode: payload,
      }
    }
    default:
      return state
  }
}
