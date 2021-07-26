import React, {ChangeEvent, useCallback} from 'react'
import {useDispatch} from 'react-redux'
import SearchInput from '../presentational/search/SearchInput'
import {searchActions} from '../../features/Search/ducks/SearchDucks'

interface Props {
  input: string
  setInput: (content: string) => void
}

const ConnectedSearchInput = (props: Props) => {
  const {input, setInput} = props
  const dispatch = useDispatch()

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }, [input])

  const handleEnterKeyDown = useCallback((event) => {
    if (event.key !== 'Enter') {
      return
    }

    const trimmed = input.trim()
    if (trimmed.length === 0) {
      dispatch(searchActions.clearKeyword())
    } else {
      dispatch(searchActions.updateKeyword(input))
    }
    setInput('')
  }, [dispatch, input])

  return (
    <SearchInput
      value={input}
      onChange={handleInputChange}
      onKeyDown={handleEnterKeyDown}
    />
  )
}

export default ConnectedSearchInput
