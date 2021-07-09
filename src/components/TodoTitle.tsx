import React from 'react'
import {Header} from 'semantic-ui-react'
import styled from '@emotion/styled'

const TodosList = () => {
  return (
    <MainContainer>
      <Header as='h1'>To Do List</Header>
    </MainContainer>
  )
}

export default TodosList

const MainContainer = styled.div ({
  textAlign: 'center'
})
