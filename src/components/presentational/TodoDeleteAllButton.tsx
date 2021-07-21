import React, {useCallback} from 'react'
import {Button} from 'semantic-ui-react'
import styled from '@emotion/styled'

interface Props {
  onClick: ReturnType<typeof useCallback>
}


const TodoDeleteAllButton = (props: Props) => {
  const {onClick} = props

  return (
    <StyledButton
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
      }}
      onClick={onClick}
      color='red'
    >
      DELETE ALL
    </StyledButton>
  )
}

export default TodoDeleteAllButton

const StyledButton = styled(Button)({
  width: 111,
  height: 30,
})
