import React from 'react'
import TodoItem from './TodoItem'
import styled from '@emotion/styled'
import {useSelector} from 'react-redux'
import {Todo} from '../../features/ducks/TodoDucks'
import {RootState} from '../../root/RootReducer'
import {selectTodoList} from '../../features/selector/TodoSelector'
import {Container, Divider} from 'semantic-ui-react'

const TodoItemList = () => {
  const todoList = useSelector<RootState, Todo[]>(state => selectTodoList(state.todo))

  return (
    <MainContainer
    >
      {todoList.map((item: Todo) => (
        <Container key={item.id} style={{justifyContent: 'center', width: 270}}
        >
          <Divider/>
          <TodoItem item={item}/>
        </Container>
      ))}
    </MainContainer>
  )
}

export default TodoItemList

const MainContainer = styled(Container)({
  justifyContent: 'center',
  display: 'flex',
  marginBottom: 10,
})
