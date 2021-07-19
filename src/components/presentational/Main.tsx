import React from 'react'
import {Container} from 'semantic-ui-react'
import TodoTitle from './TodoTitle'
import TodoInput from './TodoInput'
import TodoItemList from './TodoItemList'
import TodoMessage from './TodoMessage'
import TodoClock from './TodoClock'

const Main = () => {
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

export default Main
