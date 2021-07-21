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
      style={{display: 'center'}}
      value={value}
      placeholder='할 일을 입력하세요.'
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}

export default ModalContentTextArea

const StyledTextArea = styled(TextArea)({
  flex: 1,
  height: 28,
  marginTop: 7,
  marginBottom: 7,
  marginRight: 7,
  resize: 'none',
  backgroundColor: '#dfe6e9',
  outlineStyle: 'none',
  border: 'none',
  borderRadius: 5,
  fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'center',
  alignItems: 'center',
})
