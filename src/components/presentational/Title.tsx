import React from 'react'
import {Header} from 'semantic-ui-react'
import styled from '@emotion/styled'

const TodosList = () => {
  return (
    <MainContainer>
      <Header style={{fontSize: 45}}>TODOLIST</Header>
    </MainContainer>
  )
}

export default TodosList

const MainContainer = styled.div({
  textAlign: 'center',
  marginTop: 10,
})
