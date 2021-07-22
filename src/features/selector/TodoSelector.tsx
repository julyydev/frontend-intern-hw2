import {EntityState, createSelector} from '@reduxjs/toolkit'
import {todoAdapter, Todo, TodoList} from '../ducks/TodoDucks'

const {selectAll} = todoAdapter.getSelectors()

export const selectTodoList = createSelector(
  (state: TodoList) => state.list,
  (list: EntityState<Todo>) => selectAll(list),
)

export const selectRestWorkList = createSelector(
  (state: TodoList) => state.list,
  (list: EntityState<Todo>) => selectAll(list).filter((item) => !item.check)
)

export const selectFinishWorkList = createSelector(
  (state: TodoList) => state.list,
  (list: EntityState<Todo>) => selectAll(list).filter((item) => item.check)
)
