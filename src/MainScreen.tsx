import React from 'react'
import {Container, Segment} from 'semantic-ui-react'
import Title from './components/presentational/Title'
import TodoInput from './components/presentational/TodoInput'
import TodoButtons from './components/presentational/TodoButtons'
import TodoItemList from './components/presentational/TodoItemList'
import TodoMessage from './components/presentational/TodoMessage'
import Clock from './components/presentational/Clock'

const MainScreen = () => {
  return (
    <Container
      style={{marginTop: 30, display: 'flex', justifyContent: 'center'}}
    >
      <Container
        style={{width: 330, marginRight: 30}}
      >
        <Segment
          style={{width: 300, height: 350}}
        >
          <Clock/>
        </Segment>
      </Container>
      <Container
        style={{width: 540}}
      >
        <Segment
          style={{width: 500}}
        >
          <Title/>
          <TodoMessage/>
          <TodoInput/>
          <TodoButtons/>
          <TodoItemList/>
        </Segment>
      </Container>
      <Container
        style={{width: 300}}
      >
        <Segment
          style={{width: 300, height: 90}}
        >
        </Segment>
        <Segment
          style={{width: 300, height: 230}}
        >
        </Segment>
      </Container>
    </Container>
  )
}

export default MainScreen
