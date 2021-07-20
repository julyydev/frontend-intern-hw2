import React, {useCallback} from 'react'
import {Button} from 'semantic-ui-react'
import styled from '@emotion/styled'

interface Props {
  onClick: ReturnType<typeof useCallback>
}

const TodoDeleteButton = (props: Props) => {
  const {onClick} = props

  return (
    <StyledButton
      size='mini'
      onClick={onClick}
    >
      삭제
    </StyledButton>
  )
}

export default TodoDeleteButton

const StyledButton = styled(Button)({
  width: 55,
  height: 20,
  fontSize: 10,
})
