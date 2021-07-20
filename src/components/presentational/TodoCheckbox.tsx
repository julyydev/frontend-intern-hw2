import React, {useCallback} from 'react'
import {Checkbox} from 'semantic-ui-react'
import styled from '@emotion/styled'

interface Props {
  checked: boolean
  onClick: ReturnType<typeof useCallback>
}

const TodoCheckbox = (props: Props) => {
  const {checked, onClick} = props

  return (
    <StyledCheckbox
      checked={checked}
      onClick={onClick}
    />
  )
}

export default TodoCheckbox

const StyledCheckbox = styled(Checkbox)({
  width: 20,
})
