import React, {useCallback} from 'react'
import {Button, Checkbox} from 'semantic-ui-react'
import styled from '@emotion/styled'
import {actions, Todo} from '../features'
import {useDispatch} from 'react-redux'

interface Props {
  item: Todo
}

const TodoItem: React.FC<Props> = (Props) => {
  const {item} = Props
  const dispatch = useDispatch()

  const handleButtonClick = useCallback((item: Todo) => {
    dispatch(actions.deleteTodo(item))
  }, [dispatch])

  const handleCheckboxClick = useCallback((item: Todo) => {
    dispatch(actions.toggleTodo(item))
  }, [dispatch])

  return (
    <MainContainer>
      <Checkbox
        checked={item.check}
        onClick={handleCheckboxClick.bind({}, item)}
      />
      <TextContainer>
        {item.content}
      </TextContainer>
      <ButtonContainer>
        <Button onClick={handleButtonClick.bind({}, item)}>삭제</Button>
      </ButtonContainer>
    </MainContainer>
  )
}

export default TodoItem

const MainContainer = styled.div ({
  display: 'flex',
  justifyContent: 'center',
})

const ButtonContainer = styled.div ({
  width: 40,
  height: 20,
})

const TextContainer = styled.text ({
  width: 135,
  height: 10,
})
