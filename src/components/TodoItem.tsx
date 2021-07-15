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
    }
    else {
      return 200
    }
  }

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

  const handleContentChange = useCallback((newContent: string, item: Todo) => {
    const newTodo = {
      id: item.id,
      content: newContent,
      check: item.check,
      memo: item.memo,
    }
    dispatch(actions.changeContentTodo(newTodo))
  }, [dispatch])

  const handleEnterKeyDown = useCallback((event) => {
    if (event.keyCode === 13) {
      setIsModalOpen(false)
    }
  }, [setIsModalOpen])

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
        size={isModalLarge ? 'fullscreen' : 'mini'}
      >
        <Grid.Column
          style={{display: 'flex', justifyContent: 'space-between', marginBottom: 0, backgroundColor: '#f9f2f4'}}
        >
          <TextArea
            style={{
              display: 'flex',
              width: '90%',
              height: 25,
              resize: 'none',
              backgroundColor: '#f9f2f4',
              border: 'none',
              fontWeight: 'bold',
              outlineStyle: 'none',
            }}
            value={item.content}
            onChange={(event) => {
              handleContentChange(event.target.value, item)
            }}
            onKeyDown={handleEnterKeyDown}
          >
          </TextArea>

          <Modal.Actions>
            <StyledButton
              style={{backgroundColor: '#fa504d'}}
              onClick={() => setIsModalOpen(false)}
            />
            <StyledButton
              style={{backgroundColor: '#29bc41'}}
              onClick={() => setIsModalLarge(prev => !prev)}
            />
          </Modal.Actions>
        </Grid.Column>
        <Grid.Column>
          <Modal.Description
          >
            <TextArea
              style={{
                display: 'flex',
                width: '100%',
                height: modalHeight(),
                resize: 'none',
                outlineStyle: 'none',
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

const StyledButton = styled.button({
  border: 'none',
  padding: 7,
  borderRadius: 100,
  marginRight: 3,
})
