import {createSlice, createEntityAdapter, EntityState} from '@reduxjs/toolkit'

export interface Todo {
  id: number
  content: string
  check: boolean
  memo: string
}

export interface TodoList {
  list: EntityState<Todo>,
}

export const todoAdapter = createEntityAdapter<Todo>({
  selectId: (item) => item.id,
})

const initialState: TodoList = {
  list: todoAdapter.getInitialState(),
}

let idIndex = 1
export const todoSlice = createSlice({
  name: 'todoItem',
  initialState,
  reducers: {
    add(state, {payload: {content}}) {
      const newTodo = {
        id: idIndex++,
        content: content,
        check: false,
        memo: '',
      }
      todoAdapter.addOne(state.list, newTodo)
    },
    delete(state, {payload: {id}}) {
      todoAdapter.removeOne(state.list, id)
    },
    deleteAll(state) {
      todoAdapter.removeAll(state.list)
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

export const todoActions = todoSlice.actions
