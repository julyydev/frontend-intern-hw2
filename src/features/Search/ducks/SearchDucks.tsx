import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {TodoFilterOption} from '../model/TodoFilterOption'

export interface Search {
  filterOption?: TodoFilterOption
  searchString: string
}

const initialState: Search = {
  filterOption: TodoFilterOption.all,
  searchString: ''
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeFilterOption: (state, action: PayloadAction<TodoFilterOption>) => {
      state.filterOption = action.payload
    },
    updateSearchString: (state, action: PayloadAction<string>) => {
      state.searchString = action.payload
      state.filterOption = undefined
    }
  }
})

export const searchActions = searchSlice.actions
export const searchReducer = searchSlice.reducer
