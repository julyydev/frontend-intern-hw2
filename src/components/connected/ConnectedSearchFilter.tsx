import React, {useCallback} from 'react'
import SearchFilter from '../presentational/search/SearchFilter'
import {useDispatch} from 'react-redux'
import {searchActions} from '../../features/Search/ducks/SearchDucks'
import {TodoFilterOption} from '../../features/Search/model/TodoFilterOption'

const ConnectedSearchFilter = () => {
  const dispatch = useDispatch()

  const handleAllButtonClick = useCallback(() => {
    dispatch(searchActions.changeFilterOption(TodoFilterOption.all))
  }, [dispatch])

  const handleCheckButtonClick = useCallback(() => {
    dispatch(searchActions.changeFilterOption(TodoFilterOption.checked))
  }, [dispatch])

  const handleUncheckButtonClick = useCallback(() => {
    dispatch(searchActions.changeFilterOption(TodoFilterOption.unchecked))
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
