import React, {useState} from 'react'
import styled from '@emotion/styled'
import {Container, Header, Icon} from 'semantic-ui-react'

const WEATHER_API = 'http://api.openweathermap.org/data/2.5/weather?q=Seoul&APPID=241051bf13976dd3ddf8b8d9f247255e'

const Weather = () => {
  const [weather, setWeather] = useState('')
  const [temperature, setTemperature] = useState('')
  const [humidity, setHumidity] = useState('')

  const handleView = () => {
    switch (weather) {
    case 'Clear':
      return (
        <div>
          <Header style={{marginTop: 30, marginBottom: 10, fontSize: 28}}>맑음</Header>
          <Icon name='sun' size='huge'/>
        </div>
      )
    case 'Clouds':
      return (
        <div>
          <Header style={{marginTop: 30, marginBottom: 10, fontSize: 35}}>흐림</Header>
          <Icon name='cloud' size='huge'/>
        </div>
      )
    case 'Rain':
      return (
        <div>
          <Header style={{marginTop: 30, marginBottom: 10, fontSize: 35}}>비</Header>
          <Icon name='rain' size='huge'/>
        </div>
      )
    }
  }

  fetch(WEATHER_API)
    .then(response => {
      return response.json()
    })
    .then(json => {
      setWeather(json.weather[0].main)
      setTemperature((json.main.temp - 273).toFixed(1))
      setHumidity(json.main.humidity)
    })

  return (
    <MainContainer>
      <Header style={{marginTop: 12, marginBottom: -20, fontSize: 30}}>{temperature}℃ / {humidity}%</Header>
      {handleView()}
    </MainContainer>
  )
}

export default Weather

const MainContainer = styled(Container)({
  textAlign: 'center',
  marginTop: 10,
})
