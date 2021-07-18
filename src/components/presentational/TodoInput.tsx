import React, {useState} from 'react'
import styled from '@emotion/styled'
import {ContentInputContainer} from '../container/ContentInputContainer'
import {AddButtonContainer} from '../container/AddButtonContainer'

const TodoInput = () => {
  const [input, setInput] = useState('')

  return (
    <MainContainer>
      <ContentInputContainer
        styles={{width: 170, height: 20}}
        input={input}
        setInput={setInput}
      />
      <AddButtonContainer
        input={input}
        setInput={setInput}
      />
    </MainContainer>
  )
}

export default TodoInput

const MainContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
})
