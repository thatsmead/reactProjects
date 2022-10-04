import React, { useState } from "react";
import axios from "axios";
import classes from "./app.module.css";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=c80e51ae2cf6633690847d077b1e2d54`;

  function searchLocation(event) {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  }

  return (
    // INITIAL INPUT

    <div className={classes.app}>
      <div className={classes.search}>
        <input
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          value={location}
          type="text"
          placeholder="Enter a location"
        />
      </div>

      {/* CENTRAL CONTENT */}

      <div className={classes.container}>
        <div className={classes.top}>
          <div className={classes.location}>
            <p>{data.name}</p>
          </div>
          <div className={classes.temperature}>
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className={classes.description}>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {/* FOOTER CONTENT */}

        {data.name ? (
          <div className={classes.bottom}>
            <div className={classes.feels}>
              {data.main ? (
                <p className={classes.value}>
                  {data.main.feels_like.toFixed()}°C
                </p>
              ) : null}
              <p>feels like</p>
            </div>
            <div className={classes.humidity}>
              {data.main ? (
                <p className={classes.value}>{data.main.humidity}%</p>
              ) : null}
              <p>humidity</p>
            </div>
            <div className={classes.wind}>
              {data.wind ? (
                <p className={classes.value}>{data.wind.speed}m/s</p>
              ) : null}
              <p>wind speed</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
