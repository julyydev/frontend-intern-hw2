import React, {useCallback} from 'react'
import {TextArea} from 'semantic-ui-react'
import styled from '@emotion/styled'

interface Props {
  value: string
  onChange: ReturnType<typeof useCallback>
  isModalLarge: boolean
}

const ModalMemoTextAreaContainer = (props: Props) => {
  const {value, onChange, isModalLarge} = props

  return (
    <StyledTextArea
      style={{height: (isModalLarge ? 800 : 200)}}
      value={value}
      placeholder='메모를 입력하세요.'
      onChange={onChange}
    />
  )
}

export default ModalMemoTextAreaContainer

const StyledTextArea = styled(TextArea)({
  display: 'flex',
  width: '100%',
  resize: 'none',
  outlineStyle: 'none',
  borderRadius: 0,
  fontSize: 16,
})
