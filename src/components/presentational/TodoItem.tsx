import React, {useState} from 'react'
import {Modal, Grid} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import styled from '@emotion/styled'
import {Todo} from '../../features/ducks/TodoDucks'
import ConnectedTodoDeleteButton from '../connected/ConnectedTodoDeleteButton'
import ConnectedTodoCheckbox from '../connected/ConnectedTodoCheckbox'
import ConnectedModalContentTextArea from '../connected/ConnectedModalContentTextArea'
import ConnectedModalMemoTextArea from '../connected/ConnectedModalMemoTextArea'

interface Props {
  item: Todo
}

const TodoItem = (props: Props) => {
  const {item} = props

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalLarge, setIsModalLarge] = useState(false)

  const closeOnDimmerClick = () => {
    if (!item.content.trim()) {
      alert('빈 칸은 입력하실 수 없습니다.')
      return
    } else {
      return setIsModalOpen(false)
    }
  }

  return (
    <MainContainer>
      <ConnectedTodoCheckbox item={item}/>
      <TextContainer
        onClick={() => setIsModalOpen(true)}
      >
        {item.content}
      </TextContainer>
      <ConnectedTodoDeleteButton
        item={item}
      />
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
              onClick={() => setIsModalOpen(false)}
            />
            <StyledButton
              style={{backgroundColor: '#29bc41'}}
              onClick={() => setIsModalLarge(prev => !prev)}
            />
          </ModalButtonContainer>
          <ModalContentContainer>
            <ConnectedModalContentTextArea
              item={item}
              setIsModalOpen={setIsModalOpen}
            />
          </ModalContentContainer>
        </ModalHeaderContainer>
        <ModalMemoContainer>
          <ConnectedModalMemoTextArea
            item={item}
            isModalLarge={isModalLarge}
          />
        </ModalMemoContainer>
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
  wordBreak: 'break-word',
})

const ModalHeaderContainer = styled(Grid.Column)({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#f9f2f4',
})

const ModalMemoContainer = styled(Grid.Column)({
  display: 'flex',
  justifyContent: 'center',
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
