import React, {ChangeEvent, useCallback} from 'react'
import {Input} from 'semantic-ui-react'
import useAddContent from '../../hooks/useAddContent'

interface Props {
  input: string,
  setInput: (content: string) => void,
  style: React.CSSProperties,
}

const ContentInputContainer = ({input, setInput, style}: Props) => {
  const {addContent} = useAddContent(input, setInput)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const handleEnterKeyDown = useCallback((event) => {
    if (event.keyCode === 13) {
      addContent()
    }
  }, [addContent])

  return (
    <Input
      style={style}
      size='mini'
      type='text'
      value={input}
      placeholder='할 일을 입력하세요.'
      onChange={handleInputChange}
      onKeyDown={handleEnterKeyDown}
    />
  )
}

export default ContentInputContainer
