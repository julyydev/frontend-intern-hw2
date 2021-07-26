import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {TodoFilterOption} from '../model/TodoFilterOption'

export interface Search {
  filterOption?: TodoFilterOption
  keyword?: string
}

const initialState: Search = {
  filterOption: TodoFilterOption.all,
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeFilterOption: (state, action: PayloadAction<TodoFilterOption>) => {
      state.filterOption = action.payload
    },
    updateKeyword: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload
      state.filterOption = undefined
    }
  }
})

export const searchActions = searchSlice.actions
export const searchReducer = searchSlice.reducer
