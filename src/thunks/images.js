import { getImages, getImagesSuccess, getImagesFailure } from '../actions/images'
import { formatImagesData } from '../utils/images';
import axios from 'axios';

export const requestImagesFromFeed = (tags, tagMode) => async (dispatch) => {
    dispatch(getImages())
    try {
        let feedUrl = 'https://www.flickr.com/services/feeds/photos_public.gne?format=json'
        if (tags) {
            feedUrl += `&tags=${tags}&tagmode=${tagMode}` 
        }
        // const feedUrl = `https://www.flickr.com/services/feeds/photos_public.gne?tags=${tags}&tagmode=${tagMode}&format=json`;
        console.log(feedUrl)
        const data = await axios.get(feedUrl)
        dispatch(getImagesSuccess(formatImagesData(data)))
    } catch (e) {
        dispatch(getImagesFailure(e))
    }

}