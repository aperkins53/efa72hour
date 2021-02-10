
import { useEffect, useState } from 'react';
import './App.css';
import GitJobsApp from './components/GitJobsApp'

const App = () => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  useEffect(() => {
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(successCallback);
    }
    }, []);
  function successCallback(position){
    setLatitude(position.coords.latitude)
    setLongitude(position.coords.longitude)
  }

  return (

    <div>
      <GitJobsApp latitude={latitude} longitude={longitude}/>
      <GetWeather latitude={latitude} longitude={longitude}/>
      <NASA latitude={latitude} longitude={longitude} />
    </div>
  );
}

export default App;