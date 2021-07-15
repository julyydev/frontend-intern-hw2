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
const todoSlice = createSlice({
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

const addTodo = createAction<object>('todoItem/add')
const deleteTodo = createAction<object>('todoItem/delete')
const toggleTodo = createAction<object>('todoItem/toggle')
const memoTodo = createAction<object>('todoItem/memo')
const changeContentTodo = createAction<object>('todoItem/changeContent')

export const actions = {addTodo, deleteTodo, toggleTodo, memoTodo, changeContentTodo}

export const rootReducer = combineReducers({
  todos: todoSlice.reducer,
})

const {selectAll} = todoAdapter.getSelectors()

export const selectTodoList = createSelector(
  (state: TodoList) => state.list,
  (list: EntityState<Todo>) => selectAll(list),
)

export type RootState = ReturnType<typeof rootReducer>
