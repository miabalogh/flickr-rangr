import { Search } from 'constants/actionTypes';

const {
    SET_TAGS,
    SET_TAG_MODE,
    SET_TAGS_LIMIT_REACHED
} = Search;

export const setTags = (payload) => ({
    type: SET_TAGS,
    payload
})

export const setTagMode = (payload) => ({
    type: SET_TAG_MODE,
    payload
})

export const setTagsLimitReached = (payload) => ({
    type: SET_TAGS_LIMIT_REACHED,
    payload
})