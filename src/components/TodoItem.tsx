import React, {useCallback, useState} from 'react'
import {Button, Checkbox, Modal} from 'semantic-ui-react'
import styled from '@emotion/styled'
import {actions, Todo} from '../features'
import {useDispatch} from 'react-redux'
import 'semantic-ui-css/semantic.min.css'

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
        style={{width: 20}}
        checked={item.check}
        onClick={handleCheckboxClick.bind({}, item)}
      />
      <TextContainer
        onClick={() => setIsModalOpen(true)}
      >
        {item.content}
      </TextContainer>
      <Button
        size='mini'
        style={{width: 55, height: 20, fontsize: 10}}
        onClick={handleButtonClick.bind({}, item)}
      >
        삭제
      </Button>
      <Modal
        open={isModalOpen}
        closeOnDimmerClick={true}
        onClose={() => setIsModalOpen(false)}
        size={'mini'}
      >
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Modal.Header>{item.content}</Modal.Header>
          <StyledButton onClick={() => setIsModalOpen(false)}>X</StyledButton>
        </div>
        <ModalContainer
          value={item.memo}
          onChange={(event) => {
            handleMemoChange(event.target.value, item)
          }}
        />
      </Modal>
    </MainContainer>
  )
}

export default TodoItem

const MainContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
})

const TextContainer = styled.div({
  marginLeft: 8,
  marginBottom: 5,
  width: 147,
})

const ModalContainer = styled.textarea({
  marginLeft: 5,
  marginRight: 5,
  width: 350,
  height: 150,
  resize: 'none',
})

const StyledButton = styled.button({
  border: 'none',
  borderRadius: 35,
  backgroundColor: '#e9665b',
})
