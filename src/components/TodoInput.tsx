import React, {ChangeEvent, useCallback, useState} from 'react'
import {Button, Input} from 'semantic-ui-react'
import styled from '@emotion/styled'
import {useDispatch} from 'react-redux'
import {actions} from '../features'

const TodoInput = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const handleButtonClick = useCallback(() => {
    if (!input.trim()) {
      alert('할 일을 입력하지 않았습니다!')
      return
    }
    else {
      dispatch(actions.addTodo({
        content: input,
      }))
      setInput('')
    }
  }, [dispatch, input])

  return (
    <MainContainer>
      <Input
        type='text'
        value={input}
        placeholder='할 일을 입력하세요.'
        onChange={handleInputChange}
      />
      <Button onClick={handleButtonClick}>추가</Button>
    </MainContainer>
  )
}

export default TodoInput

const MainContainer = styled.div ({
  display: 'flex',
  justifyContent: 'center'
})
