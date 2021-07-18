import React, {useState} from 'react'
import {Modal, Grid} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import styled from '@emotion/styled'
import {Todo} from '../../features'
import {DeleteButtonContainer} from '../container/DeleteButtonContainer'
import {CheckboxContainer} from '../container/CheckboxContainer'
import {ModalContentContainer} from '../container/ModalContentContainer'
import {ModalMemoContainer} from '../container/ModalMemoContainer'

interface Props {
  item: Todo
}

const TodoItem: React.FC<Props> = (Props) => {
  const {item} = Props

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalLarge, setIsModalLarge] = useState(false)
  const modalHeight = () => {
    if (isModalLarge) {
      return 800
    } else {
      return 200
    }
  }

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
      <CheckboxContainer item={item}/>
      <TextContainer
        onClick={() => setIsModalOpen(true)}
      >
        {item.content}
      </TextContainer>
      <DeleteButtonContainer item={item}/>
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
          <ModalContentArea>
            <ModalContentContainer
              item={item}
              setIsModalOpen={setIsModalOpen}
            />
          </ModalContentArea>
        </ModalHeaderContainer>
        <Grid.Column>
          <Modal.Description>
            <ModalMemoContainer
              item={item}
              modalHeight={modalHeight()}
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

const ModalContentArea = styled(Grid.Row)({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
})
