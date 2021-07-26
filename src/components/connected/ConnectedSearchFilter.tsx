import React, {useCallback} from 'react'
import SearchFilter from '../presentational/search/SearchFilter'
import {useDispatch} from 'react-redux'
import {searchActions} from '../../features/ducks/SearchDucks'

const ConnectedSearchFilter = () => {
  const dispatch = useDispatch()

  const handleAllButtonClick = useCallback(() => {
    dispatch(searchActions.changeIndex(0))
  }, [dispatch])

  const handleCheckButtonClick = useCallback(() => {
    dispatch(searchActions.changeIndex(1))
  }, [dispatch])

  const handleUncheckButtonClick = useCallback(() => {
    dispatch(searchActions.changeIndex(2))
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
