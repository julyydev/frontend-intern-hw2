import React, {useState} from 'react'
import 'semantic-ui-css/semantic.min.css'
import styled from '@emotion/styled'
import {Todo} from '../../../features/Todo/ducks/TodoDucks'
import ConnectedTodoDeleteButton from '../../connected/ConnectedTodoDeleteButton'
import ConnectedTodoCheckbox from '../../connected/ConnectedTodoCheckbox'
import TodoModal from '../modal/TodoModal'

interface Props {
  item: Todo
}

const TodoItem = (props: Props) => {
  const {item} = props
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMouseEnter, setIsMouseEnter] = useState(false)

  return (
    <MainContainer>
      <ConnectedTodoCheckbox item={item}/>
      <TextContainer
        style={{
          textDecoration: (item.check ? 'line-through' : 'none'),
          color: item.check ? 'lightgray' : isMouseEnter ? '#fa504d' : 'black',
        }}
        onClick={() => setIsModalOpen(true)}
        onMouseOver={() => setIsMouseEnter(true)}
        onMouseOut={() => setIsMouseEnter(false)}
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
  alignItems: 'center',
})

const TextContainer = styled.div({
  marginLeft: 8,
  width: 270,
  wordBreak: 'break-word',
  fontSize: 18,
  fontWeight: 'bold',
})
