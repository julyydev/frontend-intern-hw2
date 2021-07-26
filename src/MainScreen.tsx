import React from 'react'
import {Container, Divider, Segment} from 'semantic-ui-react'
import Title from './components/presentational/Title'
import TodoInput from './components/presentational/input/TodoInput'
import TodoButtons from './components/presentational/items/TodoButtons'
import TodoItemList from './components/presentational/TodoItemList'
import TodoMessage from './components/presentational/TodoMessage'
import Clock from './components/presentational/information/Clock'
import Weather from './components/presentational/information/Weather'
import TodoSearch from './components/presentational/search/TodoSearch'
import {useSelector} from 'react-redux'
import {todoSelector} from './features/Todo/selector/TodoSelector'

const MainScreen = () => {
  const todoList = useSelector(todoSelector.todoList)
  const handleView = () => {
    if (todoList.length === 0) {
      return <div/>
    }
    else {
      return (
        <Segment
          style={{width: 320, height: 190}}
        >
          <TodoSearch/>
        </Segment>
      )
    }
  }

  return (
    <Container
      style={{marginTop: 30, display: 'flex', justifyContent: 'center'}}
    >
      <Container
        style={{width: 330, marginRight: 30}}
      >
        <Segment
          style={{width: 300, height: 290}}
        >
          <Clock/>
          <Divider/>
          <Weather/>
        </Segment>
      </Container>
      <Container
        style={{width: 520}}
      >
        <Segment
          style={{width: 490}}
        >
          <Title/>
          <TodoMessage/>
          <TodoInput/>
          <TodoButtons/>
          <TodoItemList/>
        </Segment>
      </Container>
      <Container
        style={{width: 280}}
      >
        {handleView()}
      </Container>
    </Container>
  )
}

export default MainScreen

