import React from 'react'
import {Container} from 'semantic-ui-react'
import TodoTitle from './components/TodoTitle'
import TodoInput from './components/TodoInput'

const App = () => {
  return (
    <Container>
      <TodoTitle />
      <TodoInput />
    </Container>
  )
}

export default App
