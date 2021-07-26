import {RootState} from '../../../root/RootReducer'
import {createSelector} from '@reduxjs/toolkit'

const searchState = (state: RootState) => state.search

const filterOption = createSelector(
  searchState,
  (state) => state.filterOption,
)

const keyword = createSelector(
  searchState,
  (state) => state.keyword,
)

export const searchSelector = {
  filterOption,
  keyword,
}
