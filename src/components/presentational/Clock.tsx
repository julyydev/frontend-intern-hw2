import React, {useState, useEffect} from 'react'
import moment from 'moment'
import {Header} from 'semantic-ui-react'
import styled from '@emotion/styled'

const TodoClock = () => {
  let timer: ReturnType<typeof setInterval>
  const [time, setTime] = useState(moment())
  useEffect(() => {
    timer = setInterval(() => {
      setTime(moment())
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <MainContainer>
      <Header as='h3' style={{marginTop: 10, marginBottom: -20,}}>{time.format('YYYY년 MM월 DD일 ddd')}</Header>
      <Header as='h2' style={{marginBottom: 10,}}>{time.format('hh:mm:ss A')}</Header>
    </MainContainer>
  )
}

export default TodoClock

const MainContainer = styled.div({
  textAlign: 'center',
})
