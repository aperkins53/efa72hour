import React, { useEffect, useState } from "react";

const key = "8d87991f70b6e6333319e1baaee83b67";

const GetWeather = (props) => {
  const [weatherData, setWeatherData] = useState();
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    if (props.longitude === undefined || props.latitude === undefined) {
      return;
    }

    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&appid=${key}`;
    if (url) {
      console.log(props.latitude, props.longitude);

      fetch(url)
        .then((res) => res.json())
        .then((data) => setWeatherData(data.main.temp));
    }
  }, [props.longitude, props.latitude]);

  function handleToggle() {
    if (toggle === true) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }

  return (
    <div className="main">
      {toggle === true
        ? Math.floor(weatherData * 1.8 - 459.67) + "°F"
        : Math.floor(weatherData - 273.12) + "°C"}
      <br></br>
      {toggle === true ? (
        <button onClick={handleToggle}>Centigrade</button>
      ) : (
        <button onClick={handleToggle}>Fahrenheit</button>
      )}
    </div>
  );
};

export default GetWeather;
