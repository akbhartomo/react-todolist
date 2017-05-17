import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

let AddTodo = ({dispatch}) => {
	let input
	return (
		<div className="todo_wrap">
			<form onSubmit={event => {
				event.preventDefault()
				if (!input.value.trim()) {
					return
				}
				dispatch(addTodo(input.value))
				input.value = ''
			}}>
				<input 
					className="todo_input"
					placeholder="Keep your idea"				
					ref={node => {
						input = node
					}}
				/>
				<RaisedButton
					className="todo_button--submit"
					type="submit"
					primary={true}
					label="Add Todo"/>					
			</form>
		</div>
	)
}

AddTodo = connect()(AddTodo)

export default AddTodo