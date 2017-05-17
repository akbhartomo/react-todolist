let nextTodoID = 0

// Takes the text from AddTodo field and returns proper “Action” JSON to send to other components.
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoID++,
  text
})

// Takes filter string and returns proper “Action” JSON object to send to other components.
export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

// Takes Todo item’s id and returns proper “Action” JSON object to send to other components.
export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})