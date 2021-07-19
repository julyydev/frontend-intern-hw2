import React, {useState} from 'react'
import styled from '@emotion/styled'
import ContentInputContainer from '../container/ContentInputContainer'
import AddButtonContainer from '../container/AddButtonContainer'

const TodoInput = () => {
  const [input, setInput] = useState('')

  return (
    <MainContainer>
      <ContentInputContainer
        style={Styles.contentInputContainer}
        input={input}
        setInput={setInput}
      />
      <AddButtonContainer
        style={Styles.addButtonContainer}
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

const Styles: { [key: string]: React.CSSProperties } = {
  contentInputContainer: {
    width: 170,
    height: 20,
  },
  addButtonContainer: {
    width: 55,
    height: 20,
    marginLeft: 5,
  }
}
