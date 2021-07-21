import React from 'react'
import styled from '@emotion/styled'
import ConnectedTodoDeleteAllButton from '../connected/ConnectedTodoDeleteAllButton'
import ConnectedTodoCheckAllButton from '../connected/ConnectedTodoCheckAllButton'

const TodoButtons = () => {
  return (
    <MainContainer>
      <ConnectedTodoCheckAllButton/>
      <ConnectedTodoDeleteAllButton/>
    </MainContainer>
  )
}

export default TodoButtons

const MainContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
