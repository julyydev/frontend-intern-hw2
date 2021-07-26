import {useDispatch} from 'react-redux'
import React, {useCallback} from 'react'
import {Todo, todoActions} from '../../features/Todo/ducks/TodoDucks'
import ModalContentTextArea from '../presentational/modal/ModalContentTextArea'

interface Props {
  item: Todo,
  setIsModalOpen: (isOpen: boolean) => void,
}

const ConnectedModalContentTextArea = (props: Props) => {
  const {item, setIsModalOpen} = props
  const dispatch = useDispatch()

  const handleContentChange = useCallback((newContent: string) => {
    const newTodo = {
      id: item.id,
      content: newContent,
      check: item.check,
      memo: item.memo,
    }
    dispatch(todoActions.changeContent(newTodo))
  }, [dispatch, item])

  const handleEnterKeyDown = useCallback((event) => {
    if (event.key === 'Enter') {
      if (!item.content.trim()) {
        event.preventDefault()
        alert('빈 칸은 입력하실 수 없습니다.')
        return
      } else {
        setIsModalOpen(false)
      }
    }
  }, [setIsModalOpen, item.content])

  return (
    <ModalContentTextArea
      value={item.content}
      onChange={(event) => {
        handleContentChange(event.target.value)
      }}
      onKeyDown={handleEnterKeyDown}
    />
  )
}

export default ConnectedModalContentTextArea
