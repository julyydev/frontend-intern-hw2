import {useDispatch} from 'react-redux'
import React, {useCallback} from 'react'
import {Todo, todoSlice} from '../../features'
import {TextArea} from 'semantic-ui-react'

interface Props {
  item: Todo,
  style: React.CSSProperties
}

const ModalMemoTextAreaContainer = ({item, style}: Props) => {
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
      style={style}
      value={item.memo}
      placeholder='메모를 입력하세요.'
      onChange={(event) => {
        handleMemoChange(event.target.value)
      }}
    />
  )
}

export default ModalMemoTextAreaContainer
