import React, {useCallback} from 'react'
import SearchButton from '../presentational/search/SearchButton'
import {useDispatch} from 'react-redux'
import {searchActions} from '../../features/Search/ducks/SearchDucks'

interface Props {
  input: string,
  setInput: (content: string) => void,
}

const ConnectedSearchButton = (props: Props) => {
  const {input, setInput} = props
  const dispatch = useDispatch()

  const handleAddButtonClick = useCallback(() => {
    const trimmed = input.trim()
    if (trimmed.length === 0) {
      dispatch(searchActions.clearKeyword())
    } else {
      dispatch(searchActions.updateKeyword(input))
    }
    setInput('')
  }, [dispatch, input])

  return (
    <SearchButton onClick={handleAddButtonClick}/>
  )
}

export default ConnectedSearchButton
