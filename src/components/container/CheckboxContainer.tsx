import React, {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {Checkbox} from 'semantic-ui-react'
import {Todo, todoSlice} from '../../features'

interface Props {
  item: Todo,
  style: React.CSSProperties
}

const CheckboxContainer = ({item, style}: Props) => {
  const dispatch = useDispatch()

  const handleCheckboxClick = useCallback(() => {
    dispatch(todoSlice.actions.toggle(item))
  }, [dispatch, item])

  return (
    <Checkbox
      style={style}
      checked={item.check}
      onClick={handleCheckboxClick}
    />
  )
}

export default CheckboxContainer
