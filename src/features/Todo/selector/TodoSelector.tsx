import {createSelector} from '@reduxjs/toolkit'
import { RootState } from '../../../root/RootReducer'
import {todoAdapter} from '../ducks/TodoDucks'

const {selectAll} = todoAdapter.getSelectors()

const todoState = (state: RootState) => state.todo

const todoList = createSelector(
  todoState,
  ({list}) => selectAll(list),
)

const restWorkList = createSelector(
  todoState,
  ({list}) => selectAll(list).filter((item) => !item.check)
)

const finishWorkList = createSelector(
  todoState,
  ({list}) => selectAll(list).filter((item) => item.check)
)

export const todoSelector = {
  todoList,
  restWorkList,
  finishWorkList,
}
