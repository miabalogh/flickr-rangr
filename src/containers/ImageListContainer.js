import { connect } from 'react-redux'
import ImageListContainer from 'components/ImageListContainer'

export default connect(
  state => {
    return {
      isDataFetching: state.images.fetching,
      data: state.images.data,
      tags: state.search.tags,
      tagMode: state.search.tagMode
    }
  }
)(ImageListContainer)
