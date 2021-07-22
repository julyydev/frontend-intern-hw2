import React, {useCallback} from 'react'
import {Input} from 'semantic-ui-react'
import styled from '@emotion/styled'

interface Props {
  value: string
  onChange: ReturnType<typeof useCallback>
  onKeyDown: ReturnType<typeof useCallback>
}

const SearchInput = (props: Props) => {
  const {value, onChange, onKeyDown} = props

  return (
    <StyledInput
      size='large'
      type='text'
      value={value}
      placeholder='Search...'
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}

export default SearchInput

const StyledInput = styled(Input)({
  width: 204,
  height: 30,
  fontSize: 20,
})
