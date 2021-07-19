import React, {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {Button} from 'semantic-ui-react'
import {todoSlice} from '../../features'

interface Props {
  style: React.CSSProperties
}

const DeleteAllButtonContainer = ({style}: Props) => {
  const dispatch = useDispatch()

  const handleDeleteAllButtonClick = useCallback(() => {
    dispatch(todoSlice.actions.deleteAll())
  }, [dispatch])

  return (
    <Button
      style={style}
      size='mini'
      onClick={handleDeleteAllButtonClick}
    >
      전체삭제
    </Button>
  )
}

export default DeleteAllButtonContainer
