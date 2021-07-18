import React, {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {Button} from 'semantic-ui-react'
import {Todo, todoSlice} from '../../features'

interface Props {
  item: Todo
}

export const DeleteButtonContainer = ({item}: Props) => {
  const dispatch = useDispatch()

  const handleDeleteButtonClick = useCallback(() => {
    dispatch(todoSlice.actions.delete(item))
  }, [dispatch, item])

  return (
    <Button
      style={{width: 55, height: 20, fontsize: 10,}}
      size='mini'
      onClick={handleDeleteButtonClick}
    >
      삭제
    </Button>
  )
}
