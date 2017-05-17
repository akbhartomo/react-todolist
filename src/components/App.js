import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  </MuiThemeProvider>
)

export default App