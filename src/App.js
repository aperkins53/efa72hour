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
    </div>
  );
}

export default App;


// function App() {
//   const [latitude, setLatitude] = useState('');
//   const [longitude, setLongitude] = useState('');
//   const [position, setPosition] = useState('');
//   //const date = newDate(Date.now()).toLocaleDateString();

//   const gitjobsurl = `https://jobs.github.com/positions.json?${latitude}&${longitude}`

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(setLatAndLong(position));
//   }, [])

//   function setLatAndLong(position) {
//     // setLatitude(position.coords.latitude);
//     // setLongitude(position.coords.longitude);
//     // console.log(latitude, longitude);
//   }
