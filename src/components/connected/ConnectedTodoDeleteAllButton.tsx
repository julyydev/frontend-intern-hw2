import React, {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import TodoDeleteAllButton from '../presentational/items/TodoDeleteAllButton'
import {todoActions} from '../../features/ducks/TodoDucks'
import {searchActions} from '../../features/ducks/SearchDucks'

const ConnectedTodoDeleteAllButton = () => {
  const dispatch = useDispatch()

  const handleDeleteAllButtonClick = useCallback(() => {
    dispatch(todoActions.deleteAll())
    dispatch(searchActions.changeIndex(0))
  }, [dispatch])

  return (
    <TodoDeleteAllButton
      onClick={handleDeleteAllButtonClick}
    />
  )
}

export default ConnectedTodoDeleteAllButton
