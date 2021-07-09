import React from 'react'
import {Button, Input} from 'semantic-ui-react'
import styled from '@emotion/styled'

const TodoInput = () => {
  return (
    <MainContainer>
      <Input
        type='text'
        placeholder='할 일을 입력하세요.'
      />
      <Button>추가</Button>
    </MainContainer>
  )
}

export default TodoInput

const MainContainer = styled.div ({
  display: 'flex',
  justifyContent: 'center'
})
