import {combineReducers} from '@reduxjs/toolkit'
import {todoReducer} from '../features/ducks/TodoDucks'
import {searchSlice} from '../features/ducks/SearchDucks'

export const rootReducer = combineReducers({
  todo: todoReducer,
  search: searchSlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>
