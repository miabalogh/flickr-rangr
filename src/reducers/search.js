import { Search } from '../constants/actionTypes';

const {
    SET_TAGS,
    SET_TAG_MODE,
    SET_TAGS_LIMIT_REACHED
} = Search;

const initialState = {
  tags: '',
  tagMode: 'all',
  tagsLimitReached: false
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
    case SET_TAGS_LIMIT_REACHED: {
      return {
        ...state,
        tagsLimitReached: payload,
      }
    }
    default:
      return state
  }
}
