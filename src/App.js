import React from 'react';


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
        <div className='weather'>
          <div>15degrees</div>
          <div></div>

        </div>
      </main>
    </div>
  );
}

export default App;
