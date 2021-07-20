import {combineReducers} from '@reduxjs/toolkit'
import {todoSlice} from '../features/ducks/TodoDucks'

export const rootReducer = combineReducers({
  todo: todoSlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>
