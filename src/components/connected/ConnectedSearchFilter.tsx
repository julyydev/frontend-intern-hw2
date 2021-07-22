import React, {useCallback} from 'react'
import SearchFilter from '../presentational/search/SearchFilter'
import {useDispatch} from 'react-redux'
import {searchSlice} from '../../features/ducks/SearchDucks'

const ConnectedSearchFilter = () => {
  const dispatch = useDispatch()

  const handleAllButtonClick = useCallback(() => {
    dispatch(searchSlice.actions.changeIndex(0))
  }, [dispatch])

  const handleCheckButtonClick = useCallback(() => {
    dispatch(searchSlice.actions.changeIndex(1))
  }, [dispatch])

  const handleUncheckButtonClick = useCallback(() => {
    dispatch(searchSlice.actions.changeIndex(2))
  }, [dispatch])

  return (
    <SearchFilter
      onClickAll={handleAllButtonClick}
      onClickCheck={handleCheckButtonClick}
      onClickUncheck={handleUncheckButtonClick}
    />
  )
}

export default ConnectedSearchFilter
