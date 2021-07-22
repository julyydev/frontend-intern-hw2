import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface Search {
  listIndex: number
  searchString: string
}

const initialState: Search = {
  listIndex: 0,
  searchString: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeIndex: (state, action: PayloadAction<number>) => {
      state.listIndex = action.payload
    },
    updateSearchString: (state, action: PayloadAction<string>) => {
      state.searchString = action.payload
    },
  }
})
