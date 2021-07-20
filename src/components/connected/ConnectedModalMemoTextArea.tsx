import {useDispatch} from 'react-redux'
import React, {useCallback} from 'react'
import {Todo, todoSlice} from '../../features'
import ModalMemoTextArea from '../presentational/ModalMemoTextArea'

interface Props {
  item: Todo
  isModalLarge: boolean
}

const ConnectedModalMemoTextArea = (props: Props) => {
  const {item, isModalLarge} = props
  const dispatch = useDispatch()

  const handleMemoChange = useCallback((newMemo: string) => {
    const newTodo = {
      id: item.id,
      content: item.content,
      check: item.check,
      memo: newMemo,
    }
    dispatch(todoSlice.actions.memo(newTodo))
  }, [dispatch, item])

  return (
    <ModalMemoTextArea
      isModalLarge={isModalLarge}
      value={item.memo}
      onChange={(event) => {
        handleMemoChange(event.target.value)
      }}
    />
  )
}

export default ConnectedModalMemoTextArea
