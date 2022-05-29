import { connect } from 'react-redux'
import TagModeSelectDropDown from 'components/TagModeSelectDropDown'
import { setTagMode } from 'actions/search'
import { requestImagesFromFeed } from 'thunks/images'

export default connect(
  state => {
    return {
      tags: state.search.tags
    }
  },
  {
    setTagMode,
    requestImagesFromFeed
  }
)(TagModeSelectDropDown)
