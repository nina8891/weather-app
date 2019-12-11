import React from 'react';

class Form extends React.Component {
  render() {
    const { city, handleCityChange, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleCityChange} value={city} />
      </form>
    );
  }
}

export default Form;
