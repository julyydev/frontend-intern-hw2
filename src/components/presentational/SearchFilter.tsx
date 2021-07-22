import React, {useCallback} from 'react'
import {Button} from 'semantic-ui-react'
import styled from '@emotion/styled'
import {useSelector} from 'react-redux'
import {RootState} from '../../root/RootReducer'

interface Props {
  onClickAll: ReturnType<typeof useCallback>
  onClickCheck: ReturnType<typeof useCallback>
  onClickUncheck: ReturnType<typeof useCallback>
}

const SearchFilter = (props: Props) => {
  const {onClickAll, onClickCheck, onClickUncheck} = props

  const {listIndex} = useSelector((state: RootState) => state.search)

  return (
    <div
      style={{
        width: 150,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <StyledButton
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 13,
          marginBottom: 10,
        }}
        onClick={onClickAll}
        color={listIndex === 0 ? 'purple' : 'grey'}
      >
        SHOW ALL
      </StyledButton>
      <StyledButton
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 13,
          marginBottom: 10,
        }}
        onClick={onClickCheck}
        color={listIndex === 1 ? 'purple' : 'grey'}
      >
        CHECKED
      </StyledButton>
      <StyledButton
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 13,
          marginBottom: 10,
        }}
        onClick={onClickUncheck}
        color={listIndex === 2 ? 'purple' : 'grey'}
      >
        UNCHECKED
      </StyledButton>
    </div>
  )
}

export default SearchFilter

const StyledButton = styled(Button)({
  width: 130,
  height: 30,
})
