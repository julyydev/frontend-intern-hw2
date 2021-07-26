import React from 'react'
import TodoItem from './items/TodoItem'
import styled from '@emotion/styled'
import {useSelector} from 'react-redux'
import {Todo} from '../../features/Todo/ducks/TodoDucks'
import {todoSelector} from '../../features/Todo/selector/TodoSelector'
import {Container, Divider} from 'semantic-ui-react'
import {searchSelector} from '../../features/Search/selector/SearchSelector'

const TodoItemList = () => {
  const todoList = useSelector(todoSelector.todoList)
  const restWorkList = useSelector(todoSelector.restWorkList)
  const finishWorkList = useSelector(todoSelector.finishWorkList)

  const listIndex = useSelector(searchSelector.listIndex)
  const searchString = useSelector(searchSelector.searchString)

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
        <Container
          style={{justifyContent: 'center', width: 270}}
        >
          <Divider/>
          <TextContainer>
            일치하는 항목이 없습니다.
          </TextContainer>
        </Container>
      )
    } else {
      return (
        <div>
          {tempList.map((item: Todo) => (
            <Container
              key={item.id} style={{justifyContent: 'center', width: 270}}
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
