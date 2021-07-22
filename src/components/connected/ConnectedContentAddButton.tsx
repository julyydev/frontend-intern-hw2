import React, {useCallback} from 'react'
import ContentAddButton from '../presentational/input/ContentAddButton'
import useAddContent from '../../hooks/useAddContent'

interface Props {
  input: string,
  setInput: (content: string) => void,
}

const ConnectedContentAddButton = (props: Props) => {
  const {input, setInput} = props
  const {addContent} = useAddContent(input, setInput)

  const handleAddButtonClick = useCallback(() => {
    addContent()
  }, [addContent])

  return (
    <ContentAddButton onClick={handleAddButtonClick}/>
  )
}

export default ConnectedContentAddButton
