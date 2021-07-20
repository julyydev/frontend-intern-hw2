import React, {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import TodoCheckbox from '../presentational/TodoCheckbox'
import {Todo, todoSlice} from '../../features'

interface Props {
  item: Todo
}

const ConnectedTodoCheckbox = (props: Props) => {
  const {item} = props
  const dispatch = useDispatch()

  const handleCheckboxClick = useCallback(() => {
    dispatch(todoSlice.actions.toggle(item))
  }, [dispatch, item])

  return (
    <TodoCheckbox
      checked={item.check}
      onClick={handleCheckboxClick}
    />
  )
}

export default ConnectedTodoCheckbox
