import React from 'react'
import {Container} from 'semantic-ui-react'
import Title from './components/presentational/Title'
import TodoInput from './components/presentational/TodoInput'
import TodoItemList from './components/presentational/TodoItemList'
import TodoMessage from './components/presentational/TodoMessage'
import Clock from './components/presentational/Clock'

const MainScreen = () => {
  return (
    <Container>
      <Title/>
      <Clock/>
      <TodoMessage/>
      <TodoItemList/>
      <TodoInput/>
    </Container>
  )
}

export default MainScreen
