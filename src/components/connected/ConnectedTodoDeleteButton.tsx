import React, {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import TodoDeleteButton from '../presentational/items/TodoDeleteButton'
import {Todo, todoActions} from '../../features/ducks/TodoDucks'

interface Props {
  item: Todo
}

const ConnectedTodoDeleteButton = ({item}: Props) => {
  const dispatch = useDispatch()

  const handleDeleteButtonClick = useCallback(() => {
    dispatch(todoActions.delete(item))
  }, [dispatch, item])

  return (
    <TodoDeleteButton onClick={handleDeleteButtonClick}/>
  )
}

export default ConnectedTodoDeleteButton
