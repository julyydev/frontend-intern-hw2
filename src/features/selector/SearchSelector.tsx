import {RootState} from '../../root/RootReducer'
import {createSelector} from '@reduxjs/toolkit'

const searchState = (state: RootState) => state.search

const listIndex = createSelector(
  searchState,
  (state) => state.listIndex,
)

const searchString = createSelector(
  searchState,
  (state) => state.searchString,
)

export const searchSelector = {
  listIndex,
  searchString,
}
