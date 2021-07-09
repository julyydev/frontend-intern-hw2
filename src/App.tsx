import React from 'react'
import {Container} from 'semantic-ui-react'
import TodoTitle from './components/TodoTitle'
import TodoInput from './components/TodoInput'
import TodoItemList from './components/TodoItemList'

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
