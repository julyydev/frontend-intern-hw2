import React, {useCallback, useState} from 'react'
import {Button, Confirm} from 'semantic-ui-react'
import styled from '@emotion/styled'

interface Props {
  onClick: ReturnType<typeof useCallback>
}


const TodoDeleteAllButton = (props: Props) => {
  const {onClick} = props
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)

  return (
    <div>
      <StyledButton
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 13,
        }}
        onClick={() => setIsConfirmOpen(true)}
        color='red'
      >
        DELETE ALL
      </StyledButton>
      <Confirm
        open={isConfirmOpen}
        content='정말 목록을 모두 지우시겠습니까?'
        cancelButton='아니오'
        confirmButton='네'
        onCancel={() => setIsConfirmOpen(false)}
        onConfirm={() => {
          setIsConfirmOpen(false)
          onClick()
        }}
      />
    </div>
  )
}

export default TodoDeleteAllButton

const StyledButton = styled(Button)({
  width: 130,
  height: 30,
})
