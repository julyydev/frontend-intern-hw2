import ConnectedModalContentTextArea from '../connected/ConnectedModalContentTextArea'
import ConnectedModalMemoTextArea from '../connected/ConnectedModalMemoTextArea'
import {Grid, Modal} from 'semantic-ui-react'
import React, {useState} from 'react'
import styled from '@emotion/styled'
import {Todo} from '../../features/ducks/TodoDucks'

interface Props {
  item: Todo
  isModalOpen: boolean
  setIsModalOpen: (isModalOpen: boolean) => void
}

const TodoModal = (props: Props) => {
  const {item, isModalOpen, setIsModalOpen} = props
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
  )
}

export default TodoModal

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
