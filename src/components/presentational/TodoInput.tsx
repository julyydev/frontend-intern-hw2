import React, {useState} from 'react'
import styled from '@emotion/styled'
import ConnectedContentInput from '../connected/ConnectedContentInput'
import ConnectedContentAddButton from '../connected/ConnectedContentAddButton'
import ConnectedTodoDeleteAllButton from '../connected/ConnectedTodoDeleteAllButton'

const TodoInput = () => {
  const [input, setInput] = useState('')

  return (
    <MainContainer>
      <ConnectedContentInput
        input={input}
        setInput={setInput}
      />
      <ConnectedContentAddButton
        input={input}
        setInput={setInput}
      />
      <ConnectedTodoDeleteAllButton/>
    </MainContainer>
  )
}

export default TodoInput

const MainContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
