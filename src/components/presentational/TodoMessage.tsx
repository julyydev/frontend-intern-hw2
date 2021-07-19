import React from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../../features/Root'
import {Todo} from '../../features'
import styled from '@emotion/styled'
import {selectTodoList, selectRestWork} from '../../features/Selector'
import DeleteAllButtonContainer from '../container/DeleteAllButtonContainer'

const TodoMessage = () => {
  const todoList = useSelector<RootState, Todo[]>(state => selectTodoList(state.todo))
  const restWorkCount = useSelector<RootState, Todo[]>(state => selectRestWork(state.todo)).length

  const handleMessage = () => {
    if (todoList.length === 0) {
      return <RestContainer>환영합니다. 해야할 일을 추가하세요.</RestContainer>
    }
    else {
      return (
        <RestContainer>
          끝내지 못한 일의 개수: {restWorkCount}개
          <DeleteAllButtonContainer
            style={Styles.deleteAllButtonContainer}
          />
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
  marginBottom: 5,
})

const Styles: {[key: string]: React.CSSProperties} = {
  deleteAllButtonContainer: {
    width: 82,
    height: 20,
    fontSize: 10,
    marginLeft: 5,
  },
}
