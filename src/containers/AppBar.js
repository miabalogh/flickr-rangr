import { connect } from 'react-redux'
import AppBar from 'components/AppBar'

export default connect(
  state => {
    return {
        tagsLimitReached: state.search.tagsLimitReached,
    }
  },
)(AppBar)
