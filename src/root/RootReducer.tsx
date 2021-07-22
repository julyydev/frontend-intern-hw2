import {combineReducers} from '@reduxjs/toolkit'
import {todoSlice} from '../features/ducks/TodoDucks'
import {searchSlice} from '../features/ducks/SearchDucks'

export const rootReducer = combineReducers({
  todo: todoSlice.reducer,
  search: searchSlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>
