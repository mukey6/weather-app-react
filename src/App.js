import React from 'react';
const api = {
  key:'0fb48fb704090281a9b83e51e7d0084b',
  base:'https://api.openweathermap.org/data/2.5/weather?q='

}
// {base}{city}&units=imperial&appid={key} {}
function App() {
  return (
    <div className="App">
      <main>
        <div className='search-box'>
          <input type='text' placeholder='search' className='search-bar' />
        </div>
        <div className='location-box'>
          <div className='city'> mpls</div>
          <div className='date'>5/6/2020</div>
        </div>
        <div className='weather-box'>
          <div>15degrees</div>
          <div className='weather'>sunny</div>

        </div>
      </main>
    </div>
  );
}

export default App;
