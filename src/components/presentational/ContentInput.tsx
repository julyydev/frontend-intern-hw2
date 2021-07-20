import React, {useCallback} from 'react'
import {Input} from 'semantic-ui-react'
import styled from '@emotion/styled'

interface Props {
  value: string
  onChange: ReturnType<typeof useCallback>
  onKeyDown: ReturnType<typeof useCallback>
}

const ContentInputContainer = (props: Props) => {
  const {value, onChange, onKeyDown} = props

  return (
    <StyledInput
      size='mini'
      type='text'
      value={value}
      placeholder='할 일을 입력하세요.'
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}

export default ContentInputContainer

const StyledInput = styled(Input)({
  width: 170,
  height: 20,
})
