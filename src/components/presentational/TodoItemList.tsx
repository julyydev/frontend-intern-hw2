import React from 'react'
import TodoItem from './TodoItem'
import styled from '@emotion/styled'
import {useSelector} from 'react-redux'
import {Todo} from '../../features/ducks/TodoDucks'
import {RootState} from '../../root/RootReducer'
import {selectTodoList} from '../../features/selector/TodoSelector'

const TodoItemList = () => {
  const todoList = useSelector<RootState, Todo[]>(state => selectTodoList(state.todo))

  return (
    <MainContainer>
      {todoList.map((item: Todo) => (
        <TodoItem key={item.id} item={item}/>
      ))}
    </MainContainer>
  )
}

export default TodoItemList

const MainContainer = styled.div ({
  justifyContent: 'center',
})
