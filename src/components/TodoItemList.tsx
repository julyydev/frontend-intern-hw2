import React from 'react'
import TodoItem from './TodoItem'
import styled from '@emotion/styled'

const TodoItemList = () => {
  return (
    <MainContainer>
      <RestContainer>끝내지 못한 일의 개수: 개</RestContainer>
      <TodoItem text={'할 일 1'}/>
      <TodoItem text={'할 일 2'}/>
      <TodoItem text={'할 일 3'}/>
    </MainContainer>
  )
}

export default TodoItemList

const MainContainer = styled.div ({
  justifyContent: 'center'
})

const RestContainer = styled.div ({
  display: 'flex',
  justifyContent: 'center',
})
