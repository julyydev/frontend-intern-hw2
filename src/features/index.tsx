import {
  createSlice,
  createEntityAdapter,
  EntityState,
  createSelector,
} from '@reduxjs/toolkit'

export interface Todo {
  id: number,
  content: string,
  check: boolean,
  memo: string,
}

interface TodoList {
  list: EntityState<Todo>,
}

const todoAdapter = createEntityAdapter<Todo>({
  selectId: (item) => item.id,
})

const initialState: TodoList = {
  list: todoAdapter.getInitialState(),
}

let index = 1
export const todoSlice = createSlice({
  name: 'todoItem',
  initialState,
  reducers: {
    add(state, {payload: {content}}) {
      const newTodo = {
        id: index++,
        content: content,
        check: false,
        memo: ''
      }
      todoAdapter.addOne(state.list, newTodo)
    },
    delete(state, {payload: {id}}) {
      todoAdapter.removeOne(state.list, id)
    },
    toggle(state, {payload: {id, check}}) {
      todoAdapter.updateOne(state.list, {
        id,
        changes: {
          check: !check,
        },
      })
    },
    memo(state, {payload: {id, memo}}) {
      todoAdapter.updateOne(state.list, {
        id,
        changes: {
          memo: memo,
        },
      })
    },
    changeContent(state, {payload: {id, content}}) {
      todoAdapter.updateOne(state.list, {
        id,
        changes: {
          content: content,
        },
      })
    },
  },
})

const {selectAll} = todoAdapter.getSelectors()

export const selectTodoList = createSelector(
  (state: TodoList) => state.list,
  (list: EntityState<Todo>) => selectAll(list),
)
