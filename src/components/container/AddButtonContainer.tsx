import React, {useCallback} from 'react'
import {Button} from 'semantic-ui-react'
import {useAddContent} from '../../hooks/useAddContent'

interface Props {
  input: string,
  setInput: (content: string) => void,
}

export const AddButtonContainer = ({input, setInput}: Props) => {
  const {addContent} = useAddContent(input, setInput)

  const handleAddButtonClick = useCallback(() => {
    addContent()
  }, [addContent])

  return (
    <Button
      size='mini'
      style={{width: 55, height: 20, marginLeft: 5}}
      onClick={handleAddButtonClick}
    >
      추가
    </Button>
  )
}
