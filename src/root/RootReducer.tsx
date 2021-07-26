import {combineReducers} from '@reduxjs/toolkit'
import {todoReducer} from '../features/Todo/ducks/TodoDucks'
import {searchReducer} from '../features/Search/ducks/SearchDucks'

export const rootReducer = combineReducers({
  todo: todoReducer,
  search: searchReducer,
})

export type RootState = ReturnType<typeof rootReducer>
