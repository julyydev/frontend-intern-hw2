import {
  combineReducers,
  createSlice,
  createEntityAdapter,
  EntityState,
  createAction,
  createSelector,
} from '@reduxjs/toolkit'

export interface Todo {
  id: number,
  content: string,
  check: boolean,
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
const todoSlice = createSlice({
  name: 'todoItem',
  initialState,
  reducers: {
    add(state, {payload: {content}}) {
      const newTodo = {
        id: index++,
        content: content,
        check: false,
      }
      todoAdapter.addOne(state.list, newTodo)
    },
  },
})

const addTodo = createAction<object>('todoItem/add')

export const actions = {addTodo}

export const rootReducer = combineReducers({
  todos: todoSlice.reducer,
})

const {selectAll} = todoAdapter.getSelectors()

export const selectTodoList = createSelector(
  (state: TodoList) => state.list,
  (list: EntityState<Todo>) => selectAll(list),
)

export type RootState = ReturnType<typeof rootReducer>
