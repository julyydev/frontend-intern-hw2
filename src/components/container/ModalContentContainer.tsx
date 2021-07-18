import {useDispatch} from 'react-redux'
import React, {useCallback} from 'react'
import {Todo, todoSlice} from '../../features'
import {TextArea} from 'semantic-ui-react'

interface Props {
  item: Todo,
  setIsModalOpen: (isOpen: boolean) => void,
}

export const ModalContentContainer = ({item, setIsModalOpen}: Props) => {
  const dispatch = useDispatch()

  const handleContentChange = useCallback((newContent: string) => {
    const newTodo = {
      id: item.id,
      content: newContent,
      check: item.check,
      memo: item.memo,
    }
    dispatch(todoSlice.actions.changeContent(newTodo))
  }, [dispatch, item])

  const handleEnterKeyDown = useCallback((event) => {
    if (event.keyCode === 13) {
      if (!item.content.trim()) {
        alert('빈 칸은 입력하실 수 없습니다.')
        return
      }
      else {
        setIsModalOpen(false)
      }
    }
  }, [setIsModalOpen, item.content])

  return (
    <TextArea
      style={{
        flex: 0.9,
        height: 25,
        marginTop: 7,
        marginBottom: 7,
        resize: 'none',
        backgroundColor: '#eae3e5',
        border: 'none',
        borderRadius: 5,
        fontWeight: 'bold',
        outlineStyle: 'none',
        textAlign: 'center',
      }}
      value={item.content}
      onChange={(event) => {
        handleContentChange(event.target.value)
      }}
      onKeyDown={handleEnterKeyDown}
    />
  )
}
