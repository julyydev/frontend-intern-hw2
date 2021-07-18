import {useDispatch} from 'react-redux'
import React, {useCallback} from 'react'
import {Todo, todoSlice} from '../../features'
import {TextArea} from 'semantic-ui-react'

interface Props {
  item: Todo,
  modalHeight: number
}

export const ModalMemoContainer = ({item, modalHeight}: Props) => {
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
    <TextArea
      style={{
        display: 'flex',
        width: '100%',
        resize: 'none',
        outlineStyle: 'none',
        height: modalHeight,
      }}
      value={item.memo}
      onChange={(event) => {
        handleMemoChange(event.target.value)
      }}
    />
  )
}
