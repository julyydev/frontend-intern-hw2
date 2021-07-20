import React from 'react'
import {Container} from 'semantic-ui-react'
import TodoTitle from './components/presentational/TodoTitle'
import TodoInput from './components/presentational/TodoInput'
import TodoItemList from './components/presentational/TodoItemList'
import TodoMessage from './components/presentational/TodoMessage'
import TodoClock from './components/presentational/TodoClock'

const MainScreen = () => {
  return (
    <Container>
      <TodoTitle/>
      <TodoClock/>
      <TodoMessage/>
      <TodoItemList/>
      <TodoInput/>
    </Container>
  )
}

export default MainScreen
