import React from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../../root/RootReducer'
import {Todo} from '../../features/ducks/TodoDucks'
import styled from '@emotion/styled'
import {selectTodoList, selectRestWorkList} from '../../features/selector/TodoSelector'

const TodoMessage = () => {
  const todoList = useSelector<RootState, Todo[]>(state => selectTodoList(state.todo))
  const restWorkCount = useSelector<RootState, Todo[]>(state => selectRestWorkList(state.todo)).length

  const handleMessage = () => {
    if (todoList.length === 0) {
      return <RestContainer>환영합니다. 해야할 일을 추가하세요.</RestContainer>
    }
    else {
      return (
        <RestContainer>
          {restWorkCount ? `끝내지 못한 일의 개수: ${restWorkCount}/${todoList.length}개` : '할 일을 모두 끝내셨습니다!'}
        </RestContainer>
      )
    }
  }

  return (
    <MainContainer>
      {handleMessage()}
    </MainContainer>
  )
}

export default TodoMessage

const MainContainer = styled.div ({
  justifyContent: 'center',
})

const RestContainer = styled.div ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: 15,
  fontSize: 18,
  fontWeight: 'bold',
})
