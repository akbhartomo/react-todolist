import React from 'react'
import PropTypes from 'prop-types'
import {ListItem} from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox';

const Todo = ({onClick, completed, text}) => (
  <ListItem 
    leftCheckbox={<Checkbox />}
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </ListItem>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo