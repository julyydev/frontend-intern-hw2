import React from 'react'
import TodoItem from './TodoItem'
import styled from '@emotion/styled'
import {useSelector} from 'react-redux'
import {RootState, selectTodoList, Todo} from '../features'

const TodoItemList = () => {
  const todoList = useSelector<RootState, Todo[]>(state => selectTodoList(state.todos))

  return (
    <MainContainer>
      <RestContainer>끝내지 못한 일의 개수: {todoList.filter((item: Todo) => !item.check).length}개</RestContainer>
      {todoList.map((item: Todo) => (
        <TodoItem item={item}/>
      ))}
    </MainContainer>
  )
}

export default TodoItemList

const MainContainer = styled.div ({
  justifyContent: 'center',
})

const RestContainer = styled.div ({
  display: 'flex',
  justifyContent: 'center',
})
