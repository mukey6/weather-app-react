import React, { useState } from "react";
const api = {
  key: "0fb48fb704090281a9b83e51e7d0084b",
  base: "https://api.openweathermap.org/data/2.5/weather?q=",
};
function App() {
  const current = new Date();
  const date = `${
    current.getMonth() + 1
  }/${current.getDate()}/${current.getFullYear()}`;

  const [city, cityQuery] = useState("");
  const [weather, weatherQuery] = useState();

  // if event (evt) "enter" takes place, fetch the result
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base} ${city}&units=imperial&appid=${api.key} `)
        .then((res) => res.json())
        .then((result) => {
          cityQuery("");
          weatherQuery(result);
          console.log(result);
          // console.log(weather)
        });
    }
  };
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input
            type="text"
            placeholder="search"
            className="search-bar"
            onChange={(e) => cityQuery(e.target.value)}
            value={city}
            onKeyPress={search}
          />
        </div>
        {typeof weather != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="city"> {weather.name}</div>
              <div className="date">{date}</div>
            </div>
            <div className="weather-box">
              <div>{Math.round(weather.main.temp)}°F</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
