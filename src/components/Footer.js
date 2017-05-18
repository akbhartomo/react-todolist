import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <div className="todo_wrap">
      Show:
      {" "}
      <FlatButton>
        <FilterLink filter="SHOW_ALL">All</FilterLink>
      </FlatButton>
      <FlatButton>
        <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
      </FlatButton>
      <FlatButton>
        <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
      </FlatButton>
      
    {/*<p>
      Show:
      {" "}
      
      {", "}
      
      {", "}
      <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
    </p>*/}
  </div>
)

export default Footer

