import React, {useCallback, useState} from 'react'
import {Button, Checkbox, Modal} from 'semantic-ui-react'
import styled from '@emotion/styled'
import {actions, Todo} from '../features'
import {useDispatch} from 'react-redux'

interface Props {
  item: Todo
}

const TodoItem: React.FC<Props> = (Props) => {
  const {item} = Props
  const dispatch = useDispatch()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleButtonClick = useCallback((item: Todo) => {
    dispatch(actions.deleteTodo(item))
  }, [dispatch])

  const handleCheckboxClick = useCallback((item: Todo) => {
    dispatch(actions.toggleTodo(item))
  }, [dispatch])

  const handleMemoChange = useCallback((newMemo: string, item: Todo) => {
    const newTodo = {
      id: item.id,
      content: item.content,
      check: item.check,
      memo: newMemo,
    }
    dispatch(actions.memoTodo(newTodo))
  }, [dispatch])

  return (
    <MainContainer>
      <Checkbox
        checked={item.check}
        onClick={handleCheckboxClick.bind({}, item)}
      />
      <TextContainer
        onClick={() => setIsModalOpen(true)}
      >
        {item.content}
      </TextContainer>
      <ButtonContainer>
        <Button onClick={handleButtonClick.bind({}, item)}>삭제</Button>
      </ButtonContainer>
      <Modal
        open={isModalOpen}
      >
        <ModalCenter>
          <ModalContainer
            value={item.memo}
            onChange={(event) => {
              handleMemoChange(event.target.value, item)
            }}
          />
          <Button onClick={() => setIsModalOpen(false)}>X</Button>
        </ModalCenter>
      </Modal>
    </MainContainer>
  )
}

export default TodoItem

const MainContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
})

const ButtonContainer = styled.div({
  width: 40,
  height: 20,
})

const TextContainer = styled.div({
  width: 135,
  height: 10,
})

const ModalContainer = styled.textarea({
  display: 'flex',
  justifyContent: 'center',
  width: 300,
  height: 150,
})

const ModalCenter = styled.div({
  justifyContent: 'center',
})
