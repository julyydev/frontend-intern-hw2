import React, {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import TodoDeleteButton from '../presentational/TodoDeleteButton'
import {Todo, todoSlice} from '../../features'

interface Props {
  item: Todo
}

const ConnectedTodoDeleteButton = ({item}: Props) => {
  const dispatch = useDispatch()

  const handleDeleteButtonClick = useCallback(() => {
    dispatch(todoSlice.actions.delete(item))
  }, [dispatch, item])

  return (
    <TodoDeleteButton onClick={handleDeleteButtonClick}/>
  )
}

export default ConnectedTodoDeleteButton
