import React from 'react';
import Info from './components/info';
import Form from './components/Form/form';
import WeatherData from './components/WeatherData/weatherData';
import './App.scss';

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  state = {
    temp: null,
    city: '',
    country: null,
    pressure: null,
    sunset: null,
    error: null,
  };

  handleCityChange = event => {
    this.setState({
      city: event.currentTarget.value,
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { city } = this.state;

    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await api_url.json();

      if (data.message === 'city not found') {
        this.setState({
          temp: undefined,
          city: undefined,
          country: undefined,
          pressure: undefined,
          sunset: undefined,
          error: 'Please enter correct city name',
        });
      } else {
        let sunset = data.sys.sunset;
        let date = new Date();
        date.setTime(sunset);
        let sunset_date =
        date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

        this.setState({
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          pressure: data.main.pressure,
          sunset: sunset_date,
          error: '',
        });
      }
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: 'Please enter city',
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="Blocks">
          <div className="Left">
            <Info />
          </div>
          <div className="Right">
            <Form
              city={this.state.city}
              handleSubmit={this.handleSubmit}
              handleCityChange={this.handleCityChange}
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
    );
  }
}

export default App;
