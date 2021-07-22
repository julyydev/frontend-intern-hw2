import React, {useCallback} from 'react'
import SearchButton from '../presentational/search/SearchButton'
import {useDispatch} from 'react-redux'
import {searchSlice} from '../../features/ducks/SearchDucks'

interface Props {
  input: string,
  setInput: (content: string) => void,
}

const ConnectedSearchButton = (props: Props) => {
  const {input, setInput} = props
  const dispatch = useDispatch()

  const handleAddButtonClick = useCallback(() => {
    dispatch(searchSlice.actions.updateSearchString(input))
    dispatch(searchSlice.actions.changeIndex(3))
    setInput('')
  }, [dispatch, input])

  return (
    <SearchButton onClick={handleAddButtonClick}/>
  )
}

export default ConnectedSearchButton
