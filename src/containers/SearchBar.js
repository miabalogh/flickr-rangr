import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar'
import { setTags } from '../actions/search'
import { requestImagesFromFeed } from '../thunks/images'

export default connect(
  state => {
    return {
      tagMode: state.search.tagMode,
    }
  },
  {
    setTags,
    requestImagesFromFeed
  }
)(SearchBar)
