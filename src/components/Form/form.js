import React from 'react'
import './form.css'

class Form extends React.Component {
  render() {
    const { city, handleCityChange, handleSubmit } = this.props;

    return (
      <form className="Form" onSubmit={handleSubmit}>
        <input type="text" onChange={handleCityChange} value={city} />
        <button onClick={handleSubmit}>Get forecast</button>
      </form>
    );
  }
}

export default Form;
