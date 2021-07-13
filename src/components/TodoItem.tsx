import React from 'react'
import {Checkbox} from 'semantic-ui-react'
import styled from '@emotion/styled'
import {Todo} from '../features'

interface Props {
  item: Todo
}

const TodoItem: React.FC<Props> = (Props) => {
  const {item} = Props

  return (
    <MainContainer>
      <Checkbox/>
      <TextContainer>
        {item.content}
      </TextContainer>
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
  height: 20,
})

const TextContainer = styled.text ({
  width: 135,
  height: 10,
})
