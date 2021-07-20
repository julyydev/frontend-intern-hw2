import React, {useCallback} from 'react'
import {TextArea} from 'semantic-ui-react'
import styled from '@emotion/styled'

interface Props {
  value: string
  onChange: ReturnType<typeof useCallback>
  onKeyDown: ReturnType<typeof useCallback>
}

const ModalContentTextArea = (props: Props) => {
  const {value, onChange, onKeyDown} = props

  return (
    <StyledTextArea
      value={value}
      placeholder='할 일을 입력하세요.'
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}

export default ModalContentTextArea

const StyledTextArea = styled(TextArea)({
  flex: 0.9,
  height: 25,
  marginTop: 7,
  marginBottom: 7,
  resize: 'none',
  backgroundColor: '#eae3e5',
  outlineStyle: 'none',
  border: 'none',
  borderRadius: 5,
  fontWeight: 'bold',
  textAlign: 'center',
})
