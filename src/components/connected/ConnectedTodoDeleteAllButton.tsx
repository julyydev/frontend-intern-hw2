import React, {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import TodoDeleteAllButton from '../presentational/TodoDeleteAllButton'
import {todoSlice} from '../../features/ducks/TodoDucks'

const ConnectedTodoDeleteAllButton = () => {
  const dispatch = useDispatch()

  const handleDeleteAllButtonClick = useCallback(() => {
    dispatch(todoSlice.actions.deleteAll())
  }, [dispatch])

  return (
    <TodoDeleteAllButton
      onClick={handleDeleteAllButtonClick}
    />
  )
}

export default ConnectedTodoDeleteAllButton
