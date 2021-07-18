import React, {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {Checkbox} from 'semantic-ui-react'
import {Todo, todoSlice} from '../../features'

interface Props {
  item: Todo,
}export const CheckboxContainer = ({item}: Props) => {
  const dispatch = useDispatch()

  const handleCheckboxClick = useCallback(() => {
    dispatch(todoSlice.actions.toggle(item))
  }, [dispatch, item])

  return (
    <Checkbox
      style={{width: 20}}
      checked={item.check}
      onClick={handleCheckboxClick}
    />
  )
}
