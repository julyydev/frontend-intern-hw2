import React, {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import TodoCheckAllButton from '../presentational/items/TodoCheckAllButton'
import {Todo, todoSlice} from '../../features/ducks/TodoDucks'
import {todoSelector} from '../../features/selector/TodoSelector'

const ConnectedTodoCheckAllButton = () => {
  const dispatch = useDispatch()

  const restWork = useSelector(todoSelector.restWorkList)
  const finishWork = useSelector(todoSelector.finishWorkList)

  const handleCheckAllButtonClick = useCallback(() => {
    if (restWork.length) {
      restWork.map((item: Todo) => {
        dispatch(todoSlice.actions.toggle(item))
      })
    } else {
      finishWork.map((item: Todo) => {
        dispatch(todoSlice.actions.toggle(item))
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
