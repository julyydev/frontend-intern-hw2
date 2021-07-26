import React, {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import TodoDeleteAllButton from '../presentational/items/TodoDeleteAllButton'
import {todoActions} from '../../features/Todo/ducks/TodoDucks'
import {searchActions} from '../../features/Search/ducks/SearchDucks'
import {TodoFilterOption} from '../../features/Search/model/TodoFilterOption'

const ConnectedTodoDeleteAllButton = () => {
  const dispatch = useDispatch()

  const handleDeleteAllButtonClick = useCallback(() => {
    dispatch(todoActions.deleteAll())
    dispatch(searchActions.changeFilterOption(TodoFilterOption.all))
  }, [dispatch])

  return (
    <TodoDeleteAllButton
      onClick={handleDeleteAllButtonClick}
    />
  )
}

export default ConnectedTodoDeleteAllButton
