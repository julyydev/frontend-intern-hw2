import React, {ChangeEvent, useCallback} from 'react'
import ContentInput from '../presentational/ContentInput'
import useAddContent from '../../hooks/useAddContent'

interface Props {
  input: string
  setInput: (content: string) => void
}

const ConnectedContentInput = (props: Props) => {
  const {input, setInput} = props
  const {addContent} = useAddContent(input, setInput)

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }, [input])

  const handleEnterKeyDown = useCallback((event) => {
    if (event.keyCode === 13) {
      addContent()
    }
  }, [addContent])

  return (
    <ContentInput
      value={input}
      onChange={handleInputChange}
      onKeyDown={handleEnterKeyDown}
    />
  )
}

export default ConnectedContentInput
