import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodo = (todos, filter) => {
  switch(filter) {

    case 'SHOW_ALL':
      return todos

    case 'SHOW_COMPLETED':
      return todos.filter(event => event.completed)
    
    case 'SHOW_ACTIVE':
      return todos.filter(event => event.completed===false)
    
    default:
      throw new Error('Unknown filter:', filter)
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodo(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = {
  onTodoClick: toggleTodo
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList