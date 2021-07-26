import React from 'react'
import styled from '@emotion/styled'
import ConnectedTodoDeleteAllButton from '../../connected/ConnectedTodoDeleteAllButton'
import ConnectedTodoCheckAllButton from '../../connected/ConnectedTodoCheckAllButton'
import {todoSelector} from '../../../features/selector/TodoSelector'
import {useSelector} from 'react-redux'

const TodoButtons = () => {
  const todoList = useSelector(todoSelector.todoList)

  if (todoList.length === 0) {
    return <div/>
  } else {
    return (
      <MainContainer>
        <ConnectedTodoCheckAllButton/>
        <ConnectedTodoDeleteAllButton/>
      </MainContainer>
    )
  }
}

export default TodoButtons

const MainContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 15,
})
