<<<<<<< HEAD
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
=======
import logo from "./logo.svg";
import "./App.css";
>>>>>>> b5f82064a2699251ea0158ff2bf298748c5ed76a

  return (
<<<<<<< HEAD
    <div>
      <GitJobsApp latitude={latitude} longitude={longitude}/>
=======
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
      <h2>ugh</h2>
      <h1>Austin' Branch</h1>
      <h2>What the hell is going on</h2>
      <h1>Hello</h1>
>>>>>>> b5f82064a2699251ea0158ff2bf298748c5ed76a
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
