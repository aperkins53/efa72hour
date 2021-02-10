import "./App.css";
import Zomato from "./components/Zomato";
import { useEffect, useState } from "react";

function App() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  //urls
  // const zomato = `https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longitude}`;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback);
    }
  });

  function successCallback(position) {
    setLatitude(position.coords.latitude);
    console.log(latitude);
    setLongitude(position.coords.longitude);
    console.log(longitude);
  }

  return (
    <div>
      <h1
        style={{
          marginLeft: "4em",
        }}
      >
        Soups on!
      </h1>
      <Zomato latitude={latitude} longitude={longitude} />
    </div>
  );
}

export default App;
