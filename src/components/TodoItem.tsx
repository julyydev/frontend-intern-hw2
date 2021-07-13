import React from 'react'
import {Checkbox} from 'semantic-ui-react'
import styled from '@emotion/styled'

interface Props {
  text: string
}

const TodoItem: React.FC<Props> = (Props) => {
  const {text} = Props

  return (
    <MainContainer>
      <Checkbox/>
      <text style={{width: 135, height: 10}}>{text}</text>
      <ButtonContainer>
        <button>삭제</button>
      </ButtonContainer>
    </MainContainer>
  )
}

export default TodoItem

const MainContainer = styled.div ({
  display: 'flex',
  justifyContent: 'center',
})

const ButtonContainer = styled.div ({
  width: 40,
  height: 20
})
