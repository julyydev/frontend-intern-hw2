import React, {useCallback} from 'react'
import {Button} from 'semantic-ui-react'
import styled from '@emotion/styled'

interface Props {
  onClick: ReturnType<typeof useCallback>
}

const ContentAddButton = (props: Props) => {
  const {onClick} = props

  return (
    <StyledButton
      style={{
        marginLeft: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
      }}
      onClick={onClick}
      color='green'
    >
      ADD
    </StyledButton>
  )
}

export default ContentAddButton

const StyledButton = styled(Button)({
  width: 55,
  height: 30,
})
