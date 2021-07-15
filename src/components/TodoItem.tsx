import React, {useCallback, useState} from 'react'
import {Button, Checkbox, Modal, Grid, TextArea} from 'semantic-ui-react'
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
  const [isModalLarge, setIsModalLarge] = useState(false)
  const modalHeight = () => {
    if (isModalLarge) {
      return 800
    } else {
      return 200
    }
  }

  const handleDeleteButtonClick = useCallback((item: Todo) => {
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

  const handleContentChange = useCallback((newContent: string, item: Todo) => {
    const newTodo = {
      id: item.id,
      content: newContent,
      check: item.check,
      memo: item.memo,
    }
    dispatch(actions.changeContentTodo(newTodo))
  }, [dispatch])

  const handleEnterKeyDownInContent = useCallback((event) => {
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

  const closeOnDimmerClick = () => {
    if (!item.content.trim()) {
      alert('빈 칸은 입력하실 수 없습니다.')
      return
    }
    else {
      return setIsModalOpen(false)
    }
  }

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
      <DeleteButton
        size='mini'
        onClick={handleDeleteButtonClick.bind({}, item)}
      >
        삭제
      </DeleteButton>
      <Modal
        open={isModalOpen}
        closeOnDimmerClick={true}
        onClose={closeOnDimmerClick}
        size={isModalLarge ? 'large' : 'mini'}
      >
        <ModalHeaderContainer>
          <ModalButtonContainer>
            <StyledButton
              style={{backgroundColor: '#fa504d'}}
              onClick={() => setIsModalOpen(false)}
            />
            <StyledButton
              style={{backgroundColor: '#fdb239'}}
              onClick={() => setIsModalOpen(true)}
            />
            <StyledButton
              style={{backgroundColor: '#29bc41'}}
              onClick={() => setIsModalLarge(prev => !prev)}
            />
          </ModalButtonContainer>
          <ModalContentContainer>
            <ModalContentArea
              value={item.content}
              onChange={(event) => {
                handleContentChange(event.target.value, item)
              }}
              onKeyDown={handleEnterKeyDownInContent}
            >
            </ModalContentArea>
          </ModalContentContainer>
        </ModalHeaderContainer>
        <Grid.Column>
          <Modal.Description>
            <ModalMemoArea
              style={{
                height: modalHeight(),
              }}
              value={item.memo}
              onChange={(event) => {
                handleMemoChange(event.target.value, item)
              }}
            />
          </Modal.Description>
        </Grid.Column>
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

const DeleteButton = styled(Button)({
  width: 55,
  height: 20,
  fontsize: 10,
})

const ModalHeaderContainer = styled(Grid.Column)({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#f9f2f4',
})

const StyledButton = styled.button({
  border: 'none',
  padding: 6.5,
  borderRadius: 100,
  marginLeft: 5,
})

const ModalButtonContainer = styled(Grid.Row)({
  marginLeft: 8,
  marginBottom: 6,
})

const ModalContentContainer = styled(Grid.Row)({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
})

const ModalContentArea = styled(TextArea)({
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
})

const ModalMemoArea = styled(TextArea)({
  display: 'flex',
  width: '100%',
  resize: 'none',
  outlineStyle: 'none',
})
