import React, {useCallback} from 'react'
import {Button} from 'semantic-ui-react'
import styled from '@emotion/styled'

interface Props {
  onClick: ReturnType<typeof useCallback>
}

const SearchButton = (props: Props) => {
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
      color='facebook'
    >
      SEARCH
    </StyledButton>
  )
}

export default SearchButton

const StyledButton = styled(Button)({
  width: 70,
  height: 30,
})
