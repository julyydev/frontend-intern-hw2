import React, {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import TodoCheckbox from '../presentational/items/TodoCheckbox'
import {Todo, todoActions} from '../../features/Todo/ducks/TodoDucks'

interface Props {
  item: Todo
}

const ConnectedTodoCheckbox = (props: Props) => {
  const {item} = props
  const dispatch = useDispatch()

  const handleCheckboxClick = useCallback(() => {
    dispatch(todoActions.toggle(item))
  }, [dispatch, item])

  return (
    <TodoCheckbox
      checked={item.check}
      onClick={handleCheckboxClick}
    />
  )
}

export default ConnectedTodoCheckbox
