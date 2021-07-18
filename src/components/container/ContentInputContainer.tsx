import React, {ChangeEvent, useCallback} from 'react'
import {Input} from 'semantic-ui-react'
import {useAddContent} from '../../hooks/useAddContent'

interface Props {
  input: string,
  setInput: (content: string) => void,
  styles: {width: number, height: number},
}

export const ContentInputContainer = ({input, setInput, styles}: Props) => {
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
      style={styles}
      size='mini'
      type='text'
      value={input}
      placeholder='할 일을 입력하세요.'
      onChange={handleInputChange}
      onKeyDown={handleEnterKeyDown}
    />
  )
}
