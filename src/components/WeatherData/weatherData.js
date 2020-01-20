import React, { Fragment } from 'react';
import './weatherData.css';

const WeatherData = props => (
  <div className='WeatherData'>
    {props.city && (
      <Fragment>
        <p>
          <span>Location:</span> {props.city}, {props.country}
        </p>
        <p>
          <span>Temperature:</span> {props.temp} &#176; C
        </p>
        <p>
          <span>Atmospheric pressure:</span> {props.pressure} mmHg
        </p>
        <p>
          <span>Sunset:</span> {props.sunset}
        </p>
      </Fragment>
    )}
    <p className='Error'>{props.error}</p>
  </div>
);

export default WeatherData;
