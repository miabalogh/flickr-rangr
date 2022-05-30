import { Images } from 'constants/actionTypes';

const {
    GET_IMAGES,
    GET_IMAGES_SUCCESS,
    GET_IMAGES_FAILURE,
    SET_SELECTED_IMAGE
} = Images;

export const getImages = () => ({
    type: GET_IMAGES,
})

export const getImagesSuccess = (payload) => ({
    type: GET_IMAGES_SUCCESS,
    payload
})

export const getImagesFailure = () => ({
    type: GET_IMAGES_FAILURE,
})

export const setSelectedImage = (payload) => ({
    type: SET_SELECTED_IMAGE,
    payload
})