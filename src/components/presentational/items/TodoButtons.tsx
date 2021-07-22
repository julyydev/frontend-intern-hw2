import React from 'react'
import styled from '@emotion/styled'
import ConnectedTodoDeleteAllButton from '../../connected/ConnectedTodoDeleteAllButton'
import ConnectedTodoCheckAllButton from '../../connected/ConnectedTodoCheckAllButton'
import {selectTodoList} from '../../../features/selector/TodoSelector'
import {useSelector} from 'react-redux'
import {RootState} from '../../../root/RootReducer'
import {Todo} from '../../../features/ducks/TodoDucks'

const TodoButtons = () => {
  const todoList = useSelector<RootState, Todo[]>(state => selectTodoList(state.todo))

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
