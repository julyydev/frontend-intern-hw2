import React, {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {Button} from 'semantic-ui-react'
import {Todo, todoSlice} from '../../features'

interface Props {
  item: Todo
  style: React.CSSProperties
}

const DeleteButtonContainer = ({item, style}: Props) => {
  const dispatch = useDispatch()

  const handleDeleteButtonClick = useCallback(() => {
    dispatch(todoSlice.actions.delete(item))
  }, [dispatch, item])

  return (
    <Button
      style={style}
      size='mini'
      onClick={handleDeleteButtonClick}
    >
      삭제
    </Button>
  )
}

export default DeleteButtonContainer
