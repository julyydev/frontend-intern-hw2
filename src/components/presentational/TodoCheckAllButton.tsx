import React, {useCallback} from 'react'
import {Button} from 'semantic-ui-react'
import styled from '@emotion/styled'

interface Props {
  onClick: ReturnType<typeof useCallback>
  restWorkCount: number
}


const TodoCheckAllButton = (props: Props) => {
  const {onClick, restWorkCount} = props

  return (
    <StyledButton
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
      }}
      onClick={onClick}
      color='yellow'
    >
      {restWorkCount === 0 ? 'UNCHECK ALL' : 'CHECK ALL'}
    </StyledButton>
  )
}

export default TodoCheckAllButton

const StyledButton = styled(Button)({
  width: 130,
  height: 30,
})
