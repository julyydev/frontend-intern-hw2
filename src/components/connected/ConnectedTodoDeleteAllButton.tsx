import React, {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import TodoDeleteAllButton from '../presentational/items/TodoDeleteAllButton'
import {todoActions} from '../../features/ducks/TodoDucks'
import {searchSlice} from '../../features/ducks/SearchDucks'

const ConnectedTodoDeleteAllButton = () => {
  const dispatch = useDispatch()

  const handleDeleteAllButtonClick = useCallback(() => {
    dispatch(todoActions.deleteAll())
    dispatch(searchSlice.actions.changeIndex(0))
  }, [dispatch])

  return (
    <TodoDeleteAllButton
      onClick={handleDeleteAllButtonClick}
    />
  )
}

export default ConnectedTodoDeleteAllButton
