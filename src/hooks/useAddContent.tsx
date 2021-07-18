import {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {todoSlice} from '../features'

export const useAddContent = (input: string, setInput: (content: string) => void,) => {
  const dispatch = useDispatch()

  const addContent = useCallback(() => {
    if (!input.trim()) {
      alert('할 일을 입력하지 않았습니다!')
      return
    } else {
      dispatch(todoSlice.actions.add({
        content: input,
      }))
      setInput('')
    }
  }, [dispatch, input])

  return {addContent}
}
