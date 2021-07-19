import React from 'react'
import DeleteAllButtonContainer from '../container/DeleteAllButtonContainer'

const TodoDeleteAll = () => {
  return (
    <DeleteAllButtonContainer
      style={Styles.deleteAllButtonContainer}
    />
  )
}

export default TodoDeleteAll

const Styles: {[key: string]: React.CSSProperties} = {
  deleteAllButtonContainer: {
    width: 82,
    height: 20,
    fontSize: 10,
    marginLeft: 5,
  },
}
