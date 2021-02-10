import { useEffect, useState } from 'react';
import './App.css';
import GitJobsApp from './components/GitJobsApp'
import NASA from './components/NASA';
import Zomato from './components/Zomato';
import GetWeather from './components/OpenWeather';
import { Container } from 'reactstrap';

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
    <Container style={{display: 'flex', justifyContent: 'center'}}>
      <div>
        <NASA latitude={latitude} longitude={longitude} />
        <hr/>
        <hr/>
        <GetWeather latitude={latitude} longitude={longitude} />
        <hr/>
        <hr/>
        <GitJobsApp latitude={latitude} longitude={longitude} />
        <hr/>
        <hr/>
        <h1 style={{ marginLeft: '4em' }}>Soups on!</h1>
        <hr/>
        <hr/>
        <Zomato latitude={latitude} longitude={longitude} />
      </div>
    </Container>
  );
}

export default App;