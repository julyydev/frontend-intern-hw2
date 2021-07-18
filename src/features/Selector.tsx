import {EntityState, createSelector} from '@reduxjs/toolkit'
import {todoAdapter, Todo, TodoList} from './index'

const {selectAll} = todoAdapter.getSelectors()

export const selectTodoList = createSelector(
  (state: TodoList) => state.list,
  (list: EntityState<Todo>) => selectAll(list),
)

export const selectRestWork = createSelector(
  (state: TodoList) => state.list,
  (list: EntityState<Todo>) => selectAll(list).filter((item) => !item.check)
)
