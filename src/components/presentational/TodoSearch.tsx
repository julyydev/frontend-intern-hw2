import React, {useState} from 'react'
import ConnectedSearchInput from '../connected/ConnectedSearchInput'
import ConnectedSearchButton from '../connected/ConnectedSearchButton'
import styled from '@emotion/styled'
import ConnectedSearchFilter from '../connected/ConnectedSearchFilter'
import {Grid} from 'semantic-ui-react'
import {useSelector} from 'react-redux'
import {RootState} from '../../root/RootReducer'

const TodoSearch = () => {
  const [input, setInput] = useState('')
  const {listIndex, searchString} = useSelector((state: RootState) => state.search)

  return (
    <MainContainer>
      <Grid
        style={{display: 'flex', justifyContent: 'center'}}
      >
        <Grid.Row
          style={{display: 'flex'}}
        >
          <ConnectedSearchInput
            input={input}
            setInput={setInput}
          />
          <ConnectedSearchButton
            input={input}
            setInput={setInput}
          />
        </Grid.Row>
        <Grid.Row
          style={{marginTop: -10}}
        >
          <Grid.Column
            style={{flex: 1, marginLeft: 6}}
          >
            <TextContainer style={{fontSize: 15}}>{listIndex === 3 ? '-Keyword-' : ''}</TextContainer>
            <TextContainer>{listIndex === 3 ? searchString : ''}</TextContainer>
          </Grid.Column>
          <Grid.Column
            style={{flex: 1, width: 173}}
          >
            <ConnectedSearchFilter/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </MainContainer>
  )
}

export default TodoSearch

const MainContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 5,
})

const TextContainer = styled.div({
  width: 130,
  fontSize: 18,
  fontWeight: 'bold',
  wordBreak: 'break-word',
  justifyContent: 'flex-start',
  display: 'flex',
})
