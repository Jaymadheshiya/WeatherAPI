
import React, { useState } from 'react';

 

const API_KEY = 'bc719e3e8abdf2e16cdfe0f29eb1474a';

 

const Weather = () => {

  const [city, setSearch] = useState('');

  const [Data, setData] = useState(null);

 

  const handleInputChange = (event) => {

    setSearch(event.target.value);

  };

 

  const handleFormSubmit = (event) => {

    event.preventDefault();

    getData();

  };

 

  const handleKeyDown = (event) => {

    if (event.key === 'Enter') {

      event.preventDefault();

      getData();

    }

  };

 

  const getData = async () => {

    try {

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

      const response = await fetch(url);

      const data = await response.json();

 

      if (response.ok) {

        setData(data);

      } else {

        setData(null);

        console.error('Error:', data.message);

      }

    } catch (error) {

      console.error('Error:', error);

    }

  };

 

  return (

    <div className="App">

      <h1>Weather App</h1>

      <form onSubmit={handleFormSubmit}>

        <input

          type="text"

          value={city}

          onChange={handleInputChange}

          onKeyDown={handleKeyDown}

          placeholder="Enter city"

        /><br></br><br></br>

        <button type="submit" className='btn'>Search</button>

      </form>

      {Data && (

        <div className="WeatherInfo">

          <h2>{Data.name}</h2>

          <p>Temperature: {((Data.main.temp)-273.15).toFixed(2)} °C</p>

         

        </div>

      )}

    </div>

  );

};

 

export default Weather;