import React, {useState} from 'react'
import {Modal, Grid} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import styled from '@emotion/styled'
import {Todo} from '../../features'
import DeleteButtonContainer from '../container/DeleteButtonContainer'
import CheckboxContainer from '../container/CheckboxContainer'
import ModalContentTextAreaContainer from '../container/ModalContentTextAreaContainer'
import ModalMemoTextAreaContainer from '../container/ModalMemoTextAreaContainer'

interface Props {
  item: Todo
}

const TodoItem: React.FC<Props> = (Props) => {
  const {item} = Props

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
      <CheckboxContainer
        style={Styles.checkboxContainer}
        item={item}
      />
      <TextContainer
        onClick={() => setIsModalOpen(true)}
      >
        {item.content}
      </TextContainer>
      <DeleteButtonContainer
        style={Styles.deleteButtonContainer}
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
            <ModalContentTextAreaContainer
              style={Styles.modalContentTextAreaContainer}
              item={item}
              setIsModalOpen={setIsModalOpen}
            />
          </ModalContentContainer>
        </ModalHeaderContainer>
        <ModalMemoContainer>
          <ModalMemoTextAreaContainer
            style={{
              height: (isModalLarge ? 800 : 200),
              ...Styles.modalMemoTextAreaContainer,
            }}
            item={item}
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

const Styles: {[key: string]: React.CSSProperties} = {
  checkboxContainer: {
    width: 20,
  },

  deleteButtonContainer: {
    width: 55,
    height: 20,
    fontSize: 10,
  },

  modalContentTextAreaContainer: {
    flex: 0.9,
    height: 25,
    marginTop: 7,
    marginBottom: 7,
    resize: 'none',
    backgroundColor: '#eae3e5',
    outlineStyle: 'none',
    border: 'none',
    borderRadius: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  modalMemoTextAreaContainer: {
    display: 'flex',
    width: '100%',
    resize: 'none',
    outlineStyle: 'none',
  },
}
