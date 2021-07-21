import React from 'react'
import {Container, Segment} from 'semantic-ui-react'
import Title from './components/presentational/Title'
import TodoInput from './components/presentational/TodoInput'
import TodoItemList from './components/presentational/TodoItemList'
import TodoMessage from './components/presentational/TodoMessage'
import Clock from './components/presentational/Clock'

const MainScreen = () => {
  return (
    <Container
      style={{width: 600, justifyContent: 'center', justifySelf: 'center'}}
    >
      <Segment
        style={{marginTop: 30}}
      >
        <Title/>
        <Clock/>
        <TodoMessage/>
        <TodoInput/>
        <TodoItemList/>
      </Segment>
    </Container>
  )
}

export default MainScreen
