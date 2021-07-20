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
      style={{marginLeft: 5}}
      size='mini'
      onClick={onClick}
    >
      추가
    </StyledButton>
  )
}

export default ContentAddButton

const StyledButton = styled(Button)({
  width: 55,
  height: 20,
})
