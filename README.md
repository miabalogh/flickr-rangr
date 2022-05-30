# Flickr Rangr

<!-- ABOUT THE PROJECT -->
## About The Project
Flickr Rangr (pronounced `Flicker Ranger`) taps in the Flickr public feed API to provide a discovery portal into Flickr's vast collection by "ranging" into the popular platform's publicly accessible feed.

### Built With
* [React.js](https://reactjs.org/)
* [React Redux](https://react-redux.js.org/)
* [Material UI](https://mui.com/)
* [React Select](https://react-select.com/home)
* [Flickr Public Feed API](https://www.flickr.com/services/feeds/docs/photos_public/)

## Usage
Flickr image search operates and relies on image tags. Flickr Rangr search engine is modelled after Flickr's and thus requires tags as input. A limit of 10 tags is currently enforced to provide a quality discovery experience. 

## Limitations
* The Flickr public feed API returns only the most recent 20 images that match the query parameters.

## Future features & improvements
* Implement a suite of component & flow (E2E) tests using Jest & Enzyme
* Dark mode & light/dark mode switch button
* A better way & more interactive way to display image items' tags
* A less hacky way to display tags limit reached message
* Smoother transition between data fetching & display (in response to current problem of image item bars displaying before the parent image items themselves)
