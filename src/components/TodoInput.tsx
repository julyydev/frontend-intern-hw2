import React, {ChangeEvent, useCallback, useState} from 'react'
import {Button, Input} from 'semantic-ui-react'
import styled from '@emotion/styled'
import {useDispatch} from 'react-redux'
import {todoSlice} from '../features'

const TodoInput = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const addContent = useCallback(() => {
    if (!input.trim()) {
      alert('할 일을 입력하지 않았습니다!')
      return
    } else {
      dispatch(todoSlice.actions.add({
        content: input,
      }))
      setInput('')
    }
  }, [dispatch, input])

  const handleButtonClick = useCallback(() => {
    addContent()
  }, [addContent])

  const handleEnterKeyDown = useCallback((event) => {
    if (event.keyCode === 13) {
      addContent()
    }
  }, [addContent])

  return (
    <MainContainer>
      <Input
        style={{width: 170, height: 20}}
        size='mini'
        type='text'
        value={input}
        placeholder='할 일을 입력하세요.'
        onChange={handleInputChange}
        onKeyDown={handleEnterKeyDown}
      />
      <Button
        size='mini'
        style={{width: 55, height: 20, marginLeft: 5}}
        onClick={handleButtonClick}
      >
        추가
      </Button>
    </MainContainer>
  )
}

export default TodoInput

const MainContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
})
