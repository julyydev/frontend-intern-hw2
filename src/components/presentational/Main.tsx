import React from 'react'
import {Container} from 'semantic-ui-react'
import TodoTitle from './TodoTitle'
import TodoInput from './TodoInput'
import TodoItemList from './TodoItemList'
import TodoMessage from './TodoMessage'

const Main = () => {
  return (
    <Container>
      <TodoTitle/>
      <TodoMessage/>
      <TodoItemList/>
      <TodoInput/>
    </Container>
  )
}

export default Main
