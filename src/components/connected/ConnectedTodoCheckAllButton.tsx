import React, {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import TodoCheckAllButton from '../presentational/TodoCheckAllButton'
import {Todo, todoSlice} from '../../features/ducks/TodoDucks'
import {selectRestWork, selectFinishWork} from '../../features/selector/TodoSelector'
import {RootState} from '../../root/RootReducer'

const ConnectedTodoCheckAllButton = () => {
  const dispatch = useDispatch()

  const restWork = useSelector<RootState, Todo[]>(state => selectRestWork(state.todo))
  const finishWork = useSelector<RootState, Todo[]>(state => selectFinishWork(state.todo))

  const handleCheckAllButtonClick = useCallback(() => {
    if (restWork.length) {
      restWork.map((item: Todo) => {
        dispatch(todoSlice.actions.toggle(item))
      })
    }
    else {
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
