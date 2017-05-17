import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateProps = (state, setProps) => ({
  active: setProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, setProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(setProps.filter))
  }
})

const FilterLink = connect(
  mapStateProps,
  mapDispatchToProps
)(Link)

export default FilterLink