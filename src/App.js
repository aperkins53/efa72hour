import './App.css';
import { useEffect, useState } from 'react';
import GetWeather from './components/OpenWeather';

function App() {
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();

    useEffect(() => {
      if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(successCallback);
      }
    }, [])

    function successCallback(position){
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
    }

    return (
      <div>
        <GetWeather latitude={latitude} longitude={longitude}/>
   
      </div>
    );
  }

  export default App;
  




