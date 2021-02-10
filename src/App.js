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
    </div>
  );
}

export default App;