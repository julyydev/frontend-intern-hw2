import React, {useState} from 'react'
import 'semantic-ui-css/semantic.min.css'
import styled from '@emotion/styled'
import {Todo} from '../../features/ducks/TodoDucks'
import ConnectedTodoDeleteButton from '../connected/ConnectedTodoDeleteButton'
import ConnectedTodoCheckbox from '../connected/ConnectedTodoCheckbox'
import TodoModal from './TodoModal'

interface Props {
  item: Todo
}

const TodoItem = (props: Props) => {
  const {item} = props
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <MainContainer>
      <ConnectedTodoCheckbox item={item}/>
      <TextContainer
        style={{
          textDecoration: (item.check ? 'line-through' : 'none'),
          color: item.check ? 'lightgray' : 'black',
        }}
        onClick={() => setIsModalOpen(true)}
      >
        {item.content}
      </TextContainer>
      <ConnectedTodoDeleteButton
        item={item}
      />
      <TodoModal
        item={item}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
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
