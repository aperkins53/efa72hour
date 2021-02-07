import { useEffect, useState } from 'react';
import './App.css';
import NASA from './components/NASA';

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  //const date = new Date(Date.now()).toLocaleDateString();

  //4 urls - Nasa, Zomato, Weather, Jobs
  const nasaurl = `https://api.nasa.gov/planetary/earth/imagery?${longitude}&${latitude}&date=2021-07-02&api_key=R4umF8g5DMrB6R2FNqPDMEMBPyUN9H9ni2VMZeZA`;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(setLatAndLong);
  }, [])

  function setLatAndLong(){
    setLatitude(coords.latitude);
    setLongitude(coords.longitude);
  }

  return (
    <div>
      <NASA url={nasaurl} />
    </div>
  );
}

export default App;