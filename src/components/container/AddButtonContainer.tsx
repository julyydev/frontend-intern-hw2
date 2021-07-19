import React, {useCallback} from 'react'
import {Button} from 'semantic-ui-react'
import useAddContent from '../../hooks/useAddContent'

interface Props {
  input: string,
  setInput: (content: string) => void,
  style: React.CSSProperties,
}

const AddButtonContainer = ({input, setInput, style}: Props) => {
  const {addContent} = useAddContent(input, setInput)

  const handleAddButtonClick = useCallback(() => {
    addContent()
  }, [addContent])

  return (
    <Button
      style={style}
      size='mini'
      onClick={handleAddButtonClick}
    >
      추가
    </Button>
  )
}

export default AddButtonContainer
