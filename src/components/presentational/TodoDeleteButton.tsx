import React, {useCallback, useState} from 'react'
import {Icon} from 'semantic-ui-react'

interface Props {
  onClick: ReturnType<typeof useCallback>
}

const TodoDeleteButton = (props: Props) => {
  const {onClick} = props
  const [isMouseEnter, setIsMouseEnter] = useState(false)

  return (
    <Icon
      name='delete'
      style={{color: (isMouseEnter ? '#fa504d' : 'lightgray')}}
      size='large'
      onClick={onClick}
      onMouseOver={() => setIsMouseEnter(true)}
      onMouseOut={() => setIsMouseEnter(false)}
    />
  )
}

export default TodoDeleteButton
