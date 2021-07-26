import {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {todoActions} from '../features/Todo/ducks/TodoDucks'

const useAddContent = (input: string, setInput: (content: string) => void) => {
  const dispatch = useDispatch()

  const addContent = useCallback(() => {
    if (!input.trim()) {
      alert('할 일을 입력하지 않았습니다!')
      return
    } else {
      dispatch(todoActions.add({
        content: input,
      }))
      setInput('')
    }
  }, [dispatch, input])

  return {addContent}
}

export default useAddContent
