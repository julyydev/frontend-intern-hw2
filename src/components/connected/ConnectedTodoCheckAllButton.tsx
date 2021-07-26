import React, {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import TodoCheckAllButton from '../presentational/items/TodoCheckAllButton'
import {Todo, todoActions} from '../../features/Todo/ducks/TodoDucks'
import {todoSelector} from '../../features/Todo/selector/TodoSelector'

const ConnectedTodoCheckAllButton = () => {
  const dispatch = useDispatch()

  const restWork = useSelector(todoSelector.restWorkList)
  const finishWork = useSelector(todoSelector.finishWorkList)

  const handleCheckAllButtonClick = useCallback(() => {
    if (restWork.length) {
      restWork.map((item: Todo) => {
        dispatch(todoActions.toggle(item))
      })
    } else {
      finishWork.map((item: Todo) => {
        dispatch(todoActions.toggle(item))
      })
    }
  }, [restWork, finishWork, dispatch])

  return (
    <TodoCheckAllButton
      onClick={handleCheckAllButtonClick}
      restWorkCount={restWork.length}
    />
  )
}

export default ConnectedTodoCheckAllButton
