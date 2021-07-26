import {combineReducers} from '@reduxjs/toolkit'
import {todoReducer} from '../features/ducks/TodoDucks'
import {searchReducer} from '../features/ducks/SearchDucks'

export const rootReducer = combineReducers({
  todo: todoReducer,
  search: searchReducer,
})

export type RootState = ReturnType<typeof rootReducer>
