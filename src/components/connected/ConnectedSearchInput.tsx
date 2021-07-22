import React, {ChangeEvent, useCallback} from 'react'
import {useDispatch} from 'react-redux'
import SearchInput from '../presentational/SearchInput'
import {searchSlice} from '../../features/ducks/SearchDucks'

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
    if (event.keyCode === 13) {
      dispatch(searchSlice.actions.updateSearchString(input))
      dispatch(searchSlice.actions.changeIndex(3))
      setInput('')
    }
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
