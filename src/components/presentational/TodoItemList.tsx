import React from 'react'
import TodoItem from './TodoItem'
import styled from '@emotion/styled'
import {useSelector} from 'react-redux'
import {Todo} from '../../features/ducks/TodoDucks'
import {RootState} from '../../root/RootReducer'
import {selectTodoList, selectRestWorkList, selectFinishWorkList} from '../../features/selector/TodoSelector'
import {Container, Divider} from 'semantic-ui-react'

const TodoItemList = () => {
  const todoList = useSelector<RootState, Todo[]>(state => selectTodoList(state.todo))
  const restWorkList = useSelector<RootState, Todo[]>(state => selectRestWorkList(state.todo))
  const finishWorkList = useSelector<RootState, Todo[]>(state => selectFinishWorkList(state.todo))

  const {listIndex, searchString} = useSelector((state: RootState) => state.search)
  const searchList = todoList.filter((item: Todo) => {
    return item.content.indexOf(searchString) > -1
  })

  const ListArray = [
    todoList,
    finishWorkList,
    restWorkList,
    searchList,
  ]

  const tempList = ListArray[listIndex]

  const handleView = () => {
    if (tempList.length === 0 && todoList.length !== 0) {
      return (
        <Container style={{justifyContent: 'center', width: 270}}
        >
          <Divider/>
          <TextContainer>
            일치하는 항목이 없습니다.
          </TextContainer>
        </Container>
      )
    }
    else {
      return (
        <div>
          {tempList.map((item: Todo) => (
            <Container key={item.id} style={{justifyContent: 'center', width: 270}}
            >
              <Divider
              />
              <TodoItem item={item}/>
            </Container>
          ))}
        </div>
      )
    }
  }

  return (
    <MainContainer>
      {handleView()}
    </MainContainer>
  )
}

export default TodoItemList

const MainContainer = styled(Container)({
  justifyContent: 'center',
  display: 'flex',
  marginBottom: 30,
})

const TextContainer = styled.div({
  marginTop: 30,
  width: 270,
  fontSize: 20,
  fontWeight: 'bold',
  justifyContent: 'center',
  display: 'flex',
})
