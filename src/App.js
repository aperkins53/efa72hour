import { useEffect, useState } from 'react';
import './App.css';
import NASA from './components/NASA';


function App() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  


  useEffect(() => {
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(successCallback);
    }
  }, [])
  
  function successCallback(position){
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  }
  
  return (

    <div>
      <NASA latitude={latitude} longitude={longitude} />
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;