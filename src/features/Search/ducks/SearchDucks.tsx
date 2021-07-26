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
      state.keyword = undefined
    },
    updateKeyword: (state, action: PayloadAction<string>) => {
      state.filterOption = undefined
      state.keyword = action.payload
    },
    clearKeyword: () => {
      return initialState
    }
  }
})

export const searchActions = searchSlice.actions
export const searchReducer = searchSlice.reducer
