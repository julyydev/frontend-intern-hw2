import ConnectedModalContentTextArea from '../../connected/ConnectedModalContentTextArea'
import ConnectedModalMemoTextArea from '../../connected/ConnectedModalMemoTextArea'
import {Grid, Modal, Icon} from 'semantic-ui-react'
import React, {useState} from 'react'
import styled from '@emotion/styled'
import {Todo} from '../../../features/ducks/TodoDucks'

interface Props {
  item: Todo
  isModalOpen: boolean
  setIsModalOpen: (isModalOpen: boolean) => void
}

const TodoModal = (props: Props) => {
  const {item, isModalOpen, setIsModalOpen} = props
  const [isModalLarge, setIsModalLarge] = useState(false)

  const handleClose = () => {
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
      onClose={handleClose}
      size={isModalLarge ? 'large' : 'mini'}
    >
      <ModalHeaderContainer>
        <ModalButtonContainer>
          <Icon
            size='large'
            name='window close outline'
            onClick={() => handleClose()}
          />
          <Icon
            size='large'
            name={isModalLarge ? 'window minimize outline' : 'window maximize outline'}
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
  backgroundColor: '#b2bec3',
})

const ModalMemoContainer = styled(Grid.Column)({
  display: 'flex',
  justifyContent: 'center',
})

const ModalButtonContainer = styled(Grid.Row)({
  marginLeft: 8,
})

const ModalContentContainer = styled(Grid.Row)({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
})
