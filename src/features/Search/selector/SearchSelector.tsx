import {RootState} from '../../../root/RootReducer'
import {createSelector} from '@reduxjs/toolkit'

const searchState = (state: RootState) => state.search

const filterOption = createSelector(
  searchState,
  (state) => state.filterOption,
)

const searchString = createSelector(
  searchState,
  (state) => state.searchString,
)

export const searchSelector = {
  filterOption,
  searchString,
}
