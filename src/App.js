import React from 'react';
import classes from './App.module.css';
import Info from './components/info';
import Form from './components/Form/form';
import WeatherData from './components/WeatherData/weatherData';

const API_KEY = 'd6d0f7bdfe76b433ced172c56fff7444'

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (event) => {
    event.preventDefault()

    let city = event.target.elements.city.value

    if (city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      const data = await api_url.json()

      let sunset = data.sys.sunset
      let date = new Date()
      date.setTime(sunset)
      let sunset_date = date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds()

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunset_date,
        error: ""
      })
    }  else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: "Please enter city"
      })  
    }
  }

  render() {
    return (
      <div className={classes.App}>
        <div className={classes.Blocks}>
          <div className={classes.Left}>
            <Info/>
          </div>
          <div className={classes.Right}>
            <Form
              weatherMethod={this.gettingWeather}
            />
            <WeatherData
              temp={this.state.temp}
              city={this.state.city}
              country={this.state.country}
              pressure={this.state.pressure}
              sunset={this.state.sunset}
              error={this.state.error}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
