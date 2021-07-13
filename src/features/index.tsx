import {combineReducers, createSlice, createEntityAdapter, EntityState} from '@reduxjs/toolkit'

export interface TodoItem {
  id: number,
  content: string,
  check: boolean,
}

interface TodoItemList {
  list: EntityState<TodoItem>,
}

const todoAdapter = createEntityAdapter<TodoItem>({
  selectId: (item) => item.id,
})

const initialState: TodoItemList = {
  list: todoAdapter.getInitialState(),
}

const todoSlice = createSlice({
  name: 'TodoItem',
  initialState,
  reducers: {

  }
})

export const rootReducer = combineReducers({
  todos: todoSlice.reducer
})
