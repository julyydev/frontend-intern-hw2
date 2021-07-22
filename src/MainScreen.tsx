import React from 'react'
import {Container, Segment} from 'semantic-ui-react'
import Title from './components/presentational/Title'
import TodoInput from './components/presentational/TodoInput'
import TodoButtons from './components/presentational/TodoButtons'
import TodoItemList from './components/presentational/TodoItemList'
import TodoMessage from './components/presentational/TodoMessage'
import Clock from './components/presentational/Clock'
import TodoSearch from './components/presentational/TodoSearch'
import {useSelector} from 'react-redux'
import {RootState} from './root/RootReducer'
import {Todo} from './features/ducks/TodoDucks'
import {selectTodoList} from './features/selector/TodoSelector'

const MainScreen = () => {
  const todoList = useSelector<RootState, Todo[]>(state => selectTodoList(state.todo))
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
          style={{width: 300, height: 300}}
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
        {handleView()}
      </Container>
    </Container>
  )
}

export default MainScreen
