import React from 'react'
import TodoItem from './TodoItem'
import styled from '@emotion/styled'
import {useSelector} from 'react-redux'
import {Todo} from '../../features'
import {RootState} from '../../features/Root'
import {selectTodoList, selectRestWork} from '../../features/Selector'

const TodoItemList = () => {
  const todoList = useSelector<RootState, Todo[]>(state => selectTodoList(state.todo))
  const restWorkCount = useSelector<RootState, Todo[]>(state => selectRestWork(state.todo)).length

  const handleMessage = () => {
    if (todoList.length === 0) {
      return <RestContainer>환영합니다. 해야할 일을 추가하세요.</RestContainer>
    }
    else {
      return (
        <RestContainer>끝내지 못한 일의 개수: {restWorkCount}개</RestContainer>
      )
    }
  }

  return (
    <MainContainer>
      {handleMessage()}
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

const RestContainer = styled.div ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: 5,
})
