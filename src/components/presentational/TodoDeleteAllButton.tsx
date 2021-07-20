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
      style={{marginLeft: 5}}
      size='mini'
      onClick={onClick}
    >
      전체삭제
    </StyledButton>
  )
}

export default TodoDeleteAllButton

const StyledButton = styled(Button)({
  width: 82,
  height: 20,
  fontSize: 10,
})
