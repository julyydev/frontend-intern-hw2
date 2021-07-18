import React from 'react'
import {Container} from 'semantic-ui-react'
import TodoTitle from './components/presentational/TodoTitle'
import TodoInput from './components/presentational/TodoInput'
import TodoItemList from './components/presentational/TodoItemList'

const App = () => {
  return (
    <Container>
      <TodoTitle/>
      <TodoItemList/>
      <TodoInput/>
    </Container>
  )
}

export default App
